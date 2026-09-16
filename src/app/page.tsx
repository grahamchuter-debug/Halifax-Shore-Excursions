import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { excursions } from "@/lib/excursions";
import { absoluteUrl, pageMetadata } from "@/lib/site";

const heroAlt =
  "Aerial view of Halifax harbour with a cruise ship at the downtown waterfront";

const homeMeta = pageMetadata({
  title: "Halifax Shore Excursions & Port Guide",
  description:
    "Plan shore excursions from Halifax, Nova Scotia — Peggy's Cove, Titanic heritage, maritime museums, Lunenburg, and Canada & New England cruise port guides.",
  path: "/",
});

export const metadata: Metadata = {
  ...homeMeta,
  openGraph: {
    ...homeMeta.openGraph,
    images: [{ url: absoluteUrl("/images/halifax-city-tour-hero.png"), alt: heroAlt }],
  },
};

export default function HomePage() {
  const featured = excursions.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:min-h-[32rem]">
          <div className="relative flex flex-col justify-center px-4 py-14 md:py-20 lg:py-24">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900 lg:to-transparent"
              aria-hidden
            />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
                Halifax, Nova Scotia · Canada &amp; New England
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Shore excursions for Halifax cruise passengers
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-200">
                Peggy&apos;s Cove lighthouses, Titanic heritage, maritime museums, and
                South Shore day trips — independent guidance with clear return-to-ship
                advice for every port day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/excursions/"
                  className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
                >
                  Browse excursions
                </Link>
                <Link
                  href="/halifax-cruise-port-guide/"
                  className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold hover:border-white"
                >
                  Halifax port guide
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-full lg:order-last">
            <Image
              src="/images/halifax-city-tour-hero.png"
              alt={heroAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-slate-900/90 lg:via-slate-900/25 lg:to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-semibold text-amber-950">
            Plan around your hours ashore
          </h2>
          <p className="mt-2 text-amber-950/80 leading-relaxed">
            Peggy&apos;s Cove fits most standard port days; Lunenburg needs longer
            calls; Bay of Fundy trips from Halifax are often too ambitious. Read our{" "}
            <Link href="/best-halifax-shore-excursions/" className="font-semibold underline">
              best excursions guide
            </Link>{" "}
            and{" "}
            <Link href="/cruise-planner/" className="font-semibold underline">
              cruise planner
            </Link>{" "}
            before you book.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Popular excursions</h2>
          <Link href="/excursions/" className="text-sm font-semibold text-blue-800">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/best-halifax-shore-excursions/",
                label: "Best Halifax excursions",
                desc: "Ranked by port time and return confidence",
              },
              {
                href: "/peggys-cove-shore-excursion/",
                label: "Peggy's Cove guide",
                desc: "Timing, crowds, and photography tips",
              },
              {
                href: "/titanic-halifax-shore-excursion/",
                label: "Titanic Halifax guide",
                desc: "Cemetery, museum, and respectful visits",
              },
              {
                href: "/things-to-do-in-halifax-from-a-cruise-ship/",
                label: "Things to do",
                desc: "Waterfront, food, and culture ashore",
              },
              {
                href: "/halifax-vs-sydney-nova-scotia/",
                label: "Halifax vs Sydney NS",
                desc: "Which Nova Scotia port suits your itinerary",
              },
              {
                href: "/faq/",
                label: "FAQ",
                desc: "Port, timing, and booking answers",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl bg-slate-900 px-8 py-10 text-white text-center">
          <h2 className="text-2xl font-bold">Need help choosing?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Enquiry-only — tell us your ship schedule and we&apos;ll recommend Halifax
            excursions with realistic return timing.
          </p>
          <Link
            href="/enquire/"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
          >
            Ask about availability
          </Link>
        </div>
      </section>
    </div>
  );
}
