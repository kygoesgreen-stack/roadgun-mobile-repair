// Real customer reviews only. Never invent or paraphrase one.
// The Reviews section renders only when this array has entries.
// No aggregateRating or Review markup: Google ignores self-serving reviews on
// a business's own site, so these are for visitors, not rich results.
//
// Ky: paste the 4 new Google Business Profile reviews below, copied word for
// word. Use the reviewer's first name (plus last initial if they show one),
// and the month they posted, e.g. { name: "Sarah K.", text: "...", month: "August 2026" }.
// Add stars: 4 (etc.) if a review is not five stars.

export type Review = {
  name: string;
  text: string;
  /** Month the review was posted, e.g. "August 2026". */
  month?: string;
  /** Star rating from the review. Defaults to 5. */
  stars?: number;
};

export const reviews: Review[] = [
  // Paste new GBP reviews here, newest first.

  {
    name: "Matthew Bennett",
    text: "Travis goes above and beyond fixing all my equipment and keeping it operational. Highly recommend and used his services on multiple different occasions.",
  },
  {
    name: "Eric Coleman",
    text: "Travis has helped me literally bring my vehicle back to life over the past 6-12 months and the service has hands down been nothing but the best. If you need a knowledgeable and willing mechanic please give him a chance to earn your trust as well.",
  },
];
