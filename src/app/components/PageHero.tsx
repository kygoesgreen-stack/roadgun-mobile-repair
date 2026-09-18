import CallButton from "./CallButton";
import RequestButton from "./RequestButton";

type Crumb = { name: string; href: string };

/** Top band for service and area pages: breadcrumbs, the page's only H1, and the call CTA. */
export default function PageHero({
  crumbs,
  title,
  lead,
}: {
  crumbs: Crumb[];
  title: string;
  lead: string;
}) {
  return (
    <section className="border-b border-dark-600 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-10 sm:px-6 sm:pt-32 sm:pb-14 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-steel-400">
          <ol className="flex flex-wrap items-center gap-1.5">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i < crumbs.length - 1 ? (
                  <a href={c.href} className="hover:text-orange-400">
                    {c.name}
                  </a>
                ) : (
                  <span aria-current="page" className="text-steel-300">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-white font-[family-name:var(--font-display)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-steel-300">{lead}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <CallButton />
          <RequestButton />
        </div>
      </div>
    </section>
  );
}
