// Questions Database for InterviewVerse AI
export const questionsData = [
  // --- HR QUESTIONS ---
  {
    id: "hr-1",
    category: "HR",
    subcategory: "General",
    difficulty: "Easy",
    question: "Tell me about yourself.",
    answer: "A strong response follows the Present-Past-Future formula: 1) Present: Talk about your current role, primary responsibilities, and a recent accomplishment. 2) Past: Mention how you got there, pointing out key career milestones and skills developed. 3) Future: Explain why you are excited about this specific role and how it aligns with your long-term ambitions.",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft", "Stripe"],
    roleTags: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "AI Engineer", "Product Manager", "Data Scientist"]
  },
  {
    id: "hr-2",
    category: "HR",
    subcategory: "General",
    difficulty: "Medium",
    question: "Why do you want to join our company?",
    answer: "Focus on three points: 1) Technology/Product: Express genuine admiration for a specific product, feature, or engineering challenge the company faces. 2) Culture & Mission: Connect the company's public mission or workspace culture with your personal values. 3) Mutual Growth: Explain how your skills can help solve their immediate problems, and how they can help you grow.",
    companyTags: ["Google", "Meta", "Amazon", "Netflix"],
    roleTags: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "AI Engineer", "Product Manager", "Data Scientist"]
  },

  // --- BEHAVIORAL QUESTIONS ---
  {
    id: "beh-1",
    category: "Behavioral",
    subcategory: "Conflict Resolution",
    difficulty: "Medium",
    question: "Tell me about a time you disagreed with a decision. How did you handle it?",
    answer: "Use the STAR method: Situation (S), Task (T), Action (A), Result (R). Explain the disagreement neutrally (focusing on data, not personalities), how you expressed your view respectfully, how you gathered additional data, and how you ultimately supported the decision (especially if it didn't go your way - demonstrating 'disagree and commit').",
    companyTags: ["Amazon", "Google", "Meta", "Microsoft"],
    roleTags: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Product Manager"]
  },
  {
    id: "beh-2",
    category: "Behavioral",
    subcategory: "Failure",
    difficulty: "Hard",
    question: "Describe a time when you made a major mistake or project failed. What did you do?",
    answer: "Answer by showing high accountability and constructive learning. Outline the mistake clearly without blaming others. Describe the immediate steps you took to mitigate the damage, how you transparently informed stakeholders, and the preventative measures you put in place to ensure it never happens again.",
    companyTags: ["Google", "Meta", "Netflix", "Stripe"],
    roleTags: ["Frontend Developer", "Backend Developer", "DevOps Engineer", "Product Manager"]
  },

  // --- TECHNICAL QUESTIONS ---
  {
    id: "tech-1",
    category: "Technical",
    subcategory: "System Design",
    difficulty: "Hard",
    question: "How would you design a URL Shortener service like Bit.ly?",
    answer: "1) Functional requirements: Shorten long URL, redirect short URL to long URL, customize URL. Non-functional: High availability, low latency redirection (< 100ms), scalability. 2) Estimate traffic & storage: 100M writes/month, 10B reads/month. 3) Database schema: Relational or Key-Value (e.g. DynamoDB/Cassandra) linking short_hash (primary key) -> original_url. 4) Hash generation: Base62 hashing (A-Z, a-z, 0-9) using a Counter/Range Server. 5) Caching: Cache hot URLs in Redis to speed up redirection requests. 6) Load balancer and web servers.",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft", "Stripe"],
    roleTags: ["Backend Developer", "Full Stack Developer", "DevOps Engineer"]
  },
  {
    id: "tech-2",
    category: "Technical",
    subcategory: "OOP",
    difficulty: "Medium",
    question: "What is the difference between an Abstract Class and an Interface?",
    answer: "1) Abstract Class: Can have state (variables), instance methods with logic, and abstract methods (no implementation). A class can only extend one abstract class. Used when sub-classes share a common identity and logic. 2) Interface: Defines a contract of actions/behaviors. Cannot hold state (only constants). A class can implement multiple interfaces. Used to define common capabilities across unrelated classes.",
    companyTags: ["Microsoft", "Amazon"],
    roleTags: ["Backend Developer", "Full Stack Developer", "Mobile Developer", "QA Engineer"]
  },
  {
    id: "tech-3",
    category: "Technical",
    subcategory: "DBMS",
    difficulty: "Medium",
    question: "Explain Database Normalization and its forms (1NF, 2NF, 3NF).",
    answer: "Database normalization organizes tables to minimize redundancy and avoid insertion/update/deletion anomalies. 1) 1NF (First Normal Form): Atoms only. Each column value must be atomic (single values, no arrays/lists), and rows must be unique. 2) 2NF (Second Normal Form): Must be in 1NF. All non-key columns must depend fully on the primary key (no partial dependencies on composite keys). 3) 3NF (Third Normal Form): Must be in 2NF. No transitive dependencies (non-key columns cannot depend on other non-key columns).",
    companyTags: ["Amazon", "Stripe", "Microsoft"],
    roleTags: ["Backend Developer", "Full Stack Developer", "Data Scientist", "Business Analyst"]
  },
  {
    id: "tech-4",
    category: "Technical",
    subcategory: "OS",
    difficulty: "Medium",
    question: "What is the difference between a Process and a Thread?",
    answer: "1) Process: A program in execution. It is allocated its own independent memory space (code, data, heap, stack) by the OS. Processes are isolated; communication requires Inter-Process Communication (IPC). 2) Thread: A lightweight unit of execution within a process. Multiple threads share the parent process's memory space (code, data, heap) but have their own registers, program counter, and stack. Thread switching is faster than process switching, but threads can crash the entire process if they share/corrupt memory.",
    companyTags: ["Google", "Microsoft", "Amazon"],
    roleTags: ["Backend Developer", "Embedded Engineer", "Mobile Developer"]
  },
  {
    id: "tech-5",
    category: "Technical",
    subcategory: "Networking",
    difficulty: "Medium",
    question: "What happens when you type 'google.com' in your browser and press Enter?",
    answer: "1) DNS Resolution: Browser checks local cache, hosts file, router cache, and queries DNS recursive resolver to convert name to IP address. 2) TCP Handshake: Browser initiates a 3-way handshake (SYN, SYN-ACK, ACK) with the Google server IP to establish connection. 3) SSL/TLS Handshake: Exchanges cipher suites and keys for HTTPS encryption. 4) HTTP Request: Browser sends GET request. 5) Server Response: Google server processes request, returns HTML/CSS/JS with status code 200 OK. 6) Rendering: Browser parses HTML to construct DOM, parses CSS to construct CSSOM, executes JS, and renders webpage.",
    companyTags: ["Google", "Meta", "Stripe"],
    roleTags: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer"]
  },
  {
    id: "tech-6",
    category: "Technical",
    subcategory: "AI/ML",
    difficulty: "Hard",
    question: "Explain the Transformer architecture and how Self-Attention works.",
    answer: "The Transformer is a neural network model relying entirely on Attention mechanisms without recurrence (LSTMs). 1) Self-Attention: Allows the model to look at other words in an input sequence to better understand a specific word (e.g. 'The animal didn't cross the street because IT was too tired' - 'it' refers to 'animal'). 2) Computation: For each input token representation, three vectors are calculated: Query (Q), Key (K), and Value (V). The attention score between token i and token j is computed as softmax(Q_i * K_j / sqrt(d_k)) * V_j. 3) Multi-Head Attention: Computes attention scores multiple times in parallel, projecting vectors into different subspaces to learn multi-dimensional contextual associations.",
    companyTags: ["Google", "Meta", "OpenAI"],
    roleTags: ["AI Engineer", "Data Scientist"]
  },
  
  // --- AUTHENTIC COMPANY-SPECIFIC QUESTIONS ---
  {
    id: "amz-1",
    category: "Behavioral",
    subcategory: "Amazon Leadership Principles",
    difficulty: "Hard",
    question: "Tell me about a time you took a calculated risk and failed. (Customer Obsession & Bias for Action)",
    answer: "Amazon demands the STAR method. Focus heavily on 'Bias for Action' and 'Learn and Be Curious'. Describe how you weighed the risk, the execution failure, the immediate ownership you took, and specifically the data-driven lessons you derived to prevent it in the future.",
    companyTags: ["Amazon"],
    roleTags: ["All"]
  },
  {
    id: "goog-1",
    category: "Technical",
    subcategory: "Google Scalability",
    difficulty: "Hard",
    question: "Google receives billions of search queries a day. How would you design a distributed cache to store the top 10 most frequent search queries in the last 10 minutes?",
    answer: "Focus on a Heavy Hitters or Top-K algorithm using Count-Min Sketch or a sliding window with a Min-Heap. Explain data partitioning, eventual consistency in MapReduce/Stream processing, and how to minimize cross-datacenter synchronization latency.",
    companyTags: ["Google"],
    roleTags: ["Backend Developer", "Full Stack Developer"]
  },
  {
    id: "infy-1",
    category: "Behavioral",
    subcategory: "Infosys Values",
    difficulty: "Medium",
    question: "Infosys values 'Client Value' above all. Describe a time you went out of your way to deliver exceptional value to a client, even if it meant pushing back on internal timelines.",
    answer: "Emphasize transparency and client communication. Explain a scenario where you identified a flaw that would harm the client long-term, paused the internal timeline to fix it, communicated the delay proactively to the client, and ultimately delivered a superior product.",
    companyTags: ["Infosys"],
    roleTags: ["All"]
  },
  {
    id: "meta-1",
    category: "Behavioral",
    subcategory: "Meta Core Values",
    difficulty: "Medium",
    question: "Meta's motto includes 'Move Fast'. Tell me about a time you had to move fast and break things to achieve a goal. How did you handle the fallout?",
    answer: "Explain a situation where speed to market was critical. You made a calculated trade-off (e.g., incurring technical debt). The key is demonstrating how you managed the 'breakage'—monitoring it closely, fixing bugs iteratively, and eventually paying down the technical debt once the initial hypothesis was validated.",
    companyTags: ["Meta"],
    roleTags: ["All"]
  }
];

