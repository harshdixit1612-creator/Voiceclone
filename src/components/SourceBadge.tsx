import React from 'react';
import { clsx } from 'clsx';

interface SourceBadgeProps {
  label: string;
  type?: 'verified' | 'reported' | 'experiment' | 'simulated' | 'pending';
  className?: string;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({ label, type = 'reported', className }) => {
  const typeStyles = {
    verified: 'text-success border-success/30 bg-success/10',
    reported: 'text-text-secondary border-border bg-background',
    experiment: 'text-accent border-accent/30 bg-accent/10',
    simulated: 'text-warning border-warning/30 bg-warning/10',
    pending: 'text-text-muted border-border border-dashed bg-background'
  };

  return (
    <span className={clsx(
      "inline-block px-2 py-1 text-[10px] font-mono font-bold tracking-widest uppercase border rounded-sm",
      typeStyles[type],
      className
    )}>
      {label}
    </span>
  );
};
