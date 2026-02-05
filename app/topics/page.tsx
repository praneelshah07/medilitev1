"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, topics } from "@/lib/topics";
import TopicCard from "@/components/TopicCard";

export default function TopicsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    initialCategory
  );
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return topics.filter((topic) => {
      const matchesCategory = activeCategory
        ? topic.category === activeCategory
        : true;
      const matchesSearch = term
        ? [topic.title, topic.oneMinuteSummary]
            .join(" ")
            .toLowerCase()
            .includes(term)
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Topics Library</h1>
        <p className="text-slate-700">
          Short, simple explanations with no diagnosis or medical advice.
        </p>
      </header>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              !activeCategory
                ? "bg-clarity-blue text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                activeCategory === category
                  ? "bg-clarity-blue text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search topics"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full md:w-72 rounded-full border border-slate-300 px-4 py-2 text-base focus:border-clarity-blue focus:outline-none"
          aria-label="Search topics"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </div>
  );
}
