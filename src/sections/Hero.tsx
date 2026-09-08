import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 border-b border-border bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <div className="mb-12 inline-flex flex-col items-center border border-border p-4 bg-background">
          <span className="text-xs font-mono font-bold tracking-widest text-text uppercase mb-2">VOICEGUARD</span>
          <div className="h-px w-8 bg-border mb-2"></div>
          <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">SMART INDIA HACKATHON 2026</span>
          <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase mt-1">PS-26104</span>
          <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase mt-1">AICTE / CYBER SECURITY CELL</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-text mb-8 leading-tight max-w-5xl uppercase tracking-wide">
          AI-POWERED REAL-TIME DETECTION <br className="hidden md:block"/> 
          <span className="text-text-secondary">OF VOICE CLONING IMPERSONATION ATTACKS</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
          <a
            href="#detection"
            className="w-full sm:w-auto px-8 py-4 border border-text text-background bg-text font-mono font-bold text-xs tracking-widest uppercase hover:bg-background hover:text-text transition-colors"
          >
            Explore Detection
          </a>
          <Link
            to="/report"
            className="w-full sm:w-auto px-8 py-4 border border-border text-text font-mono font-bold text-xs tracking-widest uppercase hover:border-text transition-colors bg-background"
          >
            Report an Incident
          </Link>
          <a
            href="https://drive.google.com/file/d/1qS8cyT6sFi_uvnPDXig0tIAEFvVuDS9N/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-border text-text font-mono font-bold text-xs tracking-widest uppercase hover:border-text transition-colors bg-background flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download
          </a>
        </div>
      </div>
    </section>
  );
};
