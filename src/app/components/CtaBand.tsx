import CallButton from "./CallButton";
import RequestButton from "./RequestButton";

export default function CtaBand({ heading, text }: { heading: string; text: string }) {
  return (
    <section className="bg-dark-800 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-3 text-steel-400">{text}</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <CallButton />
          <RequestButton />
        </div>
      </div>
    </section>
  );
}
