export default function ProjectCard({ title, context, star, tags = [] }) {
  return (
    <article className="card p-5 h-full flex flex-col">
      <h3 className="text-lg font-semibold">{title}</h3>
      {context && <p className="mt-1 text-white/70">{context}</p>}
      <div className="mt-3 text-white/80 space-y-1">
        {star?.situation && <p><span className="text-white/60">Situation:</span> {star.situation}</p>}
        {star?.task && <p><span className="text-white/60">Task:</span> {star.task}</p>}
        {star?.action && <p><span className="text-white/60">Action:</span> {star.action}</p>}
        {star?.result && <p><span className="text-white/60">Result:</span> {star.result}</p>}
      </div>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-white/80">{t}</span>
          ))}
        </div>
      )}
    </article>
  );
}


