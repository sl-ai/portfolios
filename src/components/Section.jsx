export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="container-max">
        <div className="mb-8">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="lead mt-2 max-w-3xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}


