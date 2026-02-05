# ClarityCare

ClarityCare is a simple, education-only health topic library. It explains common symptoms and post-diagnosis topics in plain language and avoids diagnosis, triage, or treatment instructions.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All topics live in `data/topics.json`. Each topic contains:
- A one-minute summary
- An ELI5 summary
- Body explanation, analogy, and common experiences
- General supportive self-care education (no meds)
- Questions for a clinician (post-diagnosis only)
- Visuals, videos, and resources

## Add visuals

Place SVG or PNG files in `public/images` and reference them in `data/topics.json` under the `visuals` array.

## Safety reminder

Keep content conservative and non-diagnostic. Do not add triage guidance, medication instructions, or personalized medical advice.
