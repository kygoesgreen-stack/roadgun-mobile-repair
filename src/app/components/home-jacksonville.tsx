import { HOME_AREA_SLUG, getArea } from "@/src/lib/areas";
import { getService } from "@/src/lib/services";

// Local Jacksonville copy, moved here from the old /service-areas/jacksonville-nc/
// page so the homepage is the one page targeting Jacksonville searches.
// The booking section is left out because the contact form follows.
export default function HomeJacksonville() {
  const area = getArea(HOME_AREA_SLUG);
  if (!area) return null;

  const sections = area.sections.filter((s) => s.heading !== "Booking a visit");
  const featured = area.featured
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section id="jacksonville" className="bg-dark-800 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-orange-500">
          Home Base
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl lg:text-5xl">
          Serving Jacksonville, NC
        </h2>

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-steel-300">
          {area.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {sections.map((section) => (
          <div key={section.heading} className="mt-10">
            <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
              {section.heading}
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-steel-300">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10 rounded-xl border border-dark-600 bg-dark-900 p-6">
          <p className="text-base leading-relaxed text-steel-300">
            Due for maintenance? Book a{" "}
            <a href="/services/oil-change/" className="font-semibold text-orange-400 underline-offset-2 hover:underline">
              mobile oil change in Jacksonville
            </a>{" "}
            and we handle it in your driveway or work lot. Popular jobs in town:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {featured.map((s) => (
              <li key={s.slug}>
                <a
                  href={`/services/${s.slug}/`}
                  className="block h-full rounded-lg border border-orange-500/30 bg-dark-800 p-3 text-sm font-semibold text-white transition-colors hover:border-orange-500/60 hover:text-orange-400"
                >
                  Mobile {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
