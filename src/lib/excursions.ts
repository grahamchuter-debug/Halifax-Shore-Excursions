export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type CruiseSnapshotFields = {
  timeInPort?: string;
  bestFor?: string;
  activityLevel?: string;
  familyFriendly?: string;
  returnToShip?: string;
  popularTypes?: string;
};

export type Excursion = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromTerminal: string;
  transferRequired: boolean;
  transferNote: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  weatherConsiderations: string;
  cruiseSnapshot: string;
  snapshotFields: CruiseSnapshotFields;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const excursions: Excursion[] = [
  {
    slug: "peggys-cove-shore-excursion",
    path: "/peggys-cove-shore-excursion/",
    title: "Peggy's Cove Shore Excursion from Halifax",
    shortTitle: "Peggy's Cove",
    heroImage: "/images/peggys-cove-hero.png",
    heroImageAlt:
      "Peggy's Point Lighthouse on granite rocks at Peggy's Cove, Nova Scotia",
    summary:
      "Nova Scotia's signature lighthouse village on granite headlands — the essential Halifax cruise day trip for coastal scenery and photography.",
    duration: "4–5 hours (typical organised tour)",
    fitness: "Easy",
    distanceFromTerminal:
      "Roughly 45 km southwest of Halifax; about 45–60 minutes by coach from the cruise terminal.",
    transferRequired: true,
    transferNote:
      "Included on shore excursions. Independent visitors need taxi, rideshare, or shuttle — not walkable from the pier.",
    bestFor: [
      "First-time Halifax visitors wanting the iconic photo",
      "Photographers and coastal scenery lovers",
      "Passengers with at least five hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Standard half-day Peggy's Cove tours are built around cruise schedules with comfortable return margins. Allow extra buffer if combining with a city stop.",
    weatherConsiderations:
      "Atlantic fog and wind are common — dress in layers and expect damp granite even on clear days. Summer crowds peak mid-day; early departures often mean calmer conditions.",
    cruiseSnapshot:
      "Peggy's Cove is the headline Halifax shore excursion for good reason: one efficient tour delivers lighthouse views, fishing-village character, and open-ocean drama within a realistic port-day window.",
    snapshotFields: {
      timeInPort: "6–9 hours typical Halifax call",
      bestFor: "Iconic scenery, photography, first visits",
      activityLevel: "Easy — uneven granite near lighthouse",
      familyFriendly: "Good — supervise children on rocks",
      returnToShip: "High confidence on standard tours",
      popularTypes: "Coach tours, private drivers, combo city tours",
    },
    description: [
      "Peggy's Cove sits on a wave-battered granite shore where a red-and-white lighthouse has become one of Canada's most recognised images. For cruise passengers, it answers the question every Halifax itinerary invites: what does Atlantic Canada look like beyond the city waterfront?",
      "Organised tours typically allow 60–90 minutes at the village — time for the lighthouse boardwalk, harbour views, and careful exploration of the smooth rock platforms. Guides stress safety on the wet stone; the best photos often come from designated viewpoints rather than climbing near surge zones.",
      "Travel time from the Halifax cruise terminal is the main constraint. Highway runs through suburban Halifax before opening to coastal barrens and fishing communities. Peak-season traffic can add minutes each way, which is why pairing Peggy's Cove with a lengthy city tour on a short port day can feel rushed.",
    ],
    highlights: [
      "Peggy's Point Lighthouse on granite headlands",
      "Classic fishing village and harbour scenes",
      "Strong photography in golden morning or late-afternoon light",
      "Fits most standard Canada & New England port days",
    ],
    faqs: [
      {
        question: "Why is Peggy's Cove the signature Halifax shore excursion?",
        answer:
          "It combines an instantly recognisable lighthouse, accessible coastal walking, and authentic Nova Scotia fishing-village atmosphere within a half-day from the cruise terminal — something no downtown-only tour replicates.",
      },
      {
        question: "How crowded does Peggy's Cove get on cruise days?",
        answer:
          "Summer cruise season brings heavy visitor numbers between late morning and mid-afternoon. Earlier departures from Halifax often mean fewer people on the rocks and easier parking for coaches.",
      },
      {
        question: "Can I visit Peggy's Cove on a four-hour port call?",
        answer:
          "It is tight. Round-trip transfer alone can approach two hours. Most passengers need at least five hours ashore for a relaxed visit with return buffer.",
      },
    ],
    relatedSlugs: [
      "halifax-coastal-scenery-tour",
      "halifax-city-tour",
      "lunenburg-and-mahone-bay-tour",
    ],
  },
  {
    slug: "titanic-halifax-shore-excursion",
    path: "/titanic-halifax-shore-excursion/",
    title: "Titanic History Shore Excursion in Halifax",
    shortTitle: "Titanic History",
    summary:
      "Explore Halifax's role as the disaster's maritime response centre — Fairview Lawn Cemetery, Maritime Museum exhibits, and respectful heritage storytelling.",
    duration: "3–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Fairview Lawn Cemetery is roughly 6 km northwest; Maritime Museum of the Atlantic is on the waterfront, often walkable from downtown berths.",
    transferRequired: true,
    transferNote:
      "Many tours combine cemetery and museum with coach transfers. Waterfront museum access may be on foot from Halifax Seaport depending on where your ship docks.",
    bestFor: [
      "History enthusiasts and documentary viewers",
      "Passengers seeking meaningful, contemplative experiences",
      "Museum-focused port days with moderate walking",
    ],
    returnConfidence: "High",
    returnNote:
      "Half-day Titanic-themed tours are among the most schedule-friendly Halifax excursions. Self-guided museum visits from waterfront berths are easy to time.",
    weatherConsiderations:
      "Cemetery portions are outdoors — bring rain layers in shoulder season. Museum segments offer shelter on wet days.",
    cruiseSnapshot:
      "Halifax is one of the few cruise ports with a direct, documented connection to the RMS Titanic disaster — making this a distinctive alternative to generic city bus tours.",
    snapshotFields: {
      timeInPort: "5–8 hours works well",
      bestFor: "History, memorial sites, museums",
      activityLevel: "Easy — some standing and walking",
      familyFriendly: "Teens+ with parental context on tragedy",
      returnToShip: "High on organised tours",
      popularTypes: "Guided heritage tours, museum-focused walks",
    },
    description: [
      "When the Titanic sank in April 1912, Halifax became the base for recovery operations. Ships departed from this harbour carrying cable-laying vessels and mortuary staff; many victims were brought here, and more than a hundred are buried at Fairview Lawn Cemetery beneath simple granite markers.",
      "A thoughtful Titanic shore excursion balances factual storytelling with respect for the dead. Guides explain Halifax's cable-ship heritage, the role of the Mackay-Bennett, and how the city processed an unprecedented maritime tragedy. At Fairview Lawn, visitors learn to read the curved 'Titanic row' and the famous Unknown Child memorial.",
      "The Maritime Museum of the Atlantic on the Halifax waterfront holds a strong Titanic collection — wooden debris, personal effects, and survivor narratives that ground the disaster in human terms. Combining cemetery and museum in one port day gives cruise passengers the fullest picture without sensationalism.",
    ],
    highlights: [
      "Fairview Lawn Cemetery and Titanic graves",
      "Maritime Museum of the Atlantic exhibits",
      "Halifax's cable-ship and recovery history",
      "Respectful, educational framing for cruise guests",
    ],
    faqs: [
      {
        question: "Is a Titanic tour appropriate for children?",
        answer:
          "Content deals with loss of life. Many families with younger children prefer the maritime museum's broader exhibits; teens and adults typically find guided cemetery visits meaningful with the right preparation.",
      },
      {
        question: "How far is Fairview Lawn from the cruise terminal?",
        answer:
          "About 15–20 minutes by road from Halifax Seaport. It is not a comfortable walk with limited port time; tours include transport.",
      },
      {
        question: "Can I visit only the Maritime Museum?",
        answer:
          "Yes — from many berths the museum is a waterfront walk or short taxi ride. Allow 90–120 minutes for exhibits plus return-to-ship buffer.",
      },
    ],
    relatedSlugs: [
      "maritime-museum-and-waterfront-tour",
      "halifax-city-tour",
      "halifax-coastal-scenery-tour",
    ],
  },
  {
    slug: "halifax-city-tour",
    path: "/halifax-city-tour/",
    title: "Halifax City Highlights Shore Excursion",
    shortTitle: "City Highlights",
    heroImage: "/images/halifax-city-tour-hero.png",
    heroImageAlt:
      "Aerial view of Halifax harbour with cruise ship docked at the waterfront",
    summary:
      "Citadel Hill, Public Gardens, waterfront boardwalk, and downtown heritage — the efficient introduction to Nova Scotia's capital from the cruise pier.",
    duration: "3–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Halifax Seaport berths sit beside the waterfront; Citadel Hill is roughly 1.5 km uphill. Pier 20–22 may require a short walk or shuttle to the core.",
    transferRequired: false,
    transferNote:
      "Many highlights are walkable from downtown berths. Coach city tours pick up at the terminal and cover hills more comfortably.",
    bestFor: [
      "First-time visitors wanting an overview",
      "Passengers who prefer town atmosphere to long drives",
      "Shorter port calls and mobility-conscious guests",
    ],
    returnConfidence: "High",
    returnNote:
      "City tours are timed for reliability. Self-guided waterfront walks are flexible — set a firm turnaround time for Citadel ascents.",
    weatherConsiderations:
      "Citadel Hill is exposed to wind. Public Gardens close in winter; peak bloom is late spring through early autumn.",
    cruiseSnapshot:
      "Halifax rewards passengers who stay close to the ship — a well-planned city tour covers fortress history, Victorian gardens, and harbour life without the highway time Peggy's Cove requires.",
    snapshotFields: {
      timeInPort: "4+ hours for core highlights",
      bestFor: "City culture, history, easy pacing",
      activityLevel: "Easy to moderate (Citadel slopes)",
      familyFriendly: "Excellent",
      returnToShip: "High — especially near waterfront berths",
      popularTypes: "Hop-on hop-off, walking tours, coach highlights",
    },
    description: [
      "Halifax grew around one of the world's great natural harbours. A city highlights tour connects the pieces cruise passengers see from the deck — Citadel Hill watching over the waterfront, Victorian streets below, and the working port that still defines the economy.",
      "Halifax Citadel National Historic Site offers rampart views and interpreter stories of the city's strategic role. The Halifax Public Gardens provide a gentler counterpoint — formal beds, ponds, and shaded paths five minutes from downtown bustle. The waterfront boardwalk links museums, harbour ferries, and local food without needing a coach.",
      "Where your ship docks matters. Halifax Seaport places you beside the Canadian Museum of Immigration at Pier 21 and the Maritime Museum. Larger ships at Pier 20–22 are still close, but confirm whether your line offers a terminal-to-waterfront shuttle before assuming walkability.",
    ],
    highlights: [
      "Citadel Hill fortress and harbour views",
      "Halifax Public Gardens",
      "Waterfront boardwalk and Pier 21 area",
      "Flexible timing for shorter port days",
    ],
    faqs: [
      {
        question: "Can I walk to Citadel Hill from the cruise terminal?",
        answer:
          "From Seaport berths it is roughly 20–25 minutes uphill on city sidewalks. Many guests prefer a coach or taxi one way and walk downhill back to the ship.",
      },
      {
        question: "Is a city tour enough for a full Halifax day?",
        answer:
          "For passengers with under six hours ashore, yes — especially combined with a museum visit. With eight or more hours, consider adding Peggy's Cove or a food-focused tour.",
      },
      {
        question: "What about the hop-on hop-off bus?",
        answer:
          "It works well for independent pacing if schedules align with your all-aboard time. Organised tours typically provide more commentary and guaranteed terminal return.",
      },
    ],
    relatedSlugs: [
      "maritime-museum-and-waterfront-tour",
      "halifax-brewery-and-food-tour",
      "peggys-cove-shore-excursion",
    ],
  },
  {
    slug: "lunenburg-and-mahone-bay-tour",
    path: "/lunenburg-and-mahone-bay-tour/",
    title: "Lunenburg & Mahone Bay Shore Excursion from Halifax",
    shortTitle: "Lunenburg & Mahone Bay",
    summary:
      "UNESCO Old Town Lunenburg, colourful Mahone Bay churches, and South Shore seafaring heritage — a full-flavoured Nova Scotia day beyond the capital.",
    duration: "6–7 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Lunenburg is roughly 100 km southwest; about 1 hour 15 minutes each way from Halifax.",
    transferRequired: true,
    transferNote:
      "Full-day coach tours are standard. Not feasible without organised transport on a port day.",
    bestFor: [
      "Passengers with eight or more hours ashore",
      "UNESCO heritage and architecture enthusiasts",
      "Photographers drawn to colourful waterfront streets",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "This is a full-day format. Works on extended port calls only — build a 60-minute buffer beyond the tour's stated return. Avoid on short turnaround days.",
    weatherConsiderations:
      "South Shore fog can reduce views but adds atmosphere in Lunenburg harbour. Coastal wind on open coach routes — layers essential.",
    cruiseSnapshot:
      "Lunenburg delivers the UNESCO waterfront many passengers imagine when they picture Atlantic Canada — but the driving time means it suits longer Halifax port days, not quick stops.",
    snapshotFields: {
      timeInPort: "8+ hours recommended",
      bestFor: "Heritage towns, photography, full-day trips",
      activityLevel: "Easy — cobblestones in Lunenburg",
      familyFriendly: "Good on longer days",
      returnToShip: "Moderate — verify tour duration",
      popularTypes: "Coach day trips, small-group tours",
    },
    description: [
      "Old Town Lunenburg is a UNESCO World Heritage Site where British colonial planning meets a working fishing port. Brightly painted buildings line the waterfront; the Bluenose II often graces the harbour when in port. Guides explain shipbuilding, the Grand Banks fishery, and how Lunenburg's grid of streets was laid out in the 1750s.",
      "Mahone Bay adds a gentler pause — three waterfront churches photographed countless times across the bay's calm waters. Many tours include a lunch stop or free time for local shops and galleries before the return highway to Halifax.",
      "From the cruise terminal, this is never a spontaneous side trip. Budget roughly two and a half hours on the road plus three to four hours on the ground. Ships with late evening departures suit Lunenburg best; afternoon-only calls should choose Peggy's Cove or city-focused options instead.",
    ],
    highlights: [
      "UNESCO Lunenburg waterfront and fisheries museum area",
      "Mahone Bay scenic viewpoints",
      "South Shore seafaring culture",
      "Distinct from Halifax-only itineraries",
    ],
    faqs: [
      {
        question: "Is Lunenburg realistic on a standard cruise port day?",
        answer:
          "Yes if you have eight or more hours ashore and book a tour designed for cruise timing. Shorter calls should not attempt Lunenburg.",
      },
      {
        question: "How does Lunenburg compare with Peggy's Cove?",
        answer:
          "Peggy's Cove is closer and fits half-days. Lunenburg is a fuller heritage-town experience requiring most of your port time.",
      },
      {
        question: "Are there bathroom and lunch stops?",
        answer:
          "Reputable operators build in comfort breaks and often allow free time in Lunenburg for food — confirm when you enquire.",
      },
    ],
    relatedSlugs: [
      "peggys-cove-shore-excursion",
      "halifax-coastal-scenery-tour",
      "bay-of-fundy-from-halifax",
    ],
  },
  {
    slug: "bay-of-fundy-from-halifax",
    path: "/bay-of-fundy-from-halifax/",
    title: "Bay of Fundy Shore Excursion from Halifax",
    shortTitle: "Bay of Fundy",
    summary:
      "World-famous tides and dramatic coastline — understand distance, timing risk, and when this ambitious day trip does or does not work from a cruise ship.",
    duration: "8–10 hours (if attempted)",
    fitness: "Moderate",
    distanceFromTerminal:
      "Fundy shore viewpoints are 100–200+ km from Halifax depending on destination; often 2+ hours each way.",
    transferRequired: true,
    transferNote:
      "Only viable as a long organised coach day — independent travel is impractical on a port day.",
    bestFor: [
      "Extended port days (10+ hours ashore)",
      "Tide-schedule-aligned small-group tours",
      "Passengers who accept tight timing risk",
    ],
    returnConfidence: "Tight",
    returnNote:
      "Most cruise port days are too short for a responsible Fundy visit from Halifax. Treat advertised 'Fundy from Halifax' products with scrutiny — many passengers are better served by coastal tours closer to the city.",
    weatherConsiderations:
      "Fog and rain affect coastal viewpoints. Tide timing matters more than weather — arriving at low tide vs high tide changes the experience entirely.",
    cruiseSnapshot:
      "The Bay of Fundy is Nova Scotia's natural wonder — but Halifax is not beside it. Honest planning prevents missed ships and disappointing rushed visits.",
    snapshotFields: {
      timeInPort: "10+ hours for any Fundy attempt",
      bestFor: "Tide enthusiasts on long port days only",
      activityLevel: "Moderate — walking at shore sites",
      familyFriendly: "Long coach days challenge younger children",
      returnToShip: "Tight — high risk on standard calls",
      popularTypes: "Long coach tours (scrutinise duration)",
    },
    description: [
      "The Bay of Fundy records among the highest tidal ranges on Earth — a natural spectacle that draws visitors to Hopewell Rocks, Burntcoat Head, and fishing harbours that transform between low and high water. The challenge for Halifax cruise passengers is geography: the capital sits on the Atlantic side of Nova Scotia, while the most dramatic Fundy experiences lie hours away by road.",
      "Some operators market Fundy day trips from Halifax. These can exceed eight hours on the coach before counting embarkation delays, traffic, and tide windows. On a typical six-to-eight-hour port call, the maths rarely works unless your ship overnights or departs late evening.",
      "We recommend most cruise passengers choose Peggy's Cove, Lunenburg, or coastal scenery tours instead. If your itinerary shows ten or more hours ashore and a tour explicitly aligns tide tables with your all-aboard time, Fundy may be possible — enquire with full ship schedule details and insist on written return guarantees.",
    ],
    highlights: [
      "Honest distance and timing assessment",
      "Tide-dependent experience planning",
      "When to skip Fundy on a port day",
      "Safer alternatives closer to Halifax",
    ],
    faqs: [
      {
        question: "Can I see the Bay of Fundy on a Halifax cruise day?",
        answer:
          "Only on unusually long port calls with tide-aligned tours. Standard six-to-eight-hour stops are insufficient for a safe, enjoyable Fundy round trip from Halifax.",
      },
      {
        question: "What is the drive time to Hopewell Rocks from Halifax?",
        answer:
          "Often two to two and a half hours each way under ideal conditions — before visitor time and tide waits. That alone exceeds many port windows.",
      },
      {
        question: "What should I do instead?",
        answer:
          "Consider Peggy's Cove, Lunenburg, or our coastal scenery tour for tidal harbour views without the Fundy highway commitment.",
      },
    ],
    relatedSlugs: [
      "lunenburg-and-mahone-bay-tour",
      "halifax-coastal-scenery-tour",
      "peggys-cove-shore-excursion",
    ],
  },
  {
    slug: "maritime-museum-and-waterfront-tour",
    path: "/maritime-museum-and-waterfront-tour/",
    title: "Maritime Museum & Waterfront Shore Excursion",
    shortTitle: "Maritime Museum",
    summary:
      "Maritime Museum of the Atlantic, historic waterfront, harbour views, and Pier 21 — Nova Scotia's seafaring story steps from many cruise berths.",
    duration: "2.5–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Maritime Museum sits on Lower Water Street; often 5–15 minutes on foot from Halifax Seaport berths.",
    transferRequired: false,
    transferNote:
      "Walkable from downtown and Seaport berths. Coach tours may include additional waterfront stops and Citadel exterior views.",
    bestFor: [
      "Rainy-day and moderate-weather port plans",
      "Titanic and naval history interests",
      "Passengers wanting minimal transfer time",
    ],
    returnConfidence: "High",
    returnNote:
      "Among the easiest Halifax excursions to self-time. Museum visits of 90 minutes plus waterfront strolling fit comfortably on five-hour port calls.",
    weatherConsiderations:
      "Museum offers indoor shelter; waterfront segments need rain gear. Harbour fog can enhance atmosphere but limits distant views.",
    cruiseSnapshot:
      "When your ship docks near downtown, the waterfront cluster delivers museums, food, and harbour life without highway travel — ideal for shorter port days.",
    snapshotFields: {
      timeInPort: "4+ hours sufficient",
      bestFor: "Museums, harbour walks, flexible pacing",
      activityLevel: "Easy",
      familyFriendly: "Excellent",
      returnToShip: "Very high near Seaport berths",
      popularTypes: "Walking tours, museum entry, guided waterfront",
    },
    description: [
      "The Maritime Museum of the Atlantic anchors Halifax's waterfront storytelling — Titanic artefacts, Age of Sail ship models, and exhibits on the 1917 Halifax Explosion that reshaped the city. It pairs naturally with a harbour boardwalk stroll past historic properties, tugboats, and seasonal vendors.",
      "Nearby Pier 21 National Historic Site interprets Canada's ocean immigration story — many cruise guests find family emigration parallels in the exhibits. The Canadian Naval Memorial on the boardwalk honours those who served in the Battle of the Atlantic.",
      "Guided waterfront tours add context you might miss independently — how the harbour froze trade in winter, where convoys assembled, and which buildings survived the explosion. On wet days, prioritise museum time and shorten outdoor segments without losing the essence of the port.",
    ],
    highlights: [
      "Maritime Museum of the Atlantic collections",
      "Historic Properties and boardwalk",
      "Pier 21 and naval memorials nearby",
      "Minimal transfer from Seaport berths",
    ],
    faqs: [
      {
        question: "How long should I spend in the Maritime Museum?",
        answer:
          "Plan 90 minutes for a focused visit; two hours if you read extensively or include Titanic and Explosion galleries in depth.",
      },
      {
        question: "Is this tour good in the rain?",
        answer:
          "Yes — it is one of Halifax's strongest wet-weather options when combined with indoor museum time.",
      },
      {
        question: "Does this overlap with the Titanic tour?",
        answer:
          "The museum is central to both. A dedicated Titanic tour adds Fairview Lawn Cemetery; this excursion stays waterfront-focused.",
      },
    ],
    relatedSlugs: [
      "titanic-halifax-shore-excursion",
      "halifax-city-tour",
      "halifax-brewery-and-food-tour",
    ],
  },
  {
    slug: "halifax-brewery-and-food-tour",
    path: "/halifax-brewery-and-food-tour/",
    title: "Halifax Brewery & Food Shore Excursion",
    shortTitle: "Brewery & Food",
    summary:
      "Alexander Keith's heritage brewery, local seafood, and craft tastings — taste Nova Scotia's capital without leaving the urban core.",
    duration: "2.5–3.5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Keith's brewery is in downtown Halifax, roughly 10–15 minutes on foot from Seaport berths.",
    transferRequired: false,
    transferNote:
      "Walking tours and food crawls concentrate on the urban peninsula. Coach not required from waterfront berths.",
    bestFor: [
      "Food and drink enthusiasts",
      "Rainy-day urban exploring",
      "Adults and older teens (brewery age limits apply)",
    ],
    returnConfidence: "High",
    returnNote:
      "Short duration and central location make return timing straightforward. Allow sobriety margin if tasting — many guests book morning tours.",
    weatherConsiderations:
      "Indoor brewery segments suit all weather. Outdoor market stops may be shortened in heavy rain.",
    cruiseSnapshot:
      "Halifax punches above its weight for Atlantic Canadian cuisine — a food-focused half-day keeps you near the ship while sampling the city's social heart.",
    snapshotFields: {
      timeInPort: "4+ hours",
      bestFor: "Culinary travellers, brewery history",
      activityLevel: "Easy — urban walking between stops",
      familyFriendly: "Food yes; brewery tours age-restricted",
      returnToShip: "High",
      popularTypes: "Brewery tours, food walks, market visits",
    },
    description: [
      "Halifax dining revolves around the Atlantic — lobster rolls, fish and chips, and seasonal oysters appear on menus from the waterfront to north-end breweries. Guided food tours sequence tastings so you sample widely without overcommitting at one stop.",
      "Alexander Keith's Nova Scotia Brewery offers a theatrical heritage tour through 19th-century vaults with live interpretation and tastings for guests of legal drinking age. It is one of Canada's oldest commercial breweries and a downtown landmark within walking distance of many cruise berths.",
      "Farmers' markets — notably the Halifax Seaport Market near some cruise terminals — add local cheese, berries, and baked goods on market days. Combining market browsing with a brewery or waterfront lunch makes efficient use of short port calls.",
    ],
    highlights: [
      "Alexander Keith's heritage brewery experience",
      "Local seafood and Atlantic Canadian flavours",
      "Seaport Market when open on your port day",
      "Compact urban routing near the waterfront",
    ],
    faqs: [
      {
        question: "Are brewery tours suitable for non-drinkers?",
        answer:
          "Heritage tours focus on history and architecture; ask operators about non-alcoholic options. Food-only walks are available.",
      },
      {
        question: "What is the legal drinking age in Nova Scotia?",
        answer:
          "19 years. Bring photo ID for brewery tastings.",
      },
      {
        question: "Can I combine this with Peggy's Cove?",
        answer:
          "Only on long port days. Most guests choose either an out-of-town scenic tour or an urban food day — not both.",
      },
    ],
    relatedSlugs: [
      "halifax-city-tour",
      "maritime-museum-and-waterfront-tour",
      "peggys-cove-shore-excursion",
    ],
  },
  {
    slug: "halifax-coastal-scenery-tour",
    path: "/halifax-coastal-scenery-tour/",
    title: "Halifax Coastal Scenery Shore Excursion",
    shortTitle: "Coastal Scenery",
    summary:
      "Chebucto Head, Duncan's Cove, and Atlantic viewpoints — dramatic shoreline without committing to a full Peggy's Cove or Fundy day.",
    duration: "3.5–5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Coastal lookouts lie 15–30 km from downtown; 20–45 minutes by road depending on route.",
    transferRequired: true,
    transferNote:
      "Coach or small-group van tours. Some routes pass near Peggy's Cove without the full village stop.",
    bestFor: [
      "Photographers wanting varied coastal angles",
      "Passengers who have already seen Peggy's Cove",
      "Nature lovers preferring lighter crowds",
    ],
    returnConfidence: "High",
    returnNote:
      "Shorter driving distances than Lunenburg or Fundy make coastal loops reliable on standard port days.",
    weatherConsiderations:
      "Exposed headlands are windy. Fog can lift suddenly — flexible guides adjust routes to where visibility is best.",
    cruiseSnapshot:
      "Not every coastal tour needs to end at Peggy's Cove. Halifax's nearby headlands deliver open-ocean views with less congestion when routes are planned well.",
    snapshotFields: {
      timeInPort: "5–7 hours",
      bestFor: "Scenery, photography, lighter crowds",
      activityLevel: "Easy — short walks at lookouts",
      familyFriendly: "Good — hold children near cliff edges",
      returnToShip: "High",
      popularTypes: "Scenic drives, small-group vans",
    },
    description: [
      "Halifax Harbour opens to the Atlantic through channels guarded by rocky headlands. Coastal scenery tours trace the Chebucto Peninsula — stopping at lookouts where surf meets granite and fishermen work coves invisible from the downtown boardwalk.",
      "Duncan's Cove and nearby trails offer boardwalk sections with dramatic cliff views when conditions allow. Guides explain how glaciation shaped the shoreline and why lighthouses dot every promontory. Some itineraries include a brief Peggy's Cove photo stop; others deliberately route alternate viewpoints for passengers seeking quieter angles.",
      "Compared with Fundy day trips, coastal loops stay within sensible driving range of the cruise terminal. They suit passengers who want nature photography without the full Lunenburg commitment or the crowds at Peggy's Point peak hours.",
    ],
    highlights: [
      "Atlantic headland lookouts near Halifax",
      "Flexible routing for weather and light",
      "Less crowded than peak Peggy's Cove hours",
      "Reliable timing on standard port days",
    ],
    faqs: [
      {
        question: "How is this different from a Peggy's Cove tour?",
        answer:
          "Peggy's Cove centres on the famous lighthouse village. Coastal scenery tours explore multiple viewpoints and may include or skip Peggy's depending on the product.",
      },
      {
        question: "Is cliff walking safe?",
        answer:
          "Stay on marked paths and follow guide instructions. Wet granite and unexpected waves are hazards at any Nova Scotia shore.",
      },
      {
        question: "Will I see wildlife?",
        answer:
          "Seabirds are common; whale sightings are occasional and never guaranteed on short coastal drives.",
      },
    ],
    relatedSlugs: [
      "peggys-cove-shore-excursion",
      "lunenburg-and-mahone-bay-tour",
      "halifax-city-tour",
    ],
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getExcursionByPath(path: string): Excursion | undefined {
  return excursions.find((e) => e.path === path);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}

export const staticGuidePaths = [
  "/halifax-cruise-port-guide",
  "/best-halifax-shore-excursions",
  "/things-to-do-in-halifax-from-a-cruise-ship",
  "/halifax-vs-sydney-nova-scotia",
  "/halifax-cruise-ship-schedule",
  "/best-time-to-visit-halifax",
  "/faq",
  "/cruise-planner",
  "/enquire",
  "/excursions",
];
