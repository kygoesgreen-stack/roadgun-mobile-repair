"use client";

import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-dark-800 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <div className="relative rounded-2xl border border-dark-600 bg-dark-900 p-8 sm:p-12">
            <svg
              className="absolute top-6 left-8 h-10 w-10 text-orange-500/20 sm:top-8 sm:left-10 sm:h-12 sm:w-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="flex gap-1" role="img" aria-label="5.0 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="mt-6 text-lg leading-relaxed text-steel-200 sm:text-xl">
              &ldquo;Travis has helped me literally bring my vehicle back to life
              over the past 6-12 months and the service has hands down been
              nothing but the best. If you need a knowledgeable and willing
              mechanic please give him a chance to earn your trust as
              well.&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-lg font-bold text-orange-400 font-[family-name:var(--font-display)]">
                EC
              </div>
              <div>
                <p className="font-semibold text-white">Eric Coleman</p>
                <p className="text-sm text-steel-400">Verified Customer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
