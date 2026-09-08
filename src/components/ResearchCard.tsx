import React from 'react';
import { SourceBadge } from './SourceBadge';

interface ResearchCardProps {
  year: string;
  title: string;
  authors?: string;
  summary: React.ReactNode;
  sourceUrl?: string;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  year,
  title,
  authors = "INDUSTRY / ACADEMIA",
  summary,
  sourceUrl
}) => {
  return (
    <div className="forensic-panel p-6 flex flex-col h-full hover:border-text-muted transition-colors">
      <div className="flex justify-between items-start mb-4">
        <SourceBadge label="PAPER" type="reported" />
        <span className="text-sm font-mono text-text-secondary">{year}</span>
      </div>

      <h3 className="text-xl font-serif text-text leading-snug mb-3">{title}</h3>
      
      <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-6">
        {authors}
      </p>

      <div className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
        {summary}
      </div>

      {sourceUrl && (
        <a 
          href={sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-xs font-mono text-text uppercase tracking-widest hover:text-accent transition-colors"
        >
          SOURCE →
        </a>
      )}
    </div>
  );
};
