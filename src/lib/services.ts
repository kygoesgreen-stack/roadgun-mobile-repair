// Content for /services/[slug]/ pages and the homepage service cards.
// No dollar figures: the owner has not confirmed pricing. Keep it that way
// until Ky gets real numbers from Travis.

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Used in "Mobile {name} in Jacksonville, NC". */
  name: string;
  /** Short label for homepage cards and link lists. */
  cardTitle: string;
  cardDescription: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  intro: string[];
  included: string[];
  visit: string[];
  cost: string[];
  symptoms: string[];
  onSite: string[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "mobile-diagnostics",
    name: "Diagnostics",
    cardTitle: "On-Site Diagnostics",
    cardDescription:
      "Check engine light on? Car not starting? We bring professional diagnostic tools to your location and get to the bottom of it fast.",
    metaDescription:
      "Mobile vehicle diagnostics in Jacksonville, NC. Scan tools, electrical testing and an honest answer at your driveway. Veteran-owned. Call (910) 358-9027.",
    image: "/images/diagnostics.jpg",
    imageAlt: "Mechanic using a diagnostic scan tablet plugged into a car in Jacksonville, NC",
    intro: [
      "When something is wrong with your vehicle, the first job is finding out what. Roadgun Mobile Repair brings a professional scan tool, a multimeter, and 26 years of experience to your driveway, parking lot, or job site anywhere around Jacksonville, NC. You do not have to limp a sick car across town or arrange a ride home from a shop just to learn what is wrong.",
      "A code reader at a parts store tells you a number. A diagnosis tells you why that number showed up, what actually failed, and what it will take to fix it. That difference is where most wasted money on car repair comes from, and it is the part of the job we take the most care with.",
    ],
    included: [
      "Full scan of engine, transmission, ABS, airbag, and body modules where the vehicle supports it",
      "Live data review: fuel trims, sensor readings, misfire counts, charging voltage",
      "Battery, starter, and charging system testing",
      "Wiring and connector checks with a meter, not just a guess from a code",
      "Visual inspection of belts, hoses, leaks, and anything that looks out of place",
      "A plain-language explanation of what we found and what we recommend",
    ],
    visit: [
      "Call or send the request form with your vehicle and what it is doing. Travis will ask a few questions about when the problem happens, whether it is getting worse, and whether the vehicle is safe to start. We set a time that works for you, then come to your home, work, or wherever the vehicle is sitting.",
      "On site, we connect the scan tool, pull codes and freeze frame data, and then test the specific parts those codes point to. If the fix is something we can do in the driveway, we can often quote it on the spot and do it the same visit or schedule a return with the right parts.",
    ],
    cost: [
      "Having a vehicle diagnosed at your driveway saves the tow or the drive to a shop, and it saves the time you would spend waiting or arranging a second ride. Many shops charge a diagnostic fee plus a labor rate that covers a building, service writers, and a waiting room. A mobile visit puts that money into the actual testing.",
      "Call for a quote on your specific vehicle. We will tell you up front what the diagnostic visit costs so there are no surprises when we finish.",
    ],
    symptoms: [
      "Check engine light on, flashing, or coming and going",
      "Vehicle cranks but will not start, or will not crank at all",
      "Rough idle, hesitation, stalling, or loss of power",
      "Warning lights for ABS, traction control, or charging",
      "Electrical gremlins: dead battery overnight, flickering lights, accessories that quit",
    ],
    onSite: [
      "Most diagnostic work happens fine in a driveway. Scan data, electrical testing, and visual inspections do not need a lift. Many of the repairs that follow a diagnosis, such as sensors, coils, batteries, starters, alternators, and many vacuum leaks, can be done right where the vehicle sits.",
      "Some problems do need a shop. Internal transmission failures, jobs that require pulling an engine, and anything that needs the vehicle high on a lift for hours are better handled in a bay. If that is where your diagnosis lands, we will tell you straight and you will know exactly what to ask the shop for.",
    ],
    faqs: [
      {
        q: "Can you diagnose my car if it will not start?",
        a: "Yes. A no-start is one of the best reasons to call a mobile mechanic, because it saves you a tow. We test the battery, starter, fuel delivery, and ignition where the vehicle sits.",
      },
      {
        q: "Is a free code scan from a parts store the same thing?",
        a: "No. A free scan reads the stored code. A diagnosis tests the parts and wiring behind that code to find the actual failure, so you do not replace parts that were never bad.",
      },
      {
        q: "Do you work on trucks and diesels?",
        a: "We work on cars, pickups, SUVs, and many light and medium duty trucks. Call with the year, make, and model and we will tell you whether it is a good fit for a mobile visit.",
      },
      {
        q: "What if the repair needs a shop?",
        a: "We will tell you. You will leave with a clear explanation of what failed, so you can take it to a shop knowing what the job is and what it should involve.",
      },
    ],
    related: ["check-engine-light", "battery-replacement", "starter-alternator-repair"],
  },
  {
    slug: "brake-repair",
    name: "Brake Repair",
    cardTitle: "Brake Service",
    cardDescription:
      "Pads, rotors, calipers, and brake fluid. We handle the full brake job right in your driveway so you can stop with confidence.",
    metaDescription:
      "Mobile brake repair in Jacksonville, NC. Pads, rotors, calipers and fluid done in your driveway by a veteran-owned mechanic. Call (910) 358-9027.",
    image: "/images/brake-repair.jpg",
    imageAlt: "Red brake caliper and rotor behind a wheel during a mobile brake repair in Jacksonville, NC",
    intro: [
      "Brakes are the one system nobody should put off. Roadgun Mobile Repair does brake work at your home or workplace across Jacksonville and Onslow County, so a grinding noise does not have to turn into a day lost at a shop. Most pad and rotor jobs on cars, SUVs, and pickups are done in the driveway in a single visit.",
      "Travis has done brake work for 26 years. The goal on every brake job is the same: parts that fit right, hardware that is clean and lubricated, and a pedal that feels solid when we hand the keys back.",
    ],
    included: [
      "Brake pad replacement, front and rear",
      "Rotor replacement when rotors are worn below spec, warped, or scored",
      "Caliper replacement and slide pin service",
      "Brake hardware: clips, shims, and anti-rattle springs",
      "Brake fluid flush and bleeding",
      "Inspection of hoses, lines, and parking brake operation",
    ],
    visit: [
      "When you call, tell us the year, make, and model and what the brakes are doing. Squealing, grinding, pulsing, and a soft pedal all point to different things, and knowing ahead of time helps us bring the right parts.",
      "At your location, we lift the vehicle with jacks and stands, pull the wheels, and measure pads and rotors. We show you what we find before any work goes past the quote. After the job, we bed in the new pads, check the pedal, and road test the vehicle when it is safe to do so.",
    ],
    cost: [
      "A driveway brake job skips the tow if the brakes are unsafe to drive on, and it skips the waiting room if they are not. Shop pricing has to cover overhead that a mobile setup does not carry, so the money goes to parts and labor instead of the building.",
      "Brake pricing depends on the vehicle and on whether rotors or calipers need replacing along with pads. Call for a quote and we will give you a clear number before we start.",
    ],
    symptoms: [
      "High-pitched squeal when braking, which is often the pad wear indicator",
      "Grinding or metal-on-metal noise",
      "Steering wheel or pedal vibration when stopping",
      "Pulling to one side under braking",
      "Soft, spongy, or sinking brake pedal, or a brake warning light",
    ],
    onSite: [
      "Pads, rotors, calipers, hardware, and fluid service are all standard driveway jobs. We need a reasonably flat, firm surface to jack the vehicle safely. A concrete driveway or a paved lot is ideal.",
      "Rusted brake lines that need to be replaced end to end, ABS module repairs, and some rear drum systems with seized components can be better suited to a shop. If we find something like that, we will explain what we saw and what your options are.",
    ],
    faqs: [
      {
        q: "Can you do brakes in an apartment parking lot?",
        a: "Often yes, as long as the property allows it and there is a flat, paved spot. Let us know when you call so we can plan for it.",
      },
      {
        q: "Do I always need new rotors with new pads?",
        a: "Not always. We measure the rotors. If they are within spec and not warped or scored, we can reuse them. If they are worn, we will show you why they need replacing.",
      },
      {
        q: "How long does a mobile brake job take?",
        a: "Most pad and rotor jobs on one axle take one to two hours on site. Calipers, fluid flushes, or both axles add time.",
      },
      {
        q: "Is it safe to drive with grinding brakes?",
        a: "Grinding usually means the pad material is gone and metal is contacting the rotor. Stopping distance gets worse and damage spreads fast. It is a good reason to have us come to you instead of driving it.",
      },
    ],
    related: ["mobile-diagnostics", "pre-purchase-inspection", "trailer-repair"],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    cardTitle: "Batteries & Charging",
    cardDescription:
      "Dead battery or failing alternator? We test, replace, and get you back on the road without a trip to the parts store.",
    metaDescription:
      "Mobile battery replacement in Jacksonville, NC. We test the battery and charging system and install a new one where your car sits. Call (910) 358-9027.",
    image: "/images/battery-check.jpg",
    imageAlt: "Mechanic disconnecting a car battery terminal during mobile battery replacement in Jacksonville, NC",
    intro: [
      "A dead battery always seems to happen at the worst time: before work, in a parking lot, or the morning of a long drive. Roadgun Mobile Repair comes to you anywhere around Jacksonville, NC, tests the battery and charging system, and installs a new battery where the vehicle sits.",
      "Heat in eastern North Carolina is hard on batteries. Summer temperatures break them down from the inside, and many fail the first cold morning in fall. Testing before you replace matters, because a weak alternator or a parasitic drain will kill a brand new battery just as fast.",
    ],
    included: [
      "Battery load or conductance test",
      "Charging system test to confirm the alternator is doing its job",
      "Starter draw check when the complaint is slow cranking",
      "Terminal and cable cleaning, and replacement of corroded ends",
      "Installation of a correctly sized battery for your vehicle",
      "Parasitic draw testing when a battery keeps dying overnight",
    ],
    visit: [
      "Call with your vehicle and where it is parked. If it will not start, tell us, and we will come ready to jump it or test it in place. We confirm the right battery group size for your vehicle before we head out.",
      "On site, we test before we replace. If the battery is the problem, we swap it, clean the connections, and verify charging voltage with the engine running. If the test points to the alternator, starter, or a drain, you will know before you spend money on a battery you did not need.",
    ],
    cost: [
      "Replacing a battery in the driveway saves a jump start from a friend, a trip to the parts store, and the hassle of doing the swap yourself. Some newer vehicles also need the battery registered or have hard-to-reach battery locations, which is where having a mechanic do it pays off.",
      "Price depends on the battery size and type your vehicle needs. Call and we will quote the battery and install together.",
    ],
    symptoms: [
      "Slow, labored cranking, especially on cool mornings",
      "Clicking with no crank",
      "Dim headlights or interior lights when starting",
      "Battery warning light on the dash",
      "Swollen battery case, corrosion on the terminals, or a rotten egg smell",
    ],
    onSite: [
      "Battery replacement is one of the most common mobile jobs we do. It is almost always done where the vehicle sits, whether that is a driveway, a work lot, or a parking space.",
      "The only time a battery call turns into something bigger is when testing shows the real problem is elsewhere. A failed alternator or starter is usually still a driveway job. A deep electrical short or a wiring harness problem may take more time, and we will tell you what we find.",
    ],
    faqs: [
      {
        q: "Can you replace my battery if the car is completely dead?",
        a: "Yes. That is the most common situation we see. We test and replace in place, then confirm the vehicle starts and charges before we leave.",
      },
      {
        q: "How long do car batteries last in Jacksonville?",
        a: "In hot climates like coastal North Carolina, many batteries last around three to five years. Heat shortens battery life more than cold does, even though cold mornings are when they finally quit.",
      },
      {
        q: "My new battery died again. What is wrong?",
        a: "Usually the alternator is not charging or something is drawing power with the key off. We test the charging system and check for parasitic draw to find it.",
      },
      {
        q: "Do you handle AGM and start-stop batteries?",
        a: "Yes. Many newer vehicles use AGM batteries and some need the new battery registered with the vehicle. Tell us your vehicle and we will plan for it.",
      },
    ],
    related: ["starter-alternator-repair", "mobile-diagnostics", "check-engine-light"],
  },
  {
    slug: "starter-alternator-repair",
    name: "Starter and Alternator Repair",
    cardTitle: "Starters & Alternators",
    cardDescription:
      "Grinding start or dimming lights? We diagnose and replace starters and alternators on-site to keep your electrical system healthy.",
    metaDescription:
      "Mobile starter and alternator repair in Jacksonville, NC. Tested and replaced where your vehicle sits, no tow needed. Call (910) 358-9027.",
    image: "/images/engine-work.jpg",
    imageAlt: "Mechanic working in an engine bay during a mobile alternator replacement in Jacksonville, NC",
    intro: [
      "A bad starter leaves you stuck with a vehicle that will not turn over. A bad alternator leaves you stuck a little later, after the battery drains down on the road. Either way, Roadgun Mobile Repair can test and replace starters and alternators at your location around Jacksonville, NC, which usually means no tow.",
      "Both parts often get blamed for each other, and both get blamed for batteries. Testing the whole starting and charging system before we replace anything is how we make sure you pay for the part that actually failed.",
    ],
    included: [
      "Battery, starter, and alternator testing as a system",
      "Starter replacement, including cables and connections",
      "Alternator replacement",
      "Serpentine belt inspection and replacement when it drives the alternator",
      "Checking grounds and main power cables for corrosion or damage",
      "Final charging voltage and start test before we leave",
    ],
    visit: [
      "Tell us what happens when you turn the key or press start. A single click, rapid clicking, grinding, or nothing at all each points in a different direction. Knowing that ahead of time helps us bring the right part for your vehicle.",
      "At your location, we test the battery first, then check voltage at the starter and the alternator output. Once we confirm the failed part, we replace it, clean the connections, and verify the vehicle starts and charges correctly.",
    ],
    cost: [
      "A no-start vehicle normally means a tow to the shop, a wait for diagnosis, and a second trip to pick it up. A mobile visit removes all three. Labor is often similar between a mobile mechanic and a shop for the same job, but you save the tow and the lost time.",
      "Starter and alternator pricing varies a lot by vehicle because some are easy to reach and some sit under intake manifolds. Call for a quote on your specific vehicle.",
    ],
    symptoms: [
      "Single click or rapid clicking when you try to start",
      "Grinding or whirring noise while cranking",
      "Battery or charging light on while driving",
      "Headlights and dash lights dim or flicker at idle",
      "New battery keeps going dead within days",
    ],
    onSite: [
      "On most cars, trucks, and SUVs, starters and alternators are standard driveway work. We carry the tools to reach them on common vehicles and can safely support the vehicle on stands when the starter is underneath.",
      "A few vehicles bury the starter under the intake or require removing large components to reach it. Those jobs take longer and occasionally make more sense in a shop. We will tell you when you call if your vehicle is one of them.",
    ],
    faqs: [
      {
        q: "How do I know if it is the starter or the battery?",
        a: "If lights and accessories work normally but the engine does not crank, the starter is a likely suspect. If everything is dim or dead, it is more likely the battery. We test both to be sure.",
      },
      {
        q: "Can I drive with a bad alternator?",
        a: "Only briefly. The vehicle runs off the battery until it drains, then it shuts down, sometimes in traffic. It is safer to have us come to you.",
      },
      {
        q: "Do you use new or remanufactured parts?",
        a: "It depends on the vehicle and what you prefer. We will go over the options and the tradeoffs when we quote the job.",
      },
      {
        q: "How long does a mobile starter or alternator job take?",
        a: "Many are done in one to three hours on site. Hard-to-reach starters take longer, and we will give you a realistic estimate when you call.",
      },
    ],
    related: ["battery-replacement", "belts-hoses", "mobile-diagnostics"],
  },
  {
    slug: "oil-change",
    name: "Oil Change",
    cardTitle: "Oil & Fluid Changes",
    cardDescription:
      "Keep your engine protected with fresh oil, transmission fluid, coolant, and power steering fluid. Quick service at your convenience.",
    metaDescription:
      "Mobile oil change in Jacksonville, NC. Oil, filter and fluid service at your home or work, with used oil hauled away. Call (910) 358-9027.",
    image: "/images/mobile-mechanic.jpg",
    imageAlt: "Mechanic leaning into the engine bay of a car parked outside for a mobile oil change in Jacksonville, NC",
    intro: [
      "An oil change is the simplest thing you can do to keep an engine alive, and also the easiest one to put off because it means sitting at a lube shop. Roadgun Mobile Repair does oil and fluid service at your home or job site around Jacksonville, NC, while you get on with your day.",
      "Because Travis is a working mechanic rather than a quick-lube tech, an oil change visit is also a chance to have someone experienced look over the rest of the vehicle. If something is starting to go, you hear about it before it strands you.",
    ],
    included: [
      "Engine oil and filter change with the oil type your manufacturer specifies",
      "Check and top off of coolant, brake, power steering, and washer fluid",
      "Transmission fluid service on vehicles where a drain and fill is appropriate",
      "Coolant drain and refill",
      "Quick look at belts, hoses, tires, and visible leaks",
      "Used oil and filters taken with us for proper disposal",
    ],
    visit: [
      "When you book, tell us the year, make, model, and engine so we bring the right oil and filter. We use a drain pan and mats so nothing ends up on your driveway.",
      "On site, we drain the oil, replace the filter, refill to spec, and check the level after the engine runs. Then we check the other fluids and give the vehicle a quick look over. If we see anything that needs attention, we point it out and you decide what to do with it.",
    ],
    cost: [
      "A quick-lube shop is fast once you are in the bay, but the wait, the drive, and the upsell at the counter add up. A mobile oil change costs you almost no time, and there is no pressure to buy add-ons you do not need.",
      "Price depends on your engine's oil capacity and whether it needs synthetic. Call for a quote, and ask about doing multiple vehicles in the same visit.",
    ],
    symptoms: [
      "Oil change reminder or maintenance light on the dash",
      "Oil level low on the dipstick or oil looks dark and gritty",
      "Engine sounds louder or ticks more than usual",
      "Oil pressure warning light, which means stop driving and call",
      "It has been more than your manufacturer's interval since the last change",
    ],
    onSite: [
      "Oil and filter changes and most fluid top offs are routine mobile work. We need a flat spot where the vehicle can sit level so we can get an accurate reading after the refill.",
      "Some transmission services, such as a full fluid exchange on certain sealed units, are better done with shop equipment. If your vehicle calls for that, we will tell you rather than doing a half measure.",
    ],
    faqs: [
      {
        q: "Will you leave a mess on my driveway?",
        a: "No. We use a drain pan and ground protection, and we take the used oil and filter with us for recycling.",
      },
      {
        q: "Can you change oil at my workplace?",
        a: "Often yes, as long as the property allows it. Many customers have us service the vehicle while they are at work so they never lose time.",
      },
      {
        q: "Do you use synthetic oil?",
        a: "We use whatever oil your manufacturer specifies. Many newer engines require full synthetic, and we will confirm that when you book.",
      },
      {
        q: "Can you do several vehicles at once?",
        a: "Yes. Doing a household's vehicles or a small fleet in one visit is one of the best uses of a mobile mechanic.",
      },
    ],
    related: ["belts-hoses", "brake-repair", "pre-purchase-inspection"],
  },
  {
    slug: "belts-hoses",
    name: "Belt and Hose Replacement",
    cardTitle: "Belts & Hoses",
    cardDescription:
      "Cracked serpentine belt or aging radiator hose? We inspect and replace them before they leave you stranded.",
    metaDescription:
      "Mobile belt and hose replacement in Jacksonville, NC. Serpentine belts, radiator and heater hoses replaced on site. Call (910) 358-9027.",
    image: "/images/engine-work.jpg",
    imageAlt: "Mechanic reaching into an engine bay to replace a belt during mobile service in Jacksonville, NC",
    intro: [
      "Belts and hoses are cheap parts that cause expensive problems when they fail. A snapped serpentine belt kills your charging, power steering, and often the water pump all at once. A burst radiator hose can overheat an engine in a few miles. Roadgun Mobile Repair replaces both at your location around Jacksonville, NC.",
      "Summer heat and humidity on the coast age rubber faster than most people expect. A belt or hose can look fine from the top and be cracked underneath, so a hands-on inspection is worth more than a glance.",
    ],
    included: [
      "Serpentine and accessory belt replacement",
      "Belt tensioner and idler pulley inspection and replacement",
      "Upper and lower radiator hose replacement",
      "Heater hose replacement",
      "Coolant refill and air bleeding after hose work",
      "Leak check and pressure check of the cooling system",
    ],
    visit: [
      "Call and describe what you are seeing or hearing: a squeal at startup, coolant on the ground, steam, or a temperature gauge climbing. If the vehicle is overheating, do not drive it. We will come to it.",
      "On site, we inspect the belt routing, tensioner, and pulleys, and squeeze and look at every coolant hose. We replace what has failed and point out anything close to failing. After cooling system work, we refill, bleed air out, and run the engine to temperature to check for leaks.",
    ],
    cost: [
      "A belt or hose failure usually means the vehicle should not be driven, which normally means a tow. Having the part replaced where the vehicle sits removes the tow entirely and gets you going the same day in most cases.",
      "Most belt and hose jobs are modest in parts cost, with labor depending on how accessible the part is on your engine. Call for a quote.",
    ],
    symptoms: [
      "Squealing or chirping from the engine, especially at startup or in the rain",
      "Visible cracks, glazing, or fraying on the belt",
      "Coolant puddles, a sweet smell, or white steam from under the hood",
      "Temperature gauge climbing or an overheating warning",
      "Heavy steering or a battery light right after a loud noise under the hood",
    ],
    onSite: [
      "Serpentine belts, tensioners, idler pulleys, and most radiator and heater hoses are straightforward mobile jobs. We bring coolant to refill the system properly after hose work.",
      "Timing belts are different. They are internal to the engine on many vehicles and involve more teardown. Some can be done on site and some are better in a shop. If you are asking about a timing belt, call and we will tell you where your vehicle falls.",
    ],
    faqs: [
      {
        q: "How often should a serpentine belt be replaced?",
        a: "Many last somewhere around 60,000 to 100,000 miles, but heat and age matter as much as mileage. Replace it when it shows cracks, glazing, or noise.",
      },
      {
        q: "Can I drive with a squealing belt?",
        a: "A squeal is a warning, not a failure. It is worth having checked soon, because if the belt breaks you lose charging and often cooling at the same time.",
      },
      {
        q: "My car is overheating. Should I drive it to you?",
        a: "No. Driving an overheating engine can warp the cylinder head. Let it cool and call us. We will come to the vehicle.",
      },
      {
        q: "Do you replace timing belts?",
        a: "On some vehicles, yes. It depends on the engine. Call with your year, make, and model and we will tell you if it is a mobile job.",
      },
    ],
    related: ["oil-change", "starter-alternator-repair", "check-engine-light"],
  },
  {
    slug: "check-engine-light",
    name: "Check Engine Light Diagnosis",
    cardTitle: "Check Engine Light",
    cardDescription:
      "We scan, read the codes, and give you an honest answer about what is going on and what needs to be done. No guesswork.",
    metaDescription:
      "Check engine light diagnosis in Jacksonville, NC at your driveway. Codes read, parts tested, honest answer. Veteran-owned. Call (910) 358-9027.",
    image: "/images/diagnostics.jpg",
    imageAlt: "Scan tool connected under a dashboard reading check engine light codes in Jacksonville, NC",
    intro: [
      "A check engine light can mean a loose gas cap or it can mean the engine is misfiring hard enough to damage the catalytic converter. You cannot tell which from the dash. Roadgun Mobile Repair comes to you around Jacksonville, NC, reads the codes, tests the parts behind them, and tells you honestly how urgent it is.",
      "The honest part matters. A lot of check engine repairs go wrong because someone replaced the part named in the code without checking why it set. We test first, then recommend.",
    ],
    included: [
      "Reading stored, pending, and permanent codes",
      "Freeze frame data review to see the conditions when the code set",
      "Testing the sensors, wiring, and components the codes point to",
      "Checking for vacuum leaks, misfires, and fuel trim problems",
      "Evaporative system checks for gas cap and EVAP codes",
      "Clearing codes after a confirmed repair and verifying the light stays off",
    ],
    visit: [
      "When you call, tell us whether the light is steady or flashing, and whether the vehicle drives differently. A flashing light usually means an active misfire, and we will tell you to keep driving to a minimum until it is checked.",
      "On site, we scan every module, look at live engine data, and test the likely causes. You get a clear explanation of what is wrong, how serious it is, and what fixing it involves. Many common causes such as coils, plugs, sensors, and vacuum leaks can be repaired the same visit or on a scheduled return.",
    ],
    cost: [
      "A shop visit for a check engine light usually means dropping the vehicle off and waiting for a call. A driveway diagnosis gets you the answer while you watch, and you do not lose the vehicle for the day.",
      "We quote the diagnostic visit up front. If a repair follows, we quote that separately before we start so you can decide.",
    ],
    symptoms: [
      "Steady check engine light with no change in how the vehicle drives",
      "Flashing check engine light, often with shaking or rough running",
      "Worse fuel economy than normal",
      "Rough idle, hesitation, or stalling",
      "Failed or upcoming North Carolina emissions inspection because of an active code",
    ],
    onSite: [
      "Nearly every check engine diagnosis can be done in a driveway. Many of the repairs can too: ignition coils, spark plugs on accessible engines, oxygen sensors, mass airflow sensors, EVAP valves, and vacuum hoses.",
      "Codes that trace back to internal engine or transmission problems, or catalytic converter replacement that needs cutting and welding, may need a shop. We will tell you if that is where it is heading.",
    ],
    faqs: [
      {
        q: "Is it safe to drive with the check engine light on?",
        a: "If it is steady and the vehicle drives normally, it is usually safe to drive carefully until it is checked. If it is flashing, limit driving and call, because an active misfire can damage the catalytic converter.",
      },
      {
        q: "Will you just clear the light?",
        a: "No. Clearing a code without fixing the cause only hides it, and it will come back. We clear codes after a confirmed repair.",
      },
      {
        q: "Can a loose gas cap really turn the light on?",
        a: "Yes. A loose or worn cap can set an evaporative system code. We check it along with the rest of the EVAP system before recommending anything bigger.",
      },
      {
        q: "Will the light keep me from passing inspection?",
        a: "In North Carolina, an illuminated check engine light on a vehicle that requires an emissions inspection usually means it will not pass. Fixing the cause is the way through.",
      },
    ],
    related: ["mobile-diagnostics", "battery-replacement", "oil-change"],
  },
  {
    slug: "pre-purchase-inspection",
    name: "Pre-Purchase Inspection",
    cardTitle: "Pre-Purchase Inspections",
    cardDescription:
      "Buying a used vehicle? Get a thorough, honest inspection at the seller's location before you commit your money.",
    metaDescription:
      "Mobile pre-purchase inspection in Jacksonville, NC. We inspect the used car at the seller's location before you buy. Call (910) 358-9027.",
    image: "/images/mobile-mechanic.jpg",
    imageAlt: "Mechanic inspecting the engine bay of a used car at the seller's location in Jacksonville, NC",
    intro: [
      "Buying a used vehicle in the Jacksonville area moves fast, especially during PCS season when Marines and their families are selling and buying on short timelines. Roadgun Mobile Repair meets you at the seller's driveway or the dealer's lot and inspects the vehicle before you hand over money.",
      "You get an independent opinion from a mechanic with 26 years of experience and no stake in whether you buy. If the vehicle is solid, you buy with confidence. If it is not, you walk away or negotiate with facts instead of a feeling.",
    ],
    included: [
      "Computer scan of all modules for stored and pending codes",
      "Engine, transmission, and cooling system check for leaks, noises, and condition",
      "Brake, suspension, steering, and tire inspection",
      "Battery, starting, and charging system test",
      "Frame, underbody, and rust check, including signs of flood or accident repair",
      "Test drive when the seller allows it, and a plain-language rundown of what we found",
    ],
    visit: [
      "Send us the listing or the year, make, model, and where the vehicle is. We coordinate a time with you, and you let the seller know a mechanic is coming. A seller who will not allow an inspection is telling you something.",
      "At the vehicle, we scan it, inspect it top and bottom, and drive it when possible. We walk you through what we found, with photos when that helps, and tell you what we would expect to spend on it in the near future so you can make a decision.",
    ],
    cost: [
      "Taking a seller's vehicle to a shop for inspection means coordinating the seller, the shop, and your own schedule, and many private sellers will not agree to it. A mobile inspection happens where the vehicle already is.",
      "An inspection costs a small fraction of what a hidden transmission or head gasket problem would. Call for pricing.",
    ],
    symptoms: [
      "Seller says it just needs a small repair or a recharge",
      "Check engine light is off but the battery was recently disconnected",
      "Fresh undercoating, new carpet, or a strong air freshener smell",
      "Price looks too good for the mileage and model",
      "You are buying from out of town or on a short PCS deadline",
    ],
    onSite: [
      "A pre-purchase inspection is built to be mobile. Everything we need to evaluate a used car, truck, or SUV comes with us. We can inspect at a private home, a dealer lot, or a base-adjacent parking area.",
      "The one limit is lifting. Without a lift we inspect underneath with jacks, stands, and lights. For most buyers that catches what matters. If the vehicle is a high-dollar purchase where you want every inch seen from underneath, we will tell you and help you decide.",
    ],
    faqs: [
      {
        q: "Do I need to be there for the inspection?",
        a: "It helps, because you get to see what we see. If you cannot be there, we can call you afterward and walk you through it.",
      },
      {
        q: "Can you inspect at a dealership?",
        a: "Yes, as long as the dealership allows an outside inspection. Most reputable dealers do.",
      },
      {
        q: "How long does an inspection take?",
        a: "Most take about an hour on site, plus a test drive if the seller allows one.",
      },
      {
        q: "Can you inspect trucks and trailers?",
        a: "Yes. We inspect pickups, SUVs, and many trailers, including brakes, bearings, and wiring on the trailer side.",
      },
    ],
    related: ["mobile-diagnostics", "brake-repair", "trailer-repair"],
  },
  {
    slug: "trailer-repair",
    name: "Trailer Repair",
    cardTitle: "Trailer Services",
    cardDescription:
      "Wiring, lights, brakes, axles, and bearings on utility, cargo, equipment, and boat trailers. We keep your trailer road-ready.",
    metaDescription:
      "Mobile trailer repair in Jacksonville, NC. Lights, wiring, brakes, bearings and axles on utility, cargo and boat trailers. Call (910) 358-9027.",
    image: "/images/mobilemech.jpg",
    imageAlt: "Travis of Roadgun Mobile Repair working on a truck outdoors near Jacksonville, NC",
    intro: [
      "Trailers are hard to get to a shop. You need a tow vehicle, the lights have to work to be legal, and many shops do not want trailer work at all. Roadgun Mobile Repair fixes utility, cargo, equipment, and boat trailers where they are parked around Jacksonville, Swansboro, and the rest of Onslow County.",
      "Boat trailers on the coast take a beating from salt water, and landscaping and equipment trailers see heavy loads every day. Travis has kept trailers working for contractors and weekend boaters alike.",
    ],
    included: [
      "Trailer light and wiring diagnosis and repair",
      "Plug and connector replacement, 4-pin and 7-pin",
      "Wheel bearing service and replacement",
      "Electric and surge brake inspection and repair",
      "Axle, spring, and hub inspection",
      "Tire, coupler, and safety chain checks",
    ],
    visit: [
      "Call and tell us the trailer type, the axle count, and what is wrong. Photos of the plug and the problem area help us bring the right parts. The trailer does not need to be hooked up for us to work on it.",
      "On site, we chase wiring faults with a meter and a tester instead of just swapping bulbs. For bearings and brakes, we jack and support the trailer, pull the hubs, and inspect or replace the parts. Before we leave, we test lights and brakes with your tow vehicle when it is available.",
    ],
    cost: [
      "Getting a trailer to a shop takes a working tow vehicle and working lights, which is exactly what you may not have. Repairing it where it sits removes that problem and the time lost dropping it off and picking it up.",
      "Trailer work pricing depends on the size of the trailer and the parts involved. Call for a quote.",
    ],
    symptoms: [
      "Lights not working, working intermittently, or the wrong lights coming on",
      "Hot hub after a drive, grinding, or wobble in a wheel",
      "Trailer brakes not engaging, locking up, or pulling",
      "Corroded plug or green crusty connectors",
      "Uneven tire wear or a trailer that tracks crooked",
    ],
    onSite: [
      "Lights, wiring, plugs, bearings, and brake components are all regular mobile trailer jobs. We need enough room around the trailer to jack it safely and pull the wheels.",
      "Structural welding on a cracked frame, full axle replacement on a heavy equipment trailer, or major tongue repairs may need a fabrication shop. We will tell you if that is what we see and help you figure out the next step.",
    ],
    faqs: [
      {
        q: "Do you work on boat trailers?",
        a: "Yes. Boat trailers are some of our most common trailer jobs because salt water is hard on bearings, brakes, and wiring.",
      },
      {
        q: "Does the trailer need to be hooked up?",
        a: "No. We can work on it parked. If you want us to test lights and brakes with your truck, have the tow vehicle nearby.",
      },
      {
        q: "How often should trailer bearings be serviced?",
        a: "A common guideline is once a year or every 12,000 miles, and more often for boat trailers that go in the water. If a hub runs hot, have it checked right away.",
      },
      {
        q: "Can you fix trailer wiring that keeps failing?",
        a: "Yes. Repeat failures usually come from corroded grounds or damaged harness sections, not bulbs. We trace the circuit and repair the cause.",
      },
    ],
    related: ["brake-repair", "pre-purchase-inspection", "mobile-diagnostics"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
