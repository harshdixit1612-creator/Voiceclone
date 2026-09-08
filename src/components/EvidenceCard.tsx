import React from 'react';
import { clsx } from 'clsx';
import { SourceBadge } from './SourceBadge';

interface EvidenceCardProps {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  source: string;
  sourceUrl?: string;
  verificationState: 'VERIFIED' | 'REPORTED / ESTIMATED' | 'OUR EXPERIMENT' | 'SIMULATED / DEMO' | 'PENDING VERIFICATION';
}

export const EvidenceCard: React.FC<EvidenceCardProps> = ({
  id,
  date,
  category,
  title,
  description,
  source,
  sourceUrl,
  verificationState
}) => {
  
  const getBadgeType = (state: string) => {
    if (state.includes('VERIFIED')) return 'verified';
    if (state.includes('REPORTED')) return 'reported';
    if (state.includes('EXPERIMENT')) return 'experiment';
    if (state.includes('SIMULATED')) return 'simulated';
    return 'pending';
  };

  return (
    <div className="flex flex-col md:flex-row border-t border-border py-6 gap-4 md:gap-8 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded">
      <div className="w-full md:w-1/4 flex flex-col gap-2 shrink-0">
        <span className="text-xs font-mono text-text-secondary">{date}</span>
        <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{id}</span>
        <div className="mt-2">
          <SourceBadge label={verificationState} type={getBadgeType(verificationState)} />
        </div>
      </div>
      
      <div className="w-full md:w-3/4 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-mono px-2 py-0.5 border border-border text-text-secondary rounded-sm uppercase tracking-wider bg-background">
            {category}
          </span>
          <h4 className="text-lg font-serif text-text">{title}</h4>
        </div>
        
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {description}
        </p>
        
        <div>
          {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent hover:underline uppercase tracking-widest">
              SOURCE: {source}
            </a>
          ) : (
            <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
              SOURCE: {source}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
