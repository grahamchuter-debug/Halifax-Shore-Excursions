import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/best-halifax-shore-excursions";

const faqs = [
  {
    question: "What is the single best Halifax shore excursion?",
    answer:
      "For most first-time visitors, Peggy's Cove balances iconic scenery with realistic timing. History-focused guests often prefer Titanic cemetery and museum combinations.",
  },
  {
    question: "Should I book through the cruise line or independently?",
    answer:
      "Cruise-line tours guarantee ship waits if delayed. Reputable independent operators also structure around port schedules — enquire with your all-aboard time and confirm policies.",
  },
  {
    question: "What should I avoid on a short port day?",
    answer:
      "Bay of Fundy day trips from Halifax and Lunenburg on calls under eight hours carry the highest missed-ship risk.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Halifax Shore Excursions for Cruise Passengers",
  description:
    "Best Halifax shore excursions for cruise passengers, ranked by port time and return-to-ship confidence — Peggy's Cove, Titanic tours, city highlights, and Lunenburg.",
  path,
});

export default function BestExcursionsPage() {
  const ranked = [...excursions].sort((a, b) => {
    const order = { High: 0, Moderate: 1, Tight: 2 };
    return order[a.returnConfidence] - order[b.returnConfidence];
  });

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Halifax Shore Excursions for Cruise Passengers",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Halifax Shore Excursions" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Halifax Shore Excursions" },
          ]}
        />
        <PageHero
          eyebrow="Curated for cruise passengers"
          title="Best Halifax shore excursions"
          subtitle="Ranked by return-to-ship confidence, typical port-day fit, and what Canada & New England passengers ask for most."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout />

          <GuideSection title="How we rank excursions">
            <p>
              Halifax offers more than a dozen bookable products on any given port day.
              We prioritise tours that (1) fit typical six-to-nine-hour calls, (2)
              minimise unnecessary transfer time from your berth, and (3) deliver
              experiences you cannot replicate at other Canada & New England ports.
            </p>
          </GuideSection>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Excursion rankings
            </h2>
            <ol className="mt-6 space-y-6">
              {ranked.map((excursion, index) => (
                <li
                  key={excursion.slug}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-semibold text-blue-800">
                    #{index + 1} · {excursion.returnConfidence} return confidence
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    <Link href={excursion.path} className="hover:text-blue-800">
                      {excursion.shortTitle}
                    </Link>
                  </h3>
                  <p className="mt-2 text-slate-700">{excursion.summary}</p>
                  <p className="mt-3 text-sm text-slate-500">
                    {excursion.duration} · {excursion.fitness} fitness
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <GuideSection title="Quick picks by port length">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>4–5 hours:</strong>{" "}
                <Link href="/maritime-museum-and-waterfront-tour/" className="text-blue-800 underline">
                  Maritime Museum &amp; waterfront
                </Link>
                ,{" "}
                <Link href="/halifax-brewery-and-food-tour/" className="text-blue-800 underline">
                  brewery &amp; food
                </Link>
              </li>
              <li>
                <strong>6–7 hours:</strong>{" "}
                <Link href="/peggys-cove-shore-excursion/" className="text-blue-800 underline">
                  Peggy&apos;s Cove
                </Link>
                ,{" "}
                <Link href="/titanic-halifax-shore-excursion/" className="text-blue-800 underline">
                  Titanic history
                </Link>
              </li>
              <li>
                <strong>8+ hours:</strong>{" "}
                <Link href="/lunenburg-and-mahone-bay-tour/" className="text-blue-800 underline">
                  Lunenburg &amp; Mahone Bay
                </Link>
              </li>
              <li>
                <strong>10+ hours only:</strong>{" "}
                <Link href="/bay-of-fundy-from-halifax/" className="text-blue-800 underline">
                  Bay of Fundy
                </Link>{" "}
                — scrutinise timing carefully
              </li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock />
          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
