import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import JsonLd from "../components/JsonLd";
import { services } from "@/src/lib/services";
import { breadcrumbJsonLd, pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata({
  title: "Mobile Auto Repair Services in Jacksonville, NC | Roadgun",
  description:
    "Mobile diagnostics, brakes, batteries, starters, oil changes, inspections and trailer repair in Jacksonville, NC. We come to you. Call (910) 358-9027.",
  path: "/services",
});

export default function ServicesIndex() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
        ]}
        title="Mobile Auto Repair Services in Jacksonville, NC"
        lead="Routine maintenance and repairs done at your driveway, job site, or parking lot. Pick a service to see what is included and how a mobile visit works."
      />
      <div className="bg-dark-900 py-14 sm:py-20">
        <ul className="mx-auto grid max-w-5xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`/services/${s.slug}/`}
                className="flex h-full flex-col rounded-xl border border-dark-600 bg-dark-800 p-6 transition-colors hover:border-orange-500/40 hover:bg-dark-700"
              >
                <h2 className="text-lg font-semibold text-white font-[family-name:var(--font-display)]">
                  Mobile {s.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-400">{s.cardDescription}</p>
                <span className="mt-4 text-sm font-semibold text-orange-400">Details and FAQs</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-5xl px-4 text-center text-steel-400 sm:px-6 lg:px-8">
          Not sure what you need? Start with{" "}
          <a href="/services/mobile-diagnostics/" className="text-orange-400 hover:underline">
            mobile diagnostics
          </a>{" "}
          or see the{" "}
          <a href="/service-areas/" className="text-orange-400 hover:underline">
            areas we serve
          </a>
          .
        </p>
      </div>
      <CtaBand
        heading="Tell us what your vehicle is doing"
        text="Call Monday through Friday, 6 AM to 6 PM, and we will tell you whether it is a driveway job."
      />
    </PageShell>
  );
}
