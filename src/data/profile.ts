export interface ProfileConfig {
  name: string;
  monogram: string;
  wordmark: string;
  headline: string;
  roles: string[];
  heroDescription: string;
  statusBadge: string;
  aboutParagraphs: string[];
  education: {
    degree: string;
    faculty: string;
    institution: string;
    location: string;
    expectedGraduation: string;
  };
  location: string;
  availability: string;
  interests: string[];
  links: {
    github: string;
    linkedin: string; // [VERIFY_FROM_CV] Replace empty string with verified LinkedIn URL
    email: string;    // [VERIFY_FROM_CV] Replace with verified email address
    cvUrl: string;    // Place PDF at public/resume/Mohamed_Rifa_CV.pdf
  };
  portrait: {
    src: string;
    alt: string;
  };
}

export const PROFILE: ProfileConfig = {
  name: 'Muhammadhu Rifa',
  monogram: 'MR',
  wordmark: 'RIFA',
  headline: 'Aspiring Data Engineer | Full-Stack Developer',
  roles: [
    'Aspiring Data Engineer',
    'Full-Stack Developer',
    'Computer Science Undergraduate',
    'Technology Enthusiast',
  ],
  heroDescription:
    'I build data-driven solutions, scalable data pipelines, and modern web applications that transform complex challenges into meaningful digital experiences.',
  statusBadge: 'Open to Internship Opportunities',
  aboutParagraphs: [
    'I am a Computer Science undergraduate at the University of Ruhuna with a strong interest in Data Engineering, Cloud Computing, and Full-Stack Development. I enjoy designing data pipelines, building modern web applications, and exploring technologies that solve practical business problems.',
    'My experience combines technical projects, leadership, teamwork, and entrepreneurial thinking. I continuously develop my skills through hands-on projects and independent learning.',
  ],
  education: {
    degree: 'Bcs ',
    faculty: 'Faculty of Science',
    institution: 'University of Ruhuna',
    location: 'Sri Lanka',
    expectedGraduation: '2028 ',
  },
  location: 'Sri Lanka',
  availability:
    'Open to Data Engineering and Software Engineering internship opportunities from January 2027.',
  interests: [
    'Data Engineering',
    'Cloud Computing',
    'Full-Stack Development',
    'Artificial Intelligence',
    'Software Engineering',
    'Data Analytics',
  ],
  links: {
    github: 'https://github.com/mhdrifa',
    linkedin: 'https://www.linkedin.com/in/muhammadhu-rifa-8406a5334/', // [VERIFY_FROM_CV] Add verified LinkedIn URL, e.g. 'https://linkedin.com/in/your-handle'
    email: 'mrifa0920@gmail.com',    // [VERIFY_FROM_CV] Add verified contact email, e.g. 'mohamed.rifa@example.com'
    cvUrl: '/resume/Mohamed_Rifa_CV.pdf',
  },
  portrait: {
    src: '/images/mohamed-rifa-portrait.jpg',
    alt: 'Mohamed Rifa wearing a black tailored suit in a studio monochrome portrait',
  },
};
