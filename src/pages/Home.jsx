import Section from '../components/Section.jsx';
import { usePersona } from '../contexts/PersonaContext.jsx';

export default function Home() {
  const { persona } = usePersona();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" aria-hidden="true" />
        <div className="container-max py-6 sm:py-8">
          <div className="grid gap-8 sm:grid-cols-[auto_1fr] items-center">
            <div className="w-48 h-48 mx-auto sm:mx-0 rounded-full overflow-hidden border-4 border-teal-500/20">
              <img 
                src="/profile_lightG.PNG" 
                alt="Shin Lee" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Shin Lee
              </h1>
              <p className="lead mt-4 max-w-2xl">
              Leading large-scale digital and cloud-native transformations, architecting high-availability disaster recovery (DR) solutions, and driving substantial improvements in operational efficiency, system uptime (often achieving 99.9%+), and revenue generation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/resume" className="btn-primary">View Resume</a>
                <a href="/projects" className="btn-outline">Explore Projects</a>
              </div>
            </div>              
          </div>
        </div>
      </section>
      <section id="focus-areas" className="py-6 sm:py-8">
        <div className="container-max">
          <div className="mb-6">
            <h2 className="section-title">Focus Areas</h2>
            <p className="lead mt-2 max-w-3xl">Key areas of expertise and specialization</p>
          </div>
          <div className="card p-6 max-w-4xl mx-auto">
            <ul className="grid gap-3 sm:grid-cols-2 text-white/80">
              {persona.focusAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Section
        id="about"
        title="About"
        subtitle="I lead high-performing teams to deliver secure, reliable, and measurable outcomes. I partner with cross-functional teams to align strategy, execution, and value delivery."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: 'Leadership', text: 'Scaled teams, designed org-wide strategies, and drove talent development.' },
            { title: 'Execution', text: 'Built reliable processes and platforms that accelerate delivery.' },
            { title: 'Analytics', text: 'Enabled insight-driven decision making with data and metrics.' },
          ].map((c) => (
            <div key={c.title} className="card p-5">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/80">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}


