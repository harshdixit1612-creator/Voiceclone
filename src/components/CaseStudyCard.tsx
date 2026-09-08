import React from 'react';
import { SourceBadge } from './SourceBadge';

interface CaseStudyCardProps {
  id: string;
  title: string;
  year: string;
  classification: string;
  description: React.ReactNode;
  sourceName: string;
  sourceUrl?: string;
  status: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  year,
  classification,
  description,
  sourceName,
  sourceUrl,
  status
}) => {
  return (
    <div className="forensic-panel p-6 md:p-8 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-xs font-mono text-text-muted mb-2">CASE / {id}</p>
          <h3 className="text-2xl font-serif text-text uppercase leading-tight">{title}</h3>
        </div>
        <span className="text-sm font-mono text-text-secondary">{year}</span>
      </div>

      <div className="mb-6">
        <p className="text-xs font-mono text-accent tracking-widest uppercase">{classification}</p>
        <div className="h-px w-full bg-border mt-3"></div>
      </div>

      <div className="text-sm text-text-secondary leading-relaxed mb-8 flex-grow">
        {description}
      </div>

      <div className="h-px w-full bg-border mb-6"></div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <p className="text-[10px] font-mono text-text-muted mb-1 uppercase tracking-widest">Source</p>
          {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-text hover:text-accent transition-colors">
              {sourceName}
            </a>
          ) : (
            <p className="text-sm text-text">{sourceName}</p>
          )}
        </div>
        
        <div className="sm:text-right">
          <p className="text-[10px] font-mono text-text-muted mb-1 uppercase tracking-widest">Status</p>
          <SourceBadge label={status} type="reported" />
        </div>
      </div>
    </div>
  );
};
