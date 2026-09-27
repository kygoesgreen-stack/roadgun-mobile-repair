import { PHONE_DISPLAY, PHONE_HREF } from "@/src/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden sm:min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/hero-poster.jpg"
          alt="Mobile mechanic working under the hood of a vehicle in Jacksonville, NC"
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center px-4 sm:min-h-screen sm:px-6 lg:px-8">
        <div className="w-full pt-24 pb-16 sm:py-40">
          <div className="max-w-3xl">
            {/* We come to you badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 sm:mb-6">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              We come to you
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white font-[family-name:var(--font-display)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Mobile Mechanic in{" "}
              <span className="text-orange-500">Jacksonville, NC</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-steel-300 sm:mt-6 sm:text-xl">
              Mobile auto repair from a mechanic who comes to you. Veteran-owned, 26 years experience.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {PHONE_DISPLAY}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-steel-500/30 bg-dark-800/80 px-8 py-4 text-base font-semibold text-white transition-all hover:border-steel-400/50 hover:bg-dark-700 active:scale-95"
              >
                Request Service
              </a>
            </div>

            {/* Star rating */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex gap-0.5" role="img" aria-label="5.0 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-white">5.0</span>
              <span className="text-sm text-steel-400">
                Trusted across the Jacksonville, NC area
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
