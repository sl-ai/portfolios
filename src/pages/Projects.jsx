import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { usePersona } from "../contexts/PersonaContext.jsx";

export default function Projects() {
  const { persona, personas, setCurrentPersona } = usePersona();

  const personaTabs = Object.values(personas);

  const projectTemplates = {
    programManager: [
      {
        title: "Enterprise Digital Transformation",
        context: "Cross-functional program to modernize legacy systems.",
        star: {
          situation:
            "Fragmented systems created customer experience inefficiencies.",
          task: "Lead enterprise-wide transformation with minimal disruption.",
          action: "Phased approach, stakeholder alignment, change management.",
          result: "40% efficiency gain, 99% stakeholder satisfaction.",
        },
        tags: [
          "Program Management",
          "Change Management",
          "Stakeholder Alignment",
        ],
      },
      {
        title: "eCommerce Platform Migration",
        context: "Migrate legacy eCommerce system to modern cloud platform.",
        star: {
          situation:
            "Outdated eCommerce platform limited growth and customer experience.",
          task: "Lead migration to scalable, modern headless eCommerce solution.",
          action:
            "Vendor selection, data migration strategy, user training, go-live planning.",
          result: "60% faster page loads, 25% increase in conversion rates.",
        },
        tags: ["eCommerce", "Platform Migration", "Customer Experience"],
      },
      {
        title: "Strategic Initiative Delivery",
        context: "Multi-year strategic program with complex dependencies.",
        star: {
          situation: "Strategic goals lacked clear execution roadmap.",
          task: "Define and execute strategic initiatives across teams.",
          action: "Program governance, milestone tracking, risk management.",
          result: "100% on-time delivery, executive confidence increased.",
        },
        tags: ["Strategic Planning", "Governance", "Risk Management"],
      },
      {
        title: "Quality Assurance Automation Initiative",
        context:
          "Enterprise-wide automation program to enhance efficiency and accuracy.",
        star: {
          situation: "Manual processes created bottlenecks and errors.",
          task: "Identify and automate high-impact quality assurance processes.",
          action: "Process mapping, RPA implementation, change management.",
          result:
            "70% reduction in manual tasks, 50% faster processing times, 90% accuracy improvement.",
        },
        tags: ["Process Automation", "RPA", "Efficiency"],
      },
      {
        title: "Cross-Functional Collaboration Platform",
        context: "Program to improve team collaboration and communication.",
        star: {
          situation: "Siloed teams hindered productivity and innovation.",
          task: "Create platform for seamless cross-team collaboration.",
          action: "Stakeholder workshops, tool selection, adoption strategy.",
          result: "50% faster decision making, improved team satisfaction.",
        },
        tags: ["Collaboration", "Platform Strategy", "Adoption"],
      },
    ],
    engineering: [
      {
        title: "News App (Personal)",
        url: "https://news-demo-public--shinlee-8c3d2.us-central1.hosted.app/",
        context:
          "A dynamic news application that shows top news articles from different categories with Google authentication support. Built with ReactJS, NextJS on GCP.",
        star: {
          situation:
            "Users want to see top news from different categories, with personalization.",
          task: "Build a news app with category filtering, user authentication, and preference saving.",
          action:
            "Used React, Next.js, Firebase for authentication, News API for data, and GCP for deployment. Implemented features like real-time filtering and secure configuration management.",
          result:
            "A functional news application with key features delivered, including real-time filtering and secure user authentication.",
        },
        tags: ["React.js", "Next.js", "TypeScript", "Firebase", "GCP"],
      },
      {
        title: "Microservices Architecture Migration",
        context: "Refactor monolith to scalable microservices platform.",
        star: {
          situation:
            "Monolithic architecture limited scalability and team velocity.",
          task: "Design and implement microservices architecture.",
          action: "Domain modeling, API design, containerization, CI/CD.",
          result: "5x deployment frequency, 90% reduction in MTTR.",
        },
        tags: ["Microservices", "Architecture", "DevOps", "Scalability"],
      },
      {
        title: "eCommerce Data Pipeline",
        context:
          "Real-time data processing for eCommerce analytics and personalization.",
        star: {
          situation:
            "eCommerce data was siloed and not actionable for business decisions.",
          task: "Build real-time data pipeline for customer behavior analytics.",
          action:
            "Kafka, Apache Spark, data lake architecture, ML feature engineering.",
          result: "Real-time personalization increased revenue by 35%.",
        },
        tags: ["Data Pipeline", "eCommerce", "Real-time Analytics", "ML"],
      },
      {
        title: "Cloud-Native Platform Development",
        context: "Build scalable cloud platform for enterprise workloads.",
        star: {
          situation: "Legacy infrastructure couldn't support growing demands.",
          task: "Design and build cloud-native platform from ground up.",
          action: "Kubernetes, service mesh, observability, auto-scaling.",
          result: "99.9% uptime, 10x cost efficiency, global deployment.",
        },
        tags: ["Cloud Native", "Kubernetes", "Platform Engineering"],
      },
      {
        title: "Automated Testing Framework",
        context: "Comprehensive test automation for continuous delivery.",
        star: {
          situation:
            "Manual testing created deployment bottlenecks and quality issues.",
          task: "Build end-to-end automated testing framework.",
          action:
            "Selenium, API testing, performance testing, CI/CD integration.",
          result: "80% test coverage, 90% reduction in production bugs.",
        },
        tags: ["Test Automation", "CI/CD", "Quality Assurance"],
      },
      {
        title: "AI/ML Platform Integration",
        context: "Integrate AI capabilities into existing product suite.",
        star: {
          situation:
            "Manual processes limited product intelligence and automation.",
          task: "Build ML platform and integrate AI features.",
          action: "MLOps pipeline, model serving, A/B testing framework.",
          result: "30% improvement in user engagement, automated workflows.",
        },
        tags: ["AI/ML", "Platform Integration", "MLOps"],
      },
      {
        title: "Data Analytics Dashboard",
        context: "Self-service analytics platform for business intelligence.",
        star: {
          situation: "Business users lacked access to real-time data insights.",
          task: "Build interactive dashboard for data-driven decision making.",
          action:
            "React, D3.js, Python backend, data visualization best practices.",
          result: "Self-service analytics reduced reporting time by 75%.",
        },
        tags: ["Data Analytics", "Dashboard", "Business Intelligence"],
      },
    ],
    qa: [
      {
        title: "Enterprise IAM Rollout",
        context: "Global identity unification across business units.",
        star: {
          situation: "Fragmented identity led to risk and friction.",
          task: "Lead cross-functional rollout with minimal disruption.",
          action:
            "Phased migration, zero-trust patterns, automation gates in CI/CD.",
          result:
            "98% adoption in first quarter, audit findings reduced by 80%.",
        },
        tags: ["IAM", "Zero Trust", "Automation", "Governance"],
      },
      {
        title: "eCommerce Quality Assurance",
        context: "Comprehensive testing strategy for eCommerce platform.",
        star: {
          situation:
            "eCommerce platform had critical bugs affecting customer experience.",
          task: "Implement comprehensive QA strategy for eCommerce functionality.",
          action:
            "Test automation, performance testing, security testing, user acceptance testing.",
          result:
            "95% bug-free releases, 40% improvement in customer satisfaction.",
        },
        tags: ["eCommerce Testing", "Quality Assurance", "Customer Experience"],
      },
      {
        title: "Executive Dashboards",
        context: "Unified delivery, reliability, and quality metrics.",
        star: {
          situation: "Leaders lacked a single source of truth for KPIs.",
          task: "Deliver actionable insights with drill-through.",
          action: "Power BI + SQL models, telemetry enrichment, quality SLOs.",
          result:
            "Decision latency reduced; roadmap aligned to measurable KPIs.",
        },
        tags: ["Power BI", "SQL", "SLOs", "Telemetry"],
      },
      {
        title: "Test Automation Framework",
        context: "End-to-end test automation for continuous quality.",
        star: {
          situation:
            "Manual testing processes couldn't keep up with release velocity.",
          task: "Build comprehensive test automation framework.",
          action:
            "Selenium, API testing, performance testing, CI/CD integration.",
          result: "90% test automation coverage, 60% faster release cycles.",
        },
        tags: ["Test Automation", "CI/CD", "Quality Engineering"],
      },
      {
        title: "Data Quality Assurance",
        context: "Data validation and quality monitoring system.",
        star: {
          situation: "Poor data quality led to incorrect business decisions.",
          task: "Implement data quality monitoring and validation framework.",
          action:
            "Data profiling, validation rules, monitoring dashboards, alerting.",
          result: "99.5% data accuracy, 80% reduction in data-related issues.",
        },
        tags: ["Data Quality", "Monitoring", "Validation"],
      },
      {
        title: "Cloud-Native Modernization",
        context: "Refactor legacy services to a reliable platform.",
        star: {
          situation: "Monolith impeded scale and reliability.",
          task: "Modernize with a platform-first mindset.",
          action: "SLOs, canary releases, infra as code, contract testing.",
          result: "MTTR down 40%, deployments up 5x with stable quality.",
        },
        tags: ["Kubernetes", "IaC", "SRE", "Contract Testing"],
      },
    ],
  };

  const projects = projectTemplates[persona.id] || projectTemplates.qa;

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="High level project descriptions and outcomes by role."
    >
      {/* Persona Tabs */}
      <div className="mb-8 flex justify-left">
        <div
          role="tablist"
          aria-label="Select role persona"
          className="flex gap-2"
        >
          {personaTabs.map((p) => {
            const active = p.id === persona.id;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={active}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  active
                    ? "border-teal-500 text-teal-400 bg-teal-500/10"
                    : "border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setCurrentPersona(p.id)}
              >
                {p.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}
