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

const path = "/faq";

const faqs = [
  {
    question: "What is the must-do excursion in Halifax?",
    answer:
      "Most first-time visitors choose Peggy's Cove for coastal scenery. Titanic heritage tours are the standout alternative for history-focused guests.",
  },
  {
    question: "How far is Peggy's Cove from the cruise terminal?",
    answer:
      "About 45 km — roughly 45–60 minutes by coach each way. Not walkable from the pier.",
  },
  {
    question: "Is Halifax safe for cruise passengers?",
    answer:
      "Halifax is a welcoming port city. Use normal urban awareness downtown; follow guide instructions on coastal rocks at Peggy's Cove.",
  },
  {
    question: "What currency do I need?",
    answer:
      "Canadian dollars. Cards widely accepted; small cash useful for tips and market stalls.",
  },
  {
    question: "Can I visit the Bay of Fundy on a cruise day?",
    answer:
      "Only on unusually long port calls with tide-aligned tours. Most passengers should choose closer options — see our Bay of Fundy guide.",
  },
  {
    question: "Do I need a visa for Halifax?",
    answer:
      "US citizens and many international cruise guests enter under visa-waiver or eTA rules when arriving by ship — verify with your cruise line and Immigration, Refugees and Citizenship Canada for your nationality.",
  },
  {
    question: "How do I enquire about excursions?",
    answer:
      "Use our enquiry form with ship name, port date, hours ashore, and interests. We respond with options matched to your schedule.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Halifax Shore Excursions FAQ",
  description:
    "Frequently asked questions about Halifax shore excursions, cruise port logistics, Peggy's Cove timing, Titanic tours, and return-to-ship planning.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Halifax Shore Excursions FAQ",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          eyebrow="Common questions"
          title="Halifax shore excursions FAQ"
          subtitle="Port logistics, excursion choices, and return-to-ship planning for Canada & New England cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout />

          <GuideSection title="Quick links">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/halifax-cruise-port-guide" className="text-blue-800 underline">
                  Halifax cruise port guide
                </Link>
              </li>
              <li>
                <Link href="/best-halifax-shore-excursions" className="text-blue-800 underline">
                  Best shore excursions
                </Link>
              </li>
              <li>
                <Link href="/cruise-planner" className="text-blue-800 underline">
                  Cruise planner
                </Link>
              </li>
              <li>
                <Link href="/enquire" className="text-blue-800 underline">
                  Book or enquire
                </Link>
              </li>
            </ul>
          </GuideSection>

          <FAQSection faqs={faqs} title="All questions" />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
