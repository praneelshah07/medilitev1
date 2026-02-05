import Link from "next/link";
import type { Topic } from "@/lib/topics";

export default function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      href={`/topic/${topic.slug}`}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
        <span>{topic.category}</span>
        <span>~60 seconds</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{topic.title}</h3>
      <p className="mt-2 text-sm text-slate-700">{topic.oneMinuteSummary}</p>
    </Link>
  );
}
