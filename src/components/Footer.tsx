import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold text-text uppercase tracking-wide">
                VoiceGuard
              </span>
            </Link>
            <div className="space-y-1 text-sm font-mono text-text-secondary">
              <p>SIH 2026</p>
              <p>PS-26104</p>
              <p>AICTE / Cyber Security Cell</p>
            </div>
            <p className="mt-6 text-sm text-text-secondary max-w-sm leading-relaxed">
              Detect the voice. Question the signal. Report the attack. Learn from the miss.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-text uppercase mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><Link to="/report" className="text-sm text-text-secondary hover:text-text transition-colors">Report Incident</Link></li>
              <li><Link to="/dashboard" className="text-sm text-text-secondary hover:text-text transition-colors">Dashboard</Link></li>
              <li><Link to="/admin/detection-performance" className="text-sm text-text-secondary hover:text-text transition-colors">Detection Stats</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-text uppercase mb-6">Knowledge Base</h3>
            <ul className="space-y-4">
              <li><a href="#research" className="text-sm text-text-secondary hover:text-text transition-colors">Research</a></li>
              <li><a href="#cases" className="text-sm text-text-secondary hover:text-text transition-colors">Case Studies</a></li>
              <li><a href="#sources" className="text-sm text-text-secondary hover:text-text transition-colors">Sources</a></li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-border mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-text-muted">
            &copy; {new Date().getFullYear()} VoiceGuard Prototype. Not for commercial use.
          </p>
          
          <div className="text-xs font-mono text-text-muted text-center md:text-right max-w-2xl">
            <strong>DISCLAIMER:</strong> VoiceGuard is a research/hackathon prototype and does not replace official law-enforcement, banking, or cybercrime reporting channels. It is not an official government complaint portal.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-xs font-mono text-text-muted hover:text-text-secondary transition-colors uppercase tracking-wider">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
