// Content for /service-areas/[slug]/ pages.
// `confirmed: false` pages still build (so the URL is ready) but are noindex,
// left out of the sitemap, and not linked from anywhere. Flip to true once
// Travis confirms he serves the town. See HANDOFF.md.

export type AreaSection = { heading: string; paragraphs: string[] };

export type Area = {
  slug: string;
  town: string;
  confirmed: boolean;
  metaDescription: string;
  intro: string[];
  sections: AreaSection[];
  /** Service slugs to feature first on this page. */
  featured: string[];
};

export const areas: Area[] = [
  // Rendered on the homepage (home-jacksonville.tsx), not its own route.
  // metaDescription is only the card blurb on /service-areas/.
  {
    slug: "jacksonville-nc",
    town: "Jacksonville",
    confirmed: true,
    metaDescription:
      "Mobile mechanic in Jacksonville, NC. Veteran-owned, 26 years experience. Repairs at your home, work or roadside across the city. Call (910) 358-9027.",
    intro: [
      "Jacksonville is home base for Roadgun Mobile Repair. Travis lives and works here, and most of our jobs are within a short drive of Western Boulevard, Gum Branch Road, and Lejeune Boulevard. If your vehicle is anywhere in the city, from Northwoods to Piney Green to the neighborhoods off Richlands Highway, we come to it.",
      "Jacksonville runs on schedules. Military duty hours, shift work, school pickups, and long commutes on US 17 and NC 24 leave very little room for sitting in a shop waiting room. A mobile mechanic fits the repair into your day instead of the other way around.",
    ],
    sections: [
      {
        heading: "What we fix around Jacksonville",
        paragraphs: [
          "The most common calls we get in town are dead batteries, no-starts, brake noise, and check engine lights. Most of those are done in the driveway the same day. We also handle starters, alternators, belts, hoses, oil and fluid service, and trailer wiring and bearings for the contractors and boaters who live here.",
          "Heat is the big factor on the coast. Long, humid summers are hard on batteries, cooling system hoses, and belts, and a lot of the failures we see in September and October started as heat damage in July. If your vehicle is due, it is worth having it looked at before it quits in a parking lot.",
        ],
      },
      {
        heading: "Home, work, or the side of the road",
        paragraphs: [
          "We work in residential driveways, apartment lots where the property allows it, and business parking lots. Many customers have us service their vehicle while they are at work, so they walk out at the end of the day to a car that is already fixed.",
          "If your vehicle breaks down somewhere safe to work, such as a parking lot, we can often come to it there. If it is on a shoulder with traffic, the safest first step is usually a tow to a safe spot, and then we can finish the repair there.",
        ],
      },
      {
        heading: "Why Jacksonville drivers call a mobile mechanic",
        paragraphs: [
          "Shops in town are busy, and drop-off usually means losing your vehicle for a day or more. For a family with one car, or a service member with a strict schedule, that is a real cost. A mobile visit takes that off the table for the repairs that can be done on site, which is most routine work.",
          "Roadgun is veteran-owned and run by the mechanic who does the work. You talk to Travis on the phone and you see Travis in your driveway. There is no service writer, no upsell at the counter, and no one pushing work you do not need. If a job belongs in a shop, we tell you that too.",
        ],
      },
      {
        heading: "Neighborhoods we cover in Jacksonville",
        paragraphs: [
          "We work all over the city: Northwoods, Brynn Marr, Hunters Creek, Half Moon, Piney Green, and the neighborhoods off Gum Branch Road and Western Boulevard, plus the housing near MCAS New River. Because we are based in town, Jacksonville jobs are the easiest for us to fit in, and short-notice calls for dead batteries and no-starts are often handled the same day.",
          "If you live in an apartment complex, check whether the property allows vehicle repairs in the lot. Most are fine with a battery swap or a brake job in a marked space. If yours is strict, we can meet you at your workplace or another nearby spot.",
        ],
      },
      {
        heading: "Booking a visit",
        paragraphs: [
          "Call during business hours, Monday through Friday from 6 AM to 6 PM, or send the request form with your vehicle, the problem, and your location. We will confirm the time, tell you what to expect, and give you a clear quote before any work starts.",
        ],
      },
    ],
    featured: ["mobile-diagnostics", "battery-replacement", "brake-repair"],
  },
  {
    slug: "camp-lejeune-nc",
    town: "Camp Lejeune",
    confirmed: true,
    metaDescription:
      "Mobile mechanic for Camp Lejeune families and Marines. Repairs at base housing or off base, PCS pre-purchase inspections. Call (910) 358-9027.",
    intro: [
      "Military families at Camp Lejeune do not have time for a repair shop. Duty days run long, deployments leave one spouse handling everything, and many families are down to one vehicle. Roadgun Mobile Repair is a veteran-owned mobile mechanic based in Jacksonville, and we built this business around exactly that kind of schedule.",
      "Travis is a veteran himself. He understands PCS timelines, field weeks, and the reality of a car breaking down while your Marine is gone. The goal is simple: get your vehicle fixed where it sits, explain what was wrong in plain language, and get you back to your day.",
    ],
    sections: [
      {
        heading: "Working aboard the base",
        paragraphs: [
          "Marine Corps Base Camp Lejeune is a controlled installation. Contractors and commercial vendors have to be cleared through the base's visitor and vendor access process before they can come aboard, and vehicles can be subject to inspection at the gate. Those rules change with force protection conditions, so we confirm access for your date before we book a job on base.",
          "When access is not possible that day, we meet you at your vehicle just outside the gate or at a location off base that works for you. Tell us when you call where the vehicle is and whether you live aboard the base, and we will plan around it.",
        ],
      },
      {
        heading: "Base housing: Tarawa Terrace, Midway Park, and more",
        paragraphs: [
          "Many of our Camp Lejeune customers live in base housing areas such as Tarawa Terrace and Midway Park. Housing communities have their own rules about what kind of vehicle work can be done at a residence. Routine jobs such as battery replacement, brakes, and diagnostics are usually the kind of work people need done at home, but we check what your housing office allows before we show up with tools.",
          "If a job is too big for a housing driveway, we can often do it at an off-base location nearby instead of sending you to a shop.",
        ],
      },
      {
        heading: "PCS season pre-purchase inspections",
        paragraphs: [
          "Every summer, Camp Lejeune turns over. Families arriving need a second vehicle fast, and families leaving need to sell. Used car deals happen quickly in base parking lots and off-base driveways, and not all of them are good deals.",
          "A pre-purchase inspection lets you find out what you are buying before you pay. We meet you where the vehicle is, scan every module, check the engine, brakes, suspension, tires, and underbody, and drive it when the seller allows. You get an honest opinion from someone with no stake in the sale. If you are selling before orders, we can also check your vehicle so you know what a buyer's mechanic will find.",
        ],
      },
      {
        heading: "What to tell us when you call",
        paragraphs: [
          "To get a Camp Lejeune job scheduled quickly, have a few details ready: whether the vehicle is aboard the base or off base, the housing area if you live aboard, the year, make, and model, and what the vehicle is doing. If you are on a PCS timeline or a deployment is coming up, say so. We will do our best to fit the work in before you need the vehicle.",
        ],
      },
      {
        heading: "When your Marine is deployed",
        paragraphs: [
          "A dead battery or a grinding brake is a bigger problem when you are the only adult at home. We come to you, show you what we find, and do not pressure you into work you do not need. If you want your spouse on the phone while we explain it, that is fine with us.",
        ],
      },
      {
        heading: "Common Camp Lejeune repairs",
        paragraphs: [
          "Batteries and charging problems top the list, followed by brakes, check engine lights, and starters. We also do oil and fluid service so you are not spending a day off in a lube shop line, and trailer work for families who tow boats or campers.",
        ],
      },
    ],
    featured: ["pre-purchase-inspection", "battery-replacement", "brake-repair"],
  },
  {
    slug: "richlands-nc",
    town: "Richlands",
    confirmed: true,
    metaDescription:
      "Mobile mechanic in Richlands, NC. Farm trucks, family cars and trailers repaired where they sit, no long tow to town. Call (910) 358-9027.",
    intro: [
      "Richlands sits northwest of Jacksonville along US 258 and NC 24, and a breakdown out here usually means a long tow into town. Roadgun Mobile Repair comes to you instead. We work on family cars, work pickups, and trailers in driveways, farm lots, and yards across the Richlands area.",
      "Country driving is hard on vehicles in its own way. Long commutes into Jacksonville, gravel and dirt roads, and trucks that pull trailers every week wear brakes, bearings, and suspension faster than city driving. Many of the problems we see here are the kind that can be handled on site with the right tools.",
    ],
    sections: [
      {
        heading: "Why mobile repair makes sense in Richlands",
        paragraphs: [
          "When a shop is a half hour away, every repair costs you two round trips or a tow, plus the day you spend without the vehicle. For a farm truck or a work pickup, losing it for a day costs real money. A mobile mechanic removes the tow and the drop-off for the repairs that can be done in the yard, and that covers most routine work.",
          "Long driveways and open yards are also easier to work in than a tight apartment lot. As long as we have a reasonably firm, level spot, we can jack the vehicle safely and get to work.",
        ],
      },
      {
        heading: "Trucks, trailers, and equipment",
        paragraphs: [
          "A lot of Richlands customers depend on trucks and trailers. We diagnose and fix starting and charging problems, replace brakes, service belts and hoses, and handle trailer lights, wiring, plugs, bearings, and brakes on utility, livestock-style, and equipment trailers.",
          "Trailer wiring is a common call. Corroded grounds and damaged harness sections cause lights that work one day and not the next. We trace the circuit with a meter and repair the cause instead of swapping bulbs until it works again.",
        ],
      },
      {
        heading: "Family vehicles and commuters",
        paragraphs: [
          "Plenty of Richlands families commute to Jacksonville, Camp Lejeune, or farther every day. When a battery dies or a check engine light comes on, we can come out before or after the commute, or during the day while the vehicle sits at home.",
          "We also do oil changes and fluid service in the driveway, which saves the drive to town just to wait in a lube shop line.",
        ],
      },
      {
        heading: "Planning around the busy seasons",
        paragraphs: [
          "Around Richlands, the worst time for a truck or trailer to go down is right when you need it most, in the middle of planting, harvest, or a big job. The best time to catch a worn wheel bearing, a cracked belt, or a weak battery is during a slow week, before it fails under load.",
          "If you have a truck or trailer you count on every day, have us look it over between busy stretches. A driveway inspection of brakes, bearings, belts, hoses, and the charging system takes a lot less time than a breakdown on a back road. We will tell you what needs doing now and what can wait until the season ends.",
        ],
      },
      {
        heading: "How to book",
        paragraphs: [
          "Call Monday through Friday between 6 AM and 6 PM, or send the request form with your vehicle and address. Rural addresses sometimes do not map well, so a landmark or a gate code helps us find you. We will give you a clear quote before any work starts.",
        ],
      },
    ],
    featured: ["trailer-repair", "starter-alternator-repair", "brake-repair"],
  },
  {
    slug: "swansboro-nc",
    town: "Swansboro",
    confirmed: true,
    metaDescription:
      "Mobile mechanic in Swansboro, NC. Car, truck and boat trailer repair at your home near the White Oak River. Veteran-owned. Call (910) 358-9027.",
    intro: [
      "Swansboro is a boating town, and that shapes the work we do here. Along with the usual batteries, brakes, and check engine lights, we see a lot of boat trailers with salt-damaged wiring and bearings, and tow vehicles that work hard every weekend in the season.",
      "Roadgun Mobile Repair comes to your home or dock-side parking anywhere around Swansboro, along NC 24 and the White Oak River, so you do not have to haul a vehicle or a trailer back toward Jacksonville for service.",
    ],
    sections: [
      {
        heading: "Boat trailer repair near the water",
        paragraphs: [
          "Salt water is the enemy of trailer bearings, brakes, and lights. Every dunk at the ramp pushes water into hubs and connectors. Over a season that turns into grinding bearings, corroded surge or electric brakes, and lights that flicker or quit.",
          "We service and replace wheel bearings, inspect and repair trailer brakes, and rewire lights and plugs on boat trailers where they are parked. Before we leave, we test everything with your tow vehicle if it is on hand. Having it done before a trip beats limping home from the ramp with a smoking hub.",
        ],
      },
      {
        heading: "Tow vehicles and daily drivers",
        paragraphs: [
          "Pickups and SUVs that tow boats wear brakes and cooling systems harder than daily drivers. We replace pads and rotors, belts, and hoses, and check cooling systems before towing season. For daily drivers, we handle the everyday problems: dead batteries, no-starts, brake noise, oil changes, and warning lights.",
          "Coastal air and summer heat age rubber and battery terminals faster than inland driving does. A quick look during an oil change visit often catches a cracked belt or a corroded terminal before it strands you.",
        ],
      },
      {
        heading: "Why a mobile mechanic in Swansboro",
        paragraphs: [
          "Getting a vehicle to a shop and back from Swansboro takes a big part of a day. A mobile visit keeps the vehicle at home and keeps you on your schedule. For trailers, it also solves the problem of needing working lights just to legally tow it to someone who can fix the lights.",
          "Roadgun is veteran-owned and run by the mechanic who does the work. Travis has 26 years of experience and will tell you straight what needs doing now, what can wait, and what belongs in a shop.",
        ],
      },
      {
        heading: "Getting ready for boating season",
        paragraphs: [
          "The best time to deal with a boat trailer is before the first trip of spring, not at the ramp. A pre-season visit covers the things that fail after a winter of sitting: wheel bearings that took on water last fall, trailer brakes that seized, lights with corroded sockets, and tires that dry rotted in the sun.",
          "It is also a good time to look at the tow vehicle. Brakes, the cooling system, and the transmission all work harder with a boat behind them in summer heat. Having both checked in one driveway visit means the first weekend on the White Oak River is spent on the water instead of on the shoulder of NC 24.",
        ],
      },
      {
        heading: "Scheduling",
        paragraphs: [
          "We work Monday through Friday, 6 AM to 6 PM. Call or send the request form with the vehicle or trailer, what is wrong, and where it is parked. Photos of a trailer plug or hub help us bring the right parts the first time.",
        ],
      },
    ],
    featured: ["trailer-repair", "brake-repair", "oil-change"],
  },
  {
    slug: "hubert-nc",
    town: "Hubert",
    confirmed: true,
    metaDescription:
      "Mobile mechanic in Hubert, NC. Repairs at your home along NC 24 and NC 172, between Jacksonville and Swansboro. Call (910) 358-9027.",
    intro: [
      "Hubert sits between Jacksonville and Swansboro along NC 24 and NC 172, close to the back side of Camp Lejeune and the creeks that feed the New River and Bogue Sound. It is a mix of military families, longtime residents, and newer subdivisions, and nearly everyone drives a good distance for work, school, and errands.",
      "Roadgun Mobile Repair comes to your driveway in Hubert so a repair does not turn into a day spent driving to a shop and back. Most routine repairs are done on site in one visit.",
    ],
    sections: [
      {
        heading: "Repairs we do in Hubert",
        paragraphs: [
          "The calls we get most from Hubert are dead batteries, brake noise, check engine lights, and vehicles that will not start. We also replace starters and alternators, belts and hoses, and do oil and fluid changes in the driveway. Many Hubert households also have a boat or utility trailer, and we handle trailer lights, wiring, bearings, and brakes too.",
          "For no-start and brake problems especially, a mobile visit saves the tow. We test and fix the vehicle where it sits and make sure it starts, stops, and charges before we leave.",
        ],
      },
      {
        heading: "Military families near the base",
        paragraphs: [
          "Hubert is home to a lot of Marines and their families who live off base but work aboard Camp Lejeune. When one spouse is in the field or deployed, a breakdown at home lands on whoever is left. We come to you, explain what we find in plain language, and quote the job before we start.",
          "Moving season is busy here too. If you are buying or selling a vehicle around a PCS, a pre-purchase inspection at the seller's driveway gives you an honest read before money changes hands.",
        ],
      },
      {
        heading: "Why Hubert drivers choose a mobile mechanic",
        paragraphs: [
          "Hubert is spread out, and the nearest shops are a drive away in either direction. A mobile mechanic makes the repair fit your day. Many customers have us work on the vehicle while they are at home with the kids or working remotely, and the job is done by the time they need to leave.",
          "Travis is a veteran with 26 years of mechanical experience. You talk to him on the phone, he does the work, and he will tell you honestly if a job would be better handled in a shop.",
        ],
      },
      {
        heading: "Roads and neighborhoods we cover",
        paragraphs: [
          "We cover all of Hubert, from Queens Creek Road to the neighborhoods along Bear Creek and the homes off NC 24 and NC 172. Hubert sits right between our Jacksonville base and Swansboro, so it is an easy place for us to route a visit, and we can often line up a Hubert job on the same day as other work nearby.",
          "Driveways here range from paved subdivision lots to sandy and gravel yards. Either works for most jobs. If the ground is soft, we bring boards to set jacks and stands on so the vehicle is supported safely. Let us know when you call if the vehicle is parked on grass or sand.",
        ],
      },
      {
        heading: "Book a visit",
        paragraphs: [
          "Call Monday through Friday from 6 AM to 6 PM, or use the request form with your vehicle, the problem, and your address. We will confirm a time and give you a clear quote.",
        ],
      },
    ],
    featured: ["battery-replacement", "check-engine-light", "trailer-repair"],
  },
  {
    slug: "holly-ridge-nc",
    town: "Holly Ridge",
    confirmed: true,
    metaDescription:
      "Mobile mechanic in Holly Ridge, NC. Repairs at your home near US 17 and Topsail, no drive to Jacksonville needed. Call (910) 358-9027.",
    intro: [
      "Holly Ridge has grown fast. New neighborhoods off US 17 are full of families who commute to Jacksonville, Camp Lejeune, and Wilmington, and the beach traffic toward Topsail Island adds to it every summer. What Holly Ridge does not have is a lot of repair shops close by.",
      "Roadgun Mobile Repair comes to you in Holly Ridge, so a dead battery or worn brakes do not mean a drive up US 17 and a day without your vehicle. Most routine repairs are finished in your driveway in one visit.",
    ],
    sections: [
      {
        heading: "Common repairs in Holly Ridge",
        paragraphs: [
          "Batteries, brakes, check engine lights, and no-starts are the jobs we see most. Long commutes on US 17 put miles on quickly, so oil changes, belts, and hoses come due faster than people expect. We handle all of them on site.",
          "Beach towns are also hard on vehicles. Salt air corrodes battery terminals and wiring, and summer heat breaks down batteries and cooling hoses. A driveway inspection during an oil change visit is an easy way to catch those problems early.",
        ],
      },
      {
        heading: "Trailers and weekend toys",
        paragraphs: [
          "Between Topsail and the Intracoastal Waterway, plenty of Holly Ridge households tow a boat, a utility trailer, or a camper. We service trailer bearings, repair trailer brakes, and fix lights and wiring where the trailer is parked, so you are not towing a trailer with bad lights just to get it fixed.",
        ],
      },
      {
        heading: "Why mobile works for Holly Ridge",
        paragraphs: [
          "When the closest full-service shop is a long drive away, every repair costs you the drive, the wait, and often a second trip to pick the vehicle up. A mobile visit replaces all of that with one appointment at your house. For commuters, we can often do the work during the day while the vehicle sits at home or at your workplace.",
          "Roadgun is veteran-owned and run by Travis, a mechanic with 26 years of experience. He does the work himself, explains what he finds, and will tell you honestly when a job needs a shop instead of a driveway.",
        ],
      },
      {
        heading: "Before summer traffic hits",
        paragraphs: [
          "From Memorial Day through Labor Day, US 17 and the roads toward Topsail fill with beach traffic, and stop-and-go driving in the heat is exactly what exposes a weak battery, a tired cooling system, or worn brakes. Holly Ridge drivers feel it on every commute during the season.",
          "A spring checkup in the driveway is a simple way to get ahead of it. We test the battery and charging system, look at belts and hoses, check coolant condition, inspect brake pads and rotors, and look at tire wear. You get a clear list of anything that needs attention before the heat and traffic make a small problem a roadside one.",
        ],
      },
      {
        heading: "Travel and scheduling",
        paragraphs: [
          "Holly Ridge is at the southern end of our regular service area. We group appointments when we can, so calling a day or two ahead helps us fit you in. Hours are Monday through Friday, 6 AM to 6 PM. Call or send the request form with your vehicle, the problem, and your address, and we will give you a clear quote before starting.",
        ],
      },
    ],
    featured: ["oil-change", "battery-replacement", "trailer-repair"],
  },
  {
    slug: "sneads-ferry-nc",
    town: "Sneads Ferry",
    confirmed: false,
    metaDescription:
      "Mobile mechanic in Sneads Ferry, NC. Car, truck and boat trailer repair at your home near the New River. Veteran-owned. Call (910) 358-9027.",
    intro: [
      "Sneads Ferry is a working waterfront town on the New River, and the vehicles here work hard. Trucks pull boats and trailers to the ramps, commuters drive to Camp Lejeune and Jacksonville every day, and salt air gets into every connector and battery terminal.",
      "Roadgun Mobile Repair comes to your home or dock-side parking in Sneads Ferry, so you do not have to drive a sick vehicle or tow a trailer with bad lights into Jacksonville to get it fixed.",
    ],
    sections: [
      {
        heading: "Boat trailers and tow vehicles",
        paragraphs: [
          "Salt water wears out trailer bearings, brakes, and wiring faster than anything else. We service and replace bearings, repair surge and electric trailer brakes, and rewire lights and plugs where the trailer is parked. We also keep tow vehicles ready with brake jobs, cooling system work, and belt and hose replacement.",
          "Having trailer work done before the season starts beats finding out at the ramp that a hub is hot or the lights are dead.",
        ],
      },
      {
        heading: "Everyday repairs at home",
        paragraphs: [
          "Dead batteries, brake noise, check engine lights, and no-starts make up most of our calls. We test before we replace, fix what we can in the driveway, and explain everything in plain language. Oil and fluid changes are done on site too, with used oil taken away for recycling.",
          "Coastal humidity and summer heat shorten battery life and age rubber hoses. If your battery is more than a few years old, it is worth testing before the first cool morning of fall. A test takes a few minutes during any visit and tells you whether the battery has another season left in it.",
        ],
      },
      {
        heading: "Military families near the base",
        paragraphs: [
          "Sneads Ferry is home to many Marines and families stationed at Camp Lejeune. When one spouse is away for training or deployment, a vehicle problem at home is one more thing to deal with alone. We come to you, show you what we find, and quote the job before we start. During PCS season, we also do pre-purchase inspections at the seller's location.",
        ],
      },
      {
        heading: "Salt air and your daily driver",
        paragraphs: [
          "Living near the New River and the inlet means your everyday vehicle gets salt exposure even if it never touches the water. Salt air works into battery terminals, ground straps, and electrical connectors, and it speeds up rust on brake lines, exhaust hangers, and suspension hardware.",
          "Many of the electrical problems we see near the water trace back to a corroded ground or connector rather than a failed part. We test circuits with a meter before replacing anything, clean and protect the connections, and point out rust that is worth watching. Catching it early is much cheaper than replacing a brake line after it fails.",
        ],
      },
      {
        heading: "Why choose Roadgun",
        paragraphs: [
          "Roadgun Mobile Repair is veteran-owned and run by Travis, who has 26 years of experience and does every job himself. There is no counter and no upsell, just a mechanic who will tell you what is urgent, what can wait, and what belongs in a shop.",
          "Call Monday through Friday from 6 AM to 6 PM, or send the request form with your vehicle, the problem, and your address.",
        ],
      },
    ],
    featured: ["trailer-repair", "brake-repair", "battery-replacement"],
  },
];

// Jacksonville's copy lives on the homepage. /service-areas/jacksonville-nc/
// is not generated and 301s to / (public/_redirects).
export const HOME_AREA_SLUG = "jacksonville-nc";

export const confirmedAreas = areas.filter((a) => a.confirmed);

/** Areas that get their own /service-areas/[slug]/ route. */
export const areaPages = areas.filter((a) => a.slug !== HOME_AREA_SLUG);

export function areaHref(area: Area): string {
  return area.slug === HOME_AREA_SLUG ? "/" : `/service-areas/${area.slug}/`;
}

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
