import { usePersona } from '../contexts/PersonaContext.jsx';

export default function Footer() {
  const { persona } = usePersona();

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-max py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Shin Lee. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-teal-400" href="https://www.linkedin.com/in/shinlee" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-teal-400" href="mailto:sundex@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}


