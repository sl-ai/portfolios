import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/leadership', label: 'Leadership' },
];

const socialLinks = [
  { href: 'https://github.com/sl-ai', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/shinlee', label: 'LinkedIn' },
  { href: 'mailto:sundex@gmail.com', label: 'Email' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/80 backdrop-blur border-b border-white/10">
      <nav className="container-max flex items-center justify-between py-3" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2">
        <div class="size-6 text-primary">
        <span class="material-symbols-outlined text-3xl">terminal</span>
         </div>
          <span className="font-semibold">Shin Lee</span>
        </Link>
        
        <button
          className="sm:hidden p-2 rounded hover:bg-white/10"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 6.75h15a.75.75 0 000-1.5h-15a.75.75 0 000 1.5zm0 6h15a.75.75 0 000-1.5h-15a.75.75 0 000 1.5zm0 6h15a.75.75 0 000-1.5h-15a.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `hover:text-teal-400 transition-colors ${isActive ? 'text-teal-400' : 'text-white/80'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-white/10">
          <div className="container-max py-3">
            <ul className="grid gap-2 mb-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-2 py-2 rounded hover:bg-white/10 ${isActive ? 'text-teal-400' : 'text-white/90'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="grid gap-2">
              {socialLinks.map((link) => (
                <li key={link.href} className="text-white/90">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-2 py-2 rounded hover:bg-white/10 text-white/90"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}


