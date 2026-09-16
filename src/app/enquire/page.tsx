import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

const path = "/enquire";

export const metadata: Metadata = pageMetadata({
  title: "Enquire About Halifax Shore Excursions",
  description:
    "Ask about Halifax shore excursion availability — email your cruise ship, port hours, and interests. Enquiry-only; no online checkout or instant booking.",
  path,
});

export default function EnquirePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Enquire About Halifax Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Enquire" }]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Enquire" }]} />
        <PageHero
          eyebrow="Enquiry only"
          title="Enquire about Halifax shore excursions"
          subtitle="No online checkout — email us with your port details and we will reply with options that fit your schedule."
        />

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-sm text-slate-700">
            Prefer to email directly?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Halifax shore excursion enquiry")}`}
              className="font-semibold text-blue-800 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <CruisePassengerCallout>
              <p>
                Include your cruise line, ship name, port date, all-aboard time, and
                berth if known (Halifax Seaport vs Pier 20–22).
              </p>
            </CruisePassengerCallout>
            <ReturnToShipBlock confidence="High" />
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <EnquiryForm />
            </div>
          </div>
          <div>
            <ExcursionLinks title="Popular enquiries" />
          </div>
        </div>
      </div>
    </>
  );
}
