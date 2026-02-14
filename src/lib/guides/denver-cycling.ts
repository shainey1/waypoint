import { CityActivityGuide } from "../types";

export const denverCycling: CityActivityGuide = {
  citySlug: "denver",
  activitySlug: "cycling",
  tagline: "Epic mountain rides and 850+ miles of urban trails",
  heroImage:
    "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1600&q=80",
  bestSeason: "April — October",
  quickStats: [
    { label: "Urban trail miles", value: "850+" },
    { label: "Mountain bike parks", value: "12+" },
    { label: "Major climbs within 1hr", value: "10+" },
    { label: "Sunny days/year", value: "300" },
  ],

  weeklySignal: {
    date: "Feb 11, 2026",
    content:
      "Cherry Creek Trail is clear and rideable. South Platte is mostly dry but watch for icy patches under bridges early morning. Mountain trails are still snow-covered above 7,500ft — stick to lower elevation or wait for the melt. Road riding is doable mid-day when temps hit 50s.",
    category: "conditions",
  },

  whatsDifferent: [
    {
      title: "Urban trails are genuinely useful",
      content:
        "Denver's trail system isn't just for recreation — it's transportation infrastructure. You can ride from downtown to Boulder on the Rock Creek Trail, or commute across the metro entirely off-street. The Cherry Creek Trail alone runs 40 miles from Cherry Creek State Park to downtown.",
    },
    {
      title: "World-class mountain biking is 30 minutes away",
      content:
        "Most cities require hours of driving to reach quality singletrack. Denver has incredible mountain biking at Apex, White Ranch, and Centennial Cone within 30-45 minutes. Destinations like Buffalo Creek and Fruita are day trips. You can ride great dirt after work on summer evenings.",
    },
    {
      title: "Altitude is a constant factor",
      content:
        "Even urban riding starts at 5,280 feet. Mountain rides often climb to 10,000+ feet. You'll feel the altitude on hard efforts — expect reduced power output until you acclimate. Hydrate more aggressively than you would at sea level.",
    },
    {
      title: "The climbing never stops",
      content:
        "Denver is at the base of the Rockies. Road rides west go up immediately and keep going. Lookout Mountain, Squaw Pass, Mount Evans — these are legendary climbs that start from the metro. If you love climbing, you've moved to the right place.",
    },
    {
      title: "Cycling culture is strong",
      content:
        "Group rides happen daily. Bike commuting is common. Drivers are more bike-aware than most US cities. Multiple high-quality bike shops serve every discipline. You'll find your people quickly here.",
    },
  ],

  spots: [
    // Urban Trails - Beginner
    {
      name: "Cherry Creek Trail",
      type: "trail",
      description:
        "The spine of Denver's trail system. 40 miles of paved path from Cherry Creek State Park through downtown to the Platte River. Flat, scenic, and connects to most other urban trails. Perfect for commuting, easy rides, or building base miles.",
      difficulty: "beginner",
      distance: "40 mi total",
      driveTime: "Access from downtown",
      externalUrl: "https://www.denvergov.org/content/denvergov/en/denver-parks-and-recreation/parks/trails.html",
      insiderTip:
        "Rush hour gets busy between downtown and Cherry Creek Mall. Go early morning for empty trails. The state park section is excellent for uninterrupted riding.",
    },
    {
      name: "South Platte River Trail",
      type: "trail",
      description:
        "Runs north-south through Denver along the river. Connects to the Cherry Creek Trail downtown. More industrial feel but functional for commuting and long rides into the suburbs.",
      difficulty: "beginner",
      distance: "30+ mi",
      driveTime: "Access from downtown",
      externalUrl: "https://www.denvergov.org/content/denvergov/en/denver-parks-and-recreation/parks/trails.html",
      insiderTip:
        "The northern section toward Commerce City is less crowded but rougher. The Confluence Park area where trails meet is a good starting point.",
    },
    {
      name: "Highline Canal Trail",
      type: "trail",
      description:
        "71-mile unpaved trail following a historic irrigation canal through the southern suburbs. Crushed gravel surface, mostly flat, and perfect for gravel bikes or hybrids. Surprisingly scenic for a suburban trail.",
      difficulty: "beginner",
      distance: "71 mi total",
      driveTime: "Multiple access points",
      externalUrl: "https://highlinecanal.org",
      insiderTip:
        "Not great after rain — the surface gets muddy. In dry conditions, it's excellent. Good for long base miles on gravel bikes.",
    },

    // Mountain Biking - Beginner
    {
      name: "Green Mountain — Lakewood",
      type: "trail",
      description:
        "Perfect first mountain bike destination. Rolling singletrack with great views of the Denver skyline. Trails range from fire roads to flowy singletrack. Good for building off-road confidence.",
      difficulty: "beginner",
      distance: "Varies (5-15 mi options)",
      elevationGain: "400-800 ft",
      driveTime: "20 min from downtown",
      externalUrl: "https://www.mtbproject.com/directory/8010453/green-mountain",
      insiderTip:
        "Ride the outer loop clockwise for best flow. The eastern trails have better singletrack. Avoid after rain — soil gets slick.",
    },
    {
      name: "Bear Creek Lake Park",
      type: "trail",
      description:
        "Beginner-friendly trails in a park setting. Mix of doubletrack and easy singletrack. Good place to learn basic mountain biking skills before heading to more technical terrain.",
      difficulty: "beginner",
      distance: "10+ mi of trails",
      elevationGain: "300 ft",
      driveTime: "25 min from downtown",
      externalUrl: "https://www.mtbproject.com/directory/8010451/bear-creek-lake-park",
      insiderTip:
        "Requires park entry fee ($10). The trails near the lake are easier. Mount Carbon loop has more challenge when you're ready.",
    },

    // Mountain Biking - Intermediate
    {
      name: "Apex Park — Golden",
      type: "trail",
      description:
        "The go-to after-work mountain bike spot for the west side. Singletrack climbs through meadows to Enchanted Forest, then flows downhill. Varied terrain, good length, and close to the city.",
      difficulty: "intermediate",
      distance: "8-12 mi loops",
      elevationGain: "1,500-2,000 ft",
      driveTime: "25 min from downtown",
      externalUrl: "https://www.mtbproject.com/directory/8010444/apex-park",
      insiderTip:
        "Ride Enchanted Forest > Grubstake for the best descent. The Apex Gulch side is rocky and technical. Start early on weekends — parking fills fast.",
    },
    {
      name: "White Ranch — Golden",
      type: "trail",
      description:
        "Excellent singletrack network with longer ride options. More wilderness feel than Apex. Trails range from flowy to technical rocky sections. Can link 20+ mile loops.",
      difficulty: "intermediate",
      distance: "20+ mi of trails",
      elevationGain: "2,000+ ft possible",
      driveTime: "30 min from downtown",
      externalUrl: "https://www.mtbproject.com/directory/8010467/white-ranch",
      insiderTip:
        "Rawhide and Longhorn loop is classic. The lower trails are more technical. Can be muddy after rain — check conditions.",
    },
    {
      name: "Centennial Cone — Golden",
      type: "trail",
      description:
        "Remote-feeling trails close to Denver. Rocky, technical terrain with big views. Odd/even days alternate between bikes and hikers/horses. Plan around the schedule.",
      difficulty: "intermediate",
      distance: "12 mi loop",
      elevationGain: "1,800 ft",
      driveTime: "35 min from downtown",
      externalUrl: "https://www.mtbproject.com/directory/8010446/centennial-cone-park",
      insiderTip:
        "Check the calendar — bikes allowed only on odd days. The Elk Range Trail descent is chunky and fun. Travois Trail is more flowy.",
    },

    // Mountain Biking - Advanced
    {
      name: "Buffalo Creek — Pine",
      type: "trail",
      description:
        "Destination-quality mountain biking an hour from Denver. 40+ miles of singletrack through burn area with excellent flow. Sandy soil drains fast — rideable quickly after rain.",
      difficulty: "advanced",
      distance: "40+ mi of trails",
      elevationGain: "Varies (1,000-4,000 ft)",
      driveTime: "1 hr from Denver",
      externalUrl: "https://www.mtbproject.com/directory/8010431/buffalo-creek",
      insiderTip:
        "The Charlie's Cutoff > Nice Kitty > Homestead loop is iconic. Gashouse Gulch is the best climb. Make it a full day.",
    },
    {
      name: "Trestle Bike Park — Winter Park",
      type: "park",
      description:
        "Lift-served downhill mountain biking at the ski resort. Progression-friendly with green to double black trails. Rental bikes available. Best gravity riding near Denver.",
      difficulty: "advanced",
      driveTime: "1.5 hrs from Denver",
      externalUrl: "https://www.trestlebikepark.com",
      insiderTip:
        "Start on Long Trail (green) to learn the mountain. Rainmaker is the classic blue flow trail. Full-face helmet and armor rentals available.",
    },

    // Road - Intermediate
    {
      name: "Lookout Mountain — Golden",
      type: "trail",
      description:
        "The classic Denver road climb. 4.5 miles, 1,300 feet of climbing from downtown Golden to Buffalo Bill's grave. Steady gradient, great views, and a rite of passage for Denver road cyclists.",
      difficulty: "intermediate",
      distance: "4.5 mi (climb only)",
      elevationGain: "1,300 ft",
      driveTime: "25 min to start",
      externalUrl: "https://www.strava.com/segments/634790",
      insiderTip:
        "Go early on weekends — the road gets busy with tourists. Descend carefully; the curves are tight. The cafe at the top has mediocre food but great views.",
    },
    {
      name: "Deer Creek Canyon Road",
      type: "trail",
      description:
        "Beautiful canyon road climbing from the plains into the foothills. Less traffic than Lookout Mountain. Can link with other climbs for longer routes.",
      difficulty: "intermediate",
      distance: "8 mi (to junction)",
      elevationGain: "1,500 ft",
      driveTime: "25 min to start",
      externalUrl: "https://www.strava.com/segments/649891",
      insiderTip:
        "Continue to Conifer for more climbing. The descent is fast — watch for cars on blind corners. Good choice when Lookout is crowded.",
    },

    // Road - Advanced
    {
      name: "Mount Evans Road",
      type: "trail",
      description:
        "The highest paved road in North America. Climb from Idaho Springs to 14,130 feet. Epic and brutal — 28 miles, 6,900 feet of climbing. A bucket-list ride for strong climbers.",
      difficulty: "advanced",
      distance: "28 mi (one way)",
      elevationGain: "6,900 ft",
      driveTime: "45 min to start",
      externalUrl: "https://www.fs.usda.gov/recarea/arp/recarea/?recid=28389",
      insiderTip:
        "Road opens late May, weather permitting. Start at dawn — afternoon storms above treeline are serious. Bring arm warmers; the summit is cold even in summer.",
    },
    {
      name: "Squaw Pass Road",
      type: "trail",
      description:
        "Challenging climb from Bergen Park to Squaw Pass with options to continue to Echo Lake and Mount Evans. Steady grade with beautiful forest scenery. Less traffic than direct Evans approach.",
      difficulty: "advanced",
      distance: "12 mi (to Squaw Pass)",
      elevationGain: "2,800 ft",
      driveTime: "40 min to start",
      externalUrl: "https://www.strava.com/segments/634826",
      insiderTip:
        "Can link with Mount Evans Road for an epic day. The descent is technical — fresh tarmac makes it fast. Check road conditions in spring.",
    },

    // Shops
    {
      name: "Velowood Cyclery — Golden",
      type: "shop",
      description:
        "Mountain bike focused shop in the heart of Golden. Knowledgeable staff who ride the local trails. Good selection of mountain bikes and components. Ask them for current trail conditions.",
      address: "804 Washington Ave, Golden",
      externalUrl: "https://www.velowoodcyclery.com",
      insiderTip:
        "Best shop for local mountain bike intel. They know which trails are riding well right now. The mechanics are solid.",
    },
    {
      name: "Turin Bicycles — Various Locations",
      type: "shop",
      description:
        "Solid all-around shop with multiple Denver locations. Road, gravel, and mountain bikes. Good service department. Reliable for tune-ups and basic purchases.",
      address: "Multiple Denver locations",
      externalUrl: "https://www.turinbicycles.com",
      insiderTip:
        "The Boulder location has the best selection. Lakewood is good for quick service. They stock a wide range of brands.",
    },
    {
      name: "Wheat Ridge Cyclery",
      type: "shop",
      description:
        "Institution in the Denver cycling scene. Huge selection across all disciplines. Been around for decades. Can get busy but the depth of inventory is unmatched.",
      address: "7085 W 38th Ave, Wheat Ridge",
      externalUrl: "https://www.wheatridgecyclery.com",
      insiderTip:
        "Go here when you need something specific — they probably have it. The used bike section is worth checking. Service department can have long lead times.",
    },
    {
      name: "The Pro's Closet — Louisville",
      type: "shop",
      description:
        "Certified pre-owned bikes — the CarMax of cycling. Excellent selection of used high-end bikes at significant discounts. Great way to get a nice bike without paying retail.",
      address: "1033 Coffman St, Louisville",
      externalUrl: "https://www.theproscloset.com",
      insiderTip:
        "Check online inventory before visiting — stock changes daily. The bikes are properly inspected and warrantied. Best value for getting into cycling on a budget.",
    },
  ],

  communities: [
    {
      name: "Team Evergreen Cycling Club",
      type: "club",
      description:
        "Large, active cycling club based in Evergreen. Road rides, mountain bike rides, and social events. Multiple weekly group rides at various paces. Good way to find riding partners.",
      platform: "Website",
      url: "https://www.teamevergreen.org",
      cost: "$50/year",
    },
    {
      name: "Denver Cruiser Ride",
      type: "meetup",
      description:
        "Weekly social ride through Denver neighborhoods. Not about fitness — about community and exploring the city. Costumes encouraged. A genuine Denver tradition.",
      platform: "Website",
      url: "https://denvercruiserride.com",
      cost: "Free",
    },
    {
      name: "South Suburban Cycling",
      type: "club",
      description:
        "Club based in the southern suburbs. Multiple weekly road rides from beginner to fast. Less intense than racing clubs — focused on recreational riding and community.",
      platform: "Website",
      url: "https://www.southsuburbancycling.org",
      cost: "$25/year",
    },
    {
      name: "Strava Denver Segment Hunters",
      type: "online",
      description:
        "Not a formal club, but following local Strava segments and joining clubs connects you with the riding community. See who's active on your favorite routes.",
      platform: "App",
      url: "https://www.strava.com",
      cost: "Free / Premium optional",
    },
    {
      name: "r/denverbike",
      type: "online",
      description:
        "Local subreddit for Denver cycling. Trail conditions, group ride announcements, commuting questions, and bike theft alerts. Good resource for local intel.",
      platform: "Reddit",
      url: "https://www.reddit.com/r/denverbike",
      cost: "Free",
    },
  ],

  resources: [
    {
      name: "MTB Project",
      type: "app",
      description:
        "The best resource for Denver-area mountain biking. Trail maps, conditions, photos, and ride logs. Download offline maps before heading to Buffalo Creek or remote areas.",
      url: "https://www.mtbproject.com",
      platform: "iOS, Android, Web",
      cost: "Free",
    },
    {
      name: "Strava",
      type: "app",
      description:
        "GPS tracking, segment leaderboards, and social features. Essential for road cyclists chasing PRs. Also useful for discovering new routes through the heatmap and route builder.",
      url: "https://www.strava.com",
      platform: "iOS, Android, Web",
      cost: "Free / $60/yr Premium",
    },
    {
      name: "TrailForks",
      type: "app",
      description:
        "Alternative to MTB Project with strong trail condition reporting. Some trails have better info here. Worth having both apps for complete coverage.",
      url: "https://www.trailforks.com",
      platform: "iOS, Android, Web",
      cost: "Free / Premium optional",
    },
    {
      name: "Denver B-Cycle",
      type: "app",
      description:
        "Denver's bike share system. Useful for quick urban trips or trying cycling before committing to a bike. Stations throughout downtown and neighborhoods.",
      url: "https://denver.bcycle.com",
      platform: "iOS, Android",
      cost: "Pay per ride or membership",
    },
  ],

  insiderTips: [
    "The urban trail system is legitimately useful for commuting. Many Denver residents bike to work year-round using the Cherry Creek and Platte trails.",
    "Mountain biking after work is possible April-September. Apex and Green Mountain have light until 8-9pm in summer. Bring lights just in case.",
    "Buffalo Creek is worth the drive. Plan a full day, bring lunch, and ride until your legs give out. The sandy soil drains fast — rideable within hours of rain.",
    "Group rides leave from most major bike shops on weekday evenings. Just show up and introduce yourself. Pace groups accommodate different fitness levels.",
    "Early morning road rides beat traffic and heat. Most group rides start at 6-7am in summer. The Lookout Mountain climb is better at dawn.",
    "Altitude affects performance more than you expect. Give yourself a few weeks to acclimate before judging your fitness. Everyone struggles at first.",
    "Winter riding is possible on urban trails and south-facing mountain trails. Fat bikes open up snow riding. The cycling season is longer than you'd think.",
    "Check trail conditions before driving to mountain bike spots. MTB Project and TrailForks have recent reports. Mud damages trails — don't ride wet.",
  ],

  beginnerChecklist: [
    "Start with urban trail rides to build fitness and learn Denver's path system",
    "Buy a helmet — it's required on most trails and group rides expect it",
    "Join Strava and connect with local cyclists — the community is welcoming",
    "Try Green Mountain or Bear Creek for your first mountain bike rides",
    "Find a group ride at your fitness level — solo training is slower and less fun",
    "Get a basic tune-up at a local shop — they'll check your bike is safe and adjusted",
    "Invest in a good lock if you're commuting — bike theft is real in Denver",
    "Carry water, snacks, and basic tools on every ride — the altitude dehydrates you quickly",
  ],

  seasonal: [
    {
      season: "Spring",
      months: "March — May",
      description:
        "Urban trails clear early. Mountain trails melt out gradually through May. Road riding improves as temps rise. Mud season on mountain trails — check conditions before riding.",
      highlights: [
        "Urban trails rideable by March",
        "Green Mountain and lower trails open mid-April",
        "Higher elevation trails may have snow into June",
        "Road cycling best on warm afternoons",
      ],
    },
    {
      season: "Summer",
      months: "June — August",
      description:
        "Peak season for all disciplines. Morning rides beat afternoon heat and storms. High-altitude trails fully open. Long days mean after-work mountain biking is possible.",
      highlights: [
        "Buffalo Creek and high-altitude trails in prime condition",
        "Start road rides early to avoid afternoon thunderstorms",
        "Trestle Bike Park open for lift-served riding",
        "Mount Evans Road opens late May/early June",
      ],
    },
    {
      season: "Fall",
      months: "September — October",
      description:
        "Arguably the best riding season. Stable weather, cooler temps, and golden aspens on mountain rides. Fewer crowds than summer. Make the most of these months.",
      highlights: [
        "Perfect temperatures for road climbing",
        "Mountain trails with fall foliage are spectacular",
        "Buffalo Creek aspens peak late September",
        "Fewer afternoon storms — more flexible scheduling",
      ],
    },
    {
      season: "Winter",
      months: "November — February",
      description:
        "Urban trail riding continues year-round between storms. Mountain trails are snow-covered. Fat biking opens new possibilities. Indoor trainers are popular for serious training.",
      highlights: [
        "Urban trails clear quickly after snow",
        "South-facing mountain trails can be rideable",
        "Fat bike trails at various locations",
        "Good time for indoor trainer and strength building",
      ],
    },
  ],
};
