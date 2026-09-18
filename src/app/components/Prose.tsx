/** Consistent section styling for long-form service and area copy. */
export function ProseSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-steel-300">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-orange-500" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
