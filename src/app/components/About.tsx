"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-dark-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-dark-600">
              <img
                src="/images/mobile-mechanic.jpg"
                alt="Mechanic working on a car engine in an outdoor setting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-dark-600 bg-dark-800 px-5 py-3 shadow-xl sm:-bottom-6 sm:-right-6">
              <p className="text-sm font-semibold text-orange-400">
                Owner-Operated
              </p>
              <p className="text-xs text-steel-400">
                Every job, hands-on
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              About Roadgun
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl">
              A Mechanic Who Earns Your Trust
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-300">
              {/* TODO: Confirm Travis's full name and any business specialties with the client */}
              <p>
                Travis is the kind of mechanic who would rather fix your car right
                the first time than see you again for the same problem. That is
                how he has built a loyal base of customers across the Fayetteville
                area, one honest job at a time.
              </p>
              <p>
                Roadgun Mobile Repair is not a franchise. It is a working
                mechanic who invested in the tools and knowledge to bring real
                shop-level service to your driveway. No shop overhead means
                straightforward pricing and a mechanic who has every reason to
                keep you coming back.
              </p>
              <p>
                Whether it is a daily driver that will not start, a truck that
                needs brakes before a road trip, or a pre-purchase inspection
                on a vehicle you are considering, we show up ready to work and
                treat your vehicle like it is our own.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
