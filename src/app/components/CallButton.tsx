import { PHONE_DISPLAY, PHONE_HREF } from "@/src/lib/site";

export default function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-orange-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-95 ${className}`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      Call {PHONE_DISPLAY}
    </a>
  );
}
