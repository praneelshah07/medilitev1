import { Suspense } from "react";
import TopicsClient from "./TopicsClient";

export default function TopicsPage() {
  return (
    <Suspense fallback={<div className="text-sm text-slate-600">Loading topics…</div>}>
      <TopicsClient />
    </Suspense>
  );
}
