import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/enquire";

export const metadata: Metadata = pageMetadata({
  title: "Book or Enquire — Halifax Shore Excursions",
  description:
    "Enquire about Halifax shore excursions — share your cruise ship, port hours, and interests. Enquiry-only, no online checkout.",
  path,
});

export default function EnquirePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Enquire",
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
          title="Book or enquire"
          subtitle="No prices displayed — share your Halifax port details and we will recommend excursions that fit your schedule."
        />

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
