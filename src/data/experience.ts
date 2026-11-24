export interface TimelineEntry {
  id: string;
  role: string;
  organization: string;
  category: 'Education' | 'Leadership' | 'Experience' | 'Athletics';
  period: string;
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Competition' | 'Certification' | 'Leadership';
  description: string;
  certificateImage?: string; // Place image at /public/certificates/...
}

export interface RecruiterStrength {
  title: string;
  description: string;
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'bsc-ruhuna',
    role: 'BSc in Computer Science (Undergraduate)',
    organization: 'Faculty of Science, University of Ruhuna',
    category: 'Education',
    period: 'Expected Graduation: 2027 (Verify exact start date from CV)',
    description:
      'Pursuing undergraduate studies in Computer Science with independent focus on Data Engineering, Cloud Architecture, and Full-Stack Software Engineering.',
    highlights: [
      'Foundations in algorithms, databases, software engineering, and computer systems.',
      'Applied coursework and independent builds across SQL warehousing, Azure, React, and Python.',
    ],
  },
  {
    id: 'aiesec-igv-leadership',
    role: 'Incoming Global Volunteer (iGV) Leadership & EP Manager',
    organization: 'AIESEC',
    category: 'Leadership',
    period: 'Verify dates from CV',
    description:
      'Coordinated international volunteer experiences, stakeholder communication, and exchange participant (EP) operations within the Incoming Global Volunteer function.',
    highlights: [
      'Managed exchange participant (EP) onboarding, coordination, and stakeholder follow-through.',
      'Collaborated across teams to support volunteer delivery and organizational goals.',
    ],
  },
  {
    id: 'aiesec-marketing',
    role: 'Marketing Team Member',
    organization: 'AIESEC',
    category: 'Leadership',
    period: 'Verify dates from CV',
    description:
      'Supported outreach campaigns, digital communication, and youth leadership initiatives through cross-functional teamwork.',
    highlights: [
      'Contributed to promotional messaging and campaign coordination.',
      'Strengthened communication, brand alignment, and team collaboration.',
    ],
  },
  {
    id: 'healthaid-marketing',
    role: 'Marketing Manager',
    organization: 'HealthAid Hospital',
    category: 'Experience',
    period: 'Verify dates & scope from CV',
    description:
      'Handled marketing initiatives and stakeholder communication in a healthcare environment, strengthening business-oriented thinking and execution.',
    highlights: [
      'Aligned communication activities with organizational outreach objectives.',
      'Collaborated with internal stakeholders and gained real-world operational experience.',
    ],
  },
  {
    id: 'hockey-captain',
    role: 'Captain — Science Faculty Hockey Team',
    organization: 'University of Ruhuna',
    category: 'Athletics',
    period: 'Verify dates from CV',
    description:
      'Led the Science Faculty Hockey Team, fostering discipline, team cohesion, resilience, and composed decision-making under competitive pressure.',
    highlights: [
      'Guided team training preparation, match coordination, and communication.',
      'Balanced competitive university athletics alongside Computer Science academics.',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'sarasavi-sirasa',
    title: 'Sarasavi Sirasa Reading Competition — Winner',
    issuer: 'University of Ruhuna',
    category: 'Competition',
    description:
      'Recognized as winner of the University of Ruhuna Sarasavi Sirasa Reading Competition, reflecting discipline, articulation, and continuous intellectual curiosity.',
    certificateImage: '', // Optional: '/certificates/sarasavi-sirasa.jpg'
  },
  {
    id: 'pandas-cert',
    title: 'Pandas Course Certification',
    issuer: 'Verified Course Completion (Verify provider from CV)',
    category: 'Certification',
    description:
      'Completed structured coursework in Pandas for data manipulation, cleaning, aggregation, and tabular analytics workflows in Python.',
    certificateImage: '', // Optional: '/certificates/pandas-certificate.jpg'
  },
  {
    id: 'technical-courses',
    title: 'Verified Technical Course Completions',
    issuer: 'Data Engineering & Software Track (Add exact certificates from CV)',
    category: 'Certification',
    description:
      'Continuous independent study across SQL data warehousing, cloud data platforms, Python, and modern full-stack web engineering.',
    certificateImage: '',
  },
  {
    id: 'leadership-university',
    title: 'University Leadership & Athletics Recognition',
    issuer: 'AIESEC & Science Faculty Hockey Team',
    category: 'Leadership',
    description:
      'Combined student leadership as AIESEC iGV EP Manager / Marketing Team Member with captaincy of the Science Faculty Hockey Team.',
    certificateImage: '',
  },
];

export const RECRUITER_STRENGTHS: RecruiterStrength[] = [
  {
    title: 'Data Pipeline Development',
    description:
      'Hands-on practice structuring Bronze, Silver, and Gold Medallion ETL workflows in SQL Server and cloud lakehouse environments.',
  },
  {
    title: 'Analytical Problem-Solving',
    description:
      'Breaks ambiguous operational problems into clean schemas, testable stages, and measurable engineering tasks.',
  },
  {
    title: 'Database Design & SQL',
    description:
      'Comfortable designing relational schemas, dimensional Star Schemas, and T-SQL/MySQL/MongoDB/SQLite data layers.',
  },
  {
    title: 'Full-Stack Application Development',
    description:
      'Builds complete user-facing React/TypeScript interfaces connected to Node.js, Express, or FastAPI backends.',
  },
  {
    title: 'Independent Learning',
    description:
      'Self-driven learner rapidly picking up Azure Data Factory, Databricks, PySpark, and Whisper outside core coursework.',
  },
  {
    title: 'Leadership & Teamwork',
    description:
      'Proven collaboration through AIESEC leadership responsibilities and captaincy of the Science Faculty Hockey Team.',
  },
  {
    title: 'Business-Oriented Thinking',
    description:
      'Experience shipping a live fashion storefront (BLACK BRAND) and coordinating marketing initiatives at HealthAid Hospital.',
  },
  {
    title: 'Adaptability',
    description:
      'Switches smoothly between backend data modeling, AI APIs, cloud tooling, and responsive UI engineering.',
  },
];
