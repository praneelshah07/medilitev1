"use client";

import { useEffect, useMemo, useState } from "react";
import type { Topic } from "@/lib/topics";
import SafetyFooter from "@/components/SafetyFooter";

const bannedPhrases = [
  "you should take",
  "take ",
  "go to the er",
  "don’t need a doctor",
  "don't need a doctor",
  "most likely",
  "this means you have",
  "diagnosis:",
];

function collectText(topic: Topic): string[] {
  const base = [
    topic.title,
    topic.oneMinuteSummary,
    topic.eli5Summary,
    topic.analogy.story,
    ...(topic.whatsHappening ?? []),
    ...(topic.peopleOftenNotice ?? []),
    ...(topic.generalSelfCare ?? []),
    ...(topic.questionsForClinician ?? []),
    ...(topic.resources ?? []).map((resource) => resource.label),
  ];
  const extra = topic.extraDetail
    ? Object.values(topic.extraDetail)
    : [];
  return [...base, ...extra].filter(Boolean);
}

function checkSentences(text: string) {
  const sentences = text.split(/[.!?]+/).map((sentence) => sentence.trim());
  sentences.forEach((sentence) => {
    const wordCount = sentence.split(/\s+/).filter(Boolean).length;
    if (wordCount > 25) {
      console.warn(`ClarityCare readability warning: Long sentence (${wordCount} words).`, sentence);
    }
  });
}

export default function TopicDetail({ topic }: { topic: Topic }) {
  const [detailMode, setDetailMode] = useState<"simple" | "extra">("simple");

  const textToCheck = useMemo(() => collectText(topic), [topic]);

  useEffect(() => {
    textToCheck.forEach((text) => {
      const lower = text.toLowerCase();
      bannedPhrases.forEach((phrase) => {
        if (lower.includes(phrase)) {
          console.warn(`ClarityCare content warning: banned phrase "${phrase}" found.`, text);
        }
      });
      checkSentences(text);
    });
  }, [textToCheck]);

  const showExtra = detailMode === "extra";

  return (
    <div className="pb-24">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{topic.title}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span>{topic.category}</span>
          <span aria-hidden="true">•</span>
          <span>Reading level: {topic.readingLevel}</span>
          <span aria-hidden="true">•</span>
          <span>~60 seconds</span>
        </div>
        <div className="mt-2 flex gap-2">
          <button
            type="button"
            onClick={() => setDetailMode("simple")}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              detailMode === "simple"
                ? "bg-clarity-blue text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Simple
          </button>
          <button
            type="button"
            onClick={() => setDetailMode("extra")}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              detailMode === "extra"
                ? "bg-clarity-blue text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Extra detail
          </button>
        </div>
      </div>

      <section className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">One-Minute Summary</h2>
        <p>{topic.oneMinuteSummary}</p>
        {showExtra && topic.extraDetail?.oneMinuteSummary ? (
          <p className="text-slate-700">{topic.extraDetail.oneMinuteSummary}</p>
        ) : null}
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <details className="space-y-3">
          <summary className="cursor-pointer text-xl font-semibold">ELI5 Summary</summary>
          <p>{topic.eli5Summary}</p>
          {showExtra && topic.extraDetail?.eli5Summary ? (
            <p className="text-slate-700">{topic.extraDetail.eli5Summary}</p>
          ) : null}
        </details>
      </section>

      <section className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What’s happening in your body</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          {topic.whatsHappening.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {showExtra && topic.extraDetail?.whatsHappening ? (
          <p className="text-slate-700">{topic.extraDetail.whatsHappening}</p>
        ) : null}
      </section>

      <section className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Analogy</h2>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-800">{topic.analogy.title}</h3>
          <p className="text-slate-700">{topic.analogy.story}</p>
        </div>
        {showExtra && topic.extraDetail?.analogy ? (
          <p className="text-slate-700">{topic.extraDetail.analogy}</p>
        ) : null}
      </section>

      <section className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">People often notice</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          {topic.peopleOftenNotice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {showExtra && topic.extraDetail?.peopleOftenNotice ? (
          <p className="text-slate-700">{topic.extraDetail.peopleOftenNotice}</p>
        ) : null}
      </section>

      <section className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">General supportive self-care education</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          {topic.generalSelfCare.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {showExtra && topic.extraDetail?.generalSelfCare ? (
          <p className="text-slate-700">{topic.extraDetail.generalSelfCare}</p>
        ) : null}
      </section>

      {topic.category === "Post-Diagnosis Companion" && topic.questionsForClinician ? (
        <section className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Questions for your clinician</h2>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            {topic.questionsForClinician.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {showExtra && topic.extraDetail?.questionsForClinician ? (
            <p className="text-slate-700">{topic.extraDetail.questionsForClinician}</p>
          ) : null}
        </section>
      ) : null}

      <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Visuals</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {topic.visuals.map((visual) => (
            <div key={visual.src} className="rounded-xl border border-slate-200 p-4">
              <img src={visual.src} alt={visual.alt} className="h-40 w-full object-contain" />
              <p className="mt-3 text-sm font-medium text-slate-700">{visual.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Videos</h2>
        <p className="text-sm text-slate-600">Educational resource.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {topic.videos.map((video) => (
            <div key={video.embedUrl} className="space-y-2">
              <h3 className="text-base font-semibold text-slate-800">{video.title}</h3>
              <div className="aspect-video overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  className="h-full w-full"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-slate-500">{video.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Resources</h2>
        <ul className="space-y-2">
          {topic.resources.map((resource) => (
            <li key={resource.url}>
              <a href={resource.url} target="_blank" rel="noreferrer">
                {resource.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500">Last reviewed: {topic.lastReviewed}</p>
      </section>

      <SafetyFooter />
    </div>
  );
}
