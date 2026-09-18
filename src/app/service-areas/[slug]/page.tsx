import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import JsonLd from "../../components/JsonLd";
import { ProseSection } from "../../components/Prose";
import { areas, getArea } from "@/src/lib/areas";
import { getService, services } from "@/src/lib/services";
import { breadcrumbJsonLd, pageMetadata } from "@/src/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea((await params).slug);
  if (!area) return {};
  return {
    ...pageMetadata({
      title: `Mobile Mechanic in ${area.town}, NC | Roadgun Mobile Repair`,
      description: area.metaDescription,
      path: `/service-areas/${area.slug}`,
    }),
    // Unconfirmed towns stay out of the index until the owner signs off.
    ...(area.confirmed ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();

  const path = `/service-areas/${area.slug}`;
  const featured = area.featured
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const others = services.filter((s) => !area.featured.includes(s.slug));

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: `${area.town}, NC`, path },
        ])}
      />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas/" },
          { name: `${area.town}, NC`, href: `${path}/` },
        ]}
        title={`Mobile Mechanic in ${area.town}, NC`}
        lead={`Veteran-owned, 26 years experience. Repairs done where your vehicle sits in ${area.town}.`}
      />

      <div className="bg-dark-900 py-14 sm:py-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-lg leading-relaxed text-steel-300">
            {area.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {area.sections.map((section) => (
            <ProseSection key={section.heading} heading={section.heading}>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </ProseSection>
          ))}

          <ProseSection heading={`Mobile repair services in ${area.town}`}>
            <ul className="grid gap-3 sm:grid-cols-3">
              {featured.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}/`}
                    className="block h-full rounded-xl border border-orange-500/30 bg-dark-800 p-4 font-semibold text-white transition-colors hover:border-orange-500/60 hover:text-orange-400"
                  >
                    Mobile {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {others.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}/`} className="text-orange-400 underline-offset-2 hover:underline">
                    Mobile {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </ProseSection>

          <p className="mt-10 text-steel-400">
            <a href="/service-areas/" className="text-orange-400 underline-offset-2 hover:underline">
              See every town we serve
            </a>{" "}
            or{" "}
            <a href="/services/" className="text-orange-400 underline-offset-2 hover:underline">
              browse all services
            </a>
            .
          </p>
        </article>
      </div>

      <CtaBand
        heading={`Need a mechanic in ${area.town}?`}
        text="Call Monday through Friday, 6 AM to 6 PM. You talk to the mechanic who does the work."
      />
    </PageShell>
  );
}
