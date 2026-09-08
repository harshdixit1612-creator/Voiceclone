import { Activity } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const DetectionPerformance = () => {
  const data = [
    { time: '00:00', accuracy: 94.1 },
    { time: '04:00', accuracy: 94.2 },
    { time: '08:00', accuracy: 95.4 },
    { time: '12:00', accuracy: 96.5 },
    { time: '16:00', accuracy: 95.3 },
    { time: '20:00', accuracy: 96.6 },
    { time: '24:00', accuracy: 96.1 },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8 border-b border-border pb-6">
          <Activity className="w-6 h-6 text-text" />
          <h1 className="text-2xl font-serif text-text uppercase tracking-wide">Detection Analytics</h1>
        </div>

        <div className="forensic-panel p-8 mb-8">
          <h2 className="text-sm font-mono font-bold text-text mb-6 uppercase tracking-widest border-b border-border pb-2">Model F1-Score (Rolling 24h)</h2>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis dataKey="time" stroke="var(--text-muted)" axisLine={false} tickLine={false} dy={10} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                <YAxis stroke="var(--text-muted)" axisLine={false} tickLine={false} dx={-10} domain={[90, 100]} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', borderRadius: '0', fontFamily: 'monospace', fontSize: '12px' }} itemStyle={{ color: 'var(--text-primary)' }} />
                <Line type="step" dataKey="accuracy" stroke="var(--accent-primary)" strokeWidth={2} dot={{ r: 3, fill: 'var(--bg-primary)', strokeWidth: 2 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-xs font-mono text-text-muted text-center uppercase tracking-widest">
            * Evaluating against AT-ADD benchmark subset (realistic channel degradation applied)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-background p-6 border border-border">
             <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">False Acceptance Rate (FAR)</div>
             <div className="text-xl font-serif text-text">3.24%</div>
           </div>
           <div className="bg-background p-6 border border-border">
             <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">False Rejection Rate (FRR)</div>
             <div className="text-xl font-serif text-text">4.15%</div>
           </div>
           <div className="bg-background p-6 border border-border">
             <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">Equal Error Rate (EER)</div>
             <div className="text-xl font-serif text-text">3.80%</div>
           </div>
        </div>
      </div>
    </div>
  );
};
