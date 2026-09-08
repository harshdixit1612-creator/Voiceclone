import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const publicLinks = [
    { path: '/#threat', label: 'Threat' },
    { path: '/#cases', label: 'Cases' },
    { path: '/#research', label: 'Research' },
    { path: '/#detection', label: 'Detection' },
    { path: '/report', label: 'Report Incident' },
  ];

  return (
    <nav className={clsx(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-background/90 backdrop-blur-md border-border py-2" 
        : "bg-transparent border-transparent py-4"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-xl font-serif font-bold text-text tracking-wide uppercase">
              VoiceGuard
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {publicLinks.map((link) => (
              <a
                key={link.label}
                href={link.path.startsWith('/#') ? link.path : undefined}
                className="text-xs font-mono tracking-widest uppercase text-text-secondary hover:text-text transition-colors"
                onClick={(e) => {
                  if (link.path.startsWith('/#')) return; // handled natively
                  e.preventDefault();
                  window.location.href = link.path;
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-xs font-mono tracking-widest uppercase text-text hover:text-accent transition-colors"
                >
                  Dashboard
                </Link>
                <div className="w-px h-4 bg-border"></div>
                <button
                  onClick={() => signOut()}
                  className="text-xs font-mono tracking-widest uppercase text-text-secondary hover:text-text transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-xs font-mono tracking-widest uppercase text-text-secondary hover:text-text transition-colors"
                >
                  Login
                </Link>
                <div className="w-px h-4 bg-border"></div>
                <Link
                  to="/register"
                  className="px-4 py-2 border border-text text-xs font-mono tracking-widest uppercase text-background bg-text hover:bg-background hover:text-text transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
