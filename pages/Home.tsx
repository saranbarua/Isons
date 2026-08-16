import React, { useState, useEffect, useRef } from "react";
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
import IndustriesWeServe from "./Home/IndustriesweServe";
import { AllFiles } from "./Home/AllFile";

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
const statsData = [
  {
    icon: <HardHat size={22} />,
    end: 15,
    suffix: "+",
    label: "Years of Industry Experience",
  },
  {
    icon: <Boxes size={22} />,
    end: 1000,
    suffix: "+",
    label: "Products Delivered",
  },
  {
    icon: <Building2 size={22} />,
    end: 500,
    suffix: "+",
    label: "Businesses Served",
  },
  {
    icon: <Truck size={22} />,
    end: 98,
    suffix: "%",
    label: "On-Time Delivery Rate",
  },
];

const StatItem = ({
  stat,
  visible,
  index,
}: {
  stat: (typeof statsData)[0];
  visible: boolean;
  index: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf: number;
    let start: number | null = null;
    const duration = 1600 + index * 150;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * stat.end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <div
      className="relative flex flex-col items-center text-center transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative z-10 w-16 h-16 rounded-2xl bg-slate-800 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 transition-all duration-700 ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90"
        }`}
      >
        {stat.icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-white tabular-nums">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="mt-2 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 max-w-[160px]">
        {stat.label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-slate-900 py-20 overflow-hidden">
      {/* subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4">
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Trusted By The Numbers
          </h2>
        </div>

        <div className="relative">
          {/* rigging cable connecting line */}
          <svg
            className="hidden md:block absolute top-8 left-0 w-full h-2 -z-0"
            viewBox="0 0 1000 10"
            preserveAspectRatio="none"
          >
            <line
              x1="60"
              y1="5"
              x2="940"
              y2="5"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="880"
              strokeDashoffset={visible ? 0 : 880}
              style={{ transition: "stroke-dashoffset 1.8s ease-out" }}
              opacity="0.4"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {statsData.map((stat, i) => (
              <StatItem key={i} stat={stat} visible={visible} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    icon: <Truck size={20} />,
    q: "Do you deliver across Bangladesh?",
    a: "Yes, we deliver nationwide. Most in-stock lifting and rigging equipment reaches Dhaka within 1–2 working days, and other districts within 3–5 working days depending on location.",
  },
  {
    icon: <Boxes size={20} />,
    q: "Do you offer bulk or wholesale pricing?",
    a: "Yes. For bulk orders, project procurement, or recurring supply contracts, contact our sales team for a customized quote based on quantity and specification.",
  },
  {
    icon: <ClipboardList size={20} />,
    q: "Can you source products that aren't currently in stock?",
    a: "Absolutely. Once you confirm a request, we source genuine products directly from our manufacturing partners and typically deliver within an estimated 15 working days.",
  },
  {
    icon: <FileCheck2 size={20} />,
    q: "Are your lifting and rigging products certified?",
    a: "All chain hoists, slings, shackles, and rigging hardware we supply meet relevant industrial safety standards and come with manufacturer certification on request.",
  },
  {
    icon: <Wrench size={20} />,
    q: "Do you provide installation or technical support?",
    a: "Yes, our team offers on-site installation guidance and technical consultation for lifting systems, along with after-sales support for maintenance and troubleshooting.",
  },
  {
    icon: <Clock size={20} />,
    q: "How long does order processing take?",
    a: "In-stock orders are typically processed and dispatched within 24 hours of confirmation. Custom or bulk orders may take longer depending on sourcing requirements.",
  },
];

const FAQItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof faqData)[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`border rounded-2xl transition-colors ${
        isOpen
          ? "border-emerald-300 bg-emerald-50/40"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center gap-4 text-left p-5 md:p-6"
      >
        <div
          className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-all ${
            isOpen ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
          {item.icon}
        </div>
        <span className="flex-1 font-black text-slate-900 text-sm md:text-base">
          {item.q}
        </span>
        <ChevronRight
          size={18}
          className={`shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-90 text-emerald-600" : ""
          }`}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-5 md:pb-6 pl-[76px] text-sm text-slate-600 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-4">
            Support
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Common questions about shipping, bulk orders, and custom
            procurement.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 mb-4">Still have questions?</p>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-8">
              Contact Our Team <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
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
        title="Industrial Lifting & Rigging Equipment | Chain Hoists, Slings & Rigging Hardware in Bangladesh"
        description="Bangladesh's trusted supplier of certified lifting and rigging equipment — chain hoists, beam trolleys, wire ropes, slings, shackles and industrial hardware. Nationwide delivery, expert support, and custom procurement for factories, warehouses and shipyards."
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
      <StatsSection />
      {/* Industries We Serve */}
      <IndustriesWeServe />

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
      <AllFiles />

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
      <FAQSection />
    </Layout>
  );
};
