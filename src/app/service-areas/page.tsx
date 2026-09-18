import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import JsonLd from "../components/JsonLd";
import { confirmedAreas } from "@/src/lib/areas";
import { breadcrumbJsonLd, pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata({
  title: "Service Areas Around Jacksonville, NC | Roadgun Mobile Repair",
  description:
    "Mobile mechanic serving Jacksonville, Camp Lejeune, Richlands, Swansboro, Hubert and Holly Ridge, NC. We come to you. Call (910) 358-9027.",
  path: "/service-areas",
});

export default function ServiceAreasIndex() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas/" },
        ]}
        title="Mobile Mechanic Service Areas Around Jacksonville, NC"
        lead="Based in Jacksonville and covering Onslow County and nearby communities. If you are within about a 45 minute to hour and a half drive, we will come to you."
      />
      <div className="bg-dark-900 py-14 sm:py-20">
        <ul className="mx-auto grid max-w-5xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {confirmedAreas.map((a) => (
            <li key={a.slug}>
              <a
                href={`/service-areas/${a.slug}/`}
                className="flex h-full flex-col rounded-xl border border-dark-600 bg-dark-800 p-6 transition-colors hover:border-orange-500/40 hover:bg-dark-700"
              >
                <h2 className="text-lg font-semibold text-white font-[family-name:var(--font-display)]">
                  {a.town}, NC
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-400">{a.metaDescription}</p>
                <span className="mt-4 text-sm font-semibold text-orange-400">Mobile mechanic in {a.town}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl px-4 text-center text-steel-400 sm:px-6 lg:px-8">
          We also cover the rest of Onslow County and parts of Craven and Jones counties, including
          Maysville. Not sure if you are in range? Call and ask, or see the full list of{" "}
          <a href="/services/" className="text-orange-400 hover:underline">
            mobile repair services
          </a>
          .
        </p>
      </div>
      <CtaBand
        heading="Is your town on the list?"
        text="Call Monday through Friday, 6 AM to 6 PM, and we will confirm we can get to you."
      />
    </PageShell>
  );
}
