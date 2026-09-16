import type { Metadata } from "next";
import { createExcursionPage } from "@/lib/excursion-page";
import { absoluteUrl, pageMetadata } from "@/lib/site";

const { Page } = createExcursionPage("halifax-city-tour");

const baseMeta = pageMetadata({
  title: "Halifax City Tour from the Cruise Port — Citadel & Waterfront",
  description:
    "Halifax city tour from the cruise port: Citadel Hill, downtown waterfront, Public Gardens, and harbour highlights timed for cruise passengers.",
  path: "/halifax-city-tour",
});

export const metadata: Metadata = {
  ...baseMeta,
  openGraph: {
    ...baseMeta.openGraph,
    images: [
      {
        url: absoluteUrl("/images/halifax-city-tour-hero.png"),
        alt: "Aerial view of Halifax harbour with cruise ship docked at the waterfront",
      },
    ],
  },
};

export default Page;
