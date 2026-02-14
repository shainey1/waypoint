import { CityActivityGuide } from "../types";

export const denverHiking: CityActivityGuide = {
  citySlug: "denver",
  activitySlug: "hiking",
  tagline: "Explore 14ers, alpine lakes, and Front Range trails",
  heroImage:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
  bestSeason: "May — October",
  quickStats: [
    { label: "Trails within 1hr", value: "50+" },
    { label: "14,000ft peaks", value: "58" },
    { label: "Base altitude", value: "5,280 ft" },
    { label: "Sunny days/year", value: "300" },
  ],

  weeklySignal: {
    date: "Feb 11, 2026",
    content:
      "Front Range trails are mostly clear below 8,000ft after last week's melt. Chautauqua is muddy on the north-facing sections — stick to Red Rocks or Lair o' the Bear this weekend. I-70 westbound was 90+ minutes to the Bakerville exit on Saturday. Leave by 6am or wait until Monday.",
    category: "conditions",
  },

  whatsDifferent: [
    {
      title: "Altitude changes everything",
      content:
        "Denver sits at 5,280 feet, and most trailheads start between 8,000–10,000 feet. You'll feel it. Expect to hike 20–30% slower than at sea level for the first few weeks. Drink more water than you think you need, and don't be embarrassed about turning around early. Most experienced Colorado hikers took weeks to acclimatize.",
    },
    {
      title: "Afternoon thunderstorms are real",
      content:
        "From June through August, storms build almost daily by early afternoon. Lightning above treeline is genuinely dangerous — not a minor inconvenience. The rule: start early, summit by noon, be below treeline by 1pm. This single habit will keep you safe all summer.",
    },
    {
      title: "The sun is intense",
      content:
        "UV exposure is 25–60% stronger than at sea level depending on your elevation. Sunscreen, a hat, and sunglasses aren't optional — they're essential gear, even on cloudy days. You will burn faster than you expect.",
    },
    {
      title: "Wildlife encounters happen",
      content:
        "Black bears, moose, mountain lions, and rattlesnakes are all present on Colorado trails. Moose are arguably the most dangerous — they're common near lakes and willows, and they charge. Give them space. Carry bear spray on remote trails. Make noise around blind corners.",
    },
    {
      title: "Trail access is seasonal",
      content:
        "Many higher-elevation trails don't fully melt out until late June or July. Check conditions before driving an hour to a trailhead. 14ers.com and AllTrails reports are your best friends for current conditions.",
    },
  ],

  spots: [
    // Beginner
    {
      name: "Chautauqua Trail — Boulder",
      type: "trail",
      description:
        "The classic introduction to Front Range hiking. Wide, well-maintained trail at the base of the Flatirons with stunning views. Can extend to Royal Arch for more challenge.",
      difficulty: "beginner",
      distance: "2.4 mi",
      elevationGain: "400 ft",
      driveTime: "40 min from Denver",
      externalUrl: "https://www.alltrails.com/trail/us/colorado/chautauqua-trail",
      insiderTip:
        "Go on a weekday morning. Weekend parking fills by 8am. The Ranger Cottage lot requires a reservation May–Oct.",
    },
    {
      name: "Red Rocks Trading Post Trail",
      type: "trail",
      description:
        "Loop trail around the iconic Red Rocks Amphitheatre. Easy terrain with dramatic red sandstone formations. Good introduction to elevation.",
      difficulty: "beginner",
      distance: "1.4 mi",
      elevationGain: "300 ft",
      driveTime: "25 min from Denver",
      externalUrl:
        "https://www.alltrails.com/trail/us/colorado/red-rocks-trading-post-trail",
      insiderTip:
        "Combine with the amphitheatre stairs workout that locals love. Free entry when there's no concert.",
    },
    {
      name: "Maxwell Falls Trail",
      type: "trail",
      description:
        "Forested trail to a seasonal waterfall in Evergreen. Shaded and pleasant, with a small waterfall payoff at the end.",
      difficulty: "beginner",
      distance: "3.2 mi",
      elevationGain: "560 ft",
      driveTime: "45 min from Denver",
      externalUrl:
        "https://www.alltrails.com/trail/us/colorado/maxwell-falls-lower-trail",
      insiderTip:
        "Best in late spring/early summer when snowmelt feeds the falls. The upper trail adds more distance if you want it.",
    },
    {
      name: "Lair o' the Bear Park",
      type: "trail",
      description:
        "Gentle creekside trail in a beautiful canyon. Perfect for getting your legs under you at altitude. Family-friendly.",
      difficulty: "beginner",
      distance: "2.5 mi",
      elevationGain: "200 ft",
      driveTime: "35 min from Denver",
      externalUrl: "https://www.jeffco.us/1286/Lair-o-the-Bear-Park",
      insiderTip: "Great in summer — the creek keeps the canyon cool. Dogs allowed on leash.",
    },

    // Intermediate
    {
      name: "Royal Arch Trail — Boulder",
      type: "trail",
      description:
        "Rocky scramble to a natural stone arch with panoramic views of Boulder. The last section involves hand-over-foot scrambling — a taste of Colorado's more technical terrain.",
      difficulty: "intermediate",
      distance: "3.4 mi",
      elevationGain: "1,400 ft",
      driveTime: "40 min from Denver",
      externalUrl:
        "https://www.alltrails.com/trail/us/colorado/royal-arch-trail",
      insiderTip:
        "The arch itself is around a blind corner at the top — keep going past where you think the trail ends.",
    },
    {
      name: "St. Mary's Glacier",
      type: "trail",
      description:
        "Short but steep hike to a permanent snowfield and alpine lake. A popular introduction to high-altitude hiking at 10,000+ feet.",
      difficulty: "intermediate",
      distance: "1.8 mi",
      elevationGain: "700 ft",
      driveTime: "55 min from Denver",
      externalUrl:
        "https://www.alltrails.com/trail/us/colorado/saint-marys-glacier",
      insiderTip:
        "Parking is $5 at the private lots. The road is rough but passable in a sedan. Bring traction for the snowfield even in summer.",
    },
    {
      name: "Herman Gulch",
      type: "trail",
      description:
        "Alpine meadow hike right off I-70. Wildflowers explode in July. Good altitude test before attempting 14ers.",
      difficulty: "intermediate",
      distance: "6.7 mi",
      elevationGain: "1,700 ft",
      driveTime: "55 min from Denver",
      externalUrl:
        "https://www.alltrails.com/trail/us/colorado/herman-gulch-trail",
      insiderTip:
        "Peak wildflower season is mid-July. Start by 7am — the parking lot is right off I-70 and fills fast on weekends.",
    },
    {
      name: "Chief Mountain",
      type: "trail",
      description:
        "Steady climb to a bald summit with 360-degree views. Popular with locals as a quick after-work hike from the foothills.",
      difficulty: "intermediate",
      distance: "2.8 mi",
      elevationGain: "1,100 ft",
      driveTime: "40 min from Denver",
      externalUrl:
        "https://www.alltrails.com/trail/us/colorado/chief-mountain-trail",
      insiderTip:
        "Catch sunset here — the views of the Continental Divide are incredible. Bring a headlamp for the walk down.",
    },

    // Advanced
    {
      name: "Grays & Torreys Peaks",
      type: "trail",
      description:
        "The closest 14ers to Denver and often recommended as a first 14er. Connected by a saddle so you can bag two in one day.",
      difficulty: "advanced",
      distance: "8.4 mi",
      elevationGain: "3,600 ft",
      driveTime: "1 hr 15 min from Denver",
      externalUrl: "https://www.14ers.com/route.php?route=gray1",
      insiderTip:
        "Start by 5am in summer. The road to the trailhead (Stevens Gulch) requires high clearance — or add 3 miles to start from the lower lot. Check 14ers.com for current road conditions.",
    },
    {
      name: "Quandary Peak",
      type: "trail",
      description:
        "Another excellent first 14er. Straightforward route with a well-defined trail. The final push above treeline is exposed and steep.",
      difficulty: "advanced",
      distance: "6.75 mi",
      elevationGain: "3,450 ft",
      driveTime: "1 hr 40 min from Denver",
      externalUrl: "https://www.14ers.com/route.php?route=quan1",
      insiderTip:
        "The east ridge is the standard route. Parking fills before 5am on summer weekends. Bring layers — it can be 30°F and windy at the summit in July.",
    },
    {
      name: "Longs Peak",
      type: "trail",
      description:
        "The iconic Front Range 14er visible from Denver. The Keyhole Route is a serious mountaineering objective with exposed scrambling. Not a beginner 14er.",
      difficulty: "advanced",
      distance: "14.5 mi",
      elevationGain: "5,100 ft",
      driveTime: "1 hr 30 min from Denver",
      externalUrl: "https://www.14ers.com/route.php?route=long1",
      insiderTip:
        "Most people start between 2–4am. The Keyhole section is Class 3 scrambling with real exposure. Build up to this one — don't make it your first 14er.",
    },

    // Shops
    {
      name: "REI Denver Flagship",
      type: "shop",
      description:
        "Good for basics and rentals. The staff are hit-or-miss — some are avid hikers, some are retail workers. Fine for buying standard gear, but if you need real route advice or technical recommendations, go to Neptune instead.",
      address: "1416 Platte St, Denver",
      externalUrl: "https://www.rei.com/stores/denver.html",
      insiderTip:
        "The real move here is the used gear section (Re/Supply) and the member garage sales a few times per year. That's where REI beats everyone on value.",
    },
    {
      name: "Neptune Mountaineering — Boulder",
      type: "shop",
      description:
        "This is where you go when REI's advice isn't cutting it. The staff here have actually summited what they're selling you. More expensive, smaller selection, but the knowledge is worth the drive to Boulder. Ask them about conditions — they'll tell you what's actually climbable this weekend, not what the website says.",
      address: "633 S Broadway, Boulder",
      externalUrl: "https://www.neptunemountaineering.com",
      insiderTip:
        "Check the basement for last season's gear at steep discounts. The upstairs museum of mountaineering history is worth 10 minutes.",
    },
    {
      name: "Wilderness Exchange Unlimited",
      type: "shop",
      description:
        "Consignment outdoor gear — the best place in Denver to build out your kit without spending REI prices. You'll find $300 packs for $80 and barely-used boots for half price. Quality varies, so inspect everything, but the deals are real. Go here before buying anything new.",
      address: "2401 15th St, Denver",
      externalUrl: "https://www.wildernessexchangeunlimited.com",
      insiderTip:
        "New inventory drops constantly. If you don't find your size today, come back next week. Also a great place to sell gear you've outgrown.",
    },
  ],

  communities: [
    {
      name: "Colorado Mountain Club",
      type: "club",
      description:
        "The single best way to meet hikers in Colorado if you just moved here. $75/year gets you access to organized group hikes at every level, mountaineering courses, and a community of people who actually show up. The \"intro to hiking\" course is worth it even if you've hiked before — it's Colorado-specific and you'll make friends on day one.",
      platform: "Website",
      url: "https://www.cmc.org",
      cost: "$75/year",
    },
    {
      name: "Denver Hiking Meetup Groups",
      type: "meetup",
      description:
        "Lower commitment than CMC — just show up to a hike. Multiple groups run weekly outings at all levels. Quality varies by organizer; \"Denver Outdoor Adventure Club\" and \"Colorado Hiking and Happy Hour\" tend to be the most active and well-organized. Good for your first month when you just want to hike with other humans.",
      platform: "Meetup",
      url: "https://www.meetup.com/find/?keywords=hiking&location=Denver",
      cost: "Free",
    },
    {
      name: "r/coloradohikers",
      type: "online",
      description:
        "Active subreddit for trail conditions, trip reports, and advice. Locals are helpful to newcomers. Good for real-time beta on conditions.",
      platform: "Reddit",
      url: "https://www.reddit.com/r/coloradohikers",
      cost: "Free",
    },
    {
      name: "14ers.com Community",
      type: "online",
      description:
        "The definitive resource for Colorado 14er information. Route descriptions, condition reports, and an active forum of experienced peak baggers.",
      platform: "Website",
      url: "https://www.14ers.com",
      cost: "Free",
    },
    {
      name: "Volunteer Trail Crews",
      type: "club",
      description:
        "Colorado Trail Foundation and local organizations run trail maintenance days. Great way to give back and meet committed hikers. CFI and Volunteers for Outdoor Colorado are the main orgs.",
      platform: "Various",
      url: "https://www.voc.org",
      cost: "Free",
    },
  ],

  resources: [
    {
      name: "AllTrails",
      type: "app",
      description:
        "Trail maps, reviews, and GPS tracking. Download offline maps for Colorado trails — cell service is unreliable in the mountains.",
      url: "https://www.alltrails.com",
      platform: "iOS, Android, Web",
      cost: "Free / $36/yr for offline maps",
    },
    {
      name: "14ers.com",
      type: "website",
      description:
        "The bible for Colorado 14er routes. Detailed route descriptions, photos, difficulty ratings, and current conditions. Read the route description before every 14er attempt.",
      url: "https://www.14ers.com",
      platform: "Web",
      cost: "Free",
    },
    {
      name: "COTREX",
      type: "app",
      description:
        "Colorado Trail Explorer — official state trail map. More comprehensive than AllTrails for Colorado-specific trails, especially lesser-known routes.",
      url: "https://trails.colorado.gov",
      platform: "iOS, Android, Web",
      cost: "Free",
    },
    {
      name: "Mountain Weather — weather.gov/bou",
      type: "website",
      description:
        "NWS Boulder office provides mountain-specific forecasts including above/below treeline conditions. More useful than regular weather apps for mountain hiking.",
      url: "https://www.weather.gov/bou/",
      platform: "Web",
      cost: "Free",
    },
  ],

  insiderTips: [
    "Start early. This isn't optional — it's the most important rule in Colorado hiking. On 14ers, that means 4–5am. On regular trails, be moving by 7am in summer.",
    "Buy an America the Beautiful pass ($80/year) immediately. It covers National Forest parking and National Park entry. Pays for itself in 3–4 trips.",
    "Trailhead parking fills shockingly early. Popular spots like Hanging Lake, Blue Lakes, and most 14er trailheads are full by 5–6am on summer weekends.",
    "Bring more water than you think. Altitude and dry air dehydrate you much faster than at lower elevations. A good rule: 1 liter per hour of hiking.",
    "Layer obsessively. It can be 30°F at the summit and 75°F at the trailhead on the same day. A puffy jacket, rain shell, and warm hat should be in your pack year-round.",
    "Check trail conditions before every hike, not just at the start of season. Conditions change weekly. AllTrails reviews (sorted by recent) and 14ers.com trip reports are your sources.",
    "Don't underestimate the drive. Trailheads that look close on a map can take 2+ hours on mountain roads. Factor in I-70 traffic — westbound is brutal on weekend mornings.",
    "Locals hike on weekdays when possible. If your schedule allows it, Tuesday–Thursday hikes are a completely different experience than Saturday.",
  ],

  beginnerChecklist: [
    "Start with trails under 5 miles and 1,000ft elevation gain for your first 2–3 weeks",
    "Invest in proper hiking boots or trail runners — cotton sneakers won't cut it on rocky trails",
    "Always carry: water (2+ liters), snacks, sunscreen, hat, sunglasses, rain jacket, and a headlamp",
    "Download offline maps before every hike — cell service is unreliable",
    "Tell someone your plan: where you're going and when you expect to be back",
    "Check the weather forecast the morning of — specifically mountain weather, not Denver weather",
    "Start early (before 8am) and set a turn-around time, not just a destination",
    "Give yourself 4–6 weeks to acclimatize before attempting anything above 12,000ft",
  ],

  seasonal: [
    {
      season: "Spring",
      months: "April — May",
      description:
        "Lower elevation trails (below 8,000ft) are accessible while higher trails are still snow-covered. Mud season is real — trails can be soggy. Great wildflowers at lower elevations.",
      highlights: [
        "Front Range foothills trails are green and uncrowded",
        "Waterfalls peak with snowmelt",
        "14ers are still in winter conditions — avoid unless you have mountaineering experience",
        "Watch for rattlesnakes on south-facing slopes as they emerge from hibernation",
      ],
    },
    {
      season: "Summer",
      months: "June — August",
      description:
        "Peak season. Most trails accessible by late June. Afternoon thunderstorms are daily from July onward. The busiest time — start early for parking and solitude.",
      highlights: [
        "14er season begins mid-June (conditions permitting)",
        "Alpine wildflowers peak in mid-July",
        "Start hikes by 6–7am to beat afternoon storms",
        "Mosquitoes near lakes and streams — bring bug spray",
      ],
    },
    {
      season: "Fall",
      months: "September — October",
      description:
        "Arguably the best hiking season in Colorado. Stable weather, cooler temps, fewer crowds, and aspen color. September is prime time.",
      highlights: [
        "Aspen groves turn gold mid-September through early October",
        "Storm risk drops significantly after Labor Day",
        "Cool mornings, warm afternoons — perfect hiking weather",
        "Last chance for high-altitude trails before snow closes them",
      ],
    },
    {
      season: "Winter",
      months: "November — March",
      description:
        "High-altitude trails are snow-covered. Lower elevation hikes are still excellent with microspikes and layers. Sunny days can be surprisingly warm.",
      highlights: [
        "Microspikes or snowshoes required on most mountain trails",
        "Front Range foothills often have bare trails between storms",
        "Far fewer people on trails — solitude is easy to find",
        "Avalanche awareness is essential for backcountry travel",
      ],
    },
  ],
};
