import { Shield, Users, Database, Settings, Activity } from 'lucide-react';

export const AdminConsole = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8 border-b border-border pb-6">
          <Shield className="w-6 h-6 text-text" />
          <h1 className="text-2xl font-serif text-text uppercase tracking-wide">Administration Console</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-2">
            <button className="w-full text-left px-4 py-3 bg-surface text-text border border-border flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
              <Activity className="w-4 h-4 text-accent" /> System Health
            </button>
            <button className="w-full text-left px-4 py-3 bg-background hover:bg-surface text-text-secondary hover:text-text border border-transparent transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
              <Users className="w-4 h-4" /> Users / Access
            </button>
            <button className="w-full text-left px-4 py-3 bg-background hover:bg-surface text-text-secondary hover:text-text border border-transparent transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
              <Database className="w-4 h-4" /> Data Streams
            </button>
            <button className="w-full text-left px-4 py-3 bg-background hover:bg-surface text-text-secondary hover:text-text border border-transparent transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
              <Settings className="w-4 h-4" /> Global Settings
            </button>
          </div>
          
          <div className="lg:col-span-3 forensic-panel p-8">
            <h2 className="text-sm font-mono font-bold text-text mb-6 uppercase tracking-widest border-b border-border pb-2">Cluster Status</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-background p-6 border border-border">
                <div className="text-text-muted font-mono text-[10px] uppercase tracking-widest mb-2">Inference Engine API</div>
                <div className="text-sm font-mono font-bold text-success uppercase">Operational</div>
              </div>
              <div className="bg-background p-6 border border-border">
                <div className="text-text-muted font-mono text-[10px] uppercase tracking-widest mb-2">Database Cluster</div>
                <div className="text-sm font-mono font-bold text-success uppercase">Operational</div>
              </div>
              <div className="bg-background p-6 border border-border">
                <div className="text-text-muted font-mono text-[10px] uppercase tracking-widest mb-2">P95 Latency</div>
                <div className="text-sm font-mono font-bold text-text uppercase">185ms</div>
              </div>
            </div>

            <h3 className="text-sm font-mono font-bold text-text mb-4 uppercase tracking-widest border-b border-border pb-2">System Telemetry Logs</h3>
            <div className="bg-background border border-border overflow-hidden">
              <div className="p-3 border-b border-border flex gap-4 text-[10px] font-mono font-bold text-text-secondary uppercase tracking-widest bg-surface">
                <div className="w-32">Timestamp</div>
                <div className="w-24">Level</div>
                <div className="flex-1">Message</div>
              </div>
              {[
                { time: '10:45:01.202', level: 'INFO', msg: 'Model weights updated to v2.4.1 (Ensemble_B)' },
                { time: '10:42:12.843', level: 'INFO', msg: 'Processed batch of 50 audio streams from external API' },
                { time: '10:35:00.011', level: 'WARN', msg: 'Rate limit threshold crossed for connection pool 4' },
                { time: '10:30:15.555', level: 'INFO', msg: 'Routine artifact cleanup successful' }
              ].map((log, i) => (
                <div key={i} className="p-3 border-b border-border flex gap-4 text-xs font-mono text-text-secondary hover:bg-surface transition-colors">
                  <div className="w-32 text-text-muted">{log.time}</div>
                  <div className={`w-24 ${log.level === 'WARN' ? 'text-warning' : 'text-text'}`}>{log.level}</div>
                  <div className="flex-1 truncate">{log.msg}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
