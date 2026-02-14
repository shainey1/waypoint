import { CityActivityGuide } from "../types";

export const denverRunning: CityActivityGuide = {
  citySlug: "denver",
  activitySlug: "running",
  tagline: "Mile-high training with world-class trails and altitude benefits",
  heroImage:
    "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1600&q=80",
  bestSeason: "Year-round",
  quickStats: [
    { label: "Urban trail miles", value: "850+" },
    { label: "Sunny days/year", value: "300" },
    { label: "Elevation", value: "5,280 ft" },
    { label: "Running events/year", value: "100+" },
  ],

  weeklySignal: {
    date: "Feb 11, 2026",
    content:
      "Urban trails are clear and dry — great running conditions for February. Washington Park loop is in excellent shape. Mountain trails above 7,500ft still have snow/ice. The mild week ahead is perfect for getting outdoor miles in before the next storm system.",
    category: "conditions",
  },

  whatsDifferent: [
    {
      title: "Altitude training actually works",
      content:
        "Running at 5,280 feet increases red blood cell production. After acclimating (4-6 weeks), you'll race faster at sea level. This is why elite runners train here — and why your first few weeks will feel hard. Trust the process. Your body is adapting.",
    },
    {
      title: "Trail running is a different sport here",
      content:
        "Denver's trail running isn't just dirt paths through parks. It's mountain trails with 2,000+ feet of vertical, technical terrain, and wildlife. If you came from a flat city, this opens an entirely new dimension to running. Many Denver runners eventually transition to trail ultras.",
    },
    {
      title: "300 days of sunshine means outdoor running year-round",
      content:
        "Unlike the Midwest or Northeast, you can run outside every month in Denver. Cold snaps happen, but blue-sky days in January are common. Treadmill season is shorter here than anywhere you've probably lived before.",
    },
    {
      title: "The running community is exceptional",
      content:
        "Denver attracts serious runners. Group runs happen daily. The clubs are welcoming to all paces. You'll find training partners easily, whether you're training for your first 5K or your tenth 100-miler.",
    },
    {
      title: "Hydration becomes non-negotiable",
      content:
        "The combination of altitude and dry air dehydrates you faster than you're used to. Drink more than you think you need — on every run. Carry water on anything over 45 minutes. You'll learn this the hard way if you don't listen.",
    },
  ],

  spots: [
    // Urban - Beginner
    {
      name: "Washington Park Loop",
      type: "park",
      description:
        "Denver's iconic running destination. A 2.3-mile crushed gravel loop around the park with consistent footing and great people-watching. Every running club meets here. If you run in Denver, you'll run Wash Park.",
      difficulty: "beginner",
      distance: "2.3 mi loop",
      driveTime: "10-20 min from downtown",
      externalUrl: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Parks-Recreation/Parks/Washington-Park",
      insiderTip:
        "Run counterclockwise — that's the flow. Saturday mornings have the most runners. The path around Smith Lake adds variety if you want extra distance.",
    },
    {
      name: "City Park — Denver",
      type: "park",
      description:
        "Large urban park with multiple loop options. Flatter than Wash Park with views of the downtown skyline and mountains. Less crowded, more variety in routes.",
      difficulty: "beginner",
      distance: "Various (2-5 mi)",
      driveTime: "10-15 min from downtown",
      externalUrl: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Parks-Recreation/Parks/City-Park",
      insiderTip:
        "The outer loop is about 5K. The inner paths through the gardens are shaded and pleasant. Museum of Nature and Science makes a good landmark for intervals.",
    },
    {
      name: "Cherry Creek Trail",
      type: "trail",
      description:
        "40 miles of paved path from downtown to Cherry Creek State Park. Flat, consistent, and perfect for building base miles or long runs. The urban trail network spine.",
      difficulty: "beginner",
      distance: "Up to 40 mi",
      driveTime: "Access from multiple points",
      externalUrl: "https://www.denvergov.org/content/denvergov/en/denver-parks-and-recreation/parks/trails.html",
      insiderTip:
        "Start at the state park for longer, uninterrupted runs. The downtown section gets congested during commute hours. Great for marathon training long runs.",
    },
    {
      name: "Sloan's Lake",
      type: "park",
      description:
        "2.5-mile loop around Denver's largest lake. Flat with mountain views. A reliable alternative to Wash Park without the crowds. Growing in popularity.",
      difficulty: "beginner",
      distance: "2.5 mi loop",
      driveTime: "15 min from downtown",
      externalUrl: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Parks-Recreation/Parks/Sloans-Lake",
      insiderTip:
        "Sunrise runs here have spectacular mountain views. The south side has more shade. Parking is easy except during summer weekends.",
    },

    // Trail Running - Intermediate
    {
      name: "Green Mountain — Lakewood",
      type: "trail",
      description:
        "Excellent intro to Denver trail running. Rolling singletrack with a moderate climb to the summit. Views of downtown and the Continental Divide from the top. Close to the city, real trail feel.",
      difficulty: "intermediate",
      distance: "5-8 mi",
      elevationGain: "800-1,200 ft",
      driveTime: "20 min from downtown",
      externalUrl: "https://www.jeffco.us/1209/Green-Mountain-Park",
      insiderTip:
        "The outer loop is about 5 miles with rolling terrain. Add the summit spur for more vert. Avoid in mud — the soil gets slick. Good for speedwork on the flatter sections.",
    },
    {
      name: "North Table Mountain — Golden",
      type: "trail",
      description:
        "Mesa-top running with flat plateaus and exposed views. A different feel from canyon trails. Good for tempo runs with consistent footing on top.",
      difficulty: "intermediate",
      distance: "5-9 mi",
      elevationGain: "1,000 ft",
      driveTime: "25 min from downtown",
      externalUrl: "https://www.jeffco.us/1228/North-Table-Mountain-Park",
      insiderTip:
        "The mesa top is relatively flat — good for speed. The climb up is steep but short. The Tilting Mesa Trail has the best views. Can be windy on top.",
    },
    {
      name: "Mount Falcon Park",
      type: "trail",
      description:
        "Historic ruins, diverse terrain, and connected trail systems. Can link longer runs to Matthews/Winters Park. Good variety of difficulty within one park.",
      difficulty: "intermediate",
      distance: "6-12 mi",
      elevationGain: "1,000-2,000 ft",
      driveTime: "30 min from downtown",
      externalUrl: "https://www.jeffco.us/1220/Mount-Falcon-Park",
      insiderTip:
        "The east trailhead has easier access. Run to the Walker Home ruins for a historical checkpoint. The connection to Matthews/Winters is excellent for longer efforts.",
    },
    {
      name: "White Ranch — Golden",
      type: "trail",
      description:
        "More remote feel with longer trail options. Rocky, technical sections mixed with flowy singletrack. Good for building trail running skills.",
      difficulty: "intermediate",
      distance: "8-15 mi",
      elevationGain: "1,500-2,500 ft",
      driveTime: "30 min from downtown",
      externalUrl: "https://www.jeffco.us/1250/White-Ranch-Park",
      insiderTip:
        "Rawhide Trail is rocky — good for ankle strengthening. Longhorn loop is smoother and faster. Can get muddy after rain. Bring water — no facilities on trail.",
    },

    // Trail Running - Advanced
    {
      name: "Waterton Canyon — Littleton",
      type: "trail",
      description:
        "Gateway to the Colorado Trail. Starts with a 6-mile gravel road climb along the South Platte River, then climbs into true mountain terrain. Bighorn sheep sightings are common.",
      difficulty: "advanced",
      distance: "12-20+ mi",
      elevationGain: "2,500+ ft",
      driveTime: "30 min from Denver",
      externalUrl: "https://www.coloradotrail.org",
      insiderTip:
        "The first 6 miles are runnable road — good for tempo. The singletrack beyond climbs steadily. See bighorn sheep on the canyon walls. This is Colorado Trail training ground.",
    },
    {
      name: "Buffalo Creek Trails — Pine",
      type: "trail",
      description:
        "Mountain trail running with rolling singletrack through the burn area. 40+ miles of interconnected trails. Sandy soil provides good traction. A destination for longer trail efforts.",
      difficulty: "advanced",
      distance: "10-30+ mi",
      elevationGain: "2,000-4,000 ft",
      driveTime: "1 hr from Denver",
      externalUrl: "https://www.fs.usda.gov/recarea/psicc/recarea/?recid=12388",
      insiderTip:
        "Charlie's Cutoff to Nice Kitty is runnable and fun. The trails are well-marked. Bring enough water and food for the distance. Cell service is spotty.",
    },
    {
      name: "Barr Trail — Manitou Springs",
      type: "trail",
      description:
        "The route for Pikes Peak. 13 miles to the summit with 7,500 feet of gain. One of the most famous trail running routes in the US. Home of the Pikes Peak Marathon.",
      difficulty: "advanced",
      distance: "26 mi round trip",
      elevationGain: "7,500 ft",
      driveTime: "1 hr 15 min from Denver",
      externalUrl: "https://www.barrtrail.org",
      insiderTip:
        "Most runners do an out-and-back to Barr Camp (6.5 mi). The full summit push is a serious mountain day. Altitude sickness is common above treeline. Start very early.",
    },

    // Tracks
    {
      name: "Denver South High School Track",
      type: "venue",
      description:
        "Publicly accessible track in Washington Park area. Standard 400m track in good condition. Convenient for speedwork when you want precise pacing.",
      address: "1700 E Louisiana Ave, Denver",
      driveTime: "10 min from downtown",
      insiderTip:
        "Open to public when school isn't in session. Mornings and weekends are your best bet. Several running clubs use this for Tuesday night track workouts.",
    },
    {
      name: "Wash Park Gravel Track",
      type: "venue",
      description:
        "The 2.3-mile gravel loop around Washington Park doubles as a measured course. Many runners use it for tempo runs and long intervals.",
      address: "Washington Park, Denver",
      insiderTip:
        "The surface is softer than pavement — easier on joints but slightly slower. Saturday mornings have informal racing among regulars.",
    },

    // Shops
    {
      name: "Runner's Roost — Various Locations",
      type: "shop",
      description:
        "Local running specialty chain with multiple locations. Gait analysis, shoe fitting, and staff who actually run. Good for finding the right shoes.",
      address: "Multiple Denver locations",
      externalUrl: "https://www.runnersroost.com",
      insiderTip:
        "The Lakewood and Cherry Creek locations are the busiest. Staff can recommend local routes based on what you're training for. Good race calendar board.",
    },
    {
      name: "Fleet Feet — Denver",
      type: "shop",
      description:
        "National chain with strong local presence. Good selection, fit expertise, and organized group runs. The staff training is consistent across locations.",
      address: "2231 S University Blvd, Denver",
      externalUrl: "https://www.fleetfeet.com/denver",
      insiderTip:
        "Free gait analysis helps with shoe selection. They host regular group runs — good way to meet people. Return policy is generous if shoes don't work out.",
    },
    {
      name: "Berkeley Park Running Company — Denver",
      type: "shop",
      description:
        "Smaller independent shop with knowledgeable owners. More personal service than chains. Strong trail running selection and community ties.",
      address: "4439 W 32nd Ave, Denver",
      externalUrl: "https://www.berkeleyparkrunning.com",
      insiderTip:
        "Good for trail-specific advice and gear. The owners know the local trail running scene well. Worth visiting if you're getting into trails.",
    },
  ],

  communities: [
    {
      name: "Colorado Running Company",
      type: "club",
      description:
        "Active running club with multiple weekly runs at different paces. Track workouts, trail runs, and social events. Welcoming to all levels. The best way to find running partners in Denver.",
      platform: "Website",
      url: "https://coloradorunningcompany.com",
      cost: "$50/year",
    },
    {
      name: "Denver Running Club",
      type: "club",
      description:
        "One of the larger clubs in Denver. Multiple group runs weekly, race teams, and social events. Track workouts on Tuesday nights. Good structure for coached training.",
      platform: "Website",
      url: "https://www.denverrunningclub.org",
      cost: "$40/year",
    },
    {
      name: "Trail Sisters — Denver Chapter",
      type: "club",
      description:
        "Women's trail running group with regular runs and community events. Welcoming to all paces. Great introduction to trail running for women new to the sport or area.",
      platform: "Website",
      url: "https://trailsisters.net",
      cost: "Free",
    },
    {
      name: "November Project — Denver",
      type: "meetup",
      description:
        "Free, outdoor fitness group that meets early mornings. Running-focused with a strong community vibe. Shows up rain or shine. High energy and welcoming.",
      platform: "Website",
      url: "https://november-project.com/denver-co/",
      cost: "Free",
    },
    {
      name: "r/denverrunning",
      type: "online",
      description:
        "Local subreddit for Denver runners. Race recommendations, training questions, and meetup organizing. Good for quick local advice.",
      platform: "Reddit",
      url: "https://www.reddit.com/r/denverrunning",
      cost: "Free",
    },
  ],

  resources: [
    {
      name: "Strava",
      type: "app",
      description:
        "Essential for tracking runs and connecting with local runners. Follow Denver runners and clubs to see popular routes. Segment leaderboards add motivation.",
      url: "https://www.strava.com",
      platform: "iOS, Android, Web",
      cost: "Free / $60/yr Premium",
    },
    {
      name: "AllTrails",
      type: "app",
      description:
        "Trail maps and conditions for mountain routes. Download offline maps before heading to trails without cell service. Reviews help you gauge difficulty.",
      url: "https://www.alltrails.com",
      platform: "iOS, Android, Web",
      cost: "Free / $36/yr for offline",
    },
    {
      name: "Running USA Events Calendar",
      type: "website",
      description:
        "Comprehensive race calendar for Colorado. Road races, trail races, and ultras. Find your goal race and work backward for training.",
      url: "https://www.runningusa.org/race-results",
      platform: "Web",
      cost: "Free",
    },
    {
      name: "Colorado Runner Magazine",
      type: "website",
      description:
        "Local running publication with race coverage, training articles, and community news. Good for staying connected to the Denver running scene.",
      url: "https://coloradorunnermag.com",
      platform: "Web/Print",
      cost: "Free online",
    },
  ],

  insiderTips: [
    "Give yourself 4-6 weeks to acclimate to altitude before judging your fitness. Everyone runs slower here at first. It gets better.",
    "Hydrate aggressively — more than you're used to. The dry air and altitude pull water from you constantly. Drink before you're thirsty.",
    "Washington Park is the social hub of Denver running. Show up Saturday morning to see everyone from beginners to elites.",
    "Morning runs are best in summer. Afternoon thunderstorms are real, especially on mountain trails. Plan to be done by 1pm on exposed terrain.",
    "Winter running is great in Denver — but bring traction (Yaktrax) after snow. Trails ice up and can be treacherous without grip.",
    "Join a running club immediately. The community is one of Denver's best features for runners. You'll find training partners fast.",
    "Trail running will change you. If you came from a flat city, budget time to discover mountain trails. Many Denver runners eventually run ultras.",
    "The Bolder Boulder 10K (Memorial Day) is a rite of passage. Register early — it sells out. 50,000 runners make it a party.",
  ],

  beginnerChecklist: [
    "Run easy for your first 2-3 weeks while acclimating to altitude — ignore pace expectations from sea level",
    "Find Washington Park and run your first Denver loop — it's where the running community lives",
    "Join a running club or group run within your first month — partners make training better",
    "Invest in good shoes from a local specialty store — gait analysis helps",
    "Carry water on runs over 45 minutes — you'll dehydrate faster than you're used to",
    "Try one trail run to see if you like it — Green Mountain is a good intro",
    "Sign up for a goal race to give your training structure — plenty of 5K and 10K options year-round",
    "Download Strava and follow local runners to discover popular routes",
  ],

  seasonal: [
    {
      season: "Spring",
      months: "March — May",
      description:
        "Perfect running weather emerges. Cool mornings warm into pleasant days. Snow melts from mountain trails. Race season begins with spring events.",
      highlights: [
        "Cherry Blossom Run kicks off spring race season",
        "Mountain trails clear by May (check conditions)",
        "Comfortable temperatures for long runs",
        "Less crowded than fall race season",
      ],
    },
    {
      season: "Summer",
      months: "June — August",
      description:
        "Hot afternoons push running to early mornings. Mountain trails are fully open. Trail running season peaks. Watch for afternoon thunderstorms on exposed terrain.",
      highlights: [
        "Trail running season in full swing",
        "Start runs by 6-7am to beat heat",
        "Mountain trails accessible at high elevation",
        "Leadville 100 and other ultras draw the trail running community",
      ],
    },
    {
      season: "Fall",
      months: "September — October",
      description:
        "Peak racing season. Perfect temperatures for PRs. Trail running continues until snow. The best time of year to run in Colorado.",
      highlights: [
        "Rock 'n' Roll Denver half/full marathon",
        "Perfect temperatures for fast racing",
        "Mountain trails with fall foliage",
        "Colfax Marathon training season begins",
      ],
    },
    {
      season: "Winter",
      months: "November — February",
      description:
        "Running continues year-round. Urban trails clear quickly after snow. Yaktrax or similar traction helps on icy paths. Sunny days between storms are common.",
      highlights: [
        "Many 50+ degree days for outdoor running",
        "Less crowded trails and parks",
        "Good for base building before spring races",
        "Turkey Trot and winter races keep motivation up",
      ],
    },
  ],
};
