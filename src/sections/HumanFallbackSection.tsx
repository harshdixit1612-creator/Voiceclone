import { SectionLayout } from '../components/SectionLayout';
import { Link } from 'react-router-dom';

export const HumanFallbackSection = () => {
  return (
    <SectionLayout
      id="fallback"
      sectionNumber="06"
      title="When AI Misses the Attack"
      subtitle="Automated detection can produce false negatives. VoiceGuard provides a human-assisted reporting pathway for incidents that automated systems may miss."
      className="bg-background border-b border-border relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-16">
        <div className="font-mono text-sm flex flex-col items-center text-center space-y-2 text-text w-full">
          <div className="px-4 py-2 border border-border bg-surface text-accent font-bold tracking-widest w-48">AI DETECTION</div>
          <div className="h-6 w-px bg-border"></div>
          <div className="px-4 py-2 border border-border bg-surface text-text-secondary tracking-widest w-48">PREDICTION</div>
          <div className="h-6 w-px bg-border"></div>
          <div className="px-4 py-2 border border-border bg-surface text-text-secondary text-xs w-64">HIGH RISK / LOW RISK / UNCERTAIN</div>
          <div className="h-6 w-px bg-border"></div>
          <div className="px-4 py-2 border border-border bg-surface text-accent font-bold tracking-widest w-48">USER FEEDBACK</div>
          <div className="h-6 w-px bg-border"></div>
          <div className="px-4 py-2 border border-warning/30 bg-warning/10 text-warning font-bold tracking-widest w-48">MANUAL REPORT</div>
          <div className="h-6 w-px bg-border"></div>
          <div className="px-4 py-2 border border-border bg-surface text-text-secondary tracking-widest w-48">INVESTIGATION</div>
          <div className="h-6 w-px bg-border"></div>
          <div className="px-4 py-2 border border-border bg-surface text-text-secondary tracking-widest w-48">GROUND TRUTH</div>
          <div className="h-6 w-px bg-border"></div>
          <div className="px-4 py-2 border border-border bg-surface text-text-secondary tracking-widest w-64">VALIDATED RESEARCH DATA</div>
          <div className="h-6 w-px bg-border"></div>
          <div className="px-4 py-2 border border-success/30 bg-success/10 text-success font-bold tracking-widest w-48">MODEL IMPROVEMENT</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          to="/report"
          className="px-8 py-4 bg-text text-background font-mono font-bold text-xs tracking-widest uppercase hover:bg-background hover:text-text border border-text transition-colors text-center"
        >
          Report a Voice Impersonation
        </Link>
      </div>
    </SectionLayout>
  );
};
