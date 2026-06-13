"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Call or fill out the form online. Tell us what is going on with your vehicle and where you are.",
  },
  {
    number: "02",
    title: "We Come to You",
    description:
      "Travis shows up at your home, office, or wherever your vehicle is with the tools and parts to get the job done.",
  },
  {
    number: "03",
    title: "Repair Done On-Site",
    description:
      "The work gets done right there. No towing, no waiting at a shop, no wasted time. Just reliable repair at your convenience.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-dark-800 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl lg:text-5xl">
            Three Steps to Get Fixed
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-500/30 bg-dark-900 text-2xl font-bold text-orange-500 font-[family-name:var(--font-display)]">
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-gradient-to-r from-orange-500/20 via-orange-500/40 to-orange-500/20 sm:block" />
              )}
              <h3 className="mt-6 text-xl font-semibold text-white font-[family-name:var(--font-display)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
