"use client";

import { useState } from "react";
import Link from "next/link";
import { excursions } from "@/lib/excursions";

type Hours = "4" | "5" | "6" | "8" | "10";

const recommendations: Record<Hours, string[]> = {
  "4": [
    "maritime-museum-and-waterfront-tour",
    "halifax-city-tour",
    "halifax-brewery-and-food-tour",
  ],
  "5": [
    "halifax-city-tour",
    "titanic-halifax-shore-excursion",
    "halifax-coastal-scenery-tour",
  ],
  "6": [
    "peggys-cove-shore-excursion",
    "titanic-halifax-shore-excursion",
    "halifax-coastal-scenery-tour",
  ],
  "8": [
    "peggys-cove-shore-excursion",
    "lunenburg-and-mahone-bay-tour",
    "titanic-halifax-shore-excursion",
  ],
  "10": [
    "lunenburg-and-mahone-bay-tour",
    "bay-of-fundy-from-halifax",
    "peggys-cove-shore-excursion",
  ],
};

export function CruisePlanner() {
  const [hours, setHours] = useState<Hours | "">("");

  const matches =
    hours !== ""
      ? recommendations[hours]
          .map((slug) => excursions.find((e) => e.slug === slug))
          .filter((e): e is (typeof excursions)[number] => e !== undefined)
      : [];

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            How many hours do you have ashore in Halifax?
          </span>
          <select
            value={hours}
            onChange={(e) => setHours(e.target.value as Hours | "")}
            className="mt-2 w-full max-w-md rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="">Select port time…</option>
            <option value="4">About 4 hours</option>
            <option value="5">About 5 hours</option>
            <option value="6">About 6 hours</option>
            <option value="8">8+ hours</option>
            <option value="10">10+ hours</option>
          </select>
        </label>
        {hours === "4" && (
          <p className="mt-4 text-sm text-amber-800 bg-amber-50 rounded-lg p-3">
            Short turnaround — stay near the waterfront. Avoid Peggy&apos;s Cove and
            Lunenburg unless your tour guarantees an unusually early return.
          </p>
        )}
        {hours === "10" && (
          <p className="mt-4 text-sm text-blue-800 bg-blue-50 rounded-lg p-3">
            Extended day — Lunenburg or a carefully timed Fundy product may work.
            Still confirm tide windows and written return guarantees.
          </p>
        )}
      </div>

      {matches.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Suggested excursions for your port day
          </h2>
          <ul className="mt-4 space-y-3">
            {matches.map((excursion) => (
              <li
                key={excursion.slug}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <Link
                  href={excursion.path}
                  className="font-semibold text-blue-800 hover:text-blue-950"
                >
                  {excursion.title}
                </Link>
                <p className="mt-1 text-sm text-slate-600">{excursion.summary}</p>
                <p className="mt-2 text-xs text-slate-500">
                  {excursion.duration} · Return confidence:{" "}
                  {excursion.returnConfidence}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href={`/enquire?hours=${hours}`}
            className="mt-6 inline-block rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Enquire with these preferences
          </Link>
        </div>
      )}
    </div>
  );
}
