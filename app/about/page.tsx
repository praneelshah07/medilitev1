import { topics } from "@/lib/topics";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">About ClarityCare</h1>
        <p className="mt-2 text-slate-700">
          ClarityCare is an education-only platform that explains symptoms and
          post-diagnosis topics in simple language.
        </p>
      </header>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What this tool is</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>Quick, plain-language explanations.</li>
          <li>Short analogies to make ideas easier to remember.</li>
          <li>Helpful questions you can bring to a clinician.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What this tool is NOT</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>No diagnosis or guesses about what you have.</li>
          <li>No urgency or triage advice.</li>
          <li>No medication or dosing guidance.</li>
          <li>No personalized medical advice.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Editorial process</h2>
        <p className="text-slate-700">
          Content is student-written, then reviewed for clarity and safety using
          a conservative, non-diagnostic checklist. This MVP uses placeholder
          review notes while the full process is being built.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Versioning</h2>
        <p className="text-slate-700">Last reviewed dates by topic:</p>
        <ul className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {topics.map((topic) => (
            <li key={topic.slug} className="flex justify-between gap-3">
              <span>{topic.title}</span>
              <span>{topic.lastReviewed}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
