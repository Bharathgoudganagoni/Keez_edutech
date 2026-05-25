export const coursesData = {
  "full-stack-development": {
    title: "Full Stack Development",
    slug: "full-stack-development",
    tagline: "Become a top 1% Software Engineer. Master front-end and back-end development to build robust web applications from scratch.",
    shortDesc: "Master React, Node.js, and MongoDB. Build real-world projects and get industry-ready.",
    overview: "Get ready to build, launch, and manage scalable web applications. This comprehensive program covers everything from structuring beautiful front-end designs with React to architecting backend services with Node.js and MongoDB. Learn industry-standard practices, system design, and database modeling to stand out as a highly skilled full stack developer.",
    duration: "6 Months",
    durationWeeks: 24,
    level: "Beginner to Pro",
    price: "₹39,999",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    industryRelevance: "Every digital company needs software engineers who understand the complete web ecosystem. Mastering both client-side and server-side development gives you unmatched adaptability, allowing you to architect database schemas, design secure APIs, and craft responsive user experiences.",
    technologies: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", 
      "MongoDB", "REST APIs", "Git & GitHub", "AWS / Deployment", "JWT Auth", "Tailwind CSS"
    ],
    curriculum: [
      {
        week: "Weeks 1-4",
        title: "Front-end Foundations & Web Architecture",
        desc: "Learn semantic HTML, modern responsive CSS (Flexbox/Grid), Tailwind CSS, and intermediate JavaScript (DOM manipulation, async/await). Build responsive static websites."
      },
      {
        week: "Weeks 5-10",
        title: "React.js & Advanced UI Development",
        desc: "Master component architecture, state management (Redux/Context), React Hooks, React Router, and modern API integration using Axios."
      },
      {
        week: "Weeks 11-14",
        title: "Server-side Coding with Node & Express",
        desc: "Build scalable backend architecture. Understand middleware, Express routing, HTTP requests/responses, and CRUD operations."
      },
      {
        week: "Weeks 15-18",
        title: "Databases & Data Modeling (MongoDB)",
        desc: "Dive deep into MongoDB and Mongoose. Learn schema design, validations, aggregation frameworks, and query optimizations."
      },
      {
        week: "Weeks 19-21",
        title: "Security, Authentication & APIs",
        desc: "Implement JSON Web Tokens (JWT), session cookies, OAuth (Google/GitHub login), role-based access control, and robust API security practices."
      },
      {
        week: "Weeks 22-24",
        title: "Cloud Deployment, CI/CD & Capstone",
        desc: "Understand git workflows, Docker containerization basics, cloud hosting (Render, AWS, Vercel), and build the final Capstone Project."
      }
    ],
    projects: [
      {
        title: "E-Commerce Platform (MERN)",
        desc: "A fully functional e-commerce app with cart management, Stripe payment integration, admin dashboard, and user order history.",
        tech: "React, Node.js, MongoDB, Stripe API"
      },
      {
        title: "Real-time Chat Application",
        desc: "A web-based messaging app featuring real-time socket connections, private rooms, and read receipts.",
        tech: "Socket.io, Express, React, Tailwind"
      },
      {
        title: "Kanban Project Manager",
        desc: "A drag-and-drop task management tool similar to Trello with persistent database storage and team collaboration features.",
        tech: "React, Redux, Node.js, JWT"
      }
    ],
    skills: [
      "Single Page Application Architecture",
      "RESTful API Development",
      "NoSQL Database Schema Design",
      "Authentication and Session Security",
      "Git-flow and Professional Collaboration",
      "Cloud Infrastructure and Deployment"
    ],
    careerDetails: {
      salaryRange: "₹6 LPA - ₹18 LPA",
      demand: "Very High - 45% YoY Growth",
      roles: [
        "Full Stack Developer",
        "Frontend Engineer",
        "Backend Developer",
        "Software Engineer",
        "Web Applications Architect"
      ]
    }
  },
  "python-automation": {
    title: "Python Automation",
    slug: "python-automation",
    tagline: "Supercharge your productivity. Automate tedious, repetitive tasks, write robust scrapers, and build scripts that work for you 24/7.",
    shortDesc: "Automate manual tasks, scrape complex websites, write scripts, and master Selenium browser automation.",
    overview: "Unleash the power of Python to automate your daily workflows, process large volumes of data, and scrape web pages with ease. From managing local files and automating Excel sheets to building complex browser scripts using Selenium, this course is designed to make you an automation wizard capable of boosting operational efficiency in any role.",
    duration: "3 Months",
    durationWeeks: 12,
    level: "Beginner to Intermediate",
    price: "₹18,999",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    industryRelevance: "Manual operations cost time and introduce errors. Organizations across the globe rely on automation scripts to scrape market intelligence, automatically update financial ledgers, test software applications, and orchestrate server tasks.",
    technologies: [
      "Python 3", "Selenium Webdriver", "BeautifulSoup", "Pandas", 
      "Requests API", "OpenPyXL (Excel)", "Cron Jobs", "Regex", "Data Processing"
    ],
    curriculum: [
      {
        week: "Weeks 1-2",
        title: "Python Core Essentials",
        desc: "Get comfortable with variables, complex data structures (lists/dicts), functions, error handling, and basic object-oriented programming."
      },
      {
        week: "Weeks 3-4",
        title: "File System & Document Automation",
        desc: "Learn pattern matching using Regex, automating operations on files/folders, working with JSON/PDF files, and Excel automation using OpenPyXL."
      },
      {
        week: "Weeks 5-7",
        title: "Web Scraping & HTTP Clients",
        desc: "Scrape web layouts using BeautifulSoup and Requests. Learn to handle nested HTML tables, images, and standard API responses."
      },
      {
        week: "Weeks 8-10",
        title: "Browser Automation with Selenium",
        desc: "Control web browsers programmatically. Handle forms, simulate clicks, bypass wait-limits, and automate manual user workflows."
      },
      {
        week: "Weeks 11-12",
        title: "Task Orchestration & Capstone",
        desc: "Deploy scripts on servers, schedule tasks with Cron / Windows Task Scheduler, set up automated email notifications, and finalize the Capstone."
      }
    ],
    projects: [
      {
        title: "Automated Competitor Price Scraper",
        desc: "A script that runs daily to scrape pricing data from 5 different e-commerce sites and generates an Excel comparison report.",
        tech: "BeautifulSoup, Requests, OpenPyXL"
      },
      {
        title: "Social Media Bot",
        desc: "A Selenium-based bot that logs into accounts, likes relevant industry posts, and gathers engagement metrics.",
        tech: "Python, Selenium Webdriver"
      },
      {
        title: "Automated Invoicing System",
        desc: "Reads data from a database, generates custom PDF invoices, and emails them automatically to clients at the end of the month.",
        tech: "Python, FPDF, smtplib"
      }
    ],
    skills: [
      "Robust Programmatic Scripting",
      "Dynamic Web Scraping and Parsing",
      "Browser Automation & Simulation",
      "Database & Excel Interactivity",
      "Asynchronous Script Orchestration",
      "Error Mitigation and Self-Healing Code"
    ],
    careerDetails: {
      salaryRange: "₹4.5 LPA - ₹12 LPA",
      demand: "High - Essential for Operations",
      roles: [
        "Automation Engineer",
        "QA Automation Developer",
        "Operations Analyst",
        "Data Processing Specialist",
        "Python Scripting Specialist"
      ]
    }
  },
  "full-stack-ai": {
    title: "Full Stack AI",
    slug: "full-stack-ai",
    tagline: "Build the future of intelligence. Integrate state-of-the-art AI models, design conversational agents, and build AI-powered applications.",
    shortDesc: "Bridge software engineering and AI. Harness LLMs, prompt engineering, APIs, and build smart interactive apps.",
    overview: "Step into the next frontier of tech. This program bridges the gap between software engineering and artificial intelligence. You will learn to use Python for AI, harness Large Language Models (LLMs), write optimal prompts, integrate OpenAI APIs, build complete web apps that leverage cognitive engines, and deploy these AI models at scale.",
    duration: "4 Months",
    durationWeeks: 16,
    level: "Intermediate to Advanced",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    industryRelevance: "AI is reshaping products worldwide. Engineers who can construct beautiful user interfaces, integrate vector indexing systems, write robust prompt constraints, and deploy models in clean production code are highly sought after by cutting-edge teams.",
    technologies: [
      "Python & React", "OpenAI API", "LangChain", "Vector Databases (Pinecone)", 
      "Hugging Face", "Prompt Engineering", "RAG Pipelines", "FastAPI", "Machine Learning Basics"
    ],
    curriculum: [
      {
        week: "Weeks 1-3",
        title: "Foundations of AI & Python for ML",
        desc: "Learn about the AI spectrum: Supervised/Unsupervised models, Neural networks, generative models, NumPy, and Pandas basics."
      },
      {
        week: "Weeks 4-6",
        title: "Generative Models & Advanced Prompting",
        desc: "Understand transformers, model parameters, zero-shot/few-shot prompting, and chain-of-thought frameworks to guide AI behaviors."
      },
      {
        week: "Weeks 7-9",
        title: "OpenAI APIs & Custom Connections",
        desc: "Write clean code for Chat Completions, Text Embeddings, Audio transcription (Whisper), and image generation (DALL-E) APIs."
      },
      {
        week: "Weeks 10-12",
        title: "RAG Pipelines & Vector Storage",
        desc: "Build Retrieval-Augmented Generation (RAG) structures using vector databases (Pinecone/Chroma) and framework libraries like LangChain."
      },
      {
        week: "Weeks 13-16",
        title: "AI Web App Deployment & Capstone",
        desc: "Create full-stack React and Python-FastAPI web interfaces embedded with smart AI capabilities and deploy them globally."
      }
    ],
    projects: [
      {
        title: "Corporate PDF Chatbot (RAG)",
        desc: "An application where users upload massive PDF documents, and an AI agent can answer precise questions based purely on the document context.",
        tech: "LangChain, Pinecone, OpenAI, React"
      },
      {
        title: "AI Image Generator SaaS",
        desc: "A clone of MidJourney's web interface where users can type prompts to generate images, utilizing a credits-based authentication system.",
        tech: "DALL-E API, React, Node.js, MongoDB"
      },
      {
        title: "Automated Code Reviewer",
        desc: "A GitHub-integrated bot that reads pull requests, analyzes code for bugs or security issues using LLMs, and posts comments automatically.",
        tech: "Python, FastAPI, GitHub Webhooks, OpenAI"
      }
    ],
    skills: [
      "Generative AI System Architecture",
      "Vector Embeddings and Semantic Queries",
      "LangChain & AI Agent Orchestration",
      "Advanced Context Windows Strategy",
      "Python for Machine Learning Tasks",
      "Smart Interactive UX/UI Design"
    ],
    careerDetails: {
      salaryRange: "₹10 LPA - ₹35 LPA",
      demand: "Surging - #1 Fastest Growing Tech Field",
      roles: [
        "AI Integration Engineer",
        "Prompt Specialist / Engineer",
        "ML Integration Developer",
        "AI Solutions Architect",
        "Innovative Product Manager"
      ]
    }
  },
  "growth-engineering": {
    title: "Growth Engineering",
    slug: "growth-engineering",
    tagline: "Accelerate user acquisition and retention. Combine marketing strategy with engineering to drive exponential business growth.",
    shortDesc: "Drive user growth. Learn data tracking, funnels, technical SEO, digital marketing strategy, and conversion optimization.",
    overview: "Growth engineering is the intersection of software development, product management, and digital marketing. In this program, you will learn how to write code specifically designed to acquire and engage users, track metrics, build automated sales funnels, set up precise conversion analytics, execute sophisticated A/B tests, and optimize products for viral loops.",
    duration: "3 Months",
    durationWeeks: 12,
    level: "Intermediate",
    price: "₹14,999",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    industryRelevance: "SaaS products, e-commerce, and startups depend on scalable growth formulas. Traditional marketing is slow; growth engineering uses automated systems, custom metrics dashboards, and software hooks to engineer viral growth.",
    technologies: [
      "Google Analytics 4", "Mixpanel", "Technical SEO", "A/B Testing Tools", 
      "Email Automation", "Zapier", "Funnel Analytics", "Growth Loops", "HTML/JS for Tracking"
    ],
    curriculum: [
      {
        week: "Weeks 1-2",
        title: "The AARRR Growth Framework",
        desc: "Master user acquisition, activation, retention, referral, and revenue cycles. Define actionable growth KPIs (North Star metrics)."
      },
      {
        week: "Weeks 3-4",
        title: "Technical SEO & Page Performance",
        desc: "Optimize metadata schemas, implement structured data, speed up page rendering, and design crawler-friendly SPA architectures."
      },
      {
        week: "Weeks 5-7",
        title: "Advanced Instrumentation & Analytics",
        desc: "Implement tracking pixels, tag managers, and telemetry tools like Google Analytics 4, Mixpanel, and custom event handlers in JS."
      },
      {
        week: "Weeks 8-9",
        title: "A/B Testing & Funnel Tuning",
        desc: "Structure landing pages, design statistical experiments, configure variations, and implement A/B testing platforms like Optimizely."
      },
      {
        week: "Weeks 10-12",
        title: "Lifecycle Automation & Virality",
        desc: "Integrate email automated drips, Zapier, design invite loops, referral reward programs, and finalize the Growth Playbook Capstone."
      }
    ],
    projects: [
      {
        title: "Viral Waitlist Landing Page",
        desc: "A high-converting React landing page featuring a viral referral waitlist (e.g., 'Invite 3 friends to move up the queue').",
        tech: "React, Firebase, SendGrid API"
      },
      {
        title: "Custom Analytics Telemetry Dashboard",
        desc: "A dashboard that ingests custom user click events and generates visual funnels showing exactly where users drop off.",
        tech: "JavaScript, Mixpanel, Chart.js"
      },
      {
        title: "Automated Drip Campaign System",
        desc: "A complex Zapier + Mailchimp architecture that tracks a user's behavior and sends personalized emails based on their app usage.",
        tech: "Zapier, Mailchimp, Webhooks"
      }
    ],
    skills: [
      "Advanced Tracking & Event Telemetry",
      "Technical SEO Auditing & Optimization",
      "Scientific A/B Experimentation Design",
      "Sales and Retention Funnel Structuring",
      "Dynamic Referral Engine Construction",
      "Marketing Stack Software Integrations"
    ],
    careerDetails: {
      salaryRange: "₹5 LPA - ₹15 LPA",
      demand: "Very High - Core to SaaS Survival",
      roles: [
        "Growth Engineer",
        "Conversion Optimization Specialist",
        "Growth Product Manager",
        "Technical Marketing Specialist",
        "Retention & Analytics Architect"
      ]
    }
  },
  "data-analytics-business-development": {
    title: "Data Analytics & Business Development",
    slug: "data-analytics-business-development",
    tagline: "Transform raw data into strategic decisions. Master data analysis, powerful reporting tools, and business development tactics.",
    shortDesc: "Master SQL, Power BI, Advanced Excel, and business growth strategy to become a data-driven leader.",
    overview: "This program is designed for future business leaders and analytical minds. You will learn to extract data with SQL, model it in Excel, construct interactive dashboards in Power BI, and write clean Python analytics code. Beyond the technical skills, you will master market research, growth strategy, and high-impact communication to convert analysis into successful business outcomes.",
    duration: "4 Months",
    durationWeeks: 16,
    level: "Beginner to Intermediate",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    industryRelevance: "Modern business operations are entirely centered around metrics. Having both the analytic capacity to process numbers and the business development insight to transform metrics into operational opportunities creates highly valued candidates.",
    technologies: [
      "Advanced Excel", "SQL Database Querying", "Power BI", "DAX", 
      "Python (Pandas/Matplotlib)", "Market Research", "CRM Tools", "Presentation & Deck Design"
    ],
    curriculum: [
      {
        week: "Weeks 1-3",
        title: "Advanced Business Excel",
        desc: "Master key concepts: advanced VLOOKUP/XLOOKUP, pivot fields, logical statements, conditional formats, macros, and structural data cleanup."
      },
      {
        week: "Weeks 4-7",
        title: "Database Querying with SQL",
        desc: "Learn key commands: Select, Filter, Aggregations, complex Multi-Table Joins, Group By, Subqueries, and View structures on massive datasets."
      },
      {
        week: "Weeks 8-10",
        title: "Business Intelligence with Power BI",
        desc: "Create dynamic interactive reports. Import custom datasets, write DAX metrics formulas, map relational tables, and deploy visual charts."
      },
      {
        week: "Weeks 11-13",
        title: "Python Analytical Ecosystem",
        desc: "Perform quick data analysis using Pandas, plot visual charts using Matplotlib and Seaborn, and clean massive raw CSV files programmatically."
      },
      {
        week: "Weeks 14-16",
        title: "Business Strategy & Executive Presenting",
        desc: "Analyze industry structures, map target client personas, compile competitor insights, structure high-converting pitch decks, and Capstone."
      }
    ],
    projects: [
      {
        title: "Global Sales KPI Dashboard",
        desc: "A comprehensive Power BI dashboard connected to a SQL database that tracks global sales, YoY growth, and regional performance.",
        tech: "SQL, Power BI, DAX"
      },
      {
        title: "Market Expansion Strategy Deck",
        desc: "A massive researched presentation utilizing Python Pandas to analyze competitor pricing and presenting the findings in an executive deck.",
        tech: "Python, Pandas, PowerPoint/Keynote"
      },
      {
        title: "Churn Prediction Analytics",
        desc: "An advanced Excel model that uses historical data to predict which corporate clients are highly likely to cancel their subscriptions.",
        tech: "Advanced Excel, Pivot Tables, Statistical Modeling"
      }
    ],
    skills: [
      "Relational Database Querying (SQL)",
      "High-Impact Visual Dashboarding",
      "Corporate Financial Modeling & Analytics",
      "Competitive Market Intelligence",
      "Strategic Business Development Pipelines",
      "Executive Professional Presentations"
    ],
    careerDetails: {
      salaryRange: "₹6 LPA - ₹16 LPA",
      demand: "High - Every sector requires analysts",
      roles: [
        "Business Analyst",
        "Data Analyst / Consultant",
        "Business Development Executive",
        "Strategy & Operations Specialist",
        "Sales Analytics Manager"
      ]
    }
  }
};
