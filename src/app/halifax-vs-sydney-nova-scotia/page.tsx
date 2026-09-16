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

const path = "/halifax-vs-sydney-nova-scotia";

const faqs = [
  {
    question: "Do Canada & New England cruises visit both Halifax and Sydney?",
    answer:
      "Many itineraries call at one or both Nova Scotia ports. Round-trip Boston or New York cruises often include Halifax; some add Sydney (Cape Breton) on the same voyage.",
  },
  {
    question: "Which port is better for Peggy's Cove?",
    answer:
      "Halifax — Peggy's Cove is southwest of the capital. Sydney is on Cape Breton Island, roughly four hours' drive from Peggy's Cove.",
  },
  {
    question: "Which port suits Cabot Trail scenery?",
    answer:
      "Sydney is the gateway to Cape Breton Highlands and the Cabot Trail. Halifax is better for South Shore UNESCO towns and Titanic heritage.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Halifax vs Sydney Nova Scotia Cruise Ports",
  description:
    "Compare Halifax and Sydney NS cruise ports — which Nova Scotia stop fits Peggy's Cove, Cape Breton, Lunenburg, and your Canada & New England itinerary.",
  path,
});

export default function VsSydneyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Halifax vs Sydney Nova Scotia",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Halifax vs Sydney" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Halifax vs Sydney Nova Scotia" },
          ]}
        />
        <PageHero
          eyebrow="Nova Scotia comparison"
          title="Halifax vs Sydney, Nova Scotia"
          subtitle="Two Nova Scotia cruise ports on the same itinerary — different geography, different best excursions."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              If your sailing lists both ports, treat them as complementary — not
              duplicates. Book Peggy&apos;s Cove from Halifax and Cabot Trail experiences
              from Sydney.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="Halifax at a glance">
            <p>
              Nova Scotia&apos;s capital on the Atlantic side. Deep harbour, walkable
              waterfront, Citadel Hill, and highway access to Peggy&apos;s Cove, Lunenburg,
              and Titanic sites. Larger urban infrastructure and more tour operators.
            </p>
            <p>
              Best excursions:{" "}
              <Link href="/peggys-cove-shore-excursion/" className="text-blue-800 underline">
                Peggy&apos;s Cove
              </Link>
              ,{" "}
              <Link href="/titanic-halifax-shore-excursion/" className="text-blue-800 underline">
                Titanic heritage
              </Link>
              ,{" "}
              <Link href="/lunenburg-and-mahone-bay-tour/" className="text-blue-800 underline">
                Lunenburg
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Sydney at a glance">
            <p>
              Cape Breton Island&apos;s cruise gateway — smaller town feel, strong Celtic
              culture, and access to the Bras d&apos;Or Lake and Cabot Trail highlands.
              Not a substitute for Halifax&apos;s South Shore day trips.
            </p>
            <p>
              Best excursions: Cabot Trail segments, Fortress of Louisbourg (seasonal
              distance), Celtic music and coastal drives on Cape Breton.
            </p>
          </GuideSection>

          <GuideSection title="Side-by-side comparison">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-3 text-left">Factor</th>
                    <th className="p-3 text-left">Halifax</th>
                    <th className="p-3 text-left">Sydney NS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">Peggy&apos;s Cove</td>
                    <td className="p-3">~45–60 min by road</td>
                    <td className="p-3">Not practical same day</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Cabot Trail</td>
                    <td className="p-3">Too far</td>
                    <td className="p-3">Gateway access</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Walkable waterfront</td>
                    <td className="p-3">Excellent</td>
                    <td className="p-3">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Titanic heritage</td>
                    <td className="p-3">Major focus</td>
                    <td className="p-3">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
