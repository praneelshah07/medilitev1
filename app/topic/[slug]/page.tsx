import { notFound } from "next/navigation";
import { getTopicBySlug } from "@/lib/topics";
import TopicDetail from "@/components/TopicDetail";

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  return <TopicDetail topic={topic} />;
}
