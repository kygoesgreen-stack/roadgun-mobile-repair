export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-600 bg-dark-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
              Roadgun<span className="text-orange-500">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-steel-400">
              Professional mobile auto repair serving Jacksonville, NC and
              surrounding areas. We come to you.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-3 space-y-2">
              <a
                href="tel:+19103589027"
                className="block text-sm text-steel-400 transition-colors hover:text-orange-400"
              >
                (910) 358-9027
              </a>
              <a
                href="mailto:roadgun.repair@gmail.com"
                className="block text-sm text-steel-400 transition-colors hover:text-orange-400"
              >
                roadgun.repair@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-sm font-semibold text-white">Hours</p>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-steel-400">Monday - Friday</p>
              <p className="text-sm text-steel-400">6:00 AM - 6:00 PM</p>
              <p className="text-sm text-steel-400">Saturday - Sunday</p>
              <p className="text-sm text-steel-400">Closed</p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <p className="text-sm font-semibold text-white">Service Area</p>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-steel-400">Jacksonville, NC</p>
              <p className="text-sm text-steel-400">Onslow County</p>
              <p className="text-sm text-steel-400">Craven County</p>
              <p className="text-sm text-steel-400">Holly Ridge</p>
              <p className="text-sm text-steel-400">Jones County</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-dark-600 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-steel-500">
              &copy; {year} Roadgun Mobile Repair. All rights reserved.
            </p>
            <p className="text-xs text-steel-500">
              {/* Website credit placeholder */}
              &nbsp;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
