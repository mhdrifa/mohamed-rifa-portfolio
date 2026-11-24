# Mohamed Rifa — Interactive 3D Personal Portfolio

A production-ready personal portfolio built with **React, TypeScript, Tailwind CSS, Three.js (`@react-three/fiber` & `@react-three/drei`), Framer Motion, and GSAP ScrollTrigger**.

## Local Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2.  Add your personal assets:

      - Portrait Photograph: Save your portrait image as
        public/images/mohamed-rifa-portrait.jpg (or .webp and update
        PROFILE.portrait.src in src/data/profile.ts).
      - CV / Resume PDF: Place your CV PDF at public/resume/Mohamed_Rifa_CV.pdf.
      - Certificates (optional): Place verified certificate images inside
        public/certificates/ and link them in src/data/experience.ts.

3.  Verify CV-sourced details:

      - Open src/data/profile.ts and populate links.email and links.linkedin,
        and confirm education.expectedGraduation.
      - Open src/data/experience.ts and replace "Verify dates from CV" entries
        with your exact CV dates.
      - Open src/data/projects.ts to add specific GitHub repository URLs or
        screenshots (public/images/projects/...).

4.  Start development server:

    npm run dev

5.  Run TypeScript & production build checks:

    npm run lint
    npm run build
    npm run preview

Deployment to Vercel

1.  Push the repository to GitHub (mhdrifa).
2.  Import the repository in Vercel.
3.  Framework preset: Vite (npm run build, output directory dist).
4.  Update public/robots.txt and public/sitemap.xml with your final Vercel or
    custom domain URL.

## Package note

Source files were extracted from the supplied AI-generated text. The portrait and CV were not included in that text. Dependency installation and production build have not been verified.
