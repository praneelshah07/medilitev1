import Link from "next/link";

const safetyText =
  "Education only. Not medical advice. This tool does not assess urgency or replace professional care.";

export default function SafetyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/95 px-4 py-3 text-sm text-slate-700 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <span>{safetyText}</span>
        <Link href="/disclaimer" className="font-medium">
          Full disclaimer
        </Link>
      </div>
    </div>
  );
}
