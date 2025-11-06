import { createContext, useContext, useState } from "react";

const PersonaContext = createContext();

export const personas = {
  engineering: {
    id: "engineering",
    name: "Engineering",
    title: "Engineering Leader",
    description:
      "Customer impact-driven technical leader with 15+ years of experience delivering enterprise cloud-native SaaS solutions, and large-scale digital/IT transformations for high-growth organizations.",
    resumeFile: "RESUME-SHIN LEE.pdf",
    focusAreas: [
      "Enterprise cloud-native SaaS solutions",
      "Large-scale digital/IT transformations",
      "B2B SaaS, eCommerce, and micro-frontend architecture",
      "Data analytics, platform migration, and infrastructure optimization",
      "GenAI and ML-driven product innovation",
      "SEO, A/B testing, and user engagement growth",
    ],
    experience: [
      {
        company: "AbbVie",
        role: "Director of Engineering",
        period: "2023 – 2025",
        bullets: [
          "Spearheaded B2B SaaS transformation, consolidating onboarding, account management, and more into a unified eCommerce experience.",
          "Launched a new B2B ecommerce store with ReactJS/NestJS MFE, increasing revenue by 20%.",
          "Reduced provider activation time from 7+ days to under 2 days with a streamlined onboarding micro-frontend.",
          "Delivered multi-tenant SSO for 40,000+ users, improving sign-in success by 30%.",
          "Scaled a GenAI Q&A MVP to production in 12 weeks, automating 80% of FAQs.",
        ],
      },
      {
        company: "VIZIO",
        role: "Senior Director of Engineering",
        period: "2020 - 2023",
        bullets: [
          "Led TV OS platform modernization, reducing boot time by 70% and increasing daily active users by 15%.",
          "Architected analytics platform migration to Snowflake, achieving 30% cost reduction and 85% faster queries.",
          "Built real-time analytics infrastructure, improving system uptime to 99.9%.",
        ],
      },
      {
        company: "INRIX",
        role: "Software Development Manager",
        period: "2018 - 2020",
        bullets: [
          "Delivered mobility analytics SaaS portal from concept to market in 12 months.",
          "Re-architected GPS data pipeline to AWS cloud, reducing costs by 65% and improving data processing speed by 4x.",
          "Architected automotive embedded OS solutions, improving text-to-speech response time by 80%.",
        ],
      },
      {
        company: "Amazon",
        role: "Software Development Manager",
        period: "2017 - 2018",
        bullets: [
          "Drove organizational optimization, achieving $850K cost reduction.",
          "Architected multi-region disaster recovery, achieving 99.99% availability.",
          "Pioneered first multi-region deployment with Amazon Q&A team, supporting millions of daily customers.",
        ],
      },
      {
        company: "Intelius",
        role: "Senior Software Development Manager",
        period: "2011 - 2017",
        bullets: [
          "Led e-commerce platform modernization, boosting conversion rates by 45%.",
          'Led SEO strategy, boosting search rank from #9 to #1 for "background check".',
          "Modernized QA automation, increasing test coverage from 45% to 85%.",
        ],
      },
      {
        company: "MySpace",
        role: "Lead Software Development Engineer",
        period: "2009 - 2011",
        bullets: [
          "Built enterprise-grade Mail platform components for 5M+ concurrent users.",
          "Developed personalized User Profile system, increasing CTR by 28% and conversion by 180%.",
          "Contributed to Google's OpenSocial SDK, adopted by 100+ developers.",
        ],
      },
      {
        company: "Microsoft",
        role: "Senior Software Development Engineer",
        period: "1999 - 2009",
        bullets: [
          "Led MSN Channel development team serving 25M+ monthly users, improving page load by 40%.",
          "Automated content approval workflow, reducing manual overhead by 80%.",
          "Architected a Visual Studio UML designer for Entity Framework 1.0, improving development cycle time by 45%.",
        ],
      },
    ],
  },
  programManager: {
    id: "programManager",
    name: "Program Manager",
    title: "Strategic Program Manager",
    description:
      "PMP-certified Program Management Leader with over 15 years of experience directing high-impact, cross-functional programs, with proven success in modernizing technology, streamlining operations, and delivering new revenue streams.",
    resumeFile: "RESUME-P-SHIN LEE.pdf",
    focusAreas: [
      "High-impact, cross-functional programs",
      "SaaS modernization and data platform migrations",
      "Compliance-driven product launches",
      "Enterprise transformation programs",
      "Strategic planning and roadmap development",
      "Risk management and mitigation strategies",
    ],
    experience: [
      {
        company: "AbbVie",
        role: "Director of Engineering",
        period: "2023 – 2025",
        bullets: [
          "Directed a major enterprise transformation program to consolidate five distinct customer-facing processes into a single, unified B2C experience.",
          "Managed a critical healthcare compliance program for provider enablement, leading the launch of a new, HIPAA-compliant onboarding micro-frontend.",
          "Spearheaded the integration program for large-scale organizational consolidation, delivering a seamless multi-tenant Single Sign-On (Okta) solution.",
        ],
      },
      {
        company: "VIZIO",
        role: "Senior Director of Engineering",
        period: "2020 - 2023",
        bullets: [
          "Directed a complex, engineering-wide TV OS platform modernization program, coordinating multiple development teams.",
          "Led the strategic program for migrating a large-scale analytics platform to Snowflake, including establishing a standardized data taxonomy.",
        ],
      },
      {
        company: "INRIX",
        role: "Technical Program Manager/SDM",
        period: "2018 - 2020",
        bullets: [
          "Led the full program lifecycle for a Mobility Analytics SaaS initiative, from concept to market launch in 12 months.",
          "Orchestrated a major data platform modernization program, re-architecting the core data pipeline to the AWS Cloud.",
        ],
      },
      {
        company: "Amazon",
        role: "Senior Technical Program Manager/SDM",
        period: "2017 - 2018",
        bullets: [
          "Directed a large-scale organizational optimization program across 12 internal teams, delivering $850K in annual cost reduction.",
          "Architected and led the implementation of a comprehensive multi-region Disaster Recovery (DR) program for a critical retail platform.",
        ],
      },
      {
        company: "Intelius",
        role: "Senior Software Development Manager",
        period: "2011 - 2017",
        bullets: [
          "Led companywide e-commerce platform modernization from legacy PHP monolith to Symfony with cloud-native microservices.",
        ],
      },
    ],
  },
  qa: {
    id: "qa",
    name: "QA",
    title: "QA & Engineering Leader",
    description:
      "Strategic QA and Engineering Leader with 20+ years of experience delivering enterprise SaaS, cloud-native solutions with high quality assurance and control, embedding quality early in the SDLC.",
    resumeFile: "RESUME-Q-SHIN LEE.pdf",
    focusAreas: [
      "Quality assurance and test strategy",
      "Test automation and CI/CD integration",
      "Embedding quality early in the SDLC",
      "Automation, experimentation, and cross-functional alignment",
      "Quality metrics and measurement",
    ],
    experience: [
      {
        company: "AbbVie",
        role: "Director of Engineering",
        period: "2023 – 2025",
        bullets: [
          "Led QA strategy for a multi-system B2C ecommerce modernization, ensuring PCI and SOX compliance.",
          "Architected scalable automation frameworks, cutting regression cycle time by 40% and increasing test coverage to 90%+",
          "Embedded automation test suites into GitHub Actions, reducing manual QA effort by 60%.",
          "Piloted GenAl-powered Q&A automation, achieving 80% coverage of inbound FAQs.",
        ],
      },
      {
        company: "VIZIO",
        role: "Senior Director of Engineering",
        period: "2020 - 2023",
        bullets: [
          "Spearheaded full-stack QA automation for TV OS modernization, reducing release validation time by 50%.",
          "Mentored and scaled a high-performing QA/SDET team of 15+, increasing test automation coverage by 65%.",
          "Engineered real-time observability stack, boosting uptime from 95% to 99.9%.",
        ],
      },
      {
        company: "INRIX",
        role: "Software Development Manager",
        period: "2018 - 2020",
        bullets: [
          "Led QA strategy for Azure-based enterprise applications, enabling 3x faster release cycles and reducing defect leakage by 45%.",
          "Built scalable automation pipelines for ETL validation and performance benchmarking, boosting test coverage to 95%.",
        ],
      },
      {
        company: "Amazon",
        role: "Software Development Manager",
        period: "2017 - 2018",
        bullets: [
          "Directed QA strategy for multi-region cloud analytics platform with real-time Kafka/Snowflake ingestion.",
          "Architected multi-region disaster recovery strategy, achieving 99.99% availability.",
        ],
      },
      {
        company: "Intelius",
        role: "Senior QA Manager",
        period: "2011 - 2017",
        bullets: [
          "Led QA for web and mobile modernization, enhancing fraud detection accuracy by 70%.",
          "Upgraded QA automation, boosting test coverage from 45% to 85% and cutting manual testing by 70%.",
          "Delivered SSR SEO QA for high-traffic keyword “background check,” contributing to #1 search ranking.",
        ],
      },
    ],
  },
};

export function PersonaProvider({ children }) {
  const [currentPersona, setCurrentPersona] = useState("engineering");

  const value = {
    currentPersona,
    setCurrentPersona,
    persona: personas[currentPersona],
    personas,
  };

  return (
    <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
}
