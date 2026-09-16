import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  CruisePassengerSnapshot,
} from "@/components/CruisePassengerSnapshot";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/site";

const path = "/halifax-cruise-port-guide";

const portHeroAlt =
  "Cruise ship docked at the Halifax waterfront pier with passengers on the boardwalk";

const faqs = [
  {
    question: "Where do cruise ships dock in Halifax?",
    answer:
      "Most ships use Halifax Seaport (Piers 20–24) beside the waterfront, or the larger Pier 20–22 complex. Smaller vessels occasionally berth at other harbour locations — check your cruise line's daily planner.",
  },
  {
    question: "Can I walk to downtown from the cruise terminal?",
    answer:
      "From Halifax Seaport berths, the waterfront boardwalk and Maritime Museum are often 5–15 minutes on foot. Pier 20–22 may involve a slightly longer walk or a cruise-line shuttle to the main waterfront.",
  },
  {
    question: "How long do ships stay in Halifax?",
    answer:
      "Typical Canada & New England calls allow six to nine hours ashore. Some itineraries include overnight or late departures — always confirm your all-aboard time.",
  },
  {
    question: "What currency is used in Halifax?",
    answer:
      "Canadian dollars (CAD). Cards are widely accepted; carry some cash for small vendors and tips.",
  },
];

const portMeta = pageMetadata({
  title: "Halifax Cruise Port Guide",
  description:
    "Complete guide to the Halifax cruise port — where ships dock, walking distances, taxis, weather, waterfront access, and best excursions for cruise passengers.",
  path,
});

export const metadata: Metadata = {
  ...portMeta,
  openGraph: {
    ...portMeta.openGraph,
    images: [{ url: absoluteUrl("/images/halifax-cruise-port.png"), alt: portHeroAlt }],
  },
};

export default function PortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Halifax Cruise Port Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Halifax Cruise Port Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Halifax Cruise Port Guide" }]}
        />
        <PageHero
          eyebrow="Port guide"
          title="Halifax cruise port guide"
          subtitle="Where ships dock, how to reach the waterfront and city centre, and how to plan excursions from Nova Scotia's capital."
          imageSrc="/images/halifax-cruise-port.png"
          imageAlt={portHeroAlt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Halifax combines a deep natural harbour with a compact downtown — but signature excursions like Peggy's Cove still require coach time. Know your berth before you book."
          />

          <GuideSection title="Where ships dock">
            <p>
              Halifax Harbour is one of the finest ice-free ports in the North Atlantic.
              Cruise ships typically berth at{" "}
              <strong>Halifax Seaport</strong> along Lower Water Street, placing you
              beside the Maritime Museum of the Atlantic, Historic Properties, and the
              boardwalk. Larger vessels may use <strong>Pier 20–22</strong> nearby —
              still central, but confirm whether your line runs a shuttle to the main
              waterfront cluster.
            </p>
            <p>
              You are not at Peggy&apos;s Cove or Lunenburg when you step off the
              gangway. Those experiences require highway transfers of 45 minutes to
              two hours depending on destination.
            </p>
          </GuideSection>

          <GuideSection title="Walking from the terminal">
            <p>
              From Seaport berths, passengers can often walk to Citadel Hill in 20–25
              minutes uphill, or explore the flat waterfront immediately. Taxis and
              rideshare queue at peak disembarkation; fares to Citadel or Public
              Gardens are modest compared with full-day coach tours.
            </p>
            <p>
              If mobility is limited, consider hop-on hop-off services or a short city
              highlights tour that includes hill viewpoints without sustained climbing.
            </p>
          </GuideSection>

          <GuideSection title="Waterfront and city centre">
            <p>
              The harbour boardwalk links museums, Pier 21, the Canadian Naval
              Memorial, and seasonal food vendors. Spring through autumn, harbour
              ferries connect to Dartmouth across the water — a inexpensive scenic ride
              if timing allows.
            </p>
            <p>
              Barrington Street and Spring Garden Road anchor shopping and dining north
              of the water. Alexander Keith&apos;s brewery and the Public Gardens sit
              within the urban peninsula most cruise guests explore on foot or short
              taxi rides.
            </p>
          </GuideSection>

          <GuideSection title="Taxis and local transport">
            <p>
              Taxis are regulated and metered at the cruise terminal during port days.
              Rideshare operates in Halifax. For Peggy&apos;s Cove or Lunenburg,
              organised shore excursions almost always beat independent taxi economics
              — round-trip fares add up and return availability at remote sites is not
              guaranteed.
            </p>
          </GuideSection>

          <GuideSection title="Weather and what to pack">
            <p>
              Atlantic weather shifts quickly. Layers, a waterproof jacket, and
              comfortable walking shoes suit most port days. Summer highs are mild;
              shoulder seasons (May, October) need warmer mid-layers. Fog is common and
              can enhance lighthouse photography when it lifts.
            </p>
          </GuideSection>

          <GuideSection title="Best excursions from Halifax">
            <p>
              First-time visitors usually prioritise{" "}
              <Link href="/peggys-cove-shore-excursion/" className="text-blue-800 underline">
                Peggy&apos;s Cove
              </Link>
              ,{" "}
              <Link href="/titanic-halifax-shore-excursion/" className="text-blue-800 underline">
                Titanic heritage
              </Link>
              , or a{" "}
              <Link href="/halifax-city-tour/" className="text-blue-800 underline">
                city highlights
              </Link>{" "}
              tour. Longer port days open{" "}
              <Link href="/lunenburg-and-mahone-bay-tour/" className="text-blue-800 underline">
                Lunenburg
              </Link>
              . See our{" "}
              <Link href="/best-halifax-shore-excursions/" className="text-blue-800 underline">
                best excursions
              </Link>{" "}
              ranking for return-to-ship confidence by tour type.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <ExcursionLinks title="Excursions from this port" />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
