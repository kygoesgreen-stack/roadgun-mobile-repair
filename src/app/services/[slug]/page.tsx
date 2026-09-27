import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import JsonLd from "../../components/JsonLd";
import { BulletList, ProseSection } from "../../components/Prose";
import { getService, services } from "@/src/lib/services";
import { areaHref, confirmedAreas } from "@/src/lib/areas";
import {
  AREA_SERVED,
  BUSINESS_ID,
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  pageMetadata,
} from "@/src/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title ?? `Mobile ${service.name} in Jacksonville, NC | Roadgun`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Mobile ${service.name}`,
          serviceType: service.name,
          description: service.metaDescription,
          url: absoluteUrl(path),
          image: `${SITE_URL}${service.image}`,
          provider: { "@id": BUSINESS_ID },
          areaServed: AREA_SERVED,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.cardTitle, path },
        ])}
      />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
          { name: service.cardTitle, href: `${path}/` },
        ]}
        title={`Mobile ${service.name} in Jacksonville, NC`}
        lead="Veteran-owned, 26 years experience. We do the work at your home, job site, or wherever the vehicle is parked."
      />

      <div className="bg-dark-900 py-14 sm:py-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <img
            src={service.image}
            alt={service.imageAlt}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="mb-10 aspect-[3/2] w-full rounded-2xl border border-dark-600 object-cover"
          />

          <div className="space-y-4 text-lg leading-relaxed text-steel-300">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ProseSection heading="What is included">
            <BulletList items={service.included} />
          </ProseSection>

          <ProseSection heading="How a mobile visit works">
            {service.visit.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </ProseSection>

          {service.extraSections?.map((section) => (
            <ProseSection key={section.heading} heading={section.heading}>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </ProseSection>
          ))}

          <ProseSection heading="Driveway or shop: what it costs you">
            {service.cost.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </ProseSection>

          <ProseSection heading="Common signs you need this service">
            <BulletList items={service.symptoms} />
          </ProseSection>

          <ProseSection heading="On site or in a shop?">
            {service.onSite.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </ProseSection>

          <ProseSection heading="Frequently asked questions">
            <div className="divide-y divide-dark-600 rounded-xl border border-dark-600 bg-dark-800">
              {service.faqs.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      className="text-xl leading-none text-orange-400 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-steel-300">{f.a}</p>
                </details>
              ))}
            </div>
          </ProseSection>

          <ProseSection heading="Related services">
            <ul className="grid gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <a
                    href={`/services/${r.slug}/`}
                    className="block h-full rounded-xl border border-dark-600 bg-dark-800 p-4 font-semibold text-white transition-colors hover:border-orange-500/40 hover:text-orange-400"
                  >
                    Mobile {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </ProseSection>

          <ProseSection heading="Where we work">
            <p>
              We cover Jacksonville and the surrounding Onslow County communities:{" "}
              {confirmedAreas.map((a, i) => (
                <span key={a.slug}>
                  <a
                    href={areaHref(a)}
                    className="text-orange-400 underline-offset-2 hover:underline"
                  >
                    {a.town}
                  </a>
                  {i < confirmedAreas.length - 1 ? ", " : "."}
                </span>
              ))}{" "}
              <a href="/service-areas/" className="text-orange-400 underline-offset-2 hover:underline">
                See all service areas
              </a>
              .
            </p>
          </ProseSection>
        </article>
      </div>

      <CtaBand
        heading={`Need ${service.name.toLowerCase()} in Jacksonville?`}
        text="Call Monday through Friday, 6 AM to 6 PM. You talk to the mechanic who does the work."
      />
    </PageShell>
  );
}
