import Section from '../components/Section.jsx';

export default function Leadership() {
  const items = [
    {
      title: 'Team Scaling',
      text: 'Grew distributed teams with emphasis on clarity, autonomy, and outcomes.',
    },
    {
      title: 'Mentorship',
      text: 'Built career ladders, peer coaching programs, and guilds for shared learning.',
    },
    {
      title: 'Collaboration',
      text: 'Partnered with product, data, and SRE to align on measurable goals.',
    },
  ];

  return (
    <Section id="leadership" title="Leadership" subtitle="People-first leadership that scales impact and quality.">
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="card p-5">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="mt-2 text-white/80">{i.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 card p-5">
        <h3 className="font-semibold">Operating Principles</h3>
        <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
          <li>Orgnizational alignment: Set clear goals and define success up front.</li>
          <li>Technical excellence: Invest in platforms that make the right thing easy.</li>
          <li>Data-driven decision making: Measure what matters and iterate with evidence.</li>
          <li>Team development: Prioritize inclusion, accessibility, and sustainable velocity.</li>
        </ul>
      </div>
      <div className="mt-8 card p-5">
        <h3 className="font-semibold">Technical Stack Examples</h3>
        <div className="mt-4 space-y-4 text-white/80">
          <div>
            <p className="text-white/90 font-medium">Frontend</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-white/10">React</span>
              <span className="px-2 py-1 rounded bg-white/10">React Router</span>
              <span className="px-2 py-1 rounded bg-white/10">TypeScript</span>
              <span className="px-2 py-1 rounded bg-white/10">Tailwind CSS</span>
            </div>
          </div>
          <div>
            <p className="text-white/90 font-medium">Backend & APIs</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-white/10">Node.js</span>
              <span className="px-2 py-1 rounded bg-white/10">Express</span>
              <span className="px-2 py-1 rounded bg-white/10">GraphQL</span>
              <span className="px-2 py-1 rounded bg-white/10">REST</span>
            </div>
          </div>
          <div>
            <p className="text-white/90 font-medium">Data & Analytics</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-white/10">Python</span>
              <span className="px-2 py-1 rounded bg-white/10">SQL</span>
              <span className="px-2 py-1 rounded bg-white/10">Spark</span>
              <span className="px-2 py-1 rounded bg-white/10">Kafka</span>
              <span className="px-2 py-1 rounded bg-white/10">Power BI</span>
            </div>
          </div>
          <div>
            <p className="text-white/90 font-medium">Cloud & DevOps</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-white/10">AWS</span>
              <span className="px-2 py-1 rounded bg-white/10">Azure</span>
              <span className="px-2 py-1 rounded bg-white/10">Google Cloud</span>
              <span className="px-2 py-1 rounded bg-white/10">Kubernetes</span>
              <span className="px-2 py-1 rounded bg-white/10">Docker</span>
              <span className="px-2 py-1 rounded bg-white/10">Terraform</span>
              <span className="px-2 py-1 rounded bg-white/10">CI/CD</span>
            </div>
          </div>
          <div>
            <p className="text-white/90 font-medium">Quality Engineering</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-white/10">Selenium</span>
              <span className="px-2 py-1 rounded bg-white/10">Playwright</span>
              <span className="px-2 py-1 rounded bg-white/10">Contract Testing</span>
              <span className="px-2 py-1 rounded bg-white/10">Performance Testing</span>
              <span className="px-2 py-1 rounded bg-white/10">Quality Gates</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


