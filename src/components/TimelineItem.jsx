export default function TimelineItem({ company, role, period, bullets = [] }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-lg font-semibold">{role}</h3>
          <p className="text-white/70">{company}</p>
        </div>
        <div className="text-sm text-white/60">{period}</div>
      </div>
      {bullets.length > 0 && (
        <ul className="mt-3 list-disc list-inside space-y-1 text-white/80">
          {bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}


