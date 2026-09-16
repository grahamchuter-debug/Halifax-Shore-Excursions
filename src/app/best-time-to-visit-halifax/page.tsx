import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/best-time-to-visit-halifax";

const faqs = [
  {
    question: "What is the best month for Halifax cruise passengers?",
    answer:
      "September balances mild weather, fall colour, and full excursion availability. July–August are warmest but busiest at Peggy's Cove.",
  },
  {
    question: "Is Halifax cold in May?",
    answer:
      "Cool and variable — highs often 10–15°C. Layers essential; fog and rain possible.",
  },
  {
    question: "When do fall foliage cruises visit Halifax?",
    answer:
      "Peak colour often lands mid-October, though exact timing varies annually. Late September calls frequently catch early colour.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Time To Visit Halifax",
  description:
    "Best time to visit Halifax on a cruise — weather by month, Peggy's Cove crowds, fall foliage, and Canada & New England season tips.",
  path,
});

export default function BestTimePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Time To Visit Halifax",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Time To Visit" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Time To Visit Halifax" },
          ]}
        />
        <PageHero
          eyebrow="Seasonal guide"
          title="Best time to visit Halifax"
          subtitle="Weather, crowds, and excursion conditions across the Canada & New England cruise calendar."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout />

          <GuideSection title="May – June">
            <p>
              Spring calls mean cooler air and sea temperatures but thinner crowds at
              Peggy&apos;s Cove. Gardens begin blooming in June; some fog and rain —
              pack waterproof layers.
            </p>
          </GuideSection>

          <GuideSection title="July – August">
            <p>
              Warmest months and peak tourism. Excursion availability is highest but
              lighthouse viewpoints feel busiest between 10:00 and 15:00. Book popular
              tours early.
            </p>
          </GuideSection>

          <GuideSection title="September – October">
            <p>
              Many experienced cruisers prefer September: comfortable walking weather,
              harvest-season food, and approaching fall colour in Point Pleasant Park
              and the South Shore. October foliage cruises are iconic but weather turns
              cooler and wetter.
            </p>
          </GuideSection>

          <GuideSection title="Matching season to excursions">
            <p>
              Coastal photography favours shoulder-season light and smaller crowds.{" "}
              <Link href="/peggys-cove-shore-excursion/" className="text-blue-800 underline">
                Peggy&apos;s Cove
              </Link>{" "}
              suits any month with proper clothing.{" "}
              <Link href="/maritime-museum-and-waterfront-tour/" className="text-blue-800 underline">
                Museum-focused days
              </Link>{" "}
              shine when rain appears on the forecast.
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
