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

const path = "/things-to-do-in-halifax-from-a-cruise-ship";

const faqs = [
  {
    question: "Can I see Halifax without booking a tour?",
    answer:
      "Yes — waterfront museums, boardwalk dining, and Citadel Hill are reachable on foot from many berths. Peggy's Cove and Lunenburg need transport.",
  },
  {
    question: "What is free near the cruise terminal?",
    answer:
      "Harbour boardwalk strolling, harbour views, and some public spaces. Museums and Citadel charge admission.",
  },
  {
    question: "Is Halifax good for food-focused port days?",
    answer:
      "Excellent — seafood, farmers' markets, and brewery tours suit shorter calls without highway travel.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Things To Do In Halifax From A Cruise Ship",
  description:
    "Things to do in Halifax from a cruise ship — waterfront walks, museums, Peggy's Cove, Titanic sites, food tours, and how to plan your port day.",
  path,
});

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Things To Do In Halifax From A Cruise Ship",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Things To Do" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Things To Do From A Cruise Ship" },
          ]}
        />
        <PageHero
          eyebrow="Port day ideas"
          title="Things to do in Halifax from a cruise ship"
          subtitle="Waterfront culture, coastal day trips, Titanic heritage, and Nova Scotia flavours — matched to how long you are in port."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout />

          <GuideSection title="Stay near the ship (4–5 hours)">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/maritime-museum-and-waterfront-tour/" className="text-blue-800 underline">
                  Maritime Museum &amp; waterfront boardwalk
                </Link>
              </li>
              <li>
                <Link href="/halifax-brewery-and-food-tour/" className="text-blue-800 underline">
                  Brewery and seafood tastings downtown
                </Link>
              </li>
              <li>
                <Link href="/halifax-city-tour/" className="text-blue-800 underline">
                  Citadel Hill and Public Gardens
                </Link>
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Half-day adventures (5–7 hours)">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/peggys-cove-shore-excursion/" className="text-blue-800 underline">
                  Peggy&apos;s Cove lighthouse and coastal village
                </Link>
              </li>
              <li>
                <Link href="/titanic-halifax-shore-excursion/" className="text-blue-800 underline">
                  Titanic cemetery and maritime museum
                </Link>
              </li>
              <li>
                <Link href="/halifax-coastal-scenery-tour/" className="text-blue-800 underline">
                  Coastal headlands and photography stops
                </Link>
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Full-day commitments (8+ hours)">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/lunenburg-and-mahone-bay-tour/" className="text-blue-800 underline">
                  UNESCO Lunenburg and Mahone Bay churches
                </Link>
              </li>
              <li>
                Combo tours pairing Peggy&apos;s Cove with a condensed city overview
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Usually skip on standard port days">
            <p>
              <Link href="/bay-of-fundy-from-halifax/" className="text-blue-800 underline">
                Bay of Fundy
              </Link>{" "}
              from Halifax — driving time overwhelms typical cruise windows. See our
              dedicated guide for honest timing analysis.
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
