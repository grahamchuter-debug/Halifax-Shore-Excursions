export const SITE_NAME = "Halifax Shore Excursions";
export const SITE_URL = "https://halifaxshoreexcursions.com";
export const SITE_DESCRIPTION =
  "Independent shore excursion guides for cruise passengers visiting Halifax, Nova Scotia — Peggy's Cove, Titanic heritage, maritime museums, Lunenburg, and Canada & New England port planning.";

export const CONTACT_EMAIL = `hello@${SITE_URL.replace("https://", "")}`;

export function absoluteUrl(path: string): string {
  const raw = path.startsWith("/") ? path : `/${path}`;
  // Asset / file URLs keep their extension; page URLs use trailing slash.
  if (/\.[a-zA-Z0-9]{1,8}$/.test(raw)) {
    return `${SITE_URL}${raw}`;
  }
  if (raw === "/") return `${SITE_URL}/`;
  const normalized = raw.endsWith("/") ? raw : `${raw}/`;
  return `${SITE_URL}${normalized}`;
}

export function pageTitle(title: string): string {
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle(title),
      description,
      url,
      type: "website" as const,
      siteName: SITE_NAME,
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
    },
  };
}
