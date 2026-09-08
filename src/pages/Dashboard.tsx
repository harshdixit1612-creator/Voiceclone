import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, Clock } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const Dashboard = () => {
  const stats = [
    { label: 'Total Scans (30d)', value: '12,450', change: '+12%', trend: 'up' },
    { label: 'Deepfakes Detected', value: '342', change: '+5%', trend: 'up' },
    { label: 'Avg Confidence', value: '98.5%', change: '+0.2%', trend: 'up' },
    { label: 'Active Alerts', value: '14', change: '-3', trend: 'down' },
  ];

  const recentScans = [
    { id: 'SCN-8921', target: 'CEO Public Address', date: '2 hours ago', status: 'GENUINE', confidence: '99.9%' },
    { id: 'SCN-8920', target: 'Wire Transfer Auth', date: '4 hours ago', status: 'SYNTHETIC', confidence: '96.2%' },
    { id: 'SCN-8919', target: 'Voicemail #442', date: '5 hours ago', status: 'GENUINE', confidence: '98.1%' },
    { id: 'SCN-8918', target: 'Support Call Auth', date: '1 day ago', status: 'SYNTHETIC', confidence: '94.5%' },
    { id: 'SCN-8917', target: 'Board Meeting Clip', date: '1 day ago', status: 'GENUINE', confidence: '99.5%' },
  ];

  const chartData = [
    { name: 'Mon', safe: 400, fake: 24 },
    { name: 'Tue', safe: 300, fake: 13 },
    { name: 'Wed', safe: 550, fake: 45 },
    { name: 'Thu', safe: 450, fake: 28 },
    { name: 'Fri', safe: 600, fake: 52 },
    { name: 'Sat', safe: 200, fake: 5 },
    { name: 'Sun', safe: 150, fake: 2 },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl font-serif text-text mb-2 uppercase tracking-wide">SOC Dashboard</h1>
            <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">Global Telemetry & Detection Stream</p>
          </div>
          <button className="px-6 py-3 bg-text text-background font-mono font-bold text-xs uppercase tracking-widest hover:bg-background hover:text-text border border-text transition-colors">
            NEW SCAN
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="forensic-panel p-6"
            >
              <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">{stat.label}</h3>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-serif text-text">{stat.value}</span>
                <span className={`text-xs font-mono font-bold tracking-widest ${stat.trend === 'up' ? 'text-text-muted' : 'text-text-muted'}`}>
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 forensic-panel p-6">
            <h3 className="text-sm font-mono font-bold text-text mb-6 uppercase tracking-widest border-b border-border pb-2">Weekly Scan Volume</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barGap={0}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--text-muted)" axisLine={false} tickLine={false} dy={10} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                  <YAxis stroke="var(--text-muted)" axisLine={false} tickLine={false} dx={-10} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', borderRadius: '0', fontFamily: 'monospace', fontSize: '12px' }}
                    itemStyle={{ color: 'var(--text-primary)' }}
                  />
                  <Bar dataKey="safe" fill="var(--status-success)" name="GENUINE" />
                  <Bar dataKey="fake" fill="var(--status-danger)" name="SYNTHETIC" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Scans */}
          <div className="forensic-panel p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6 border-b border-border pb-2">
              <h3 className="text-sm font-mono font-bold text-text uppercase tracking-widest">Recent Activity</h3>
              <button className="text-text-secondary hover:text-text text-xs font-mono tracking-widest transition-colors">VIEW ALL</button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2">
              {recentScans.map((scan, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-border bg-background hover:border-text-secondary transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-1.5 h-6 ${scan.status === 'GENUINE' ? 'bg-success' : 'bg-danger'}`}></div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-text uppercase">{scan.id}</h4>
                      <div className="text-[10px] font-mono text-text-secondary uppercase mt-1 line-clamp-1">{scan.target}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-[10px] font-mono font-bold uppercase tracking-widest ${scan.status === 'GENUINE' ? 'text-success' : 'text-danger'}`}>
                      {scan.status}
                    </div>
                    <div className="text-[10px] font-mono text-text-muted mt-1">{scan.confidence} CONF.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
