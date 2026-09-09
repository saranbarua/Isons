import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Filter,
  SlidersHorizontal,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import { SEO, Layout } from "../../components/Layout";
import { ProductCard, Breadcrumbs, Button } from "../../components/UI";
import { dataService } from "../../services/dataService";
import { Product, Brand, CategoryNode } from "../../types";

const collectSlugs = (node: CategoryNode): string[] => {
  const own = [node.slug];
  const kids = (node.children || []).flatMap(collectSlugs);
  return [...own, ...kids];
};

const findNodeBySlug = (
  nodes: CategoryNode[],
  slug: string,
): CategoryNode | null => {
  for (const n of nodes) {
    if (n.slug === slug) return n;
    const found = n.children?.length ? findNodeBySlug(n.children, slug) : null;
    if (found) return found;
  }
  return null;
};

const CategoryTreeButtons = ({
  nodes,
  selectedSlug,
  onSelect,
  openNodes,
  setOpenNodes,
  level = 0,
}: {
  nodes: CategoryNode[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
  openNodes: Set<string>;
  setOpenNodes: React.Dispatch<React.SetStateAction<Set<string>>>;
  level?: number;
}) => {
  const collectSlugs = (node: CategoryNode): string[] => [
    node.slug,
    ...(node.children || []).flatMap(collectSlugs),
  ];

  const isAncestorOfSelected = (node: CategoryNode) => {
    if (!selectedSlug || selectedSlug === "All") return false;
    const all = collectSlugs(node);
    return all.includes(selectedSlug) && node.slug !== selectedSlug;
  };

  const toggle = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    setOpenNodes((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  };

  return (
    <div className="space-y-0.5">
      {nodes.map((node) => {
        const isActive = selectedSlug === node.slug;
        const isOpen = openNodes.has(node.slug);
        const isAncestor = isAncestorOfSelected(node);
        const hasChildren = !!node.children?.length;

        return (
          <div key={node.id} className="relative">
            {/* depth rule */}
            {level > 0 && (
              <span
                className="absolute top-0 bottom-0 w-px bg-[#E7E3D8]"
                style={{ left: (level - 1) * 14 + 16 }}
              />
            )}

            <div
              onClick={() => {
                onSelect(node.slug);
                if (hasChildren) {
                  setOpenNodes((prev) => {
                    const next = new Set(prev);
                    next.add(node.slug); // auto-open when selected
                    return next;
                  });
                }
              }}
              className={`group relative flex items-center gap-1.5 py-2 cursor-pointer text-[13.5px] transition-colors
                ${
                  isActive
                    ? "text-[#17362A] font-semibold"
                    : isAncestor
                      ? "text-[#2F5A46]"
                      : "text-[#6B6558] hover:text-[#17362A]"
                }`}
              style={{ paddingLeft: level * 14 + 8 }}
            >
              {/* active marker */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full transition-colors ${
                  isActive ? "bg-[#1F4D3A]" : "bg-transparent"
                }`}
              />

              {hasChildren ? (
                <span
                  onClick={(e) => toggle(e, node.slug)}
                  className="flex items-center justify-center w-5 h-5 rounded-md hover:bg-[#1F4D3A]/8 transition-colors flex-shrink-0"
                >
                  <ChevronRight
                    size={12}
                    className="transition-transform duration-200 text-[#8C8676]"
                    style={{
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                </span>
              ) : (
                <span className="w-5 flex-shrink-0" />
              )}

              <span className="flex-1 leading-snug">{node.name}</span>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? "600px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {hasChildren && (
                <CategoryTreeButtons
                  nodes={node.children!}
                  selectedSlug={selectedSlug}
                  onSelect={onSelect}
                  openNodes={openNodes}
                  setOpenNodes={setOpenNodes}
                  level={level + 1}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const AllFiles = () => {
  const [searchParams] = useSearchParams();
  const [openNodes, setOpenNodes] = useState<Set<string>>(new Set());
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryNode[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [selectedCat, setSelectedCat] = useState(
    searchParams.get("category") || "All",
  );
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const autoOpenAncestors = (
    nodes: CategoryNode[],
    targetSlug: string,
    open: Set<string>,
  ) => {
    for (const n of nodes) {
      const slugs = collectSlugs(n);
      if (slugs.includes(targetSlug) && n.slug !== targetSlug) {
        open.add(n.slug);
        if (n.children) autoOpenAncestors(n.children, targetSlug, open);
      }
    }
  };

  useEffect(() => {
    const catFromUrl = searchParams.get("category") || "All";
    setSelectedCat(catFromUrl);
    if (catFromUrl !== "All") {
      setOpenNodes((prev) => {
        const next = new Set(prev);
        autoOpenAncestors(categories, catFromUrl, next);
        return next;
      });
    }
  }, [searchParams, categories]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const [c, b] = await Promise.all([
          dataService.getCategories(),
          dataService.getBrands(),
        ]);
        setCategories(c);
        setBrands(b);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const p = await dataService.getProducts();
        setProducts(p);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const allowedCategorySlugs = useMemo(() => {
    if (selectedCat === "All") return null;
    const node = findNodeBySlug(categories, selectedCat);
    if (!node) return new Set([selectedCat]);
    return new Set(collectSlugs(node));
  }, [categories, selectedCat]);

  const filteredProducts = useMemo(() => {
    const list = products
      .filter((p: any) => {
        const catOk =
          selectedCat === "All"
            ? true
            : allowedCategorySlugs
              ? allowedCategorySlugs.has(p.category?.slug)
              : p.category?.slug === selectedCat;

        const brandOk = selectedBrand === "All" || p.brand === selectedBrand;
        return catOk && brandOk;
      })
      .sort((a: any, b: any) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "popular") return (b.rating || 0) - (a.rating || 0);
        return 0;
      });

    return list;
  }, [products, selectedCat, selectedBrand, sortBy, allowedCategorySlugs]);

  return (
    <>
      <SEO
        title="Shop"
        description="Explore our wide range of products across various categories and brands. Find the best deals and latest arrivals in our online store."
      />

      <div className="max-w-7xl mx-auto px-4 py-10 bg-[#FDFCFA]">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8">
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div>
                <div className="relative mt-1">
                  <div
                    onClick={() => setSelectedCat("All")}
                    className={`group relative flex items-center py-2 pl-2 cursor-pointer text-[13.5px] transition-colors ${
                      selectedCat === "All"
                        ? "text-[#17362A] font-semibold"
                        : "text-[#6B6558] hover:text-[#17362A]"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full ${
                        selectedCat === "All"
                          ? "bg-[#1F4D3A]"
                          : "bg-transparent"
                      }`}
                    />
                    All Categories
                  </div>

                  <CategoryTreeButtons
                    nodes={categories}
                    selectedSlug={selectedCat}
                    onSelect={(slug) => setSelectedCat(slug)}
                    openNodes={openNodes}
                    setOpenNodes={setOpenNodes}
                  />
                </div>
              </div>
            </div>
          </aside>

          <div className="flex items-center gap-2 mb-2 lg:hidden">
            <Button
              variant="outline"
              className="flex-1 gap-2 rounded-full border-[#E7E3D8]"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter size={16} /> Filter
            </Button>
            <Button
              variant="outline"
              className="flex-1 gap-2 rounded-full border-[#E7E3D8]"
            >
              <SlidersHorizontal size={16} /> Sort
            </Button>
          </div>

          {/* Product Grid Area */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h1 className="shop-display text-3xl md:text-4xl text-[#17191C]">
                  {selectedCat === "All" ? "All Products" : selectedCat}
                </h1>
                <p className="shop-mono text-[11px] tracking-wide text-[#8C8676] mt-2 uppercase">
                  {filteredProducts.length} item
                  {filteredProducts.length === 1 ? "" : "s"} found
                </p>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-[#F3F0E8] h-80 rounded-xl" />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center bg-white rounded-2xl border border-[#E7E3D8]">
                <h3 className="shop-display text-xl text-[#17191C] mb-2">
                  No matching products
                </h3>
                <p className="text-[#6B6558] mb-6 text-sm">
                  Try adjusting your filters or search criteria.
                </p>
                <Button
                  variant="outline"
                  className="rounded-full border-[#1F4D3A] text-[#1F4D3A] hover:bg-[#1F4D3A] hover:text-white"
                  onClick={() => {
                    setSelectedCat("All");
                    setSelectedBrand("All");
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </main>

          {/* Mobile filter drawer */}
          <div
            className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
              isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-[#17191C]/50"
              onClick={() => setIsFilterOpen(false)}
            />

            <div
              className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
                isFilterOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-5 border-b border-[#E7E3D8] flex items-center justify-between">
                <h3 className="shop-display text-lg text-[#17191C]">
                  Categories
                </h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#F3F0E8] transition-colors"
                >
                  <X size={18} className="text-[#6B6558]" />
                </button>
              </div>

              <div className="p-5 overflow-y-auto h-[calc(100%-72px)]">
                <div
                  onClick={() => {
                    setSelectedCat("All");
                    setIsFilterOpen(false);
                  }}
                  className={`relative flex items-center py-2 pl-2 cursor-pointer text-sm transition-colors ${
                    selectedCat === "All"
                      ? "text-[#17362A] font-semibold"
                      : "text-[#6B6558] hover:text-[#17362A]"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full ${
                      selectedCat === "All" ? "bg-[#1F4D3A]" : "bg-transparent"
                    }`}
                  />
                  All Categories
                </div>

                <div className="mt-1">
                  <CategoryTreeButtons
                    nodes={categories}
                    selectedSlug={selectedCat}
                    onSelect={(slug) => {
                      setSelectedCat(slug);
                      setIsFilterOpen(false);
                    }}
                    openNodes={openNodes}
                    setOpenNodes={setOpenNodes}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
