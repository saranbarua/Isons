import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Factory,
  Layers,
  Activity,
  FileCheck2,
  ArrowRight,
  Monitor,
  Laptop,
  Cpu,
  Mouse,
  Gamepad,
  Wifi,
  Terminal,
  Tv,
  Wrench,
  Settings,
  Clock,
  ClipboardList,
  FileText,
  Cog,
  CheckCircle2,
  Building2,
  TrendingUp,
  ArrowUpRight,
  Printer,
  Building,
  Package,
  Zap,
  Utensils,
  Shirt,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Fuel,
  Droplet,
  Leaf,
  Sun,
  Wind,
  GlassWaterIcon,
  Truck,
  Headphones,
  Ship,
  Warehouse,
  Pickaxe,
  ShipWheel,
  HardHat,
  Anchor,
  Boxes,
  Container,
  Train,
} from "lucide-react";
import { SEO, Layout } from "../components/Layout";
import { ProductCard, Button } from "../components/UI";
import { dataService } from "../services/dataService";
import { Product, Category, Brand, Testimonial } from "../types";
import { images } from "@/public/image/Images";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      tag: "Lifting Equipment",
      title: "Professional Lifting Solutions for Every Industry",
      subtitle:
        "Premium chain hoists, beam trolleys, wire ropes, slings and lifting equipment engineered for safe and reliable material handling.",
      cta: "Shop Products",
      link: "/shop",
      bg: "bg-slate-950",
      overlay:
        "bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent",
      img: images.slider1,
      imgClass: "object-cover opacity-40",
      text: "text-white",
      btnVariant: "secondary" as const,
    },
    {
      tag: "Rigging Equipment",
      title: "Trusted Rigging Hardware Built for Heavy-Duty Performance",
      subtitle:
        "High-quality shackles, hooks, chains, clamps, turnbuckles and rigging accessories designed for maximum safety and long service life.",
      cta: "Browse Categories",
      link: "/shop",
      bg: "bg-slate-900",
      overlay:
        "bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-transparent",
      img: images.slider2,
      imgClass: "object-cover opacity-45",
      text: "text-white",
      btnVariant: "secondary" as const,
    },
    {
      tag: "Industrial Supply",
      title: "Your Complete Industrial Lifting & Material Handling Partner",
      subtitle:
        "From warehouses and construction sites to factories and shipyards—we deliver certified lifting, rigging and cargo handling solutions across Bangladesh.",
      cta: "Request a Quote",
      link: "/contact",
      bg: "bg-slate-900",
      overlay:
        "bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-transparent",
      img: images.slider3,
      imgClass: "object-cover opacity-40",
      text: "text-white",
      btnVariant: "secondary" as const,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl h-[360px] sm:h-[420px] md:h-[520px]">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
            slide.bg
          } ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img
            src={slide.img}
            alt=""
            className={`absolute inset-0 object-cover ${slide.imgClass}`}
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/35 via-slate-900/10 to-transparent" />{" "}
          {slide.text === "text-white" && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/45 to-transparent" />
          )}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12">
            <div
              className={`max-w-2xl space-y-3 sm:space-y-4 md:space-y-6 ${slide.text}`}
            >
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-black uppercase tracking-widest ${
                  slide.text === "text-white"
                    ? "bg-white/10 text-white border border-white/15"
                    : "bg-slate-900 text-white"
                }`}
              >
                {slide.tag}
              </span>

              <h1 className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight">
                {slide.title}
              </h1>

              <p className="max-w-xl text-sm sm:text-lg md:text-xl opacity-90 font-medium leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="pt-1 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link to={slide.link} className="w-full sm:w-auto">
                  <Button
                    variant={slide.btnVariant}
                    className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-3 text-sm sm:text-lg"
                  >
                    {slide.cta} <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className={`w-full sm:w-auto rounded-full px-6 sm:px-8 py-3 text-sm sm:text-lg ${
                      slide.text === "text-white"
                        ? "border-white/40 text-white hover:bg-white/10"
                        : ""
                    }`}
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-emerald-500" : "w-2 bg-slate-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
const TestimonialCarousel = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const list = testimonials?.length
    ? testimonials?.map((t, i) => ({
        ...t,
        rating: t.rating ?? 5,
        industry: t.industry ?? "Industrial",
        id: t.id ?? `auto-${i}`,
      }))
    : [];

  // If there are no testimonials, render a simple placeholder to avoid
  // accessing properties on undefined and to prevent modulo-by-zero in timers.
  if (!list.length) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-12">
          <div className="h-40 flex items-center justify-center bg-white border border-slate-200 rounded-3xl p-6">
            <div className="text-slate-600">No testimonials available yet.</div>
          </div>
        </div>
      </div>
    );
  }

  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (list.length <= 1) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % list.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [list.length]);

  const prev = () => setActive((a) => (a - 1 + list.length) % list.length);
  const next = () => setActive((a) => (a + 1) % list.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left: Main card */}
      <div className="lg:col-span-8">
        <div className="relative h-full bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/40 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-indigo-500/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200">
                <Quote className="text-emerald-600" size={18} />
                <span className="text-xs font-black uppercase tracking-widest text-slate-600">
                  Verified Review
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
                  aria-label="Next review"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium">
              “{list[active].content}”
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={list[active].avatar}
                  alt={list[active].author}
                  className="w-14 h-14 rounded-2xl border border-slate-200 object-cover"
                />
                <div>
                  <div className="font-black text-slate-900">
                    {list[active].author}
                  </div>
                  <div className="text-sm text-slate-600">
                    {list[active].role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-black text-slate-700">
                  {list[active].industry}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < (list[active].rating ?? 5)
                          ? "text-amber-500"
                          : "text-slate-300"
                      }
                      fill={
                        i < (list[active].rating ?? 5) ? "currentColor" : "none"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-10 flex justify-center gap-2">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-emerald-500" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile controls */}
            <div className="mt-6 flex md:hidden items-center justify-center gap-3">
              <button
                onClick={prev}
                className="px-5 py-3 rounded-full bg-white border border-slate-200 font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
              >
                Prev
              </button>
              <button
                onClick={next}
                className="px-5 py-3 rounded-full bg-white border border-slate-200 font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Mini list (3 items preview) */}
      <div className="lg:col-span-4">
        <div className="h-full bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/40">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">
            More Reviews
          </h3>

          <div className="mt-5 space-y-4">
            {list.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActive(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${
                  idx === active
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-xl border border-slate-200 object-cover"
                  />
                  <div className="min-w-0">
                    <div className="font-black text-slate-900 truncate">
                      {t.author}
                    </div>
                    <div className="text-xs text-slate-600 truncate">
                      {t.industry}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600 line-clamp-2">
                  “{t.content}”
                </p>

                <div className="mt-3 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < (t.rating ?? 5)
                          ? "text-amber-500"
                          : "text-slate-300"
                      }
                      fill={i < (t.rating ?? 5) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6">
            <Link to="/contact">
              <Button className="w-full rounded-full">
                Get a Proposal <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [deals, setDeals] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    dataService.getProducts().then((all) => {
      setFeatured(all.filter((p) => p.isFeatured));
      setDeals(all.filter((p) => p.isDeal));
    });
    dataService.getCategories().then(setCategories);
    dataService.getBrands().then(setBrands);
    dataService.getTestimonials().then(setTestimonials);
  }, []);

  const getCatIcon = (name: string) => {
    switch (name) {
      case "Desktops":
        return <Monitor />;
      case "Laptops":
        return <Laptop />;
      case "Components":
        return <Cpu />;
      case "Monitors":
        return <Tv />;
      case "Networking":
        return <Wifi />;
      case "Accessories":
        return <Mouse />;
      case "Software":
        return <Terminal />;
      case "Gaming":
        return <Gamepad />;
      default:
        return <Cpu />;
    }
  };
  const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, "-");
  return (
    <Layout>
      <SEO
        title="Home"
        description="Welcome to tse - Bangladesh's best tech shop for components and laptops."
      />

      <Hero />
      {/* Trust Badges – Industrial / Engineering */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ShieldCheck />,
              label: "Certified Quality",
              sub: "Industrial-grade lifting & rigging equipment",
            },
            {
              icon: <Package />,
              label: "Wide Product Range",
              sub: "Chain hoists, slings, shackles & accessories",
            },
            {
              icon: <Truck />,
              label: "Fast Nationwide Delivery",
              sub: "Reliable supply across Bangladesh",
            },
            {
              icon: <Headphones />,
              label: "Expert Support",
              sub: "Professional product consultation & assistance",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-slate-50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                {item.icon}
              </div>

              <div>
                <h4 className="font-black text-slate-900 leading-snug">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Industries We Serve
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We supply certified lifting, rigging, and material handling
              equipment for industries where safety, strength, and operational
              efficiency are essential.
            </p>
          </div>

          {/* Industries */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              {
                icon: <Factory className="text-amber-600" />,
                label: "Manufacturing",
              },
              {
                icon: <Building2 className="text-blue-600" />,
                label: "Construction",
              },
              {
                icon: <Ship className="text-sky-600" />,
                label: "Shipbuilding & Marine",
              },
              {
                icon: <Warehouse className="text-indigo-600" />,
                label: "Warehousing",
              },
              {
                icon: <Truck className="text-emerald-600" />,
                label: "Logistics",
              },
              {
                icon: <ShipWheel className="text-orange-600" />,
                label: "Heavy Engineering",
              },
              {
                icon: <Pickaxe className="text-slate-700" />,
                label: "Mining",
              },
              {
                icon: <HardHat className="text-yellow-600" />,
                label: "Infrastructure",
              },
              {
                icon: <Anchor className="text-cyan-700" />,
                label: "Ports & Terminals",
              },
              {
                icon: <Package className="text-violet-600" />,
                label: "Material Handling",
              },
              {
                icon: <Boxes className="text-rose-600" />,
                label: "Distribution Centers",
              },
              {
                icon: <Container className="text-slate-700" />,
                label: "Cargo Handling",
              },
              {
                icon: <Train className="text-red-600" />,
                label: "Railway Projects",
              },
              {
                icon: <Factory className="text-emerald-700" />,
                label: "Steel Industries",
              },
              {
                icon: <Building className="text-indigo-700" />,
                label: "Industrial Plants",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group inline-flex items-center gap-3 px-5 py-5 rounded-full bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <span className="text-sm font-black text-slate-800">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-10 rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-slate-600 max-w-2xl">
              Looking for lifting or rigging solutions for your project? Our
              experts help you select the right equipment based on your
              application, load capacity, and safety requirements.
            </p>

            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-6">
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                Browse Categories
              </h2>
              <p className="text-slate-500">
                Find what you're looking for by department
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                // to={`/shop?category=${cat.name}`}
                to={`/shop?category=${slugify(cat.slug || cat.name)}`}
                className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg hover:border-emerald-300 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 transition-all">
                  {getCatIcon(cat.name)}
                </div>
                <h3 className="text-sm font-bold text-slate-700">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Deals */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900 border-l-4 border-amber-500 pl-4">
              Hot Deals of the Week
            </h2>
            <Link
              to="/shop"
              className="text-sm font-bold text-emerald-600 hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Decorative shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center md:text-left max-w-2xl">
            <span className="inline-block bg-emerald-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 tracking-widest">
              Custom Procurement
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Product Not in Stock?
              <br />
              We Can Arrange It for You.
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Some industrial components may not be readily available in stock.
              Upon confirmation, we source genuine products directly from our
              partners and deliver within an estimated{" "}
              <span className="font-bold text-emerald-400">
                15 working days
              </span>
              .
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3">
            <Button variant="secondary" className="rounded-full px-8">
              Request a Product
            </Button>

            {/* <Button
              variant="outline"
              className="rounded-full px-8 border-white/40 text-white hover:bg-white/10"
            >
              Talk to Sales
            </Button> */}
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center font-bold text-slate-400 uppercase tracking-[0.2em] text-xs mb-10">
            Official Authorized Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity">
            {brands.map((brand) => (
              <img
                key={brand.id}
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 grayscale hover:grayscale-0 transition-all cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews / Testimonials – Industrial Style */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Client Reviews
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Feedback from plant teams who rely on automation stability,
                clean commissioning, and responsive support.
              </p>
            </div>

            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-6">
                Request a Quote
              </Button>
            </Link>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </Layout>
  );
};
