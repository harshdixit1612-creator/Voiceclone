import React from 'react';
import { clsx } from 'clsx';

interface RiskScoreProps {
  score?: number; // 0-100
  state: 'LOW RISK' | 'MEDIUM RISK' | 'HIGH RISK' | 'UNCERTAIN';
  isSimulated?: boolean;
}

export const RiskScore: React.FC<RiskScoreProps> = ({ score, state, isSimulated = false }) => {
  const getColors = () => {
    switch(state) {
      case 'LOW RISK': return 'text-success border-success/30 bg-success/10';
      case 'MEDIUM RISK': return 'text-warning border-warning/30 bg-warning/10';
      case 'HIGH RISK': return 'text-danger border-danger/30 bg-danger/10';
      case 'UNCERTAIN': return 'text-accent border-accent/30 bg-accent/10';
      default: return 'text-text-secondary border-border bg-background';
    }
  };

  return (
    <div className={clsx("inline-flex flex-col items-center p-4 border rounded", getColors())}>
      {score !== undefined && (
        <div className="text-3xl font-mono font-bold mb-1">
          {score}%
        </div>
      )}
      <div className="text-xs font-mono font-bold tracking-widest uppercase">
        {state}
      </div>
      {isSimulated && (
        <div className="mt-2 text-[8px] font-mono uppercase tracking-widest opacity-70">
          DEMO / SIMULATED
        </div>
      )}
    </div>
  );
};
