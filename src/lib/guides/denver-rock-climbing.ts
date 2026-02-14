import { CityActivityGuide } from "../types";

export const denverRockClimbing: CityActivityGuide = {
  citySlug: "denver",
  activitySlug: "rock-climbing",
  tagline: "World-class climbing from gym to granite",
  heroImage:
    "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1600&q=80",
  bestSeason: "March — November",
  quickStats: [
    { label: "Climbing gyms", value: "15+" },
    { label: "Outdoor crags within 1hr", value: "30+" },
    { label: "Classic routes", value: "1,000s" },
    { label: "Season length", value: "Year-round (gym)" },
  ],

  weeklySignal: {
    date: "Feb 11, 2026",
    content:
      "South-facing crags in Clear Creek Canyon are climbable this weekend with temps in the 40s. Conditions are dry. North Cheyenne Canyon near the Springs has good winter climbing if you're willing to drive. Indoor gyms are busy as usual — weekday mornings are your best bet for wall space.",
    category: "conditions",
  },

  whatsDifferent: [
    {
      title: "Indoor gyms are exceptional",
      content:
        "Denver's gym scene is one of the best in the country. Movement, Earth Treks, and CATS have multiple massive facilities with top-tier route setting. You could climb only indoors and have a fulfilling climbing life here. Many locals supplement outdoor seasons with year-round gym training.",
    },
    {
      title: "Outdoor variety is unmatched",
      content:
        "Within 90 minutes of Denver, you can climb granite in Boulder Canyon, gneiss in Clear Creek, sandstone at Shelf Road, and limestone at Rifle. Each rock type climbs differently. You'll develop a broad skill set just by exploring what's nearby.",
    },
    {
      title: "Altitude affects everything",
      content:
        "You'll pump out faster at 8,000+ feet than at sea level. Allow extra rest between attempts, especially when you're new. Hydration matters even more than at the gym. Your endurance will build over a few months of acclimating.",
    },
    {
      title: "Seasons dictate destinations",
      content:
        "Summer sends you to high-altitude granite (Lumpy Ridge, Rocky Mountain National Park). Fall is Shelf Road season. Spring and fall are ideal for Clear Creek and Boulder Canyon. Winter keeps you in the gym or chasing south-facing walls on warm days. Planning around seasons is how locals maximize outdoor days.",
    },
    {
      title: "The community is strong",
      content:
        "Colorado's climbing community is welcoming to newcomers. Gym climbers are happy to share beta, and the outdoor climbing community maintains a culture of mentorship. Finding partners is easy — just show up, be friendly, and climb consistently.",
    },
  ],

  spots: [
    // Indoor Gyms - Beginner Friendly
    {
      name: "Movement — RiNo",
      type: "gym",
      description:
        "The flagship Denver gym. Massive facility with bouldering, top-rope, lead, and a dedicated training area. Excellent route setting that spans all grades. The vibe is social and welcoming.",
      difficulty: "beginner",
      address: "1155 W 33rd Ave, Denver",
      driveTime: "10-20 min from downtown",
      externalUrl: "https://www.movementgyms.com/denver",
      insiderTip:
        "Weekday mornings and early afternoons are least crowded. Tuesday and Thursday nights are packed. The yoga classes are solid if you want to add flexibility training.",
    },
    {
      name: "Earth Treks — Golden",
      type: "gym",
      description:
        "Huge gym near the mouth of Clear Creek Canyon. Strong bouldering section and good lead walls. Convenient for post-work sessions before heading outdoors on weekends.",
      difficulty: "beginner",
      address: "17899 W Colfax Ave, Golden",
      driveTime: "25 min from Denver",
      externalUrl: "https://www.earthtreksclimbing.com/golden/",
      insiderTip:
        "Stop here after outdoor sessions in Clear Creek to get a workout in air conditioning. The proximity to real rock makes Golden location popular with outdoor climbers.",
    },
    {
      name: "Movement — Boulder",
      type: "gym",
      description:
        "Boulder's premier climbing gym. Strong competitive climbing scene. The setting tends to be slightly harder than the Denver locations — good for pushing your grade.",
      difficulty: "beginner",
      address: "2845 Valmont Rd, Boulder",
      driveTime: "40 min from Denver",
      externalUrl: "https://www.movementgyms.com/boulder",
      insiderTip:
        "If you want to train with stronger climbers, Boulder is the spot. The local climbing culture is serious. Good cafe for post-climb food.",
    },
    {
      name: "CATS Climbing — Colorado Springs",
      type: "gym",
      description:
        "Worth the drive if you're exploring climbing in the Springs. Excellent training facilities and strong local community. Good launching point for North Cheyenne outdoor climbing.",
      difficulty: "beginner",
      address: "825 S Sierra Madre St, Colorado Springs",
      driveTime: "1 hr from Denver",
      externalUrl: "https://www.catsclimbing.com",
      insiderTip:
        "Day passes work for occasional visits. If you're climbing in the Springs area frequently, consider multi-gym membership options.",
    },

    // Outdoor - Beginner
    {
      name: "North Table Mountain — Golden",
      type: "trail",
      description:
        "Basalt bouldering with easy access from Golden. Good for beginners learning outdoor movement. Problems range from V0 to V8 with easy approaches. The rock is textured and friendly.",
      difficulty: "beginner",
      distance: "0.5 mi approach",
      elevationGain: "200 ft",
      driveTime: "25 min from Denver",
      externalUrl: "https://www.mountainproject.com/area/105745095/north-table-mountain",
      insiderTip:
        "Go in the morning before the rock heats up. Bring crash pads if you have them, or find partners at the gym who have pads and are heading out.",
    },
    {
      name: "Morrison Wall — Morrison",
      type: "trail",
      description:
        "Roadside sport climbing near Red Rocks. Short approach, bolted routes from 5.6 to 5.11. Excellent first outdoor crag for gym climbers transitioning outside.",
      difficulty: "beginner",
      distance: "50 ft approach",
      driveTime: "25 min from Denver",
      externalUrl: "https://www.mountainproject.com/area/105744370/morrison",
      insiderTip:
        "The rock is sandstone — different from gym holds. Start on easier grades than you climb indoors to learn the rock. Popular after work on weekday evenings.",
    },

    // Outdoor - Intermediate
    {
      name: "Clear Creek Canyon",
      type: "trail",
      description:
        "The go-to outdoor destination for Denver sport climbers. Hundreds of routes on gneiss from 5.7 to 5.14. Multiple walls with different characters. You could climb here for years without repeating routes.",
      difficulty: "intermediate",
      distance: "Varies by wall (5-20 min)",
      driveTime: "35 min from Denver",
      externalUrl: "https://www.mountainproject.com/area/105744246/clear-creek-canyon",
      insiderTip:
        "High Wire, The Primo Wall, and Red Slab are good moderate areas. The canyon gets hot in summer — go early or wait for fall. Weekday mornings mean fewer crowds.",
    },
    {
      name: "Boulder Canyon",
      type: "trail",
      description:
        "Historic climbing area with granite and gneiss. Traditional and sport routes. The setting is beautiful — creek running through the canyon with towering walls. More variety than Clear Creek.",
      difficulty: "intermediate",
      distance: "Varies by crag",
      driveTime: "50 min from Denver",
      externalUrl: "https://www.mountainproject.com/area/105744222/boulder-canyon",
      insiderTip:
        "The Dome is a good introduction to Boulder Canyon granite. Animal World has excellent moderate sport routes. Study the guidebook — the canyon is complex.",
    },
    {
      name: "Shelf Road — Canon City",
      type: "trail",
      description:
        "Premier limestone sport climbing in Colorado. Pocketed rock, steep routes, and an incredible concentration of quality climbs from 5.9 to 5.13. Best in spring and fall.",
      difficulty: "intermediate",
      distance: "5-15 min approaches",
      driveTime: "2 hrs from Denver",
      externalUrl: "https://www.mountainproject.com/area/105744307/shelf-road",
      insiderTip:
        "Bank, Cactus Cliff, and the Gymnasium are the popular walls. Camp at Bank Campground to maximize climbing time. Too hot in summer, but perfect in October.",
    },

    // Outdoor - Advanced
    {
      name: "Eldorado Canyon State Park",
      type: "trail",
      description:
        "One of America's most famous climbing destinations. Sandstone walls with iconic traditional routes. The Bastille, Redgarden Wall, and Whale's Tail are legendary. Serious terrain that demands respect.",
      difficulty: "advanced",
      distance: "Varies",
      driveTime: "45 min from Denver",
      externalUrl: "https://www.mountainproject.com/area/105744252/eldorado-canyon-sp",
      insiderTip:
        "The grades are stiff. A 5.10 in Eldo climbs harder than 5.10 elsewhere. Start with moderate classics like the Bastille Crack (5.7) or Wind Ridge (5.6) to learn the rock.",
    },
    {
      name: "Lumpy Ridge — Estes Park",
      type: "trail",
      description:
        "High-altitude granite near Rocky Mountain National Park. Multi-pitch traditional climbing in a stunning alpine setting. The approach hikes are real — plan for adventure.",
      difficulty: "advanced",
      distance: "1-2 hr approaches",
      elevationGain: "1,000-2,000 ft",
      driveTime: "1 hr 30 min from Denver",
      externalUrl: "https://www.mountainproject.com/area/105744474/lumpy-ridge",
      insiderTip:
        "The Book and The Pear are classic formations. Start early — afternoon storms are serious at 9,000ft. This is where Denver trad climbers graduate to.",
    },
    {
      name: "Rifle Mountain Park",
      type: "trail",
      description:
        "World-class limestone sport climbing with steep, pumpy routes. The hardest climbing in Colorado happens here. The drives is worth it for the quality of stone and movement.",
      difficulty: "advanced",
      distance: "10-20 min approaches",
      driveTime: "3 hrs from Denver",
      externalUrl: "https://www.mountainproject.com/area/105744346/rifle-mountain-park",
      insiderTip:
        "Arsenal and Bauhaus have the best concentration of moderate-hard routes. Make it a weekend trip — the drive is long but the climbing is bucket list level.",
    },

    // Shops
    {
      name: "Neptune Mountaineering — Boulder",
      type: "shop",
      description:
        "The best climbing shop in the Front Range. The staff actually climb hard and know the local areas intimately. Good gear selection, excellent advice, and a museum of mountaineering history.",
      address: "633 S Broadway, Boulder",
      externalUrl: "https://www.neptunemountaineering.com",
      insiderTip:
        "Ask the staff for crag recommendations based on your level and goals. They'll steer you right. Check the basement for last season's gear at discounts.",
    },
    {
      name: "Wilderness Exchange Unlimited — Denver",
      type: "shop",
      description:
        "Consignment outdoor gear including climbing equipment. Great place to find a used rack, crash pads, or harnesses at significant discounts. Quality varies — inspect everything.",
      address: "2401 15th St, Denver",
      externalUrl: "https://www.wildernessexchangeunlimited.com",
      insiderTip:
        "Climbing ropes and soft goods should be new, but hardware (cams, carabiners, quickdraws) is fine used. Good place to build a trad rack slowly.",
    },
    {
      name: "REI — Denver Flagship",
      type: "shop",
      description:
        "Reliable for basics and standard gear. Staff knowledge varies. Fine for harnesses, shoes, and standard equipment. For technical trad gear advice, go to Neptune instead.",
      address: "1416 Platte St, Denver",
      externalUrl: "https://www.rei.com/stores/denver.html",
      insiderTip:
        "Good rental program if you're testing gear. The member garage sales have occasional climbing gear deals.",
    },
  ],

  communities: [
    {
      name: "Colorado Mountain Club — Climbing Section",
      type: "club",
      description:
        "CMC offers climbing courses from intro to advanced mountaineering. Excellent way to learn proper technique and meet partners. The courses are worth it for instruction and community access.",
      platform: "Website",
      url: "https://www.cmc.org/education/climbing",
      cost: "$75/year + course fees",
    },
    {
      name: "Movement Climbing Community",
      type: "club",
      description:
        "Each Movement gym has its own community events, clinics, and partner-finding boards. The gyms actively facilitate community. Show up regularly and you'll find partners naturally.",
      platform: "In-gym",
      url: "https://www.movementgyms.com",
      cost: "Gym membership required",
    },
    {
      name: "Denver Climbing Meetups",
      type: "meetup",
      description:
        "Multiple Meetup groups organize gym sessions and outdoor trips. Good for finding partners, especially when you're new to the area. Quality varies by organizer.",
      platform: "Meetup",
      url: "https://www.meetup.com/find/?keywords=climbing&location=Denver",
      cost: "Free",
    },
    {
      name: "Mountain Project Partner Finder",
      type: "online",
      description:
        "The partner forum on Mountain Project is active for the Front Range. Post what you're looking for, or browse existing posts. Good for finding partners for specific objectives.",
      platform: "Website",
      url: "https://www.mountainproject.com/forum/103989416/partner-finder",
      cost: "Free",
    },
    {
      name: "r/climbing & r/climbingpartners",
      type: "online",
      description:
        "General climbing subreddit plus partner-finding specific community. Search 'Denver' or 'Colorado' for local discussions. Good for gear advice and community questions.",
      platform: "Reddit",
      url: "https://www.reddit.com/r/climbing",
      cost: "Free",
    },
  ],

  resources: [
    {
      name: "Mountain Project",
      type: "app",
      description:
        "The essential climbing resource. Route beta, photos, conditions reports, and community forums for every crag in Colorado. Download offline areas before heading out.",
      url: "https://www.mountainproject.com",
      platform: "iOS, Android, Web",
      cost: "Free",
    },
    {
      name: "Fixed Pin Publishing Guidebooks",
      type: "website",
      description:
        "High-quality print guidebooks for Colorado areas. The Eldorado, Shelf Road, and Boulder Canyon guides are essential if you're climbing those areas regularly.",
      url: "https://www.fixedpin.com",
      platform: "Print",
      cost: "$25-40 per guide",
    },
    {
      name: "theCrag",
      type: "website",
      description:
        "Alternative to Mountain Project with different community. Some routes have better beta here. Worth checking both for comprehensive information.",
      url: "https://www.thecrag.com",
      platform: "Web, iOS, Android",
      cost: "Free",
    },
    {
      name: "Climbing Weather",
      type: "website",
      description:
        "Weather forecasts specifically for climbing areas. More useful than standard weather apps because it forecasts at crag level, not just by city.",
      url: "https://www.climbingweather.com",
      platform: "Web",
      cost: "Free",
    },
  ],

  insiderTips: [
    "Start indoors and learn to climb well before rushing outdoors. Gym skills transfer, and you'll learn rope management and belaying in a controlled environment.",
    "When you go outside, start easier than your gym grade. Outdoor 5.10 feels much harder than gym 5.10. Sandbagging is real, especially at Eldo.",
    "Clear Creek Canyon is the default outdoor destination for a reason. It's close, has routes at every grade, and the rock is good. Learn it well.",
    "Crash pads are expensive ($200-400). Find partners who have them before investing. Most gym climbers are happy to include one more person on outdoor trips.",
    "Altitude affects endurance more than you expect. Allow extra rest between burns when climbing above 8,000 feet.",
    "The trad climbing community in Colorado is strong but expects you to learn proper systems. Take a course or find a mentor — don't self-teach trad.",
    "Season matters for destination. Clear Creek spring/fall. Shelf Road fall. Rifle fall. Lumpy summer. Plan your year around these windows.",
    "Join one of the Movement or Earth Treks gyms with a multi-location membership. You'll climb at all of them eventually.",
  ],

  beginnerChecklist: [
    "Join a gym and take their intro belay course — it's usually free with membership",
    "Rent shoes for your first month, then buy once you know your foot shape and preferences",
    "Climb consistently (3x/week) for 2-3 months before worrying about outdoor climbing",
    "Learn to lead belay indoors before going outside — the skills transfer directly",
    "Find partners through gym community events, not just random solicitation",
    "Take an intro to outdoor climbing course (CMC or gym-organized) for your first outside experience",
    "Buy a harness, shoes, helmet, and belay device as your first personal gear",
    "Download Mountain Project and start studying areas — understanding the ecosystem before visiting helps",
  ],

  seasonal: [
    {
      season: "Spring",
      months: "March — May",
      description:
        "Prime season for lower elevation crags. Clear Creek and Boulder Canyon come into condition as temperatures rise. Some high-altitude areas still have snow. Unpredictable weather — check forecasts carefully.",
      highlights: [
        "Clear Creek Canyon is in prime condition",
        "Shelf Road starts coming into season in late April",
        "South-facing walls dry out first",
        "Gym climbing remains consistent for rainy days",
      ],
    },
    {
      season: "Summer",
      months: "June — August",
      description:
        "Lower elevation crags get too hot. Head high for alpine granite at Lumpy Ridge and RMNP. Morning sessions work at lower crags if you start early. Afternoon storms are serious above treeline.",
      highlights: [
        "Lumpy Ridge and RMNP alpine granite season",
        "Clear Creek is climbable in early morning only",
        "Afternoon thunderstorms require early starts",
        "Gym training stays consistent year-round",
      ],
    },
    {
      season: "Fall",
      months: "September — November",
      description:
        "The best outdoor climbing season in Colorado. Shelf Road comes into perfect condition. Clear Creek and Boulder Canyon are ideal. Stable weather, cool temps, and motivated conditions.",
      highlights: [
        "Shelf Road is in prime condition — plan trips",
        "Clear Creek and Boulder Canyon are perfect",
        "Rifle season for hard sport climbing",
        "Best sending conditions of the year",
      ],
    },
    {
      season: "Winter",
      months: "December — February",
      description:
        "Indoor season for most climbers. South-facing walls at lower elevations are climbable on warm days (50°F+). Gym training is primary. Good time to work on weaknesses and build strength.",
      highlights: [
        "Gym climbing becomes primary training",
        "South-facing walls climbable on warm days",
        "Good time for hangboard and strength training",
        "Indoor competitions and community events",
      ],
    },
  ],
};
