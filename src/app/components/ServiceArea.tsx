"use client";

import { motion } from "framer-motion";

const towns = [
  "Fayetteville",
  "Fort Liberty",
  "Spring Lake",
  "Hope Mills",
  "Raeford",
  "Fayetteville",
  "Fort Bragg",
  "Lumberton",
  "Sanford",
  "Southern Pines",
];

export default function ServiceArea() {
  return (
    <section className="bg-dark-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* TODO: Confirm exact city and service radius with the client */}
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Service Area
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl lg:text-5xl">
            Serving the Fayetteville, NC Region
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel-400">
            Roadgun Mobile Repair serves Fayetteville and surrounding
            communities across southeastern North Carolina. If you are within a
            reasonable drive, we will come to you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {towns.map((town) => (
              <span
                key={town}
                className="rounded-full border border-dark-600 bg-dark-800 px-4 py-2 text-sm font-medium text-steel-300 transition-colors hover:border-orange-500/30 hover:text-orange-400"
              >
                {town}
              </span>
            ))}
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
                  Fayetteville, North Carolina
                </p>
                <p className="text-sm text-steel-400">
                  And surrounding communities within the 910 area code
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
