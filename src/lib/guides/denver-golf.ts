import { CityActivityGuide } from "../types";

export const denverGolf: CityActivityGuide = {
  citySlug: "denver",
  activitySlug: "golf",
  tagline: "Year-round golf at altitude with stunning mountain views",
  heroImage:
    "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&q=80",
  bestSeason: "April — October",
  quickStats: [
    { label: "Public courses", value: "50+" },
    { label: "Days of sun/year", value: "300" },
    { label: "Altitude effect", value: "+10-15%" },
    { label: "Season length", value: "Year-round" },
  ],

  weeklySignal: {
    date: "Feb 11, 2026",
    content:
      "Mild week ahead — several courses are open with temperatures in the 50s. City Park and Overland are both open and in decent shape for February. The mountain courses are still closed, but the Front Range is playable. Book weekend tee times early, everyone has the same idea.",
    category: "conditions",
  },

  whatsDifferent: [
    {
      title: "The ball flies 10-15% farther",
      content:
        "At 5,280 feet, the thinner air means less drag on the ball. You'll gain 10-15% distance on every club. That 150-yard 7-iron is now a 165-yard shot. It takes a few rounds to recalibrate, but it's a real advantage — and honestly, pretty fun. Factor this into course management.",
    },
    {
      title: "You can play year-round",
      content:
        "Unlike most northern cities, Denver's 300 days of sunshine means golf is possible 12 months a year. January rounds happen. The trick is flexibility — watch the weather, and be ready to play when temps hit the 50s. Keep clubs in your car from November through March.",
    },
    {
      title: "Mountain courses are worth the drive",
      content:
        "The Denver metro has solid courses, but the real gems are 45-90 minutes into the mountains. Arrowhead, Red Rocks Country Club, Fossil Trace — these courses have scenery you won't find anywhere else. Budget for at least a few mountain rounds each summer.",
    },
    {
      title: "Afternoon weather moves fast",
      content:
        "Just like hiking, summer afternoons bring thunderstorms. Book morning tee times when possible, especially at mountain courses. Lightning delays are common from June through August if you're playing afternoon rounds.",
    },
    {
      title: "Public golf is excellent and affordable",
      content:
        "Denver's municipal courses are genuinely good. City Park, Willis Case, Overland — these aren't afterthoughts. The city has invested in public golf, and you can play quality layouts for $40-60. No need for private club membership to play good courses here.",
    },
  ],

  spots: [
    // Beginner
    {
      name: "City Park Golf Course",
      type: "course",
      description:
        "Denver's flagship municipal course in the heart of the city. A classic parkland layout with mature trees and views of the downtown skyline. Well-maintained, reasonably paced, and welcoming to all skill levels. The 9-hole option is great for beginners.",
      difficulty: "beginner",
      address: "3181 E 23rd Ave, Denver",
      driveTime: "10-20 min from downtown",
      externalUrl: "https://www.cityofdenver.org/golf",
      insiderTip:
        "Play early on weekdays for best pace of play. The back nine is more interesting than the front. Online booking opens 7 days out — book immediately for weekend mornings.",
    },
    {
      name: "Overland Park Golf Course",
      type: "course",
      description:
        "Another solid Denver muni, flatter and more forgiving than City Park. Good for beginners building confidence. The driving range is one of the better public ranges in the city.",
      difficulty: "beginner",
      address: "1801 S Huron St, Denver",
      driveTime: "15 min from downtown",
      externalUrl: "https://www.cityofdenver.org/golf",
      insiderTip:
        "The range balls are better quality than most munis. Good place to practice before committing to a round.",
    },
    {
      name: "Foothills Golf Course — Denver",
      type: "course",
      description:
        "18-hole executive course with shorter holes — perfect for beginners or anyone working on their short game. Less intimidating than full-length courses, and rounds move quickly.",
      difficulty: "beginner",
      address: "3901 S Carr St, Denver",
      driveTime: "20 min from downtown",
      externalUrl: "https://www.foothillsgc.com",
      insiderTip:
        "Great option when you want to play but only have 2.5-3 hours. The par 3s are actually challenging and well-designed.",
    },
    {
      name: "Indian Peaks Golf Course — Lafayette",
      type: "course",
      description:
        "Forgiving layout with wide fairways and few hazards. Designed by Hale Irwin, so it's legitimate architecture, just beginner-friendly. Good value and usually not crowded.",
      difficulty: "beginner",
      address: "2300 Indian Peaks Trail, Lafayette",
      driveTime: "30 min from Denver",
      externalUrl: "https://www.indianpeaksgolf.com",
      insiderTip:
        "The course plays easier than the yardage suggests. Good course to bring friends who are just learning.",
    },

    // Intermediate
    {
      name: "Willis Case Golf Course",
      type: "course",
      description:
        "Hilly municipal course in northwest Denver with great views of the Front Range. More challenging than City Park with significant elevation changes. A local favorite that rewards good course management.",
      difficulty: "intermediate",
      address: "4999 Vrain St, Denver",
      driveTime: "15 min from downtown",
      externalUrl: "https://www.cityofdenver.org/golf",
      insiderTip:
        "The elevation changes are real — uphill shots play longer, downhill shorter. Club selection is key here. The back nine has the best mountain views.",
    },
    {
      name: "Fossil Trace Golf Club — Golden",
      type: "course",
      description:
        "Stunning course built through a former clay mine with exposed dinosaur fossils in the rock faces. Unlike any course you've played. The scenery alone is worth the green fee.",
      difficulty: "intermediate",
      address: "3050 Illinois St, Golden",
      driveTime: "25 min from Denver",
      externalUrl: "https://www.fossiltrace.com",
      insiderTip:
        "Play in the afternoon when the rock formations glow in the western sun. Holes 5-7 along the fossils are the signature stretch. Worth every penny of the higher green fee.",
    },
    {
      name: "CommonGround Golf Course — Aurora",
      type: "course",
      description:
        "Tom Doak design — a renowned minimalist architect. Links-style layout on rolling prairie. Firm, fast conditions that reward ground game. One of the best public courses in Denver.",
      difficulty: "intermediate",
      address: "800 S Telluride St, Aurora",
      driveTime: "25 min from downtown Denver",
      externalUrl: "https://www.commongroundgc.com",
      insiderTip:
        "Wind is a factor here more than other Denver courses. The greens are excellent — put in the time on the practice green before your round.",
    },
    {
      name: "Riverdale Golf Courses — Brighton",
      type: "course",
      description:
        "Two 18-hole courses: Dunes (links-style) and Knolls (parkland). Both are well-maintained and offer different challenges. Solid value and worth the 25-minute drive north.",
      difficulty: "intermediate",
      address: "13300 Riverdale Rd, Brighton",
      driveTime: "25 min from Denver",
      externalUrl: "https://www.riverdalegolf.com",
      insiderTip:
        "The Dunes course is the tougher, more interesting layout. The Knolls is more forgiving. Both have good practice facilities.",
    },

    // Advanced
    {
      name: "Arrowhead Golf Club — Littleton",
      type: "course",
      description:
        "Dramatic mountain course winding through towering red sandstone formations similar to Red Rocks Amphitheatre. Visually stunning and challenging. A bucket-list Colorado golf experience.",
      difficulty: "advanced",
      address: "10850 W Sundown Trail, Littleton",
      driveTime: "35 min from Denver",
      externalUrl: "https://www.arrowheadcolorado.com",
      insiderTip:
        "Bring a camera — seriously. The 13th hole is one of the most photographed in Colorado. Green fees are premium but it's a must-play at least once.",
    },
    {
      name: "Bear Dance Golf Club — Larkspur",
      type: "course",
      description:
        "Consistently ranked among Colorado's best public courses. Championship layout with dramatic elevation changes and mountain views. Challenging but fair — reward for good shots, punishment for bad ones.",
      difficulty: "advanced",
      address: "6630 Bear Dance Dr, Larkspur",
      driveTime: "45 min from Denver",
      externalUrl: "https://www.beardancegolf.com",
      insiderTip:
        "Worth the drive and the green fee. The back nine is spectacular. Book well in advance for weekends — it's popular for a reason.",
    },
    {
      name: "Red Hawk Ridge Golf Course — Castle Rock",
      type: "course",
      description:
        "Jim Engh design with creative bunkering and dramatic elevation changes. One of the more visually striking courses in the Denver area. Tests every part of your game.",
      difficulty: "advanced",
      address: "2156 Red Hawk Ridge Dr, Castle Rock",
      driveTime: "40 min from Denver",
      externalUrl: "https://www.redhawkridge.com",
      insiderTip:
        "The par 3s are memorable — each one is different and interesting. The course plays longer than the card suggests due to elevation changes.",
    },

    // Driving Ranges / Practice
    {
      name: "TopGolf — Centennial",
      type: "venue",
      description:
        "The standard TopGolf experience — climate-controlled bays, target games, food and drinks. Not for serious practice, but fun for groups and beginners getting comfortable with clubs.",
      address: "8340 S Niagara Cir, Centennial",
      externalUrl: "https://topgolf.com/us/centennial/",
      insiderTip:
        "Go on weekday afternoons to avoid long waits. The game is fun but the feedback on ball flight isn't realistic for course play.",
    },
    {
      name: "Family Sports Golf Center — Englewood",
      type: "venue",
      description:
        "Old-school driving range with grass tees, good ball quality, and a real-practice atmosphere. What TopGolf isn't. Serious range sessions happen here.",
      address: "6901 S Peoria St, Englewood",
      externalUrl: "https://www.familysportsgolf.com",
      insiderTip:
        "The grass tees are worth the extra cost — hitting off mats develops bad habits. The short game area is also excellent for chipping practice.",
    },

    // Shops
    {
      name: "Golf Galaxy — Various Locations",
      type: "shop",
      description:
        "National chain with good selection for beginners. Club fitting available. Fine for basic equipment, but serious players should look at local fitters.",
      address: "Multiple Denver locations",
      externalUrl: "https://www.golfgalaxy.com",
      insiderTip:
        "The used club section can have gems. Staff knowledge varies — ask for someone who actually plays competitively if you need real advice.",
    },
    {
      name: "2nd Swing Golf — Denver",
      type: "shop",
      description:
        "Used and new golf equipment with trade-in program. Excellent for building a starter set or upgrading without paying full price. Good selection of current-model used clubs.",
      address: "8055 E Maplewood Ave, Greenwood Village",
      externalUrl: "https://www.2ndswing.com",
      insiderTip:
        "Best place in Denver to sell old clubs. Their trade-in values are better than big box stores. Check online inventory before visiting.",
    },
    {
      name: "Club Champion — Cherry Creek",
      type: "shop",
      description:
        "Premium club fitting studio. Expensive, but worth it when you're ready for custom clubs. Data-driven fitting with all major brands. The fitting experience is thorough.",
      address: "100 Fillmore St, Denver",
      externalUrl: "https://www.clubchampiongolf.com",
      insiderTip:
        "Don't fit until your swing is consistent — you'll outgrow specs if you're still making major swing changes. Budget $200-400 for the fitting session.",
    },
  ],

  communities: [
    {
      name: "Denver Golf Leagues",
      type: "league",
      description:
        "The city runs multiple recreational leagues through Denver Parks & Rec. Various formats (match play, stroke play, scrambles) at different skill levels. Good way to get regular rounds and meet people with established tee times.",
      platform: "Website",
      url: "https://www.denvergov.org/golf",
      cost: "$100-200/season",
    },
    {
      name: "Colorado Golf Association",
      type: "club",
      description:
        "State golf association offering handicap services, tournaments, and course ratings. If you want an official handicap and access to amateur events, this is the route. Membership includes discounts at various courses.",
      platform: "Website",
      url: "https://www.coloradogolf.org",
      cost: "$45/year",
    },
    {
      name: "Denver Golf Meetup Groups",
      type: "meetup",
      description:
        "Several active groups organizing regular rounds for various skill levels. Lower commitment than formal leagues — just show up when you can. Good for finding playing partners when you're new to the area.",
      platform: "Meetup",
      url: "https://www.meetup.com/find/?keywords=golf&location=Denver",
      cost: "Free",
    },
    {
      name: "r/golf",
      type: "online",
      description:
        "Active subreddit for golf discussion. Not Denver-specific, but search 'Denver' or 'Colorado' to find local course recommendations and trip reports. Good for gear advice and general community.",
      platform: "Reddit",
      url: "https://www.reddit.com/r/golf",
      cost: "Free",
    },
    {
      name: "GolfNow Tee Time Groups",
      type: "online",
      description:
        "The GolfNow app has a feature for joining other players' tee times. Good for solo golfers looking to fill out a foursome. Quality of playing partners varies, but it solves the 'I have no one to play with' problem.",
      platform: "App",
      url: "https://www.golfnow.com",
      cost: "Free (pay course fees)",
    },
  ],

  resources: [
    {
      name: "GolfNow",
      type: "app",
      description:
        "Tee time booking with hot deals on unsold times. The standard app for booking public courses. Hot deals can save 30-50% on green fees, especially for weekday rounds.",
      url: "https://www.golfnow.com",
      platform: "iOS, Android, Web",
      cost: "Free",
    },
    {
      name: "18Birdies",
      type: "app",
      description:
        "GPS rangefinder, scoring, and stat tracking. Free tier is functional, premium adds more features. Good for establishing a handicap without joining CGA.",
      url: "https://www.18birdies.com",
      platform: "iOS, Android",
      cost: "Free / Premium available",
    },
    {
      name: "Grint",
      type: "app",
      description:
        "Handicap tracking, GPS, and social features. Some golfers prefer this over 18Birdies for the social/community aspects. Free tier includes handicap calculation.",
      url: "https://www.thegrint.com",
      platform: "iOS, Android",
      cost: "Free / Premium available",
    },
    {
      name: "ColoradoGolf.org",
      type: "website",
      description:
        "Colorado Golf Association site with course ratings, tournaments, and handicap info. The authority on competitive amateur golf in the state.",
      url: "https://www.coloradogolf.org",
      platform: "Web",
      cost: "Free to browse",
    },
  ],

  insiderTips: [
    "The ball really does fly farther at altitude. Plan for 10-15% more distance on every club. What was a 7-iron at sea level is probably an 8-iron here.",
    "Book tee times 7 days out when they open, especially for popular courses on weekends. The good morning times go fast.",
    "Municipal courses are genuinely good in Denver. Don't overlook City Park, Willis Case, and Overland just because they're city-owned.",
    "Summer afternoon tee times are risky June-August. Thunderstorms roll in predictably between 2-5pm. Play mornings when possible.",
    "Keep clubs in your car in winter. Playable days appear randomly, and you want to be ready. 50-degree January afternoons are gold.",
    "Mountain courses (Arrowhead, Bear Dance, Fossil Trace) are worth the higher green fees and longer drives. Budget for at least a few each season.",
    "The altitude affects spin too — shots don't stop as quickly on greens. Land the ball shorter than you would at sea level.",
    "Walking is viable at most Denver courses and saves $15-20. The elevation makes it good cardio. Willis Case is hilly but walkable.",
  ],

  beginnerChecklist: [
    "Start with a beginner set or quality used clubs — don't spend $1,500 on clubs until you know your swing",
    "Take 3-5 lessons from a PGA pro before trying to self-teach. Bad habits are hard to break",
    "Play executive courses or 9-hole rounds until you can consistently keep pace",
    "Learn basic etiquette: repair ball marks, replace divots, keep pace, let faster groups through",
    "Download GolfNow and look for hot deal tee times to save money while learning",
    "Practice at the range 2-3 times between rounds. Improvement happens at the range, enjoyment happens on the course",
    "Don't keep strict score your first few rounds — focus on making contact and having fun",
    "Bring more balls than you think you need. Losing balls is normal. Buy recycled balls in bulk",
  ],

  seasonal: [
    {
      season: "Spring",
      months: "March — May",
      description:
        "Courses reopen from winter closures. Conditions improve weekly as grass grows in. Some days are perfect, others are windy and cold. Check conditions before booking.",
      highlights: [
        "Courses are least crowded in early spring — good tee time availability",
        "Green fees often have early-season discounts",
        "Mountain courses open late April to mid-May depending on snow",
        "Wind can be strong — expect club selection challenges",
      ],
    },
    {
      season: "Summer",
      months: "June — August",
      description:
        "Peak golf season. Courses are in best condition but most crowded. Morning tee times are premium to beat afternoon storms. Book well in advance for weekends.",
      highlights: [
        "Courses in prime condition with fast greens",
        "Book morning times to avoid afternoon thunderstorms",
        "Mountain courses are fully open and spectacular",
        "Twilight rounds offer good value and cooler temperatures",
      ],
    },
    {
      season: "Fall",
      months: "September — October",
      description:
        "Arguably the best golf season in Colorado. Stable weather, cooler mornings, stunning fall colors, and slightly fewer crowds. Make time to play as much as possible.",
      highlights: [
        "Weather stabilizes — fewer storms, clear skies",
        "Mountain courses with fall foliage are spectacular",
        "Green fees often drop after Labor Day",
        "Conditions remain excellent through mid-October",
      ],
    },
    {
      season: "Winter",
      months: "November — February",
      description:
        "Golf continues! Many Front Range courses stay open between storms. Watch forecasts for 50+ degree days and be flexible. The courses that stay open are less crowded.",
      highlights: [
        "Playable days appear regularly — stay flexible and ready",
        "Some courses stay open year-round (City Park, Overland when conditions allow)",
        "Green fees are lowest of the year",
        "No crowds — you might have the course nearly to yourself",
      ],
    },
  ],
};
