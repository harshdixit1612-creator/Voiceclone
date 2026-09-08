import React from 'react';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, subtitle, children }) => {
  return (
    <div className="forensic-panel p-6">
      <div className="mb-6">
        <h3 className="text-sm font-mono text-text uppercase tracking-widest">{title}</h3>
        {subtitle && <p className="text-xs font-mono text-text-muted mt-1">{subtitle}</p>}
      </div>
      <div className="h-64 w-full">
        {children}
      </div>
    </div>
  );
};
