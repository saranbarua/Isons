import React, { useMemo, useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Anchor,
  Wrench,
  ShieldCheck,
  Boxes,
  Gauge,
  Truck,
  Building2,
  BadgeCheck,
  Clock,
  PackageCheck,
} from "lucide-react";
import { SEO, Layout } from "../components/Layout";
import { Button } from "../components/UI";
import toast from "react-hot-toast";

/* ----------------------------- ABOUT ----------------------------- */

export const About = () => {
  const stats = useMemo(
    () => [
      { label: "Projects Supplied", value: "300+", tone: "text-emerald-600" },
      { label: "Industry Segments", value: "10+", tone: "text-indigo-600" },
      { label: "Order Turnaround", value: "24–48h", tone: "text-amber-600" },
    ],
    [],
  );

  const pillars = useMemo(
    () => [
      {
        icon: <ShieldCheck className="text-emerald-700" />,
        title: "Quality & Safety",
        desc: "Certified lifting and rigging gear, rated and tested to spec—no shortcuts on safety.",
      },
      {
        icon: <Boxes className="text-indigo-700" />,
        title: "Wide Inventory",
        desc: "Chain hoists, wire rope, slings, shackles and rigging hardware ready to ship.",
      },
      {
        icon: <Wrench className="text-amber-700" />,
        title: "Technical Support",
        desc: "Load calculations, product selection, and on-site guidance from an experienced team.",
      },
      {
        icon: <BadgeCheck className="text-slate-700" />,
        title: "Trust & Transparency",
        desc: "Accurate specs, clear pricing, and honest recommendations to protect your project.",
      },
    ],
    [],
  );

  const services = useMemo(
    () => [
      {
        icon: <Anchor className="text-emerald-700" />,
        title: "Chain Hoists & Blocks",
        desc: "Manual and electric chain hoists, lever blocks, and lifting tackle for every load class.",
      },
      {
        icon: <Gauge className="text-indigo-700" />,
        title: "Wire Rope & Slings",
        desc: "Wire rope, wire rope slings, webbing slings and round slings built to rated capacity.",
      },
      {
        icon: <PackageCheck className="text-amber-700" />,
        title: "Rigging Hardware",
        desc: "Shackles, turnbuckles, eye bolts, lifting chains, hooks and rigging accessories.",
      },
      {
        icon: <Truck className="text-slate-700" />,
        title: "Supply & Logistics",
        desc: "Sourcing, stock supply, and timely delivery for projects across all industries.",
      },
    ],
    [],
  );

  const industries = useMemo(
    () => [
      "Construction",
      "Shipping & Ports",
      "Oil & Gas",
      "Steel & Metal",
      "Power & Energy",
      "Manufacturing",
      "Marine",
      "Logistics",
    ],
    [],
  );

  return (
    <Layout>
      <SEO
        title="About Us"
        description="N Islam Trade International—trusted supplier of lifting and rigging equipment for projects across all industries."
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-200/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-14">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-bold">
              <Building2 size={16} />N Islam Trade International
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Your trusted partner in{" "}
              <span className="text-emerald-600">
                lifting & rigging equipment
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              We supply professional, safe, efficient and reliable lifting and
              rigging equipment for projects of every scale—backed by expertise
              you can trust.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="px-7 py-4 rounded-2xl">Request a Quote</Button>
              <Button variant="outline" className="px-7 py-4 rounded-2xl">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About + Image */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <img
              src="https://picsum.photos/seed/rigging/1200/900"
              alt="Lifting and Rigging Equipment"
              className="rounded-3xl shadow-2xl border border-slate-200"
            />
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Who We Are
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                N Islam Trade International is a pioneer and trusted source for
                lifting and rigging equipment. We work closely with our
                customers to understand project requirements, supply the right
                equipment, and stand behind it after delivery.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-6 bg-slate-50 rounded-3xl border border-slate-200"
                >
                  <div className={`text-3xl font-black ${s.tone}`}>
                    {s.value}
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40">
              <h4 className="text-lg font-black text-slate-900">
                What we optimize for
              </h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600">•</span>Certified,
                  rated equipment for safe lifting operations
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600">•</span>Reliable stock
                  and fast turnaround on orders
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-emerald-600">•</span>Honest
                  guidance so you get the right equipment the first time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="max-w-7xl mx-auto px-4 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Vision</h3>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed">
              To be the most trusted name in lifting and rigging equipment
              supply—recognized for reliability, safety, and strong customer
              service.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Anchor />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Mission</h3>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Supply professional, safe and reliable lifting and rigging
              equipment with quality components and responsive
              support—protecting your project and your people.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            What We Supply
          </h2>
          <p className="mt-3 text-slate-600">
            From single components to full project packages—sourced, checked,
            and delivered on time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Why Choose Us
          </h2>
          <p className="mt-3 text-slate-600">
            We focus on safety, dependable stock, and honest support on every
            order.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Industries We Serve
          </h2>
          <p className="mt-3 text-slate-600">
            We supply lifting and rigging equipment across sectors where safety
            and reliability matter most.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

/* ----------------------------- CONTACT ----------------------------- */

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [submitted, setSubmitted] = useState(false);

  // TODO: replace with your form endpoint / email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/YOUR_EMAIL_HERE@example.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            subject: formData.subject,
            message: formData.message,
            _subject: `New Contact: ${formData.subject}`,
            _captcha: "false",
          }),
        },
      );

      if (res.ok) {
        toast.success("Message sent successfully ✅");
        setSubmitted(true);
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (err) {
      toast.error("Something went wrong ⚠️");
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Contact N Islam Trade International for lifting and rigging equipment, quotations, and project support."
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Left Info */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h1 className="text-4xl font-black text-slate-900">Contact</h1>
              <p className="mt-3 text-slate-600">
                For quotation, product availability, or project support—reach
                out anytime.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Office</h4>
                  {/* TODO: replace with your real office address */}
                  <p className="text-sm text-slate-600">
                    [Your office address here]
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Phone</h4>
                  {/* TODO: replace with your real phone number */}
                  <p className="text-sm text-slate-600">[Your phone number]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Email</h4>
                  {/* TODO: replace with your real email address */}
                  <p className="text-sm text-slate-600">[Your email address]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Business Hours</h4>
                  {/* TODO: confirm your business hours */}
                  <p className="text-sm text-slate-600">
                    Sat–Thu: 10:00 AM – 7:00 PM <br />
                    Friday: Closed / On Call
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <h4 className="font-black text-slate-900">For faster response</h4>
              <p className="mt-2 text-sm text-slate-600">
                Please mention: project location, required equipment (hoist /
                wire rope / sling / shackle), and required load capacity.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
              {submitted ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    Request Submitted
                  </h3>
                  <p className="text-slate-600">
                    We will contact you within 24–48 business hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-700">
                        Full Name
                      </label>
                      <input
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 transition-colors"
                        placeholder="Your name"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-700">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 transition-colors"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-700">
                        Phone
                      </label>
                      <input
                        required
                        name="phone"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 transition-colors"
                        placeholder="+880 1XXX XXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-700">
                        Equipment Type
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 transition-colors bg-white"
                        defaultValue=""
                        value={formData.service}
                        name="service"
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select equipment type
                        </option>
                        <option>Chain Hoist / Block</option>
                        <option>Wire Rope / Sling</option>
                        <option>Shackle / Rigging Hardware</option>
                        <option>Lifting Chain</option>
                        <option>Bulk / Project Supply</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700">
                      Subject
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Quotation / stock inquiry / support"
                      value={formData.subject}
                      name="subject"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700">
                      Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Write details (equipment type, load capacity, quantity, timeline)..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-4 rounded-2xl gap-2"
                  >
                    Submit Request <Send size={18} />
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            {/* TODO: update the map query with your real address */}
            <div className="mt-12 w-full h-80 rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
              <iframe
                title="Google Map"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
