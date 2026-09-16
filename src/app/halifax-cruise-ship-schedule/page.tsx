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

const path = "/halifax-cruise-ship-schedule";

const faqs = [
  {
    question: "When is Halifax cruise season?",
    answer:
      "Most Canada & New England calls run May through October, peaking September for fall foliage. A few repositioning calls appear in late April or early November.",
  },
  {
    question: "Where can I find my ship's Halifax arrival time?",
    answer:
      "Your cruise line's app or daily planner lists scheduled arrival, all-aboard, and departure. Times can shift with weather and harbour traffic.",
  },
  {
    question: "Does Halifax host multiple ships per day?",
    answer:
      "Yes — busy summer days can see two or more large vessels. Popular excursions book early on those dates.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Halifax Cruise Ship Schedule — Season & Port-Day Planning",
  description:
    "Halifax cruise ship schedule guidance for cruise passengers: Canada & New England season timing, typical port hours, and excursion planning. Editorial overview — not a live arrival board; verify times in your cruise line app.",
  path,
});

export default function SchedulePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Halifax Cruise Ship Schedule — Season & Port-Day Planning",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Cruise Ship Schedule" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Halifax Cruise Ship Schedule" },
          ]}
        />
        <PageHero
          eyebrow="Season & port-day planning"
          title="Halifax cruise ship schedule"
          subtitle="Editorial guidance on when ships call at Halifax, typical hours ashore, and how to plan excursions — not a live ship-arrival board."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              Always verify times in your cruise line app — published schedules are
              targets, not guarantees. Build excursion choices around all-aboard, not
              published departure.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="Canada & New England season">
            <p>
              Halifax anchors the Canadian leg of many Boston, New York, and Montreal
              itineraries. Peak volume runs July through September when schools are out
              and foliage approaches. May and June offer cooler weather and fewer crowds
              at Peggy&apos;s Cove; October calls chase autumn colour in the city parks
              and along the South Shore.
            </p>
          </GuideSection>

          <GuideSection title="Typical port hours">
            <p>
              Most full-day calls provide roughly six to nine hours between gangway
              opening and all-aboard. Some lines offer late stays or overnights —
              opening Lunenburg or evening brewery tours that daytime-only calls cannot
              fit.
            </p>
            <p>
              Use our{" "}
              <Link href="/cruise-planner/" className="text-blue-800 underline">
                cruise planner
              </Link>{" "}
              once you know your hours ashore.
            </p>
          </GuideSection>

          <GuideSection title="Major cruise lines calling Halifax">
            <p>
              Holland America, Princess, Royal Caribbean, Norwegian, Celebrity, and
              MSC regularly include Halifax on Canada & New England sailings. Luxury
              lines such as Cunard and Viking also call. Ship size determines berth —
              larger vessels use Pier 20–22; others often tie up at Seaport.
            </p>
          </GuideSection>

          <GuideSection title="Planning around busy days">
            <p>
              When two mega-ships dock together, coach traffic to Peggy&apos;s Cove and
              downtown congestion increase. Earlier independent departures or small-group
              tours can outperform large-bus products on those dates.
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
