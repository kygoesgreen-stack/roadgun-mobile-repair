"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "On-Site Diagnostics",
    description:
      "Check engine light on? Car not starting? We bring professional diagnostic tools to your location and get to the bottom of it fast.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Brake Service",
    description:
      "Pads, rotors, calipers, and brake fluid. We handle the full brake job right in your driveway so you can stop with confidence.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h.874c.311 0 .563.252.563.563v4.874a.563.563 0 01-.563.563h-.874a.563.563 0 01-.563-.563V9.563zM14.437 9h.874c.311 0 .563.252.563.563v4.874a.563.563 0 01-.563.563h-.874a.563.563 0 01-.563-.563V9.563c0-.311.252-.563.563-.563z" />
      </svg>
    ),
  },
  {
    title: "Batteries & Charging",
    description:
      "Dead battery or failing alternator? We test, replace, and get you back on the road without a trip to the parts store.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 014.5 15v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
      </svg>
    ),
  },
  {
    title: "Starters & Alternators",
    description:
      "Grinding start or dimming lights? We diagnose and replace starters and alternators on-site to keep your electrical system healthy.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Oil & Fluid Changes",
    description:
      "Keep your engine protected with fresh oil, transmission fluid, coolant, and power steering fluid. Quick service at your convenience.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Belts & Hoses",
    description:
      "Cracked serpentine belt or aging radiator hose? We inspect and replace them before they leave you stranded.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18a1.125 1.125 0 01-1.584-1.184l.567-5.857m6.401 3.861l5.384 3.18a1.125 1.125 0 001.584-1.184l-.567-5.857m-6.401 3.861L5.27 6.016" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.58 4.83l5.384-3.18a1.125 1.125 0 011.584 1.184l-.567 5.857" />
      </svg>
    ),
  },
  {
    title: "Check Engine Light",
    description:
      "We scan, read the codes, and give you an honest answer about what is going on and what needs to be done. No guesswork.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Pre-Purchase Inspections",
    description:
      "Buying a used vehicle? Get a thorough, honest inspection at the seller's location before you commit your money.",
    mobileOnly: true,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Trailer Services",
    description:
      "Wiring, lights, brakes, axles, and bearings on utility, cargo, equipment, and boat trailers. We keep your trailer road-ready.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21a.75.75 0 00.75-.75V11.25a3 3 0 00-3-3h-1.5l-1.72-4.575A1.5 1.5 0 0014.663 2H9.337a1.5 1.5 0 00-1.432 1.05L6.187 7.5H4.5a3 3 0 00-3 3v6.375c0 .621.504 1.125 1.125 1.125h1.5" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="bg-dark-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl lg:text-5xl">
            Mobile Repair Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel-400">
            Everything a shop can do, we can do right in your driveway &mdash; including trailers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group rounded-xl border border-dark-600 bg-dark-800 p-6 transition-all duration-300 hover:border-orange-500/30 hover:bg-dark-700${service.mobileOnly ? " lg:hidden" : ""}`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 transition-colors group-hover:bg-orange-500/20">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-display)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
