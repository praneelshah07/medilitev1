"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, topics } from "@/lib/topics";
import TopicCard from "@/components/TopicCard";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return topics;
    return topics.filter((topic) =>
      [topic.title, topic.oneMinuteSummary].some((field) =>
        field.toLowerCase().includes(term)
      )
    );
  }, [search]);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-clarity-teal">
          Education-only MVP
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          Understand a diagnosis or symptom in under a minute — education only.
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          ClarityCare is a fast, simple library that explains common symptoms and
          post-diagnosis topics in plain language.
        </p>
        <div className="mt-6 flex flex-col gap-3 md:flex-row">
          <input
            type="search"
            placeholder="Search topics"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-full border border-slate-300 px-4 py-3 text-base focus:border-clarity-blue focus:outline-none"
            aria-label="Search topics"
          />
          <Link
            href="/topics"
            className="rounded-full bg-clarity-blue px-6 py-3 text-center text-white font-semibold"
          >
            Browse all topics
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/topics?category=${encodeURIComponent(category)}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-lg font-semibold text-slate-800 hover:bg-slate-100"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">How it works</h2>
          <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
            <li>Pick a symptom or diagnosis topic.</li>
            <li>Read a one-minute explanation with a simple analogy.</li>
            <li>Save questions for your clinician.</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">Popular topics</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {filtered.slice(0, 4).map((topic) => (
              <TopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
