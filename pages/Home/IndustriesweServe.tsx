import {
  Factory,
  Building2,
  Ship,
  Warehouse,
  Truck,
  ShipWheel,
  Pickaxe,
  HardHat,
  Anchor,
  Package,
  Boxes,
  Container,
  Train,
  Building,
  ArrowUpRight,
} from "lucide-react";

// NOTE: swap the <a> below back to your <Link to="/contact"> from react-router
// and the <button> back to your shadcn <Button> when dropping this into the app.

const INDUSTRIES = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Building2, label: "Construction" },
  { icon: Ship, label: "Shipbuilding & Marine" },
  { icon: Warehouse, label: "Warehousing" },
  { icon: Truck, label: "Logistics" },
  { icon: ShipWheel, label: "Heavy Engineering" },
  { icon: Pickaxe, label: "Mining" },
  { icon: HardHat, label: "Infrastructure" },
  { icon: Anchor, label: "Ports & Terminals" },
  { icon: Package, label: "Material Handling" },
  { icon: Boxes, label: "Distribution Centers" },
  { icon: Container, label: "Cargo Handling" },
  { icon: Train, label: "Railway Projects" },
  { icon: Factory, label: "Steel Industries" },
  { icon: Building, label: "Industrial Plants" },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-20 bg-[#FAFAF8] border-t border-[#E5E2DA]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');
        .plate-font { font-family: 'Oswald', sans-serif; }
        .code-font { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A9762F]" />
            <span className="code-font text-[11px] tracking-[0.25em] text-[#A9762F] font-semibold uppercase">
              Certified Supply · Worldwide
            </span>
          </div>

          <h2 className="plate-font text-4xl md:text-5xl font-bold text-[#171A1D] tracking-tight uppercase">
            Industries We Serve
          </h2>
          <div className="w-16 h-[3px] bg-[#A9762F] mt-4 mb-5" />

          <p className="text-[#5B6169] leading-relaxed">
            We supply certified lifting, rigging, and material handling
            equipment for industries where safety, strength, and operational
            efficiency are essential.
          </p>
        </div>

        {/* Industries — nameplate grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {INDUSTRIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-[#E5E2DA] rounded-md px-5 pt-6 pb-4 transition-all duration-200 hover:border-[#A9762F]/50 hover:shadow-[0_8px_24px_-8px_rgba(23,26,29,0.12)] hover:-translate-y-0.5"
              >
                {/* rivet */}
                <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#E5E2DA] group-hover:bg-[#A9762F] transition-colors" />

                {/* serial code */}
                <span className="code-font absolute top-2.5 right-3 text-[10px] tracking-wider text-[#B9B4A8] group-hover:text-[#A9762F] transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="w-10 h-10 rounded-full bg-[#FAFAF8] border border-[#E5E2DA] flex items-center justify-center mb-4 group-hover:border-[#A9762F]/40 transition-colors">
                  <Icon
                    className="w-[18px] h-[18px] text-[#3D444D] group-hover:text-[#A9762F] transition-colors"
                    strokeWidth={1.75}
                  />
                </div>

                <p className="plate-font text-[13px] font-semibold text-[#20242A] uppercase tracking-wide leading-snug">
                  {item.label}
                </p>
                <div className="w-6 h-[2px] bg-[#E5E2DA] group-hover:bg-[#A9762F] mt-2 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Bottom — control-panel CTA */}
        <div className="mt-14 rounded-xl bg-[#1E242B] px-8 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5 relative overflow-hidden">
          <div
            className="absolute inset-x-0 top-0 h-[3px] opacity-60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #A9762F 0px, #A9762F 10px, transparent 10px, transparent 20px)",
            }}
          />
          <p className="text-sm text-[#C7CBD1] max-w-2xl">
            Looking for lifting or rigging solutions for your project? Our
            experts help you select the right equipment based on your
            application, load capacity, and safety requirements.
          </p>

          <a href="/contact" className="shrink-0">
            <button className="plate-font inline-flex items-center gap-2 rounded-md bg-[#A9762F] hover:bg-[#C9974D] text-[#171A1D] font-semibold uppercase tracking-wide text-sm px-6 py-3 transition-colors">
              Get Expert Advice
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}