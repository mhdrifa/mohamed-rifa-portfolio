export type ProjectFilterCategory = 'All Projects' | 'Data Engineering' | 'Full-Stack' | 'AI';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  categoryLabel: string;
  filterTags: Exclude<ProjectFilterCategory, 'All Projects'>[];
  status: 'Completed' | 'In Progress' | 'Production / Live' | 'Academic / Research';
  overview: string;
  technologies: string[];
  problemStatement: string;
  solution: string;
  architecture: string[];
  contribution: string;
  challenges: string;
  learningOutcomes: string[];
  githubUrl?: string; // Add verified repo URL when available
  liveUrl?: string;
  screenshotUrl?: string; // Optional path under /public/images/projects/...
  note?: string;
}

export const PROJECT_FILTERS: ProjectFilterCategory[] = [
  'All Projects',
  'Data Engineering',
  'Full-Stack',
  'AI',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sql-data-warehouse',
    number: '01',
    title: 'SQL Data Warehouse',
    categoryLabel: 'Data Engineering',
    filterTags: ['Data Engineering'],
    status: 'Completed',
    overview:
      'An end-to-end relational data warehouse built on Microsoft SQL Server implementing Medallion Architecture (Bronze, Silver, and Gold layers) with Star Schema dimensional modeling.',
    technologies: [
      'Microsoft SQL Server',
      'T-SQL',
      'Medallion Architecture',
      'ETL',
      'Star Schema',
      'Dimensional Modeling',
      'CSV Ingestion',
    ],
    problemStatement:
      'Raw operational CSV files often contain inconsistent formatting, duplicate records, missing values, and unstandardized keys that make direct analytical reporting unreliable and slow.',
    solution:
      'Designed a structured three-layer SQL Server warehouse separating raw ingestion (Bronze), standardized cleansing and integration (Silver), and business-ready dimensional views (Gold).',
    architecture: [
      'Bronze Layer: Bulk ingestion of raw CSV datasets preserving source fidelity.',
      'Silver Layer: SQL-based cleansing, null handling, deduplication, and data type standardization.',
      'Gold Layer: Business-ready Star Schema composed of Fact and Dimension views/tables for analytical reporting.',
    ],
    contribution:
      'Architected the layered database structure, authored T-SQL ETL scripts, implemented data quality checks, and modeled the final Star Schema.',
    challenges:
      'Handling inconsistent source identifiers, normalizing multi-source date/category formats, and ensuring idempotent load scripts across warehouse refreshes.',
    learningOutcomes: [
      'Practical mastery of Bronze, Silver, and Gold Medallion separation.',
      'Hands-on dimensional modeling using Fact and Dimension tables.',
      'Writing maintainable, defensive SQL transformations and validation checks.',
    ],
    githubUrl: 'https://github.com/mhdrifa', // Replace with exact repository URL if separate
  },
  {
    id: 'azure-data-engineering-pipeline',
    number: '02',
    title: 'Azure Data Engineering Pipeline',
    categoryLabel: 'Cloud Data Engineering',
    filterTags: ['Data Engineering'],
    status: 'In Progress',
    overview:
      'A cloud-native lakehouse pipeline exploring Azure Data Lake Storage, Azure Data Factory, and Azure Databricks with PySpark across Bronze, Silver, and Gold zones.',
    technologies: [
      'Azure Data Lake Storage',
      'Azure Data Factory',
      'Azure Databricks',
      'PySpark',
      'Apache Spark',
      'Medallion Architecture',
    ],
    problemStatement:
      'Scaling analytical workloads beyond single-node relational databases requires decoupled cloud storage and distributed processing capable of orchestrating multi-stage transformations.',
    solution:
      'Structuring a cloud lakehouse workflow that lands raw files in Azure Data Lake Storage, orchestrates ingestion via Azure Data Factory where configured, and processes Silver/Gold transformations with PySpark in Azure Databricks.',
    architecture: [
      'Storage: Azure Data Lake Storage Gen2 partitioned into Bronze, Silver, and Gold containers.',
      'Ingestion & Orchestration: Azure Data Factory pipelines where applicable.',
      'Compute & Transformation: Azure Databricks notebooks running PySpark transformations (work in progress for downstream Gold automation).',
    ],
    contribution:
      'Designing the cloud storage hierarchy, configuring Databricks transformation notebooks, and implementing Medallion data flow patterns.',
    challenges:
      'Coordinating cloud resource configurations, managing distributed schema evolution in PySpark, and iteratively completing remaining Gold-layer orchestration stages.',
    learningOutcomes: [
      'Understanding distributed Spark execution vs. traditional SQL engines.',
      'Structuring cloud storage tiers for lakehouse maintainability.',
      'Integrating cloud orchestration and notebook-based PySpark ETL.',
    ],
    note: 'Work in Progress: Downstream orchestration and final Gold-layer automation features are actively being developed.',
  },
  {
    id: 'black-brand',
    number: '03',
    title: 'BLACK BRAND',
    categoryLabel: 'Full-Stack E-Commerce',
    filterTags: ['Full-Stack'],
    status: 'Production / Live',
    overview:
      'A luxury fashion e-commerce platform featuring a responsive storefront, product catalog with variants, inventory tracking, administrative dashboard, and database integration.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Full-Stack Architecture',
      'Database Integration',
      'Inventory Management',
    ],
    problemStatement:
      'A luxury apparel brand requires a refined digital storefront that matches its visual identity while reliably managing product variants, stock availability, and order workflows.',
    solution:
      'Built and deployed an end-to-end e-commerce web application combining a dark-aesthetic storefront with an integrated administrative interface for catalog and inventory management.',
    architecture: [
      'Storefront UI: Responsive product browsing, filtering, variant selection, and cart workflow.',
      'Admin Dashboard: Protected management interface for products, variants, and inventory status.',
      'Data & Deployment: Integrated database persistence and production web hosting at blackbrand.com.lk.',
    ],
    contribution:
      'Designed and developed the full-stack storefront experience, catalog variant logic, administrative management capabilities, and live deployment.',
    challenges:
      'Balancing luxury visual presentation and fast asset loading on mobile connections while keeping variant inventory state synchronized.',
    learningOutcomes: [
      'Shipping and maintaining a live production e-commerce application.',
      'Modeling product variants, stock states, and clean admin workflows.',
      'Optimizing responsive storefront UX across desktop and mobile viewports.',
    ],
    liveUrl: 'https://www.blackbrand.com.lk',
    note: 'Stack details reflect confirmed capabilities; private administrative endpoints and customer data are intentionally omitted.',
  },
  {
    id: 'lankabeacon-elephant-guard',
    number: '04',
    title: 'LankaBeacon / Elephant Guard',
    categoryLabel: 'AI and Full-Stack Development',
    filterTags: ['Full-Stack', 'AI'],
    status: 'Completed',
    overview:
      'A real-time technology solution designed to help address human-elephant conflict through AI-assisted detection, interactive mapping, patrol/geofence tools, and instant Telegram alerts.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'TensorFlow.js',
      'Socket.IO',
      'Leaflet',
      'Telegram Bot API',
    ],
    problemStatement:
      'Human-elephant conflict in rural regions creates urgent safety risks for both communities and wildlife when timely sighting awareness and coordinated patrol communication are lacking.',
    solution:
      'Built a full-stack spatial alert application pairing TensorFlow.js detection assistance with Leaflet interactive maps, geofenced patrol zones, Socket.IO live updates, and automated Telegram notifications.',
    architecture: [
      'Client & Mapping: React frontend with Leaflet interactive map layers, geofences, and real-time Socket.IO event listeners.',
      'AI Layer: TensorFlow.js inference integration for elephant detection assistance.',
      'Backend & Notifications: Node.js + Express/Socket.IO server backed by MongoDB and Telegram alert dispatch.',
    ],
    contribution:
      'Co-developed the full-stack architecture connecting real-time socket broadcasts, interactive map/geofence management, database persistence, and notification workflows.',
    challenges:
      'Coordinating low-latency bidirectional alerts via Socket.IO alongside geospatial geofence boundaries and external Telegram message delivery.',
    learningOutcomes: [
      'Integrating client/browser ML workflows with real-time web sockets.',
      'Designing geospatial interfaces and geofence logic with Leaflet.',
      'Building socially impactful software focused on rapid situational awareness.',
    ],
    githubUrl: 'https://github.com/mhdrifa',
  },
  {
    id: 'voice-to-data-ai',
    number: '05',
    title: 'Voice-to-Data AI',
    categoryLabel: 'Artificial Intelligence and Backend Development',
    filterTags: ['AI'],
    status: 'Completed',
    overview:
      'An AI-powered backend service that converts spoken audio into transcribed, structured records persisted automatically into a SQLite database.',
    technologies: [
      'Python',
      'FastAPI',
      'OpenAI Whisper',
      'FFmpeg',
      'SQLite',
      'REST APIs',
    ],
    problemStatement:
      'Field workers and busy operators often capture observations verbally, creating friction when converting raw voice recordings into searchable, structured database records.',
    solution:
      'Created a FastAPI backend that ingests audio uploads, normalizes audio streams with FFmpeg, transcribes speech via Whisper, and stores structured outputs inside SQLite.',
    architecture: [
      'API Ingestion: FastAPI endpoints accepting audio files with validation.',
      'Audio & AI Processing: FFmpeg preprocessing piped into Whisper speech-to-text transcription.',
      'Persistence: Structured extraction saved cleanly into SQLite for querying.',
    ],
    contribution:
      'Implemented the FastAPI service, audio normalization pipeline with FFmpeg, Whisper transcription integration, and SQLite storage layer.',
    challenges:
      'Handling varied audio container formats reliably via FFmpeg and managing processing latency during speech transcription.',
    learningOutcomes: [
      'Building asynchronous Python APIs with FastAPI.',
      'Managing multimedia preprocessing pipelines using FFmpeg.',
      'Bridging unstructured speech inputs into structured relational storage.',
    ],
    githubUrl: 'https://github.com/mhdrifa',
  },
  {
    id: 'waste-prediction-analytics',
    number: '06',
    title: 'Waste Prediction and Analytics',
    categoryLabel: 'Data Science and Analytics',
    filterTags: ['Data Engineering', 'AI'],
    status: 'Academic / Research',
    overview:
      'A data-driven analytical exploration applying data preprocessing and forecasting experiments to historical waste generation datasets.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Data Preprocessing',
      'Forecasting Experiments',
      'Evaluation Metrics',
    ],
    problemStatement:
      'Municipal and operational waste planning benefits from understanding historical trends and seasonal patterns rather than relying solely on static estimates.',
    solution:
      'Conducted structured exploratory data analysis, missing-value and outlier preprocessing, and comparative forecasting experiments evaluated against transparent error metrics and documented limitations.',
    architecture: [
      'Data Cleaning: Preprocessing historical records with Pandas and NumPy.',
      'Experimentation: Evaluating baseline forecasting approaches on prepared time-series splits.',
      'Assessment: Reviewing error metrics alongside dataset coverage and real-world limitations.',
    ],
    contribution:
      'Performed dataset preparation, exploratory feature analysis, forecasting experiment execution, and honest documentation of model constraints.',
    challenges:
      'Dealing with limited historical granularity, external real-world variables not captured in raw logs, and avoiding overfitting on small sample windows.',
    learningOutcomes: [
      'Importance of rigorous preprocessing before modeling.',
      'Interpreting evaluation metrics critically without overclaiming results.',
      'Documenting data limitations transparently for decision-makers.',
    ],
  },
];
