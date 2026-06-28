// Roles Database for InterviewVerse AI
export const rolesData = {
  "frontend-developer": {
    title: "Frontend Developer",
    icon: "Layout",
    skills: ["JavaScript (ES6+)", "TypeScript", "React / Vue / Angular", "CSS Grid & Flexbox", "Web Performance", "State Management (Redux/Zustand)", "Responsive Design", "Testing (Jest/Playwright)"],
    roadmap: [
      { phase: "Phase 1: Foundations", duration: "Weeks 1-2", topics: ["HTML5 semantics", "Modern CSS layout models", "DOM Manipulation", "ES6+ syntax & Async JS"] },
      { phase: "Phase 2: Framework Mastery", duration: "Weeks 3-4", topics: ["React fundamentals (hooks, state, props)", "TypeScript interfaces", "CSS-in-JS & CSS Modules"] },
      { phase: "Phase 3: State & Routing", duration: "Week 5", topics: ["React Router", "Zustand / Redux Toolkit", "Caching with React Query"] },
      { phase: "Phase 4: Devops & Testing", duration: "Week 6", topics: ["Webpack/Vite tooling", "Unit testing with Vitest", "E2E testing", "CI/CD basics"] }
    ],
    codingTopics: ["DOM manipulation", "Array methods", "Promises and async handling", "JSON transformations", "Custom event emitters", "Debouncing & Throttling", "Dynamic forms list processing"],
    projects: [
      { name: "Dynamic Analytics Dashboard", desc: "A dashboard with canvas charts, dark mode, custom filter sliders, and drag-and-drop widgets.", tech: ["React", "Chart.js", "Zustand", "CSS Modules"] },
      { name: "Collaborative Whiteboard", desc: "A vector rendering canvas allowing multiple users to draw shapes, add text, and undo/redo actions.", tech: ["HTML5 Canvas", "WebSockets", "React"] }
    ],
    resources: [
      { title: "MDN Web Docs - JavaScript Guide", url: "https://developer.mozilla.org", type: "Docs" },
      { title: "React Official Documentation", url: "https://react.dev", type: "Docs" },
      { title: "Web.dev - Performance Tips", url: "https://web.dev/fast", type: "Article" }
    ]
  },
  "backend-developer": {
    title: "Backend Developer",
    icon: "Server",
    skills: ["Node.js / Python / Go", "Database Design (SQL & NoSQL)", "REST & GraphQL APIs", "Microservices Architecture", "Caching (Redis)", "Message Queues (RabbitMQ/Kafka)", "Containerization (Docker)", "Security (JWT, CORS, OAuth)"],
    roadmap: [
      { phase: "Phase 1: Language & Core", duration: "Weeks 1-2", topics: ["Advanced Node.js/Go/Python concepts", "Event loop & Async programming", "HTTP protocol internals"] },
      { phase: "Phase 2: Databases & Storage", duration: "Weeks 3-4", topics: ["SQL schema normalization", "Indexes & query optimization", "MongoDB / PostgreSQL differences"] },
      { phase: "Phase 3: Architecture", duration: "Weeks 5-6", topics: ["Microservices vs Monolith", "API gateways", "Message brokers, pub-sub model", "WebSockets"] }
    ],
    codingTopics: ["Hashing & Encrypting data", "Custom rate limiters", "JSON parsing and validators", "Database transaction management", "Concurrency handling", "Tree / Graph traversal"],
    projects: [
      { name: "Distributed Task Scheduler", desc: "A backend service executing queued tasks with support for retries, delays, and priority management using Redis.", tech: ["Node.js", "Redis", "PostgreSQL", "Docker"] },
      { name: "Real-time Messaging Gateway", desc: "A highly concurrent chat gateway supporting persistent connections, typing indicators, and message history.", tech: ["Go", "WebSockets", "MongoDB"] }
    ],
    resources: [
      { title: "Backend Developer Roadmap", url: "https://roadmap.sh/backend", type: "Roadmap" },
      { title: "Designing Data-Intensive Applications", url: "https://www.oreilly.com", type: "Book" }
    ]
  },
  "fullstack-developer": {
    title: "Full Stack Developer",
    icon: "Layers",
    skills: ["React / Next.js", "Node.js / Express", "PostgreSQL / Prisma", "TypeScript", "RESTful & GraphQL API", "Docker", "AWS / Vercel Deployments", "System Testing"],
    roadmap: [
      { phase: "Phase 1: Front to Back Connection", duration: "Weeks 1-3", topics: ["Building React SPA communicating with Node.js API", "TypeScript end-to-end typing", "SQL CRUD integrations"] },
      { phase: "Phase 2: Next.js & Serverless", duration: "Weeks 4-6", topics: ["SSR, SSG, ISR in Next.js", "Serverless database connections", "Authentication logic using Auth.js"] }
    ],
    codingTopics: ["Auth token refresh mechanisms", "File upload pipelines", "Recursive tree comment sections", "Optimistic state updates UI", "Database joining and aggregate queries"],
    projects: [
      { name: "SaaS Workspace Platform", desc: "A comprehensive project planner with Kanban boards, custom document editor, and user permission hierarchies.", tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"] }
    ],
    resources: [
      { title: "Full Stack Open Course", url: "https://fullstackopen.com/en", type: "Course" }
    ]
  },
  "ai-engineer": {
    title: "AI Engineer",
    icon: "Cpu",
    skills: ["Python", "PyTorch / TensorFlow", "Large Language Models (LLMs)", "Vector Databases (Pinecone/Chroma)", "LangChain / LlamaIndex", "Retrieval-Augmented Generation (RAG)", "Model Fine-tuning", "Prompt Engineering"],
    roadmap: [
      { phase: "Phase 1: AI Fundamentals", duration: "Weeks 1-2", topics: ["Linear algebra & calculus", "Machine learning basics (regression, trees)", "Neural networks foundations"] },
      { phase: "Phase 2: Natural Language Processing", duration: "Weeks 3-4", topics: ["Attention mechanism & Transformers", "BERT, GPT architecture", "Hugging Face library"] },
      { phase: "Phase 3: LLM Engineering", duration: "Weeks 5-6", topics: ["Prompt engineering templates", "Vector search & indexing", "RAG systems building", "Agent workflows"] }
    ],
    codingTopics: ["Tensor operations", "Vector cosine similarity", "Tokenization models", "Custom loss functions", "Text preprocessing pipelines", "RAG retriever parsing"],
    projects: [
      { name: "Smart PDF Chatbot Agent", desc: "An application that indexes long PDF documents into a vector store and utilizes RAG to answer queries with citations.", tech: ["Python", "LangChain", "Pinecone", "OpenAI API"] },
      { name: "Fine-Tuned Text Classifier", desc: "A lightweight BERT-based classifier trained on specific support ticket data to categorize requests.", tech: ["PyTorch", "Hugging Face", "FastAPI"] }
    ],
    resources: [
      { title: "DeepLearning.AI Courses", url: "https://deeplearning.ai", type: "Course" },
      { title: "Hugging Face Documentation", url: "https://huggingface.co/docs", type: "Docs" }
    ]
  },
  "data-scientist": {
    title: "Data Scientist",
    icon: "BarChart2",
    skills: ["Python / R", "Pandas / NumPy", "Scikit-Learn", "SQL (Aggregations & Joins)", "Statistical Analysis", "Data Visualization (Seaborn/Plotly)", "Machine Learning", "A/B Testing"],
    roadmap: [
      { phase: "Phase 1: Data Manipulation", duration: "Weeks 1-2", topics: ["Pandas DataFrames", "Data cleaning & imputation", "Feature engineering"] },
      { phase: "Phase 2: Statistics & A/B Testing", duration: "Weeks 3-4", topics: ["Probability distributions", "Hypothesis testing", "A/B test design & power analysis"] },
      { phase: "Phase 3: Machine Learning Models", duration: "Weeks 5-6", topics: ["Supervised vs Unsupervised ML", "Model evaluations (ROC, AUC)", "Tree models (XGBoost)"] }
    ],
    codingTopics: ["Matrix operations", "DataFrame aggregations", "Outlier detection algorithms", "Gradient descent walkthrough", "SQL window functions"],
    projects: [
      { name: "Customer Churn Prediction", desc: "A machine learning classification pipeline predicting which subscription customers are likely to cancel.", tech: ["Python", "Scikit-Learn", "Pandas", "XGBoost"] }
    ],
    resources: [
      { title: "Kaggle Learn Tutorials", url: "https://www.kaggle.com/learn", type: "Tutorials" }
    ]
  },
  "embedded-engineer": {
    title: "Embedded Engineer",
    icon: "Cpu",
    skills: ["C / C++", "Microcontrollers (STM32, ESP32)", "RTOS (FreeRTOS)", "Communication Protocols (I2C, SPI, UART)", "Debugging (JTAG, Oscilloscopes)", "Low-Power Optimization", "Hardware Interfacing", "Bare-Metal Programming"],
    roadmap: [
      { phase: "Phase 1: C/C++ & Memory Management", duration: "Weeks 1-2", topics: ["Pointers & memory mapping", "Bit manipulation", "Interrupt service routines (ISR)"] },
      { phase: "Phase 2: Microcontroller Internals", duration: "Weeks 3-4", topics: ["GPIO configurations", "Timer modules & PWM", "ADC/DAC conversions", "Register-level coding"] },
      { phase: "Phase 3: RTOS & Concurrent Execution", duration: "Weeks 5-6", topics: ["Tasks & scheduler", "Mutexes, semaphores, queues", "Power saving states & sleeping"] }
    ],
    codingTopics: ["Bit masking and shifting", "Ring buffers / FIFO queues", "Custom memory allocators", "State machine controllers", "Checksums & CRC calculations"],
    projects: [
      { name: "IoT Weather Station", desc: "An ESP32-based node reading sensor data (I2C) and transmitting it via low-power WiFi sleep cycles.", tech: ["ESP32", "C++", "FreeRTOS", "MQTT"] }
    ],
    resources: [
      { title: "Embedded Artistry Articles", url: "https://embeddedartistry.com", type: "Article" }
    ]
  },
  "cybersecurity-analyst": {
    title: "Cybersecurity Analyst",
    icon: "ShieldAlert",
    skills: ["Network Security", "Penetration Testing", "SIEM Tools (Splunk)", "Cryptography (AES, RSA, ECC)", "Linux Administration", "Threat Modeling", "OWASP Top 10", "Vulnerability Scanning"],
    roadmap: [
      { phase: "Phase 1: Networks & Protocols", duration: "Weeks 1-2", topics: ["TCP/IP model", "Routing and subnets", "DNS, SSL/TLS handshakes", "Wireshark traffic analysis"] },
      { phase: "Phase 2: Attack Methods & Web Security", duration: "Weeks 3-4", topics: ["XSS, SQL Injection, CSRF", "Privilege escalation", "Authentication bypasses"] },
      { phase: "Phase 3: Cryptography & Defense", duration: "Weeks 5-6", topics: ["Hashing and salting", "Public key infrastructure", "Firewall configurations", "Log audits"] }
    ],
    codingTopics: ["Scraping log patterns (regex)", "Port scanner simulations", "Caesar & Vigenere cipher tools", "JWT decryption algorithms", "HTTP security headers check"],
    projects: [
      { name: "Automated Web Vulnerability Scanner", desc: "A python script that checks targeted inputs for OWASP Top 10 issues like XSS and directory traversal.", tech: ["Python", "Requests", "Regex"] }
    ],
    resources: [
      { title: "OWASP Cheat Sheet Series", url: "https://cheatsheetseries.owasp.org", type: "Security Wiki" }
    ]
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    icon: "TrendingUp",
    skills: ["CI/CD Pipelines (GitHub Actions/Jenkins)", "Docker & Kubernetes", "Infrastructure as Code (Terraform)", "Linux & Bash Scripting", "Cloud Platforms (AWS, Azure, GCP)", "Monitoring (Prometheus & Grafana)", "Nginx & Reverse Proxies", "Git & Branching Strategies"],
    roadmap: [
      { phase: "Phase 1: System Admin & Scripting", duration: "Weeks 1-2", topics: ["Linux terminal navigation", "Bash shell scripting", "SSH keys & access management"] },
      { phase: "Phase 2: Containerization & IaC", duration: "Weeks 3-4", topics: ["Writing multi-stage Dockerfiles", "Kubernetes pods/services layouts", "Terraform modules writing"] },
      { phase: "Phase 3: CI/CD & Orchestration", duration: "Weeks 5-6", topics: ["GitHub Actions workflow pipelines", "Helm charts", "Log aggregation & metrics dashboards"] }
    ],
    codingTopics: ["Bash logs parser", "Docker container state checker", "Kubernetes config validator", "IP address subnet parser", "Git tree walk scripts"],
    projects: [
      { name: "GitOps Infrastructure Pipeline", desc: "A Terraform-configured AWS cluster deploying automated React apps through GitHub Actions.", tech: ["Terraform", "GitHub Actions", "Docker", "AWS"] }
    ],
    resources: [
      { title: "DevOps Roadmap", url: "https://roadmap.sh/devops", type: "Roadmap" }
    ]
  },
  "mobile-developer": {
    title: "Mobile Developer",
    icon: "Smartphone",
    skills: ["Swift / SwiftUI (iOS)", "Kotlin / Jetpack Compose (Android)", "React Native / Flutter", "Mobile Architecture (MVVM/TCA)", "Local Database (Room/CoreData)", "App Store/Play Store Publishing", "Push Notifications", "Bluetooth / NFC APIs"],
    roadmap: [
      { phase: "Phase 1: Native Language Foundations", duration: "Weeks 1-2", topics: ["Swift or Kotlin basic syntax", "Asynchronous tasks (Coroutines/Swift Concurrency)", "UI Layout systems"] },
      { phase: "Phase 2: Core SDKs & Storage", duration: "Weeks 3-4", topics: ["Working with REST APIs", "Local databases (SQLite wrappers)", "State management (StateFlow/ObservableObjects)"] },
      { phase: "Phase 3: Advanced Features", duration: "Weeks 5-6", topics: ["Camera & Location permissions", "Background tasks & sync", "Apple/Google design guidelines"] }
    ],
    codingTopics: ["JSON mapping classes", "Throttle input lists", "Local storage cache sync", "State machine views", "Dynamic layout constraints"],
    projects: [
      { name: "Offline-First Expense Logger", desc: "A mobile application storing transaction data locally and syncing with a server database when connection returns.", tech: ["SwiftUI", "CoreData", "Swift", "URLSession"] }
    ],
    resources: [
      { title: "Hacking with Swift", url: "https://www.hackingwithswift.com", type: "Tutorials" },
      { title: "Android Developers Guide", url: "https://developer.android.com", type: "Docs" }
    ]
  },
  "qa-engineer": {
    title: "QA Engineer",
    icon: "CheckCircle",
    skills: ["Selenium / Playwright / Cypress", "Manual Testing Methods", "API Testing (Postman/Supertest)", "Bug Tracking (Jira)", "Regression & Smoke Testing", "SQL for Data Integrity", "Load Testing (k6)", "CI/CD Integration"],
    roadmap: [
      { phase: "Phase 1: Manual Testing Basics", duration: "Weeks 1-2", topics: ["Writing test cases", "Bug reporting layout", "Boundary value analysis & equivalence partitioning"] },
      { phase: "Phase 2: Automation Foundations", duration: "Weeks 3-4", topics: ["JavaScript/Python for automation", "Locators, actions, assertions in Playwright", "Page Object Model"] },
      { phase: "Phase 3: Advanced Automation", duration: "Weeks 5-6", topics: ["Parallel test execution", "API automated assertions", "Load testing scripts", "CI execution"] }
    ],
    codingTopics: ["HTML DOM selector generation", "CSV / JSON validator", "Custom assertions runner", "HTTP API status checking script", "Test logs parser"],
    projects: [
      { name: "Automated E-Commerce Test Suite", desc: "A suite testing checkout, cart adjustments, and filter panels, integrating custom reporting templates.", tech: ["Playwright", "TypeScript", "Allure Reports"] }
    ],
    resources: [
      { title: "Ministry of Testing", url: "https://www.ministryoftesting.com", type: "Community" }
    ]
  },
  "uiux-designer": {
    title: "UI/UX Designer",
    icon: "Figma",
    skills: ["Figma / Adobe XD", "User Research & Interviews", "Wireframing & Prototyping", "Design Systems", "Typography & Color Theory", "Information Architecture", "Usability Testing", "Interaction Design"],
    roadmap: [
      { phase: "Phase 1: Design Principles", duration: "Weeks 1-2", topics: ["Visual hierarchy & grids", "Color theory & psychology", "Type scales and layouts"] },
      { phase: "Phase 2: Tool Mastery & Wireframing", duration: "Weeks 3-4", topics: ["Auto-layout & components in Figma", "Low-fidelity wireframing", "Interactive prototyping"] },
      { phase: "Phase 3: UX Processes", duration: "Weeks 5-6", topics: ["User personas & journey maps", "Usability testing protocols", "Handoff specs to developers"] }
    ],
    codingTopics: ["CSS/HTML inspect templates", "Design asset exporting rules", "Interactive micro-animation flows", "Responsive design breakpoints", "Accessibility (WCAG) guidelines"],
    projects: [
      { name: "Fintech Mobile Wallet Redesign", desc: "A detailed mobile prototype showing onboarding, transfers, analytics, and interactive transaction filters.", tech: ["Figma", "FigJam", "UsabilityTesting"] }
    ],
    resources: [
      { title: "Nielsen Norman Group UX Articles", url: "https://www.nngroup.com", type: "UX Articles" }
    ]
  },
  "product-manager": {
    title: "Product Manager",
    icon: "Briefcase",
    skills: ["Product Strategy & Vision", "Agile & Scrum Methodologies", "User Story Mapping", "Metrics & Analytics (Mixpanel/Amplitude)", "Roadmapping (Jira Product Discovery)", "Market Research & Competitive Analysis", "A/B Testing", "Stakeholder Communication"],
    roadmap: [
      { phase: "Phase 1: Product Discovery", duration: "Weeks 1-2", topics: ["Problem statements", "User persona research", "Market size validation (TAM/SAM)"] },
      { phase: "Phase 2: Product Delivery", duration: "Weeks 3-4", topics: ["Writing PRDs & User Stories", "Prioritization frameworks (RICE, MoSCoW)", "Working with engineering sprint schedules"] },
      { phase: "Phase 3: Metrics & Scaling", duration: "Weeks 5-6", topics: ["Defining North Star metrics", "Activation/Retention loop analysis", "Feedback management systems"] }
    ],
    codingTopics: ["SQL data extraction query writing", "PRD markdown structure formatting", "Feature scope mapping logic", "Metrics math & computations", "A/B test statistical analysis"],
    projects: [
      { name: "SaaS Expansion PRD & Launch Plan", desc: "A complete Product Requirement Document for a collaborative feature in a mock B2B SaaS tool, detailing KPIs, UX wireframes, and launch plan.", tech: ["Jira", "Mixpanel", "Confluence"] }
    ],
    resources: [
      { title: "Product School Free Resources", url: "https://productschool.com", type: "Resources" }
    ]
  },
  "business-analyst": {
    title: "Business Analyst",
    icon: "Database",
    skills: ["SQL (Window Functions, CTEs)", "Excel (VBA, PowerQuery)", "Data Visualization (Tableau/Power BI)", "Business Process Modeling (BPMN)", "Requirements Gathering", "Gap Analysis", "Financial Modeling", "Agile Methodologies"],
    roadmap: [
      { phase: "Phase 1: Analytical Foundations", duration: "Weeks 1-2", topics: ["Advanced Excel & formatting", "SQL queries, joins, groupings", "BPMN process flows mapping"] },
      { phase: "Phase 2: Visualization & Reporting", duration: "Weeks 3-4", topics: ["Designing dashboards in Tableau", "Defining KPIs and SLAs", "Requirements gathering methods"] },
      { phase: "Phase 3: Strategic Assessment", duration: "Weeks 5-6", topics: ["Cost-benefit calculations", "Gap analysis methodologies", "Stakeholder presentation design"] }
    ],
    codingTopics: ["SQL aggregations & joining", "Excel formula scripts", "Process flowchart scripting (BPMN)", "Variance calculation logic", "JSON config files parsing"],
    projects: [
      { name: "Operations Optimization Audit", desc: "A business process analysis reporting bottlenecks in a warehouse fulfillment chain, providing a Tableau dashboard and recommended software integrations.", tech: ["Excel", "Tableau", "SQL", "Lucidchart"] }
    ],
    resources: [
      { title: "IIBA - International Institute of Business Analysis", url: "https://www.iiba.org", type: "Industry Standards" }
    ]
  }
};
