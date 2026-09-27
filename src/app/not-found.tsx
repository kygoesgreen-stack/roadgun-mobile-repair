import type { Metadata } from "next";
import PageShell from "./components/PageShell";
import CtaBand from "./components/CtaBand";

export const metadata: Metadata = {
  title: "Page Not Found | Roadgun Mobile Repair",
  description: "This page does not exist. Find mobile repair services and service areas for Roadgun Mobile Repair in Jacksonville, NC.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="bg-dark-900">
        <div className="mx-auto max-w-3xl px-4 pt-32 pb-14 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-display)] sm:text-4xl">
            Page Not Found
            <span className="mt-2 block text-lg font-medium text-steel-400">
              Roadgun Mobile Repair, Jacksonville, NC
            </span>
          </h1>
          <p className="mt-6 text-steel-300">
            That page does not exist. Try the{" "}
            <a href="/" className="text-orange-400 hover:underline">homepage</a>,{" "}
            <a href="/services/" className="text-orange-400 hover:underline">our services</a>, or the{" "}
            <a href="/service-areas/" className="text-orange-400 hover:underline">areas we serve</a>.
          </p>
        </div>
      </section>
      <CtaBand
        heading="Need a mechanic now?"
        text="Call Monday through Friday, 6 AM to 6 PM."
      />
    </PageShell>
  );
}