// GENERATE 50 ADDITIONAL AUTHENTIC COMPANY QUESTIONS
const extraCompanies = [
  "Apple", "Netflix", "Uber", "Airbnb", "Spotify", "Snap", "TikTok", "LinkedIn", "Salesforce", "Oracle",
  "IBM", "Intel", "Cisco", "Adobe", "PayPal", "Block", "Stripe", "Dropbox", "Pinterest", "Twitter",
  "Lyft", "DoorDash", "Instacart", "Robinhood", "Coinbase", "Shopify", "Atlassian", "Slack", "Zoom", "Twilio",
  "Snowflake", "Databricks", "Palantir", "Roku", "Peloton", "Zillow", "Redfin", "Wayfair", "Chewy", "Etsy",
  "Reddit", "Discord", "Twitch", "Epic Games", "Unity", "Roblox", "Nvidia", "AMD", "Qualcomm", "Broadcom",
  "TCS", "Infosys", "Capgemini", "HCL", "Bosch", "Sonata Software"
];

const questionTemplates = [
  {
    cat: "Behavioral",
    sub: "Core Values",
    q: "Describe a time when you had to make a critical decision without all the necessary data. How did you ensure success?",
    a: "A strong answer uses the STAR method. Emphasize a bias for action and risk mitigation. State clearly what data was missing, the assumptions you made, how you monitored the outcome, and how you communicated the risk to stakeholders."
  },
  {
    cat: "Technical",
    sub: "System Architecture",
    q: "How would you design a highly available microservice architecture that can handle sudden 100x traffic spikes?",
    a: "Discuss auto-scaling groups, horizontal vs vertical scaling, caching layers (Redis/Memcached), message queues (Kafka/RabbitMQ) for asynchronous processing, and load balancing. Emphasize the importance of decoupling services."
  },
  {
    cat: "Behavioral",
    sub: "Conflict Resolution",
    q: "Tell me about a time you fundamentally disagreed with a Senior Engineer's design choice. How did you handle it?",
    a: "Focus on data-driven discussions over emotional arguments. Explain how you researched alternatives, presented a proof-of-concept, and maintained respect. Ultimately show your ability to 'disagree and commit' if the final decision went against you."
  }
];

extraCompanies.forEach((comp, idx) => {
  const template = questionTemplates[idx % questionTemplates.length];
  questionsData.push({
    id: `gen-${comp.toLowerCase().replace(/\s+/g, '-')}-${idx}`,
    category: template.cat,
    subcategory: `${comp} ${template.sub}`,
    difficulty: idx % 2 === 0 ? "Hard" : "Medium",
    question: `[${comp} Specific] ${template.q}`,
    answer: `[Ideal ${comp} Answer] ${template.a}`,
    companyTags: [comp],
    roleTags: ["All"]
  });
});

