import React from 'react';

interface MetricCardProps {
  metric: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, title, subtitle, description }) => {
  return (
    <div className="flex flex-col p-6 border border-border bg-background">
      <h3 className="text-4xl md:text-5xl font-serif text-text mb-4">{metric}</h3>
      <div className="h-px w-12 bg-border mb-4"></div>
      <p className="text-sm font-bold text-text uppercase tracking-widest mb-2">{title}</p>
      {subtitle && <p className="text-xs font-mono text-text-secondary mb-4">{subtitle}</p>}
      {description && <p className="text-sm text-text-muted leading-relaxed">{description}</p>}
    </div>
  );
};
