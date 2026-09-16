import Link from "next/link";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/site";
import { excursionLinks, guideLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed">
            Independent shore excursion guidance for cruise passengers visiting
            Halifax, Nova Scotia — Peggy&apos;s Cove, Titanic heritage, maritime
            museums, and Canada &amp; New England port planning.
          </p>
          <Link
            href="/enquire/"
            className="mt-4 inline-block text-sm font-semibold text-amber-300 hover:text-amber-200"
          >
            Enquire about excursions →
          </Link>
          <p className="mt-3 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-amber-300 hover:text-amber-200"
            >
              {CONTACT_EMAIL}
            </a>
          </p>

        </div>
        <div>
          <p className="font-semibold text-white">Port &amp; planning guides</p>
          <ul className="mt-3 space-y-2 text-sm">
            {guideLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Popular excursions</p>
          <ul className="mt-3 space-y-2 text-sm">
            {excursionLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
<div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>halifaxshoreexcursions.com · Halifax Harbour · Nova Scotia, Canada</p>
        </div>
      </div>
    </footer>
  );
}
