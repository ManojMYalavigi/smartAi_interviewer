// Companies Database for InterviewVerse AI
export const companiesData = {
  "google": {
    name: "Google",
    difficulty: "Hard",
    timeline: "4-6 weeks",
    process: [
      "1. Technical Phone Screen (45 mins): 1 DSA question (often Graph, Trees, or DP)",
      "2. Virtual Onsite: 3 Coding rounds (DSA), 1 System Design round (for L5+), and 1 'Googleyness' (behavioral/cultural) round",
      "3. Hiring Committee Review: Holistic evaluation of feedback before offer"
    ],
    oaPattern: "Usually bypassed for experienced hires. For college grads: 2 coding questions on HackerEarth (90 mins, focuses heavily on Array manipulation, String parsing, and Maps).",
    faqs: [
      { q: "How important is time and space complexity?", a: "Extremely. You are expected to state the Big-O time and space complexity before coding and discuss trade-offs." },
      { q: "Can I use Python?", a: "Yes, you can choose Python, Java, C++, or Go. Google cares about logical accuracy, clean abstractions, and edge cases, not language quirks." }
    ],
    codingQuestions: [
      { title: "Find K-Closest Elements", difficulty: "Medium", topic: "Heaps/Binary Search" },
      { title: "Longest Path in a Matrix", difficulty: "Hard", topic: "DFS/Dynamic Programming" },
      { title: "Logger Rate Limiter", difficulty: "Easy", topic: "Hash Map" }
    ],
    behavioralQuestions: [
      "Tell me about a time when you solved a complex technical issue with a simple, creative solution.",
      "How do you handle disagreement with a tech lead or senior team member regarding architectural choices?"
    ],
    tips: [
      "Explain your thought process out loud. Silence is your enemy in a Google interview.",
      "Google interviewers love to modify the problem once you've solved it (e.g., 'What if the data is too large to fit in memory?'). Plan for scalability.",
      "Master graph algorithms (DFS, BFS, Dijkstra, A*) and tree traversals."
    ],
    salaries: [
      { level: "L3 (Entry)", base: "135k", equity: "50k", bonus: "20k", total: "205k" },
      { level: "L4 (Mid)", base: "165k", equity: "90k", bonus: "25k", total: "280k" },
      { level: "L5 (Senior)", base: "200k", equity: "160k", bonus: "35k", total: "395k" },
      { level: "L6 (Staff)", base: "240k", equity: "270k", bonus: "45k", total: "555k" }
    ]
  },
  "meta": {
    name: "Meta",
    difficulty: "Medium-Hard",
    timeline: "2-4 weeks",
    process: [
      "1. Technical Phone Screen (45 mins): 2 coding questions (LeetCode medium)",
      "2. Virtual Onsite: 2 Coding rounds (2 questions each, 45 mins), 1 System Design (or Product Design) round, and 1 Behavioral (Behavioral & Career Growth) round"
    ],
    oaPattern: "Usually no online assessment; candidates jump directly to the live phone screen.",
    faqs: [
      { q: "Do I need to solve both coding questions in 45 mins?", a: "Yes. Meta interviews are fast-paced. You have about 15-20 minutes per question, meaning you must write bug-free code quickly." },
      { q: "Should I focus on LeetCode Meta-tagged questions?", a: "Yes. Meta is known for asking high-frequency questions directly from their active pool. Preparing Meta-specific questions helps tremendously with speed." }
    ],
    codingQuestions: [
      { title: "Subarray Sum Equals K", difficulty: "Medium", topic: "Prefix Sum" },
      { title: "Binary Tree Right Side View", difficulty: "Medium", topic: "BFS/DFS" },
      { title: "Minimum Window Substring", difficulty: "Hard", topic: "Sliding Window" }
    ],
    behavioralQuestions: [
      "Tell me about a project you led that had high impact. How did you coordinate with other teams?",
      "Describe a time you had to pivot quickly due to changing project priorities."
    ],
    tips: [
      "Speed is key. Aim to jump into the solution quickly, writing clean code without over-analyzing simple questions.",
      "Practice writing code on a plain text editor without auto-complete, as Meta uses a simplified coding interface.",
      "Memorize patterns for common Meta problems: sliding windows, tree levels, and two-pointers."
    ],
    salaries: [
      { level: "E3 (Entry)", base: "130k", equity: "45k", bonus: "15k", total: "190k" },
      { level: "E4 (Mid)", base: "160k", equity: "85k", bonus: "20k", total: "265k" },
      { level: "E5 (Senior)", base: "210k", equity: "180k", bonus: "30k", total: "420k" },
      { level: "E6 (Staff)", base: "250k", equity: "320k", bonus: "40k", total: "610k" }
    ]
  },
  "amazon": {
    name: "Amazon",
    difficulty: "Medium",
    timeline: "3-5 weeks",
    process: [
      "1. Online Assessment: Part 1 (Coding & Work Style Simulation), Part 2 (Technical problem-solving)",
      "2. Phone Interview (Optional): 1 Technical screening round with an engineer",
      "3. Virtual Loop (Onsite): 3-4 rounds, each featuring 20+ mins of Leadership Principles (LP) questions, followed by coding, system design, or object-oriented design."
    ],
    oaPattern: "2 Coding questions on HackerRank (90 mins). Typical topics include: Arrays, Maps, Priority Queues, and dynamic structures.",
    faqs: [
      { q: "How important are the Leadership Principles?", a: "Extremely. Roughly 50% of the entire interview scorecard is based on LPs. You must prepare stories in the STAR format for every single principle." },
      { q: "What is a 'Bar Raiser'?", a: "A specially trained interviewer from another team who acts as an objective evaluator to ensure every candidate hired raises the average performance level of the company." }
    ],
    codingQuestions: [
      { title: "Reorder Data in Log Files", difficulty: "Medium", topic: "Custom Sorting" },
      { title: "Number of Islands", difficulty: "Medium", topic: "Graphs (BFS/DFS)" },
      { title: "Critical Connections in a Network", difficulty: "Hard", topic: "Graphs (Tarjan's)" }
    ],
    behavioralQuestions: [
      "Tell me about a time when you had to make a quick decision without all the necessary data (Bias for Action).",
      "Give me an example of a time when you went above and beyond for a customer (Customer Obsession)."
    ],
    tips: [
      "Do not ignore the Leadership Principles. Highlight 'Customer Obsession', 'Ownership', and 'Deliver Results' in your stories.",
      "Be prepared for deep-dive follow-up questions in your behavioral stories (e.g., 'What was the exact dollar impact?', 'What did *you* do versus the team?').",
      "Master standard tree, graph, and heap operations for the coding rounds."
    ],
    salaries: [
      { level: "L4 (Entry)", base: "120k", equity: "40k", bonus: "10k", total: "170k" },
      { level: "L5 (Mid)", base: "150k", equity: "75k", bonus: "15k", total: "240k" },
      { level: "L6 (Senior)", base: "185k", equity: "140k", bonus: "25k", total: "350k" },
      { level: "L7 (Principal)", base: "220k", equity: "290k", bonus: "40k", total: "550k" }
    ]
  },
  "microsoft": {
    name: "Microsoft",
    difficulty: "Medium",
    timeline: "4 weeks",
    process: [
      "1. Initial Screener: Codility test or a 45-min video call containing general engineering questions.",
      "2. Onsite Loop: 4 rounds including coding, system design, API architectural designs, and behavioral reviews."
    ],
    oaPattern: "Usually 3 coding questions on Codility (60-90 mins). Emphasizes arrays, logical parsing, complexity optimization, and strings.",
    faqs: [
      { q: "Is Microsoft's interview focus different from other FAANGs?", a: "Microsoft places a high value on clean code, design patterns, testing, and collaboration. They also emphasize growth mindset." }
    ],
    codingQuestions: [
      { title: "Min Deletions to Make Frequency Unique", difficulty: "Medium", topic: "Greedy/Strings" },
      { title: "Sign of the Product of an Array", difficulty: "Easy", topic: "Array/Math" },
      { title: "Meeting Rooms II", difficulty: "Medium", topic: "Heaps/Intervals" }
    ],
    behavioralQuestions: [
      "Tell me about a time you worked with someone with a completely different working style. How did you align?",
      "Describe a time you failed. What did you learn and how did you apply that learning later?"
    ],
    tips: [
      "Focus on edge cases and testing. Interviewers love to see you write a quick list of test cases (null inputs, empty values, very large values) before they ask.",
      "Display a growth mindset—be open to suggestions and show enthusiasm for learning.",
      "Know your design patterns (Singleton, Factory, Observer) as Object Oriented Design is occasionally tested."
    ],
    salaries: [
      { level: "L59 (Entry)", base: "115k", equity: "30k", bonus: "10k", total: "155k" },
      { level: "L61 (Mid)", base: "145k", equity: "60k", bonus: "15k", total: "220k" },
      { level: "L63 (Senior)", base: "180k", equity: "110k", bonus: "25k", total: "315k" },
      { level: "L65 (Principal)", base: "215k", equity: "220k", bonus: "35k", total: "470k" }
    ]
  },
  "netflix": {
    name: "Netflix",
    difficulty: "Hard",
    timeline: "3-5 weeks",
    process: [
      "1. Recruiter Screen: Brief call aligning on experiences, compensation, and cultural compatibility.",
      "2. Technical Screening: 1-2 coding and architecture rounds (often system design or language-specific testing).",
      "3. Virtual Onsite: 4-5 rounds of technical depth, systems, and deep-dive evaluations based on Netflix's Core Values document."
    ],
    oaPattern: "Usually does not use automated coding platforms; screens are handled via highly customized pair programming sessions.",
    faqs: [
      { q: "What is the Netflix culture test?", a: "Netflix evaluates cultural fit based on their Freedom & Responsibility memo. They look for high autonomy, candid feedback capability, and selflessness." }
    ],
    codingQuestions: [
      { title: "LRU Cache", difficulty: "Medium-Hard", topic: "Design/Doubly Linked List" },
      { title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", topic: "Trees/BFS" },
      { title: "Insert Delete GetRandom O(1)", difficulty: "Medium", topic: "Hash Map/Arrays" }
    ],
    behavioralQuestions: [
      "Tell me about a time you gave extremely candid, difficult feedback to a coworker or manager.",
      "How do you prioritize your tasks when you have complete freedom to choose what you work on?"
    ],
    tips: [
      "Read the Netflix Culture Deck multiple times. It is the absolute key to passing behavioral interviews.",
      "Netflix values practical systems engineering. Know how databases work under the hood, how networks connect, and details of your stack's runtime.",
      "Be opinionated but open-minded. Netflix wants senior engineering leaders who can take ownership."
    ],
    salaries: [
      { level: "Senior (L5)", base: "380k", equity: "70k", bonus: "0k", total: "450k" },
      { level: "Staff (L6)", base: "480k", equity: "120k", bonus: "0k", total: "600k" }
    ]
  },
  "stripe": {
    name: "Stripe",
    difficulty: "Hard",
    timeline: "3-4 weeks",
    process: [
      "1. Technical Screener (1 hour): Focuses on practical integration coding (e.g. writing a transaction processor).",
      "2. Onsite Loop: 4 sessions: Bug Squashing (debugging a large open-source code base), Integration (extending an API wrapper), System Design (focused on API design and data pipelines), and Manager Behavioral."
    ],
    oaPattern: "Practical API/JSON manipulation tasks with local files rather than abstract algorithm questions.",
    faqs: [
      { q: "What is Bug Squashing?", a: "You are given a real codebase (e.g. 50+ files in JS/Ruby/Python) with a set of broken tests. You must read code, locate the bugs, write unit tests, and fix them in 45 minutes." }
    ],
    codingQuestions: [
      { title: "API Rate Limiter Implementation", difficulty: "Medium-Hard", topic: "Concurrency/APIs" },
      { title: "JSON Invoice Parser", difficulty: "Medium", topic: "Object Mapping" },
      { title: "Key-Value Store with Time travel", difficulty: "Hard", topic: "Data Structures" }
    ],
    behavioralQuestions: [
      "Describe a time you had to digest a complex API or integration doc. How did you organize the work?",
      "How do you design systems that are clean, easy to maintain, and pleasant for external developers to integrate with?"
    ],
    tips: [
      "Stripe does not care about abstract LeetCode algorithms. Focus on parsing strings, calling HTTP endpoints, handling JSON schemas, and structural code cleanliness.",
      "Write automated tests while coding. Stripe interviewers love seeing test coverage.",
      "Understand API design principles: HTTP statuses, error payloads, idempotent requests, and webhook layouts."
    ],
    salaries: [
      { level: "L1 (Entry)", base: "140k", equity: "50k", bonus: "15k", total: "205k" },
      { level: "L2 (Mid)", base: "175k", equity: "100k", bonus: "20k", total: "295k" },
      { level: "L3 (Senior)", base: "215k", equity: "200k", bonus: "30k", total: "445k" },
      { level: "L4 (Staff)", base: "260k", equity: "340k", bonus: "40k", total: "640k" }
    ]
  }
};

// GENERATE 50 ADDITIONAL COMPANIES
const extraCompanyNames = [
  "Apple", "Netflix", "Uber", "Airbnb", "Spotify", "Snap", "TikTok", "LinkedIn", "Salesforce", "Oracle",
  "IBM", "Intel", "Cisco", "Adobe", "PayPal", "Block", "Stripe", "Dropbox", "Pinterest", "Twitter",
  "Lyft", "DoorDash", "Instacart", "Robinhood", "Coinbase", "Shopify", "Atlassian", "Slack", "Zoom", "Twilio",
  "Snowflake", "Databricks", "Palantir", "Roku", "Peloton", "Zillow", "Redfin", "Wayfair", "Chewy", "Etsy",
  "Reddit", "Discord", "Twitch", "Epic Games", "Unity", "Roblox", "Nvidia", "AMD", "Qualcomm", "Broadcom",
  "TCS", "Infosys", "Capgemini", "HCL", "Bosch", "Sonata Software"
];

extraCompanyNames.forEach((name, i) => {
  const key = name.toLowerCase().replace(/\s+/g, '-');
  if (!companiesData[key]) {
    companiesData[key] = {
      name: name,
      difficulty: i % 3 === 0 ? "Hard" : "Medium",
      timeline: "3-5 weeks",
      process: [
        "1. Technical Phone Screen (45 mins): 1-2 coding questions.",
        "2. Virtual Onsite: 3 Coding rounds, 1 System Design round, and 1 Behavioral round."
      ],
      oaPattern: "Online Assessment generally consisting of 2 Data Structures & Algorithms problems within 90 minutes.",
      faqs: [
        { q: `What is the most important trait for ${name}?`, a: "Strong fundamentals in algorithms and a demonstrable alignment with core company values." },
        { q: "Do they allow language flexibility?", a: "Yes, you can typically use any mainstream language like Python, Java, or C++." }
      ],
      codingQuestions: [
        { title: `${name} Two Sum Variant`, difficulty: "Easy", topic: "Hash Map" },
        { title: `${name} Scalability Matrix`, difficulty: "Hard", topic: "Dynamic Programming" },
        { title: `Optimized Data Routing`, difficulty: "Medium", topic: "Graphs" }
      ],
      behavioralQuestions: [
        `Tell me about a time you solved a highly complex issue at a previous job using ${name}'s principles.`,
        "Describe a situation where you had to push back on a deadline to ensure high quality."
      ],
      tips: [
        "Always communicate your thought process before writing code.",
        "Ensure your time and space complexity analysis is accurate.",
        "Prepare strong STAR-format stories for your behavioral rounds."
      ],
      salaries: [
        { level: "Entry", base: "120k", equity: "30k", bonus: "10k", total: "160k" },
        { level: "Mid", base: "150k", equity: "70k", bonus: "15k", total: "235k" },
        { level: "Senior", base: "190k", equity: "140k", bonus: "25k", total: "355k" }
      ]
    };
  }
});
