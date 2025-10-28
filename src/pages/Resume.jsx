import Section from '../components/Section.jsx';
import TimelineItem from '../components/TimelineItem.jsx';
import { usePersona } from '../contexts/PersonaContext.jsx';

export default function Resume() {
  const { persona, personas, setCurrentPersona } = usePersona();

  const personaTabs = Object.values(personas);

  return (
    <div>
      <Section
        id="resume"
        title="Resume"
        subtitle="Interactive career highlights. Download the full PDF for details."
      >
        {/* Persona Tabs and Download Button */}
        <div className="mb-8 flex justify-between items-center">
          <div role="tablist" aria-label="Select role persona" className="flex gap-2">
            {personaTabs.map((p) => {
              const active = p.id === persona.id;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={active}
                  className={`px-4 py-2 rounded-md border transition-colors ${
                    active 
                      ? 'border-teal-500 text-teal-400 bg-teal-500/10' 
                      : 'border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setCurrentPersona(p.id)}
                >
                  {p.name}
                </button>
              );
            })}
          </div>
          <a className="btn-primary" href={`/${persona.resumeFile}`} download>Download PDF</a>
        </div>
        <div className="grid gap-4">
          {persona.experience.map((r) => (
            <TimelineItem key={r.company} {...r} />
          ))}
        </div>
      </Section>
    </div>
  );
}


