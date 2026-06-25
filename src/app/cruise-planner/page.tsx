import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { CruisePlanner } from "@/components/CruisePlanner";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/cruise-planner";

export const metadata: Metadata = pageMetadata({
  title: "Halifax Cruise Planner",
  description:
    "Match Halifax shore excursions to your hours in port — interactive planner for Canada & New England cruise passengers.",
  path,
});

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Halifax Cruise Planner",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Cruise Planner" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Cruise Planner" }]}
        />
        <PageHero
          eyebrow="Plan your port day"
          title="Halifax cruise planner"
          subtitle="Select your hours ashore and see which excursions fit with realistic transfer and return timing."
        />

        <div className="mt-10 space-y-8">
          <CruisePassengerCallout />
          <ReturnToShipBlock />
          <CruisePlanner />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
