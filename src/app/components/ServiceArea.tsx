"use client";

import { motion } from "framer-motion";

// Towns with an href have their own page under /service-areas/.
// Jacksonville is covered on this page (home-jacksonville.tsx).
const towns: { name: string; href?: string }[] = [
  { name: "Jacksonville", href: "/#jacksonville" },
  { name: "Onslow County" },
  { name: "Craven County" },
  { name: "Holly Ridge", href: "/service-areas/holly-ridge-nc/" },
  { name: "Jones County" },
  { name: "Camp Lejeune", href: "/service-areas/camp-lejeune-nc/" },
  { name: "Swansboro", href: "/service-areas/swansboro-nc/" },
  { name: "Richlands", href: "/service-areas/richlands-nc/" },
  { name: "Hubert", href: "/service-areas/hubert-nc/" },
  { name: "Maysville" },
];

export default function ServiceArea() {
  return (
    <section id="areas" className="bg-dark-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Service Area
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl lg:text-5xl">
            Towns We Cover Around Jacksonville
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel-400">
            Roadgun Mobile Repair serves Jacksonville and surrounding
            communities across Onslow County and beyond. If you are within a
            45-minute to hour-and-a-half drive, we will come to you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {towns.map((town) =>
              town.href ? (
                <a
                  key={town.name}
                  href={town.href}
                  className="rounded-full border border-orange-500/30 bg-dark-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-orange-500/60 hover:text-orange-400"
                >
                  {town.name}
                </a>
              ) : (
                <span
                  key={town.name}
                  className="rounded-full border border-dark-600 bg-dark-800 px-4 py-2 text-sm font-medium text-steel-300"
                >
                  {town.name}
                </span>
              )
            )}
          </div>

          <div className="mt-10 rounded-xl border border-dark-600 bg-dark-800 p-6 sm:p-8">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <svg
                className="h-10 w-10 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div className="text-center sm:text-left">
                <p className="text-lg font-semibold text-white">
                  Jacksonville, North Carolina
                </p>
                <p className="text-sm text-steel-400">
                  Onslow County, Craven County, Holly Ridge, Jones County &amp; surrounding areas
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
