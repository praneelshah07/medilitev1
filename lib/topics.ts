import topicsData from "@/data/topics.json";

export type TopicCategory = "Everyday Symptoms" | "Post-Diagnosis Companion";

export type TopicVisual = {
  type: "diagram" | "illustration";
  title: string;
  alt: string;
  src: string;
};

export type TopicVideo = {
  title: string;
  provider: string;
  embedUrl: string;
  note: string;
};

export type TopicResource = {
  label: string;
  url: string;
};

export type TopicAnalogy = {
  title: string;
  story: string;
};

export type TopicExtraDetail = {
  oneMinuteSummary?: string;
  eli5Summary?: string;
  whatsHappening?: string;
  analogy?: string;
  peopleOftenNotice?: string;
  generalSelfCare?: string;
  questionsForClinician?: string;
};

export type Topic = {
  slug: string;
  title: string;
  category: TopicCategory;
  readingLevel: "simple";
  oneMinuteSummary: string;
  eli5Summary: string;
  whatsHappening: string[];
  analogy: TopicAnalogy;
  peopleOftenNotice: string[];
  generalSelfCare: string[];
  questionsForClinician?: string[];
  visuals: TopicVisual[];
  videos: TopicVideo[];
  resources: TopicResource[];
  lastReviewed: string;
  extraDetail?: TopicExtraDetail;
};

export const topics = topicsData as Topic[];

export const categories: TopicCategory[] = [
  "Everyday Symptoms",
  "Post-Diagnosis Companion",
];

export function getTopicBySlug(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
