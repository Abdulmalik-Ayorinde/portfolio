export interface Project {
  slug: string
  title: string
  category: string
  year: string
  description: string
  tech: string[]
  impact: string[]
  type: 'web' | 'mobile' | 'other'
  link?: string
  featured: boolean
  caseStudy: {
    client: string
    role: string
    year: string
    highlights: string[]
    overview: string[]
    problem: string[]
    challenge: string[]
    approach: string[]
    solution: string[]
    impactSection: string[]
    learned: string[]
  }
}

export const projects: Project[] = [
  {
    slug: 'openfields',
    title: 'OpenFields',
    category: 'Data Intelligence Platform',
    year: '2025',
    description: 'An open field-level dataset connecting earth observation signals to real agricultural fields, providing training data for acreage, yield, and crop stress models.',
    tech: ['React', 'Next.js', 'deck.gl', 'Mapbox', 'H3', 'Fused UDFs', 'USDA CDL'],
    impact: ['Field-level intelligence', 'Interactive mapping', 'Agricultural ML data'],
    type: 'web',
    link: 'https://openfields.ai',
    featured: true,
    caseStudy: {
      client: 'OpenFields',
      role: 'Full Stack Engineer',
      year: '2025',
      highlights: [
        'Built an interactive map application for exploring field-level crop rotations across a Midwest pilot (corn and soy, 2016 to 2024) using USDA Cropland Data Layer data.',
        'Developed CropView (app.openfields.ai) with deck.gl, Mapbox, and H3 hexagonal indexing for performant geospatial visualization at scale.',
        'Designed the dataset preview experience including coverage details, sample schema, and early access sign-up flow.',
      ],
      overview: [
        'OpenFields is an open field-level dataset that connects earth observation signals to real agricultural fields, providing training data for acreage, yield, and crop stress models.',
        'As the Full Stack Engineer, I built the product website and the interactive CropView application. The platform needed to make complex geospatial data accessible to researchers, data scientists, and agricultural planners who needed to understand crop patterns at the field level.',
        'The project required handling large-scale geospatial datasets (USDA Cropland Data Layer), rendering interactive maps with millions of data points, and presenting the dataset in a way that communicated its value to potential users.',
      ],
      problem: [
        'Agricultural data is often aggregated to coarse geographic resolutions, making it difficult to train machine learning models that need field-level precision. Researchers and data scientists working on crop yield forecasting, acreage estimation, and crop stress detection needed access to historical crop rotation data at the individual field level.',
        'Existing tools for exploring USDA Cropland Data Layer were either too technical (requiring GIS expertise) or too limited (showing only current-year data without historical context). There was no easy way to visually explore how specific fields rotated between crops like corn and soy over an 8-year period.',
        'The challenge was making this data both accessible and actionable — turning raw satellite-derived crop classifications into an interactive exploration tool that could inform agricultural planning and ML model training.',
      ],
      challenge: [
        'The biggest technical challenge was rendering millions of field polygons on an interactive map without compromising performance. The USDA Cropland Data Layer contains pixel-level classifications for the entire continental US, and filtering to a Midwest pilot region still left us with hundreds of thousands of field boundaries to visualize.',
        'I needed to balance interactivity with performance. Using raw GeoJSON for this many features would cripple the browser. I explored several approaches including vector tiling, server-side rendering, and spatial indexing before landing on a combination of H3 hexagonal indexing and deck.gl for client-side rendering.',
        'Another challenge was presenting the dataset preview experience in a way that communicated value to technical users (ML engineers, researchers) while remaining accessible to non-technical stakeholders (farmers, agricultural planners). The website needed to serve both audiences.',
      ],
      approach: [
        'I started by understanding the data pipeline. The USDA Cropland Data Layer provides annual raster classifications at 30-meter resolution. Working with the data science team, I processed these rasters into field-level polygons using computer vision techniques to identify contiguous crop regions.',
        'For the map visualization, I evaluated several geospatial libraries. Mapbox GL JS provided the base map layer, while deck.gl offered the performance needed for overlaying large polygon datasets. I used H3 hexagonal indexing to aggregate field data at multiple zoom levels, allowing users to explore from regional down to individual field views.',
        'The dataset preview experience was designed with a dual-audience approach: technical users could explore sample schemas and coverage maps, while business stakeholders could see use cases and request early access through a streamlined sign-up flow.',
        'I worked closely with the domain experts to ensure the visualizations accurately represented the underlying data and communicated the right insights about crop rotation patterns and field-level variability.',
      ],
      solution: [
        'The CropView application (app.openfields.ai) became the centerpiece of the platform. It renders an interactive map where users can explore field-level crop rotations across a Midwest pilot region covering corn and soy rotations from 2016 to 2024.',
        'The map uses deck.gl with H3 hexagonal tiling for performant rendering at scale. Users can zoom from a regional overview down to individual fields, toggle between years, and see color-coded crop classifications. The visualization updates in real time as users pan and zoom.',
        'The product website (openfields.ai) presents the dataset with clear coverage details, a sample schema explorer, and use case documentation. The early access sign-up flow captures intent from potential users and integrates with a waitlist management system.',
        'The entire stack — React, Next.js, deck.gl, Mapbox, H3, and Fused UDFs — works together to deliver a seamless experience from data exploration to business engagement.',
      ],
      impactSection: [
        'OpenFields launched with the CropView pilot and has generated significant interest from the agricultural data science community. The interactive map has become a key differentiator, allowing potential users to immediately see the value of field-level data.',
        'The platform successfully bridges the gap between raw satellite data and actionable agricultural insights. Researchers can now visually explore crop rotation patterns that were previously locked behind GIS software, and ML engineers have a clearer understanding of the training data available to them.',
        'My work on the frontend and geospatial visualization laid the foundation for the platform to scale to additional regions and crop types. The architecture is designed to accommodate new datasets and visualizations as the product grows.',
      ],
      learned: [
        'Geospatial data visualization requires careful performance optimization. Raw polygon data at scale will crush the browser. I learned that the right combination of spatial indexing (H3), client-side rendering (deck.gl), and level-of-detail strategies makes the difference between a usable map and a slideshow.',
        'Dataset products need to sell themselves. The preview experience is as important as the data itself. Users need to see the shape, coverage, and quality of data before they commit to using it. Investing in a compelling preview experience pays off in conversion.',
        'Working with domain experts is essential for accurate data visualization. I spent significant time with agricultural scientists to understand what patterns mattered, how to color-code crops meaningfully, and what level of detail was actually useful versus overwhelming.',
        'The combination of Next.js for the marketing site and a separate React app for the interactive tool was the right architectural choice. It allowed each experience to be optimized for its purpose without compromising the other.',
      ],
    },
  },
  {
    slug: 'rentzen',
    title: 'Rentzen',
    category: 'Mobile App',
    year: '2022-2025',
    description: 'Cross-platform mobile app connecting landlords with renters. Covers inspections, lease management, and rent collection with Stripe payment integration.',
    tech: ['React Native', 'Node.js', 'Express.js', 'Stripe API', 'PostgreSQL'],
    impact: ['iOS/Android', 'Payment integration', 'Team leadership'],
    type: 'mobile',
    link: 'https://apps.apple.com/us/app/rentzen/id6740734022',
    featured: true,
    caseStudy: {
      client: 'Rentzen',
      role: 'Tech Lead & Full Stack Engineer',
      year: '2022-2025',
      highlights: [
        'Led a 4-person development team building a cross-platform mobile app for iOS and Android.',
        'Engineered backend API with Stripe payment integration and webhook processing for secure rent transactions.',
        'Established agile workflows, sprint planning, and 5-15 weekly code reviews while mentoring junior developers.',
      ],
      overview: [
        'Rentzen is a real estate management platform that connects landlords with renters, managing the complete rental lifecycle from property inspection to lease management and rent collection.',
        'As Tech Lead and Full Stack Engineer, I led a 4-person development team responsible for the entire product. My role spanned architecture decisions, API design, payment integration, mobile development, and team mentorship.',
        'The app handles everything a landlord needs: property listings, tenant applications, scheduled inspections, digital lease signing, automated rent collection via Stripe, and maintenance request tracking.',
      ],
      problem: [
        'Property management in Nigeria and many African markets is still largely manual and fragmented. Landlords track rent payments in spreadsheets or notebooks, lease agreements are paper-based, and property inspections are done with phone cameras and WhatsApp messages.',
        'Renters face their own challenges: finding verified properties, understanding lease terms, making secure payments, and getting maintenance issues resolved. The entire rental experience lacked a unified digital platform.',
        'The market needed a solution that could handle the full rental lifecycle — from discovery to move-out — in one place, with reliable payment processing and transparent communication between landlords and tenants.',
      ],
      challenge: [
        'Building a payment system for the Nigerian market presented unique challenges. Stripe was not fully available in Nigeria at the time, so I had to architect a hybrid payment flow that could handle international card payments while complying with local financial regulations.',
        'Leading a 4-person team with varying experience levels required establishing clear engineering practices. I needed to create a code review culture, set up CI/CD pipelines, and mentor junior developers while still delivering features at pace.',
        'The app needed to work reliably on both iOS and Android with limited device testing resources. I had to make architectural decisions that would perform well across a wide range of devices and network conditions common in African markets.',
      ],
      approach: [
        'I architected the backend as a RESTful API using Node.js and Express.js with PostgreSQL for data persistence. The API was designed with clear resource boundaries (properties, leases, payments, inspections, users) to make the codebase maintainable as the team grew.',
        'For payments, I implemented Stripe integration with comprehensive webhook handling. This included idempotency keys for duplicate prevention, retry logic for failed webhooks, and a payment status dashboard for landlords to track rent collection.',
        'On the mobile side, I chose React Native to maximize code sharing between iOS and Android while still allowing platform-specific optimizations where needed. I established a component library and coding standards early to keep the UI consistent.',
        'Team processes were structured around 2-week sprints with daily standups, weekly code reviews, and bi-weekly architecture discussions. I made mentoring a priority, pairing junior developers with more complex tasks and reviewing their PRs with detailed feedback.',
      ],
      solution: [
        'Rentzen became a comprehensive property management platform with a React Native mobile app for both landlords and tenants. The app features property listing management, tenant application workflows, scheduled inspection tools, digital lease generation, and automated rent collection.',
        'The Stripe payment integration handles rent collection with automated reminders, late fee calculation, and receipt generation. Webhook processing ensures payment status is always synchronized between Stripe and the Rentzen backend, even when network conditions are unstable.',
        'The backend API supports role-based access control, allowing landlords to manage multiple properties while tenants see only their relevant data. The inspection workflow includes photo uploads, checklist completion, and automated report generation.',
        'The codebase was built with scalability in mind — the PostgreSQL schema uses proper indexing for query performance, the API implements rate limiting, and the mobile app caches data for offline functionality.',
      ],
      impactSection: [
        'Rentzen successfully launched on both iOS and Android app stores, providing landlords with a unified platform for property management. The Stripe integration enabled reliable rent collection that previously required manual bank transfers and receipt tracking.',
        'The team I led shipped consistently across 2-week sprints, with code quality improving measurably over time as mentoring and review practices took hold. Junior developers on the team grew into mid-level contributors who could own features independently.',
        'The product is actively used by landlords managing multiple properties, with the payment processing pipeline handling real transactions. The architecture decisions made early have allowed the platform to add new features without major refactoring.',
      ],
      learned: [
        'Payment integration is never just about the API call. Stripe webhooks, idempotency, retry logic, and reconciliation dashboards are all essential for production reliability. I learned to treat payment flows as critical infrastructure deserving of extensive testing and monitoring.',
        'Leading a team is as much about process as it is about code. Establishing clear PR review standards, coding conventions, and architecture decision records early pays dividends as the team grows. The time invested in mentoring junior developers compounds into better code quality and faster delivery.',
        'React Native is a powerful choice for cross-platform development, but it requires careful attention to platform-specific behaviors. I learned to abstract platform differences behind well-designed components rather than littering conditional code throughout the app.',
        'Building for emerging markets means designing for unreliable networks and diverse devices. Caching strategies, optimistic UI updates, and graceful degradation are not nice-to-haves — they are essential for user trust.',
      ],
    },
  },
  {
    slug: 'dertbag',
    title: 'Dertbag',
    category: 'Mobile App',
    year: '2022-2025',
    description: 'Cross-platform mobile app connecting a Shopify store to a native iOS experience with real-time product sync for 500+ products.',
    tech: ['React Native', 'Expo', 'EAS', 'Node.js', 'Shopify API', 'iOS'],
    impact: ['500+ products synced', '40% performance boost', 'Real-time sync'],
    type: 'mobile',
    link: 'https://apps.apple.com/ng/app/dertbag/id6480380013',
    featured: true,
    caseStudy: {
      client: 'Dertbag',
      role: 'Full Stack Engineer',
      year: '2022-2025',
      highlights: [
        'Built the full cross-platform mobile app end to end including authentication, user settings, and complete shopping experience.',
        'Designed and built proxy server architecture connecting Shopify to mobile app for real-time product data sync (500+ products).',
        'Improved app performance by 40% over web alternatives through native rendering and optimized data fetching.',
      ],
      overview: [
        'Dertbag is a cross-platform mobile application that connects a Shopify store to a native iOS experience, enabling seamless product browsing and in-app purchases for 500+ products.',
        'As the Full Stack Engineer, I built the entire app from scratch — from the mobile frontend to the proxy server architecture that bridges Shopify Storefront API with the mobile experience.',
        'The project required solving the challenge of making a large product catalog feel fast and responsive on mobile while maintaining real-time synchronization with the Shopify backend.',
      ],
      problem: [
        'The client had an established Shopify store with over 500 products but no native mobile presence. Their mobile web experience was slow, with product images taking too long to load and the checkout flow feeling clunky on touch devices.',
        'Shopify Storefront API has rate limits and complex pagination that makes direct mobile integration challenging. Calling the API directly from the mobile app would hit limits quickly and provide a poor user experience.',
        'The business needed a native app experience that would load faster, feel more responsive, and increase conversion rates — but they could not afford to maintain a separate product catalog outside of Shopify.',
      ],
      challenge: [
        'The core technical challenge was architecting a proxy server that could efficiently sync product data from Shopify to the mobile app without hitting API rate limits or creating stale data.',
        'With 500+ products and multiple variants per product, the data volume was significant. I needed to implement intelligent caching, incremental updates, and efficient image delivery to make the app feel instant.',
        'Managing builds and releases through Expo and EAS added another layer of complexity. I needed to set up automated builds, over-the-air updates, and proper code signing for iOS App Store distribution.',
      ],
      approach: [
        'I designed a proxy server architecture that sits between the Shopify Storefront API and the mobile app. The proxy handles authentication, implements intelligent caching with Redis, and transforms Shopify API responses into a format optimized for mobile consumption.',
        'For product sync, I implemented a webhook-based approach. When products change in Shopify, webhooks trigger cache invalidation in the proxy server. The mobile app fetches from the proxy, which serves cached data with sub-100ms response times.',
        'Image optimization was critical. I integrated a CDN with on-the-fly image resizing, so the mobile app requests images at exactly the dimensions it needs rather than downloading full-resolution Shopify images.',
        'On the mobile side, I used React Native with Expo for rapid development and easy over-the-air updates. The app implements virtualized lists for product grids, skeleton screens for loading states, and optimistic UI updates for cart interactions.',
      ],
      solution: [
        'The Dertbag app delivers a native shopping experience with a product catalog that stays synchronized with Shopify in real time. Users can browse products, filter by category, view detailed product pages with zoomable images, and complete purchases through a streamlined checkout flow.',
        'The proxy server architecture reduced API response times by caching product data and serving images through a CDN. Product listings load in under 200ms, and the app feels responsive even on slower networks.',
        'The 40% performance improvement over the mobile web experience comes from native rendering, optimized image delivery, and reduced JavaScript payload. The app also supports offline browsing of previously viewed products.',
        'Build and release management is fully automated through Expo EAS. Updates can be pushed over-the-air without App Store review, and the CI/CD pipeline runs tests and builds on every commit.',
      ],
      impactSection: [
        'Dertbag launched successfully on the iOS App Store and provides a significantly faster shopping experience than the mobile web alternative. The real-time product sync means the app always reflects the latest inventory and pricing.',
        'The proxy server architecture has proven resilient, handling traffic spikes during sales events without hitting Shopify API limits. The caching strategy keeps response times consistently low.',
        'The app has become the primary shopping channel for a significant portion of the store\'s mobile customers, with higher conversion rates compared to the mobile web experience.',
      ],
      learned: [
        'Proxy architectures are powerful for third-party API integration. By sitting between the mobile app and Shopify, I gained control over caching, rate limiting, and data transformation. This pattern is applicable to any integration where direct API access is problematic.',
        'Image optimization is one of the highest-impact performance improvements for e-commerce apps. Serving correctly sized images through a CDN made a bigger difference than any code optimization I did.',
        'Expo and EAS significantly simplify React Native development and deployment. Over-the-air updates, automated builds, and easy environment management made the development workflow much smoother than traditional React Native setup.',
        'Webhooks are the right approach for real-time sync when you control both sides of the integration. Polling would have been simpler to implement but would have created unnecessary load and latency.',
      ],
    },
  },
  {
    slug: 'panthera-lms',
    title: 'Panthera Tech School LMS',
    category: 'Learning Platform',
    year: '2021-2025',
    description: 'Complete learning management system serving 100+ students and 10-15 instructors with live video classes, payments, and automated certificates.',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Jitsi', 'Paystack'],
    impact: ['100+ students', 'Live classes', 'Auto certificates', 'SEO optimized'],
    type: 'web',
    link: 'https://pantheratechschool.com',
    featured: true,
    caseStudy: {
      client: 'Panthera Tech School',
      role: 'Lead Instructor & Software Engineer',
      year: '2021-2025',
      highlights: [
        'Architected a production LMS platform serving 100+ active students and 10-15 instructors.',
        'Developed automated certificate generation system saving 5-10 hours monthly.',
        'Implemented SEO optimization that significantly improved student acquisition.',
      ],
      overview: [
        'Panthera Tech School LMS is a comprehensive learning management system that handles course enrollment, live video classes, payment processing, content delivery, and automated certificate generation for a coding bootcamp in Lagos, Nigeria.',
        'As Lead Instructor and Software Engineer, I designed the curriculum, built the platform, and trained 300+ students across 4-5 cohorts with 50+ graduate job placements.',
        'The LMS needed to handle the full student lifecycle — from discovery and enrollment through course completion and job placement — while also supporting instructors with tools for content creation, live classes, and progress tracking.',
      ],
      problem: [
        'Running a coding bootcamp without a proper LMS meant managing students through spreadsheets, delivering classes through ad-hoc Zoom links, collecting payments manually, and generating certificates one by one in design tools.',
        'The manual process was unsustainable as the school grew from 20 students to 100+. Instructors spent hours on administrative tasks instead of teaching. Students had no centralized place to access course materials, track progress, or interact with peers.',
        'Payment collection was particularly painful — tracking who had paid, sending reminders, and reconciling bank transfers consumed significant administrative time every month.',
      ],
      challenge: [
        'Building a platform that serves both students and instructors with different needs and permissions was complex. Students need a simple, focused interface for learning. Instructors need tools for content management, student analytics, and class scheduling.',
        'Live video classes needed to integrate with Jitsi (a self-hosted video conferencing solution) rather than relying on Zoom or Google Meet. This required building custom UI components for video, chat, screen sharing, and breakout rooms.',
        'The certificate generation system needed to produce professional-looking certificates automatically when students completed courses. This involved PDF generation with custom templates, digital signatures, and email delivery.',
      ],
      approach: [
        'I chose Next.js for the frontend to leverage server-side rendering for SEO and static generation for performance. The backend uses Node.js with both MongoDB (for flexible content like courses and lessons) and PostgreSQL (for structured data like users, payments, and enrollments).',
        'For live classes, I integrated Jitsi Meet through its embeddable API. The LMS generates unique meeting rooms per class, handles authentication so only enrolled students can join, and provides a custom interface that integrates video with course materials side by side.',
        'The certificate system uses a headless Chrome approach (Puppeteer) to render HTML templates into PDFs. When a student completes all course requirements, the system automatically generates a personalized certificate and emails it to the student.',
        'Payment processing uses Paystack (Nigeria\'s leading payment provider) with webhook handling for instant payment confirmation. The system automatically enrolls students upon successful payment and sends welcome emails with course access details.',
      ],
      solution: [
        'The LMS provides a complete student portal with course catalogs, enrollment flows, video lessons, coding exercises, progress tracking, and community forums. Students can access everything from a single dashboard with a clear learning path.',
        'Instructors have an admin dashboard for creating courses, uploading videos, managing students, scheduling live classes, and viewing analytics. The certificate generation system produces professional PDFs with the school\'s branding, student name, course details, and completion date.',
        'The live class integration embeds Jitsi video directly into the LMS interface, so students can watch instructors code in real time while following along with course materials in the same window. Chat, Q&A, and screen sharing are all built in.',
        'SEO optimization included structured data markup, optimized meta tags, fast page loads through Next.js static generation, and content marketing through a technical blog. Organic search became a significant student acquisition channel.',
      ],
      impactSection: [
        'The LMS has served 100+ active students and 10-15 instructors, handling thousands of course enrollments, live class sessions, and certificate generations. The automated systems saved an estimated 5-10 hours of manual work per month.',
        '50+ graduates have been placed in jobs across Nigerian tech companies, with the LMS tracking their progress from enrollment through job placement. The platform has become the operational backbone of the school.',
        'SEO-driven organic traffic became a major student acquisition channel, reducing reliance on paid advertising. The technical blog and optimized course pages rank well for relevant search terms in the Nigerian tech education market.',
      ],
      learned: [
        'Building for education requires designing for two very different user types — students who need simplicity and focus, and instructors who need powerful tools. I learned to create clear separation between these interfaces while maintaining a consistent design system.',
        'Automating administrative tasks has outsized impact. The 5-10 hours saved monthly on certificate generation and payment reconciliation freed up instructors to focus on what matters — teaching and mentoring students.',
        'SEO is a long game that pays off. The investment in structured data, performance optimization, and content marketing took months to show results but eventually became the school\'s most cost-effective acquisition channel.',
        'Hybrid databases (MongoDB + PostgreSQL) can be the right choice when you have both structured and unstructured data needs. MongoDB\'s flexibility was perfect for course content, while PostgreSQL\'s reliability was essential for payments and user data.',
      ],
    },
  },
  {
    slug: 'restaurant-pos',
    title: 'Restaurant Management System',
    category: 'Web Application',
    year: '2022-2025',
    description: 'Comprehensive POS and management platform for a restaurant chain in Abuja processing over NGN100M in transactions.',
    tech: ['React', 'Context API', 'Express.js', 'Node.js', 'PostgreSQL'],
    impact: ['NGN100M+ processed', '30min saved daily', 'Real-time analytics'],
    type: 'web',
    featured: true,
    caseStudy: {
      client: 'Restaurant Chain (Abuja)',
      role: 'Frontend Team Lead',
      year: '2022-2025',
      highlights: [
        'Led a 2-person frontend team developing a comprehensive restaurant management platform.',
        'Architected a real-time POS system, sales analytics dashboard, and automated receipt printing.',
        'Reduced manual tracking time by 30+ minutes per day through automated sales reporting.',
      ],
      overview: [
        'A comprehensive restaurant management platform for a restaurant chain in Abuja, Nigeria. The system handles point-of-sale transactions, inventory tracking, staff management, sales analytics, and automated receipt printing.',
        'As Frontend Team Lead, I led a 2-person frontend team and architected the real-time POS interface, sales dashboard, and inventory management tools. The platform has processed over NGN100 million in transactions.',
        'The system replaced a combination of manual cash registers, paper order tickets, and spreadsheet-based inventory tracking with a unified digital platform.',
      ],
      problem: [
        'The restaurant chain was operating with manual processes across multiple locations. Orders were written on paper tickets, inventory was tracked in spreadsheets, and sales data was only available at the end of each day after manual tallying.',
        'This created several pain points: order errors from illegible handwriting, inventory discrepancies from manual counting, inability to track real-time sales performance, and significant time spent on end-of-day reconciliation.',
        'Management had no visibility into which menu items were performing well, which locations were most profitable, or when inventory needed restocking. Decision-making was based on gut feeling rather than data.',
      ],
      challenge: [
        'Building a POS interface that could handle high-volume restaurant operations required real-time performance. Every order needed to be reflected immediately across all connected devices — kitchen displays, manager dashboards, and reporting tools.',
        'The inventory system needed to track perishable goods with expiration dates, automatically deduct ingredients when dishes were ordered, and alert staff when items ran low. Getting the data model right was critical.',
        'Leading a small frontend team while also contributing significant code required balancing hands-on development with mentorship, code reviews, and architectural decisions.',
      ],
      approach: [
        'I chose React with Context API for state management to keep the architecture simple while the team was small. The POS interface was built as a real-time application using WebSockets for instant order synchronization across devices.',
        'The inventory system uses a relational model in PostgreSQL that tracks ingredients, recipes, and stock levels. When an order is placed, the system automatically deducts the correct quantities from inventory and triggers low-stock alerts when thresholds are reached.',
        'For the analytics dashboard, I implemented real-time data aggregation using materialized views in PostgreSQL that refresh periodically. This provides management with up-to-date sales metrics without querying live transaction tables.',
        'I established weekly code reviews, component design patterns, and documentation standards for the frontend team. This ensured consistency across the codebase as the team grew and features became more complex.',
      ],
      solution: [
        'The platform delivers a real-time POS interface where waitstaff can take orders on tablets, send them directly to kitchen displays, and process payments through integrated card readers. Orders are reflected instantly across all connected devices.',
        'The inventory management module tracks stock levels in real time, automatically deducts ingredients when dishes are prepared, and generates purchase orders when items run low. Expiration date tracking helps reduce food waste.',
        'The analytics dashboard provides location-by-location sales breakdowns, top-performing menu items, hourly sales patterns, and staff performance metrics. Management can make data-driven decisions about menu changes, staffing, and promotions.',
        'Automated receipt printing integrates with thermal printers at each location, and end-of-day reports are generated automatically — eliminating the 30+ minutes of manual reconciliation that was previously required.',
      ],
      impactSection: [
        'The platform has processed over NGN100 million in transactions across multiple restaurant locations. The automated reporting and real-time inventory tracking have significantly reduced operational overhead.',
        'Management now has visibility into sales performance, inventory levels, and staff productivity that was previously impossible with manual processes. This has led to better menu planning, reduced waste, and improved profitability.',
        'The frontend team I led shipped consistently and maintained high code quality throughout the project. The component library and design patterns we established continue to support new feature development.',
      ],
      learned: [
        'Real-time systems require careful attention to state synchronization. WebSockets are powerful but introduce complexity around connection management, reconnection logic, and conflict resolution. I learned to implement robust error handling and fallback mechanisms.',
        'Inventory management data models are deceptively complex. Tracking ingredients, recipes, stock levels, and expiration dates requires a well-designed relational schema. Getting this right early prevented painful migrations later.',
        'Leading a team while writing code requires intentional time management. I learned to block specific times for mentorship and reviews, separate from deep work sessions, to ensure both responsibilities got adequate attention.',
        'Restaurant operations are fast-paced and unforgiving. The UI needed to be optimized for speed — large touch targets, minimal navigation, and instant feedback. Desktop web patterns did not translate directly to a POS interface.',
      ],
    },
  },
  {
    slug: 'hermes',
    title: 'Hermes',
    category: 'AI Agent',
    year: '2025',
    description: 'Personal AI agent controlled through Telegram to execute tasks and deliver real-time updates with multi-model routing.',
    tech: ['Telegram Bot API', 'OCI', 'LLM APIs', 'Cron', 'Node.js'],
    impact: ['Automated execution', 'Multi-model routing', 'Real-time updates'],
    type: 'other',
    featured: true,
    caseStudy: {
      client: 'Personal Project',
      role: 'Solo Developer',
      year: '2025',
      highlights: [
        'Built a personal AI agent controlled through Telegram to execute tasks and deliver real-time updates.',
        'Implemented model switching and role-based hierarchy: smaller models execute tasks, stronger models handle decisions.',
        'Hosted on Oracle Cloud Infrastructure with scheduled cron jobs for automated workflows.',
      ],
      overview: [
        'Hermes is a personal AI agent that I control through Telegram to execute tasks, deliver real-time updates, and manage automated workflows. It runs on Oracle Cloud Infrastructure and uses a multi-model architecture for cost-efficient task execution.',
        'As a solo developer, I designed and built the entire system — from the Telegram bot interface to the model routing logic to the cloud infrastructure. The project was born from a desire to automate repetitive tasks while keeping costs low.',
        'The agent handles a variety of tasks: web scraping, data processing, scheduled reports, notifications, and simple research. Each task is routed to the most appropriate model based on complexity and cost considerations.',
      ],
      problem: [
        'I found myself repeatedly doing the same tasks: checking websites for updates, processing data exports, generating daily summaries, and monitoring various systems. These tasks were too small to warrant building full applications but too frequent to do manually.',
        'Existing AI assistants were either too expensive for routine tasks (always using GPT-4) or too limited in capability (rule-based bots). I needed a system that could intelligently route tasks to the right model — using cheaper models for simple tasks and powerful models for complex ones.',
        'I also wanted a mobile-friendly interface for interacting with the agent. Since I always have Telegram on my phone, it became the natural choice for a conversational command interface.',
      ],
      challenge: [
        'Designing a role-based model hierarchy was the core architectural challenge. I needed to classify incoming tasks by complexity, route them to appropriate models, and validate outputs before returning results to the user.',
        'Cost optimization was critical. Using GPT-4 for every task would quickly become expensive. I needed a routing system that could use smaller, cheaper models (like GPT-3.5 or local models via Ollama) for routine tasks while reserving powerful models for complex reasoning.',
        'Running the system reliably on OCI required setting up proper process management, logging, monitoring, and cron scheduling. I needed the agent to be always available without manual intervention.',
      ],
      approach: [
        'I architected the system with three model tiers: small local models (via Ollama) for simple pattern matching and classification, medium models (GPT-3.5) for routine tasks like summarization and data extraction, and large models (GPT-4) for complex reasoning, planning, and validation.',
        'The Telegram bot interface uses a simple command structure. Users can send natural language requests, and the system classifies them into task types, routes them to the appropriate model tier, and returns results with source links and confidence scores.',
        'For task execution, I implemented a plugin architecture where each task type (scrape, summarize, monitor, report) has a dedicated handler. Handlers can chain multiple model calls — for example, a research task might use a small model to generate search queries, a medium model to summarize results, and a large model to synthesize conclusions.',
        'The OCI deployment uses PM2 for process management, systemd for service reliability, and cron for scheduled tasks. Logs are aggregated to a local file with rotation, and health checks ensure the bot reconnects if the Telegram connection drops.',
      ],
      solution: [
        'Hermes operates as a multi-model AI agent accessible through Telegram. Users send natural language requests, and the system automatically classifies, routes, and executes tasks using the most cost-effective model capable of handling the job.',
        'The role-based hierarchy ensures that simple tasks (like "check if my website is up" or "summarize this article") use cheaper models, while complex tasks (like "analyze these quarterly reports and identify trends") get routed to more capable models.',
        'Scheduled cron jobs handle recurring tasks like daily news summaries, weekly report generation, and periodic health checks. The agent sends push notifications through Telegram when tasks complete or when monitored conditions change.',
        'The entire system runs on OCI with an estimated monthly cost of under $10, making it significantly cheaper than commercial AI assistant services while providing full control over the behavior and data.',
      ],
      impactSection: [
        'Hermes has become my daily productivity tool, handling routine tasks that previously consumed 1-2 hours per day. The multi-model routing has kept costs under $10/month while providing capabilities comparable to much more expensive services.',
        'The project deepened my understanding of LLM integration, prompt engineering, and model selection strategies. I have applied these insights to my professional work, including integrating Claude Code and GitHub Copilot into my development workflows.',
        'The plugin architecture makes it easy to add new capabilities. I have extended the agent with custom handlers for domain-specific tasks, and the modular design allows swapping model providers without changing the core logic.',
      ],
      learned: [
        'Model routing is as important as model selection. The cost difference between GPT-3.5 and GPT-4 is 10-20x, but for many tasks the cheaper model performs nearly as well. Building a classification layer that routes tasks intelligently saves money without sacrificing quality.',
        'Local models (via Ollama) have reached a level of capability where they can handle many routine tasks for zero API cost. The trade-off is slower inference and higher compute requirements, but for non-time-sensitive tasks this is a compelling option.',
        'Telegram is an underrated platform for AI agent interfaces. The bot API is well-documented, message formatting is flexible, and users already have the app installed. It provides a conversational interface without building a separate mobile app.',
        'Prompt engineering matters more than model choice for structured outputs. I learned that carefully designed prompts with few-shot examples often produce better results on cheaper models than vague prompts on expensive ones.',
      ],
    },
  },
  {
    slug: 'nyc-crm',
    title: 'NYC Real Estate CRM',
    category: 'Web Application',
    year: '2025',
    description: 'Comprehensive CRM for NYC real estate professionals managing buyer, seller, renter, and landlord lifecycles with automated property matching.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'RESTful APIs'],
    impact: ['Daily NYC property sync', 'Multi-role management', 'Automated matching'],
    type: 'web',
    featured: false,
    caseStudy: {
      client: 'NYC Real Estate Agency',
      role: 'Full Stack Developer',
      year: '2025',
      highlights: [
        'Architected a comprehensive CRM managing buyer, seller, renter, and landlord lifecycles.',
        'Engineered daily data synchronization pulling all NYC properties for automated client-property matching.',
        'Built automated matching algorithms that connect clients with relevant properties based on preferences and history.',
      ],
      overview: [
        'A comprehensive CRM platform for NYC real estate professionals managing buyer, seller, renter, and landlord lifecycles. The platform features daily property data synchronization across all NYC listings for automated client-property matching.',
        'As the Full Stack Developer, I architected the entire platform from database design to frontend implementation. The system needed to handle large volumes of property data while providing an intuitive interface for real estate agents.',
      ],
      problem: [
        'NYC real estate agents manage complex client relationships across multiple roles — buyers, sellers, renters, and landlords. Each client type has different needs, timelines, and communication preferences.',
        'Existing CRM tools were either too generic (designed for sales teams) or too specialized (focused only on one transaction type). Agents needed a unified platform that could handle the full spectrum of real estate relationships.',
        'Property matching was entirely manual. Agents spent hours scrolling through listing sites trying to find properties that matched client criteria, often missing new listings that appeared between searches.',
      ],
      challenge: [
        'Designing a data model that supports four distinct client roles with overlapping but different data requirements was complex. A buyer needs different fields than a landlord, but both might be the same person.',
        'The daily property sync needed to pull data from multiple NYC listing sources, normalize the data into a consistent format, and update the database without downtime. Error handling and retry logic were critical.',
        'The matching algorithm needed to balance client preferences (location, price, amenities) with property availability and agent priorities. A simple keyword match would not suffice.',
      ],
      approach: [
        'I designed a flexible client model using PostgreSQL with JSONB fields for role-specific data. This allowed shared contact information while supporting unique fields per role. A client can have multiple roles simultaneously with separate pipelines for each.',
        'The property sync runs as a scheduled job that fetches listings from multiple sources, normalizes addresses and property attributes, and performs upsert operations to maintain data consistency. Failed fetches are retried with exponential backoff.',
        'The matching algorithm uses a weighted scoring system that considers location proximity, price range overlap, bedroom/bathroom requirements, amenity matches, and client viewing history. Results are ranked by relevance and presented to agents with match scores.',
      ],
      solution: [
        'The CRM provides unified client profiles that track all interactions across roles. Agents can see a complete history of showings, offers, communications, and transactions for each client regardless of their current role.',
        'The automated matching system sends daily digest emails to agents with newly matched properties for each active client. Agents can also run on-demand matching and adjust match criteria in real time.',
        'The dashboard provides pipeline views for each role type, task management for follow-ups, and communication logs. Integration with email and calendar keeps all client interactions synchronized.',
      ],
      impactSection: [
        'The CRM has significantly reduced the time agents spend on property searching and manual data entry. The automated matching catches new listings within hours of publication, giving clients a competitive advantage in the fast-moving NYC market.',
        'The unified client profiles have improved agent-client relationships by providing complete context for every interaction. Agents no longer need to search through notes or emails to remember client preferences.',
      ],
      learned: [
        'Data synchronization from multiple sources requires robust normalization. Address formats, property types, and amenity names vary significantly between listing sites. Building a flexible normalization pipeline was essential for data quality.',
        'Client relationships in real estate are long-term and multi-faceted. A renter today might be a buyer in two years. Designing the data model to support this lifecycle perspective improved the product\'s usefulness.',
        'Matching algorithms are never perfect, but providing transparency about how matches are scored helps agents trust the system. Showing the match score breakdown (price: 90%, location: 85%, amenities: 70%) makes the algorithm feel like a partner rather than a black box.',
      ],
    },
  },
  {
    slug: 'abia-oneid',
    title: 'Abia OneID Authenticator',
    category: 'Mobile App',
    year: '2022-2025',
    description: 'Biometric attendance tracking system for Abia state government using FaceIO integration with 70-95% accuracy.',
    tech: ['React Native', 'FaceIO API', 'Node.js', 'Express.js', 'iOS'],
    impact: ['Government deployment', 'Biometric auth', 'App Store published'],
    type: 'mobile',
    link: 'https://apps.apple.com/us/app/abia-oneid-authenticator/id6475302978',
    featured: false,
    caseStudy: {
      client: 'Abia State Government',
      role: 'Full Stack Engineer',
      year: '2022-2025',
      highlights: [
        'Designed a biometric attendance tracking system using FaceIO integration achieving 70-95% accuracy.',
        'Reduced daily manual check-in time by 10-30 minutes for 100+ employees.',
        'Built and deployed native iOS application with robust security features.',
      ],
      overview: [
        'Abia OneID Authenticator is a biometric attendance tracking system developed for Abia State Government in Nigeria. The system uses FaceIO facial recognition to verify employee identity and track attendance across government offices.',
        'As Full Stack Engineer, I designed and built the mobile application and backend infrastructure. The app needed to work reliably in government office environments with varying lighting conditions and network connectivity.',
      ],
      problem: [
        'Government offices in Abia State were using manual attendance tracking — paper sign-in sheets or simple log books. This created opportunities for buddy punching (one person signing in for another), inaccurate time records, and delayed payroll processing.',
        'The state government needed a modern, secure attendance system that could verify identity biometrically, work across multiple office locations, and integrate with existing payroll systems.',
      ],
      challenge: [
        'Facial recognition accuracy in real-world conditions is challenging. Government offices have varying lighting, employees may have changed appearance (new hairstyles, glasses), and the system needed to work for a diverse population.',
        'The app needed to handle offline scenarios since internet connectivity in some government offices was unreliable. Attendance records had to be captured locally and synced when connectivity returned.',
        'Government procurement and deployment processes are complex. The app needed to pass security reviews, meet accessibility standards, and be approved by IT departments before rollout.',
      ],
      approach: [
        'I evaluated several facial recognition APIs and chose FaceIO for its balance of accuracy, ease of integration, and privacy features. FaceIO processes facial data on-device rather than sending images to external servers, which addressed government privacy concerns.',
        'The React Native app implements a registration flow where employees enroll their facial biometrics. During daily check-in, the app captures a live photo and compares it against the enrolled template using FaceIO\'s matching algorithm.',
        'For offline support, the app stores attendance records in a local SQLite database and syncs them to the backend when connectivity is available. The sync process handles conflicts and deduplication to ensure data integrity.',
        'The backend API maintains employee records, attendance logs, and generates monthly reports for payroll integration. All data is encrypted at rest and in transit.',
      ],
      solution: [
        'The Abia OneID app provides a streamlined attendance experience. Employees open the app, look at the camera, and are verified within seconds. The system records check-in time, location, and verification confidence score.',
        'The admin dashboard allows HR managers to view attendance reports, track late arrivals, manage employee enrollments, and export data for payroll processing. The system supports multiple office locations with location-based check-in validation.',
        'Offline mode ensures attendance tracking continues even without internet. Records sync automatically when connectivity returns, with visual indicators showing sync status to users.',
      ],
      impactSection: [
        'The system has been deployed across Abia State Government offices, serving 100+ employees. Daily check-in time has been reduced from 10-30 minutes of manual processing to under a minute per person.',
        'The biometric verification has eliminated buddy punching and improved time record accuracy. Monthly payroll processing is faster and more reliable with automated attendance data.',
      ],
      learned: [
        'Biometric accuracy in production is different from demo conditions. Real-world lighting, angles, and appearance changes affect recognition rates. Building a re-enrollment flow and confidence thresholds was essential for maintaining usability.',
        'Government deployments require patience and thorough documentation. Security reviews, procurement processes, and stakeholder management take significant time. Clear documentation and security architecture diagrams accelerated approvals.',
        'Offline-first design is critical for apps deployed in environments with unreliable connectivity. Users need to understand when they are offline and what happens to their data. Visual sync indicators and clear messaging build trust.',
      ],
    },
  },
  {
    slug: 'clearpath',
    title: 'ClearPath',
    category: 'B2B SaaS',
    year: '2025',
    description: 'Platform for managing the entire lifecycle of an import shipment from origin to delivery, including document management and tracking.',
    tech: ['NestJS', 'Next.js', 'Prisma ORM', 'PostgreSQL', 'Render'],
    impact: ['End-to-end tracking', 'Document management', 'B2B SaaS'],
    type: 'web',
    featured: false,
    caseStudy: {
      client: 'ClearPath',
      role: 'Solo Founder & Full Stack Developer',
      year: '2025',
      highlights: [
        'Solo-founded platform managing the entire lifecycle of import shipments from origin to delivery.',
        'Built with NestJS, Next.js, Prisma ORM, and PostgreSQL for a type-safe, scalable architecture.',
        'Includes document management, shipment tracking, and organization tools for import businesses.',
      ],
      overview: [
        'ClearPath is a B2B SaaS platform I founded for managing the entire lifecycle of an import shipment — from origin to delivery. It includes document management, shipment tracking, and organization tools for Nigerian import businesses.',
        'As solo founder and developer, I handled everything from product design to backend architecture to frontend implementation. The platform is built with NestJS, Next.js, Prisma ORM, and PostgreSQL, hosted on Render.',
      ],
      problem: [
        'Import businesses in Nigeria manage complex shipment workflows involving multiple stakeholders: suppliers, freight forwarders, customs agents, and logistics providers. Each shipment generates dozens of documents — invoices, packing lists, bills of lading, customs forms, inspection certificates.',
        'These documents are typically scattered across email threads, WhatsApp messages, and physical files. Tracking a shipment\'s status requires calling multiple parties, and missing documents can cause costly delays at ports.',
        'There was no unified platform that brought together shipment tracking, document management, and stakeholder communication in one place.',
      ],
      challenge: [
        'Building a B2B SaaS as a solo founder requires making architectural choices that balance development speed with long-term maintainability. I needed a stack that would let me ship quickly without creating technical debt.',
        'The document management system needed to handle various file types (PDFs, images, spreadsheets) with version control, access permissions, and search capabilities. Storage and retrieval needed to be fast and reliable.',
        'Nigerian import workflows have unique requirements — NAFDAC registrations, SONCAP certificates, pre-shipment inspections — that generic logistics software does not handle. The product needed to be tailored to local requirements.',
      ],
      approach: [
        'I chose NestJS for the backend because its modular architecture and TypeScript-first approach provide structure that helps solo developers maintain code quality. The built-in validation, dependency injection, and testing support accelerated development.',
        'Next.js with App Router handles the frontend, providing server-side rendering for SEO and static generation for performance. Prisma ORM with PostgreSQL ensures type-safe database operations and makes schema changes manageable.',
        'The document management system uses cloud storage with metadata indexing in PostgreSQL. Documents are organized by shipment, tagged by type, and searchable by content (using OCR for scanned documents).',
        'I focused on the core workflow first — shipment creation, document upload, status tracking — before adding advanced features. This allowed me to validate the product with early users before investing in edge cases.',
      ],
      solution: [
        'ClearPath provides a unified dashboard where import businesses can create shipments, upload and organize documents, track status through predefined workflow stages, and communicate with stakeholders.',
        'The document management module supports drag-and-drop uploads, automatic document type detection, version history, and role-based access control. Users can search across all documents by content, date, or shipment.',
        'The shipment tracking workflow guides users through each stage of the import process with checklists, deadline reminders, and status indicators. Missing documents are flagged before they become blockers.',
        'The platform is designed to scale from small importers managing a few shipments per month to larger operations with complex multi-container workflows.',
      ],
      impactSection: [
        'ClearPath is in early validation with Nigerian import businesses. Initial feedback has validated the core problem and the document management approach. Users have reported significant time savings from having all shipment information in one place.',
        'The NestJS/Next.js/Prisma stack has proven to be a solid choice for solo development — the type safety catches errors early, and the modular structure makes it easy to add features incrementally.',
      ],
      learned: [
        'Solo founding a product requires ruthless prioritization. I learned to focus on the core workflow that delivers value and defer nice-to-have features until the product has paying users.',
        'NestJS is an excellent choice for structured backend development. The opinionated architecture prevents the "spaghetti code" that often emerges in solo projects, and the built-in testing tools encourage writing tests from the start.',
        'Domain expertise matters. Spending time with import businesses to understand their workflows was essential for building something useful. Generic logistics knowledge was not enough — I needed to understand NAFDAC, SONCAP, and local port processes.',
      ],
    },
  },
  {
    slug: 'notiflow',
    title: 'Notiflow',
    category: 'Distributed System',
    year: '2025',
    description: 'Kafka-based distributed notification batching and delivery system, built as a hands-on distributed systems learning project.',
    tech: ['Kafka', 'Node.js', 'Distributed Systems', 'Event-Driven'],
    impact: ['Message batching', 'Distributed architecture', 'Event-driven'],
    type: 'other',
    featured: false,
    caseStudy: {
      client: 'Personal Project',
      role: 'Solo Developer',
      year: '2025',
      highlights: [
        'Built a Kafka-based distributed notification batching and delivery system.',
        'Implemented message batching to reduce API call overhead and improve throughput.',
        'Designed with event-driven architecture for scalability and fault tolerance.',
      ],
      overview: [
        'Notiflow is a distributed notification batching and delivery system built as a hands-on distributed systems learning project. It uses Apache Kafka for message streaming, implements batching logic to reduce API overhead, and handles delivery retries with exponential backoff.',
        'The project was born from a desire to understand distributed systems concepts — message queues, consumer groups, partitioning, exactly-once semantics — by building something practical rather than just reading about them.',
      ],
      problem: [
        'Sending individual notifications through third-party APIs (email, SMS, push) creates significant overhead. Each API call has latency, rate limits, and costs. For high-volume applications, sending notifications one at a time is inefficient and expensive.',
        'Distributed systems concepts like partitioning, replication, and consumer groups are abstract until you implement them. I needed a practical project that would force me to handle real distributed systems challenges.',
      ],
      challenge: [
        'Setting up and managing a Kafka cluster locally was the first hurdle. Understanding topics, partitions, brokers, and consumer groups required hands-on experimentation.',
        'Implementing batching logic that groups notifications by type and recipient while respecting time windows (send batch every 30 seconds OR when batch reaches 100 messages) required careful state management.',
        'Handling failures in a distributed system is complex. A consumer might crash mid-batch, a broker might be temporarily unavailable, or a third-party API might return errors. The system needed to handle all of these gracefully.',
      ],
      approach: [
        'I set up a local Kafka cluster using Docker Compose with Zookeeper and multiple brokers. This gave me hands-on experience with cluster configuration, topic creation, and partition management.',
        'The notification pipeline uses multiple Kafka topics: raw notifications, batched notifications, and delivery results. Producers publish raw notifications, a batching service consumes from the raw topic, groups messages, and publishes to the batched topic. Delivery workers consume from the batched topic and send through third-party APIs.',
        'For batching, I implemented a time-and-size-based approach. Batches are flushed when they reach a configured size or after a time window expires. This balances latency and throughput based on notification urgency.',
        'Error handling includes dead letter queues for permanently failed messages, retry topics with exponential backoff for temporary failures, and metrics collection for monitoring delivery rates and latencies.',
      ],
      solution: [
        'Notiflow provides a complete notification pipeline from ingestion to delivery. Applications publish notification events to Kafka, and the system handles batching, routing, delivery, and retry logic transparently.',
        'The batching service groups notifications by channel (email, SMS, push) and recipient domain, reducing API calls by 60-80% compared to individual delivery. Time-sensitive notifications can bypass batching through a priority queue.',
        'The delivery layer supports multiple providers per channel with failover logic. If one email provider is down, messages are automatically routed to a backup provider.',
      ],
      impactSection: [
        'Notiflow is a learning project, but the patterns implemented are directly applicable to production systems. The batching logic, retry mechanisms, and monitoring approach have informed how I design notification systems in professional work.',
        'The project gave me practical experience with Kafka that I had previously only encountered in theory. Understanding consumer lag, partition rebalancing, and exactly-once semantics through hands-on implementation was invaluable.',
      ],
      learned: [
        'Distributed systems are full of edge cases that only appear under load. Testing with real traffic patterns revealed issues that unit tests never would — consumer lag spikes, partition hotspots, and memory leaks in the batching service.',
        'Kafka is powerful but complex. Understanding the relationship between topics, partitions, and consumer groups is essential for designing systems that scale. I learned to think in terms of data flow rather than individual components.',
        'Observability is critical in distributed systems. Without metrics on throughput, latency, and error rates, you are flying blind. I integrated Prometheus and Grafana for monitoring, which quickly became the most valuable part of the project.',
      ],
    },
  },
  {
    slug: 'panticket',
    title: 'Panticket',
    category: 'Web Application',
    year: '2021-2025',
    description: 'Scalable event booking platform backend supporting multiple ticket tiers (regular, premium, royalty) with database-first architecture.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    impact: ['Multiple ticket tiers', 'Scalable backend', 'Production-ready'],
    type: 'web',
    featured: false,
    caseStudy: {
      client: 'Panthera Tech School',
      role: 'Backend Engineer',
      year: '2021-2025',
      highlights: [
        'Built a scalable Node.js/MongoDB backend for an event booking platform.',
        'Supported multiple ticket tiers including regular, premium, and royalty levels.',
        'Designed with database-first architecture as an educational framework.',
      ],
      overview: [
        'Panticket is a scalable event booking platform backend built for Panthera Tech School events. It supports multiple ticket tiers, reservation management, payment tracking, and event analytics.',
        'As Backend Engineer, I designed the database schema and API architecture with a database-first approach. The project was also used as an educational framework to teach bootcamp students about backend development.',
      ],
      problem: [
        'Panthera Tech School needed a way to sell tickets for bootcamp graduation events, tech meetups, and workshops. Manual ticket sales through bank transfers and WhatsApp were unscalable and created reconciliation headaches.',
        'Different events needed different ticket structures — some had free admission, others had paid tiers, and some had VIP seating. A one-size-fits-all approach would not work.',
      ],
      challenge: [
        'The database schema needed to be flexible enough to support various event types and ticket structures while maintaining data integrity. A poorly designed schema would create problems as requirements evolved.',
        'The system needed to handle concurrent ticket purchases without overselling. Race conditions during popular event sales could lead to selling more tickets than venue capacity.',
        'As an educational framework, the code needed to be clean, well-documented, and demonstrate best practices for students learning backend development.',
      ],
      approach: [
        'I designed the MongoDB schema around core entities: Events, Tickets, Orders, and Attendees. The schema uses references rather than deep nesting to maintain flexibility while supporting efficient queries.',
        'For ticket inventory management, I implemented optimistic locking with version fields. When a purchase is initiated, the ticket count is decremented immediately. If payment fails, the ticket is released back to inventory.',
        'The API follows RESTful conventions with clear resource boundaries, consistent error responses, and comprehensive validation. Swagger documentation makes the API discoverable for frontend developers and students.',
      ],
      solution: [
        'The Panticket backend provides a complete event management API. Organizers can create events with custom ticket tiers, set pricing, manage capacity, and track sales in real time.',
        'The order system handles the full purchase flow: cart creation, payment initiation, webhook confirmation, and ticket generation. Attendees receive QR codes that can be scanned at event entry.',
        'As an educational tool, the codebase demonstrates MongoDB schema design, API versioning, authentication with JWT, input validation, error handling, and testing patterns.',
      ],
      impactSection: [
        'Panticket has processed ticket sales for multiple Panthera Tech School events. The database-first architecture has proven flexible enough to accommodate different event types without schema migrations.',
        'As a teaching tool, the codebase has helped 100+ students understand backend development concepts in a real-world context. Students can read the code, run it locally, and extend it with new features.',
      ],
      learned: [
        'Database design decisions have long-term consequences. Getting the schema right early — using references instead of embedding, indexing the right fields, planning for growth — prevents painful migrations later.',
        'Race conditions in ticket sales are subtle and dangerous. I learned that optimistic locking, while simple, requires careful handling of edge cases like payment timeouts and network failures.',
        'Teaching through real code is more effective than abstract examples. Students understood database relationships better when they could see them in the context of a working application.',
      ],
    },
  },
  {
    slug: 'whatsapp-bot',
    title: 'WhatsApp Support Bot',
    category: 'Automation Bot',
    year: '2021-2025',
    description: 'Automated WhatsApp chatbot for student support and course information delivery at Panthera Tech School.',
    tech: ['Node.js', 'web.whatsapp API'],
    impact: ['Automated support', 'Instant responses', 'Student engagement'],
    type: 'other',
    featured: false,
    caseStudy: {
      client: 'Panthera Tech School',
      role: 'Software Engineer',
      year: '2021-2025',
      highlights: [
        'Built an automated WhatsApp chatbot for student support and course information delivery.',
        'Handles frequently asked questions and provides instant responses 24/7.',
        'Improved student engagement by meeting them on a platform they already use daily.',
      ],
      overview: [
        'An automated WhatsApp chatbot for student support and course information delivery at Panthera Tech School. The bot handles frequently asked questions, provides course schedules, delivers assignment reminders, and connects students with instructors when human help is needed.',
        'The project was built to reduce the administrative burden on instructors while improving student access to information. Since most students in Nigeria use WhatsApp daily, it was the natural platform for engagement.',
      ],
      problem: [
        'Instructors at Panthera Tech School spent significant time answering the same questions repeatedly: "When is the next class?", "What is the assignment deadline?", "How do I submit my project?", "What are the payment options?"',
        'Students often needed information outside of office hours, especially those balancing bootcamp with jobs. Email responses could take hours, and phone calls were impractical at scale.',
        'The school needed a way to deliver instant, consistent information to students while freeing instructors to focus on teaching rather than administrative queries.',
      ],
      challenge: [
        'WhatsApp Business API was not readily available in Nigeria at the time, so I used the web.whatsapp library which works through WhatsApp Web. This required handling session persistence, QR code scanning, and reconnection logic.',
        'The bot needed to understand natural language queries without the sophistication of modern LLMs. I built a keyword and pattern-matching system that could handle common question variations.',
        'Maintaining conversation context was important. If a student asked about assignments, follow-up questions like "when is it due?" should be interpreted in context.',
      ],
      approach: [
        'I built the bot using Node.js with the web.whatsapp library for WhatsApp Web integration. The bot runs as a persistent process that maintains a WhatsApp session, scans for incoming messages, and responds based on configured rules.',
        'The response system uses a two-tier approach: keyword matching for common questions (covering 80% of queries) and keyword extraction for more complex requests. A fallback message directs students to human support for questions the bot cannot answer.',
        'For context management, I maintained a simple session store that tracks the last topic discussed with each student. This allows the bot to handle follow-up questions without requiring the student to restate the full context.',
        'The bot integrates with the LMS database to fetch real-time information about class schedules, assignment deadlines, and student enrollment status.',
      ],
      solution: [
        'The WhatsApp bot provides instant responses to common student questions 24/7. Students can ask about schedules, assignments, payments, and course content through natural messages in a platform they already use.',
        'The bot sends proactive notifications for upcoming classes, assignment deadlines, and payment reminders. These scheduled messages have improved attendance and reduced late submissions.',
        'When the bot encounters a question it cannot answer, it collects relevant context and forwards the query to the appropriate instructor with the full conversation history.',
      ],
      impactSection: [
        'The bot handles hundreds of student interactions per month, resolving the majority without human intervention. Instructors report significant time savings from not having to answer repetitive questions.',
        'Student satisfaction improved because they get instant responses instead of waiting for email replies. The proactive notifications have improved class attendance and assignment submission rates.',
      ],
      learned: [
        'Meeting users on platforms they already use is more effective than building new interfaces. WhatsApp had near-universal adoption among students, making it the ideal delivery channel for information.',
        'Simple keyword matching can handle a surprising percentage of support queries. Before reaching for NLP or LLMs, I learned to start with the simplest solution that works and only add complexity when needed.',
        'Session persistence in WhatsApp Web-based bots is fragile. QR codes expire, sessions get disconnected, and phone battery issues can interrupt service. Building robust reconnection logic was essential for reliability.',
      ],
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}

export function getAllSlugs(): string[] {
  return projects.map(p => p.slug)
}
