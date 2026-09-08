import React from 'react';
import { clsx } from 'clsx';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const isResolved = status === 'RESOLVED' || status === 'CLOSED';
  const isUnderReview = status === 'UNDER_REVIEW' || status === 'ESCALATED';

  return (
    <span className={clsx(
      "px-3 py-1 text-xs font-mono font-bold tracking-widest rounded border inline-block uppercase",
      isResolved ? "bg-success/10 text-success border-success/30" : 
      isUnderReview ? "bg-warning/10 text-warning border-warning/30" : 
      "bg-background text-text-secondary border-border",
      className
    )}>
      {status}
    </span>
  );
};
