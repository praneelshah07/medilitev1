export default function DisclaimerPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Full Disclaimer</h1>
        <p className="mt-2 text-slate-700">
          Education only. Not medical advice. This tool does not assess urgency
          or replace professional care.
        </p>
      </header>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What ClarityCare does</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>Explains health topics in simple, general terms.</li>
          <li>Offers non-prescriptive, supportive education.</li>
          <li>Links to reputable sources for deeper reading.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What ClarityCare does NOT do</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>No diagnosis, triage, or urgency guidance.</li>
          <li>No medication, dosing, or treatment instructions.</li>
          <li>No personalized medical advice.</li>
          <li>No follow-up questions that simulate medical assessment.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Use at your own discretion</h2>
        <p className="text-slate-700">
          ClarityCare provides education for general understanding only. You are
          responsible for decisions about your health. If you have questions
          about your personal situation, talk with a licensed clinician.
        </p>
      </section>
    </div>
  );
}
