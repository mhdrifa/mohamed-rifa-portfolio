export type SkillCategoryKey =
  | 'Data Engineering'
  | 'Full-Stack Development'
  | 'Databases'
  | 'Development Tools';

export type SkillMaturity = 'used-in-projects' | 'learning';

export interface SkillItem {
  name: string;
  category: SkillCategoryKey;
  maturity: SkillMaturity;
  context: string;
}

export const SKILL_CATEGORIES: SkillCategoryKey[] = [
  'Data Engineering',
  'Full-Stack Development',
  'Databases',
  'Development Tools',
];

export const SKILLS: SkillItem[] = [
  // Data Engineering
  {
    name: 'Python',
    category: 'Data Engineering',
    maturity: 'used-in-projects',
    context: 'Data processing scripts, FastAPI services, and analytical workflows.',
  },
  {
    name: 'SQL',
    category: 'Data Engineering',
    maturity: 'used-in-projects',
    context: 'ETL transformations, dimensional queries, and relational schema design.',
  },
  {
    name: 'Pandas',
    category: 'Data Engineering',
    maturity: 'used-in-projects',
    context: 'Tabular cleansing, aggregation, and forecasting preprocessing.',
  },
  {
    name: 'NumPy',
    category: 'Data Engineering',
    maturity: 'used-in-projects',
    context: 'Numerical array operations and analytical computation.',
  },
  {
    name: 'ETL and ELT',
    category: 'Data Engineering',
    maturity: 'used-in-projects',
    context: 'Extracting CSV/raw feeds, cleansing, and loading structured layers.',
  },
  {
    name: 'Data Warehousing',
    category: 'Data Engineering',
    maturity: 'used-in-projects',
    context: 'Structured analytical storage modeled for reporting.',
  },
  {
    name: 'Data Modeling',
    category: 'Data Engineering',
    maturity: 'used-in-projects',
    context: 'Star schema design with fact and dimension tables.',
  },
  {
    name: 'Medallion Architecture',
    category: 'Data Engineering',
    maturity: 'used-in-projects',
    context: 'Bronze, Silver, and Gold layered curation pattern.',
  },
  {
    name: 'Apache Spark',
    category: 'Data Engineering',
    maturity: 'learning',
    context: 'Distributed data processing concepts and cloud lakehouse workflows.',
  },
  {
    name: 'PySpark',
    category: 'Data Engineering',
    maturity: 'learning',
    context: 'Spark transformations inside Azure Databricks pipelines.',
  },
  {
    name: 'Azure Data Factory',
    category: 'Data Engineering',
    maturity: 'learning',
    context: 'Cloud pipeline orchestration and ingestion workflows.',
  },
  {
    name: 'Azure Databricks',
    category: 'Data Engineering',
    maturity: 'learning',
    context: 'Notebook-driven Bronze-to-Gold lakehouse transformations.',
  },
  {
    name: 'Azure Data Lake Storage',
    category: 'Data Engineering',
    maturity: 'learning',
    context: 'Scalable cloud object storage for raw and curated layers.',
  },

  // Full-Stack Development
  {
    name: 'HTML',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Semantic document structure and accessible web markup.',
  },
  {
    name: 'CSS',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Responsive layouts, typography, and custom styling.',
  },
  {
    name: 'JavaScript',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Interactive UI logic and Node.js backend development.',
  },
  {
    name: 'TypeScript',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Type-safe React frontends and maintainable application code.',
  },
  {
    name: 'React',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Component-driven interfaces across web applications.',
  },
  {
    name: 'Next.js',
    category: 'Full-Stack Development',
    maturity: 'learning',
    context: 'Full-stack React routing and server-rendered web architecture.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Utility-first responsive UI systems.',
  },
  {
    name: 'Node.js',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Real-time backends, REST endpoints, and event-driven services.',
  },
  {
    name: 'Express.js',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'API routing, middleware, and server-side application logic.',
  },
  {
    name: 'Java',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Object-oriented programming and university software engineering.',
  },
  {
    name: 'Spring Boot',
    category: 'Full-Stack Development',
    maturity: 'learning',
    context: 'Enterprise Java REST API development.',
  },
  {
    name: 'REST APIs',
    category: 'Full-Stack Development',
    maturity: 'used-in-projects',
    context: 'Designing and consuming structured HTTP JSON endpoints.',
  },

  // Databases
  {
    name: 'MySQL',
    category: 'Databases',
    maturity: 'used-in-projects',
    context: 'Relational database modeling and transactional queries.',
  },
  {
    name: 'Microsoft SQL Server',
    category: 'Databases',
    maturity: 'used-in-projects',
    context: 'Bronze/Silver/Gold data warehouse implementation and T-SQL.',
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    maturity: 'learning',
    context: 'Relational analytics and modern backend persistence.',
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    maturity: 'used-in-projects',
    context: 'Document storage for alert, patrol, and mapping data.',
  },
  {
    name: 'SQLite',
    category: 'Databases',
    maturity: 'used-in-projects',
    context: 'Lightweight embedded persistence for Voice-to-Data AI.',
  },
  {
    name: 'Supabase',
    category: 'Databases',
    maturity: 'learning',
    context: 'Managed Postgres and modern web backend services.',
  },

  // Development Tools
  {
    name: 'Git',
    category: 'Development Tools',
    maturity: 'used-in-projects',
    context: 'Branching, version control, and collaborative workflows.',
  },
  {
    name: 'GitHub',
    category: 'Development Tools',
    maturity: 'used-in-projects',
    context: 'Source hosting, project documentation, and repositories.',
  },
  {
    name: 'Linux',
    category: 'Development Tools',
    maturity: 'used-in-projects',
    context: 'CLI workflows, environment setup, and server operations.',
  },
  {
    name: 'VS Code',
    category: 'Development Tools',
    maturity: 'used-in-projects',
    context: 'Primary editor for Python, TypeScript, and web projects.',
  },
  {
    name: 'IntelliJ IDEA',
    category: 'Development Tools',
    maturity: 'used-in-projects',
    context: 'Java and object-oriented development.',
  },
  {
    name: 'Vercel',
    category: 'Development Tools',
    maturity: 'used-in-projects',
    context: 'Frontend deployment and production previews.',
  },
];
