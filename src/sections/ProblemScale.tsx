import { SectionLayout } from '../components/SectionLayout';
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell
} from 'recharts';

export const ProblemScale = () => {

  const COLORS = ['var(--accent-primary)', '#374151', '#4B5563', '#9CA3AF', '#6B7280'];

  // CHART 1 — AI VOICE SCAM EXPOSURE BY COUNTRY
  const exposureByCountry = [
    { country: 'India', personal: 20, known: 27 },
    { country: 'United States', personal: 14, known: 18 },
    { country: 'France', personal: 11, known: 16 },
    { country: 'United Kingdom', personal: 8, known: 16 },
    { country: 'Germany', personal: 9, known: 13 },
    { country: 'Australia', personal: 7, known: 11 },
    { country: 'Japan', personal: 3, known: 5 },
    { country: 'Global', personal: 10, known: 15 },
  ];

  // CHART 2 — AI VOICE SCAM EXPOSURE (Pie)
  const globalExposure = [
    { name: 'Experienced personally', value: 10 },
    { name: 'Someone they know', value: 15 },
    { name: 'No reported experience', value: 75 },
  ];

  // CHART 3 — INDIA VOICE-CLONE EXPOSURE
  const indiaExposure = [
    { metric: 'Personally', value: 20 },
    { metric: 'Someone they know', value: 27 },
    { metric: 'Either', value: 47 },
  ];

  // CHART 4 — EMERGENCY SCENARIOS
  const emergencyScenarios = [
    { scenario: 'Car accident', value: 48 },
    { scenario: 'Robbed', value: 47 },
    { scenario: 'Lost phone/wallet', value: 43 },
    { scenario: 'Help traveling', value: 41 },
  ].sort((a, b) => b.value - a.value);

  // CHART 5 — DEEPFAKE EXPOSURE CHANNELS IN INDIA
  const channels = [
    { platform: 'Instagram', value: 65 },
    { platform: 'Facebook', value: 59 },
    { platform: 'YouTube', value: 48 },
    { platform: 'Telegram', value: 44 },
    { platform: 'WhatsApp', value: 41 },
  ].sort((a, b) => a.value - b.value); // Reverse for horizontal layout

  // CHART 8 — US IMPERSONATION FRAUD
  const usImpersonation = [
    { year: '2024', losses: 2.95 },
    { year: '2025', losses: 3.5 },
  ];

  // CHART 9 — US TOTAL FRAUD
  const usTotalFraud = [
    { year: '2024', losses: 12.5 },
    { year: '2025', losses: 16.0 },
  ];

  // CHART 10 — US IMPERSONATION CATEGORIES, 2025
  const usCategories = [
    { category: 'Business', losses: 1.0 }, // 1B
    { category: 'Government', losses: 0.92 }, // 920M = 0.92B
  ];

  // CHART 11 — SOCIAL MEDIA FRAUD
  const socialMediaFraud = [
    { year: '2025', losses: 2.1 },
  ];

  // CHART 13 — GLOBAL VS INDIA
  const globalVsIndia = [
    { metric: 'Exposure', global: 25, india: 47 },
    { metric: 'Personally', global: 10, india: 20 },
    { metric: 'Someone Known', global: 15, india: 27 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-border p-3">
          <p className="text-[10px] font-mono text-text-muted mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-xs font-mono" style={{ color: entry.color || 'var(--text-primary)' }}>
              {entry.name}: {entry.value}{entry.dataKey !== 'losses' ? '%' : 'B'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <SectionLayout
      id="scale"
      sectionNumber="02"
      title=""
      subtitle=""
      className="bg-background border-b border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* CHART 1 */}
        <div className="forensic-panel p-6 border border-border lg:col-span-2">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            AI Voice Scam Exposure By Country
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={exposureByCountry} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis dataKey="country" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} dy={10} />
                <YAxis stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '10px' }} iconType="square" />
                <Bar dataKey="personal" name="Personally experienced" fill="var(--accent-primary)" />
                <Bar dataKey="known" name="Someone they know" fill="#374151" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CHART 2 & 3 */}
        <div className="forensic-panel p-6 border border-border">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            Global AI Voice Scam Exposure
          </h3>
          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={globalExposure} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none" label={({ name, value }) => `${value}%`}>
                  {globalExposure.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '10px' }} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="forensic-panel p-6 border border-border">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            India: AI Voice Scam Exposure
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={indiaExposure} layout="vertical" margin={{ top: 0, right: 20, left: 60, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
                <XAxis type="number" domain={[0, 50]} stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={false} />
                <YAxis dataKey="metric" type="category" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} width={110} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                <Bar dataKey="value" name="Percentage" fill="var(--accent-primary)">
                  {indiaExposure.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? 'var(--accent-primary)' : '#4B5563'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CHART 4 & 5 */}
        <div className="forensic-panel p-6 border border-border">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            AI Voice Scam Emergency Scenarios
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emergencyScenarios} layout="vertical" margin={{ top: 0, right: 20, left: 60, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
                <XAxis type="number" domain={[0, 50]} stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={false} />
                <YAxis dataKey="scenario" type="category" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} width={120} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                <Bar dataKey="value" name="Percentage" fill="var(--accent-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="forensic-panel p-6 border border-border">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            Where Indians Encounter Deepfakes
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channels} layout="vertical" margin={{ top: 0, right: 20, left: 30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
                <XAxis type="number" domain={[0, 70]} stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={false} />
                <YAxis dataKey="platform" type="category" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} width={80} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                <Bar dataKey="value" name="Percentage" fill="#4B5563" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CHART 6 & 7 (Numerical Visualizations) */}
        <div className="forensic-panel p-6 border border-border">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            India: Deepfake Exposure
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface p-4 border border-border">
              <p className="text-3xl font-serif text-accent mb-1">4</p>
              <p className="text-[10px] font-mono text-text-secondary uppercase">Average deepfakes per day</p>
            </div>
            <div className="bg-surface p-4 border border-border">
              <p className="text-3xl font-serif text-accent mb-1">20%</p>
              <p className="text-[10px] font-mono text-text-secondary uppercase">Encountering voice-clone scams</p>
            </div>
            <div className="bg-surface p-4 border border-border">
              <p className="text-3xl font-serif text-text mb-1">&gt;33%</p>
              <p className="text-[10px] font-mono text-text-secondary uppercase">Not confident identifying scam</p>
            </div>
            <div className="bg-surface p-4 border border-border">
              <p className="text-3xl font-serif text-text mb-1">&gt;33%</p>
              <p className="text-[10px] font-mono text-text-secondary uppercase">Not confident in self-protection</p>
            </div>
          </div>
        </div>

        <div className="forensic-panel p-6 border border-border">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            India: Cyber-Fraud Scale (2025)
          </h3>
          <div className="flex flex-col h-full justify-center space-y-6 pb-6">
            <div className="border-l-2 border-danger pl-6">
              <p className="text-4xl font-serif text-text mb-2">₹19,813 Cr</p>
              <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">Reported Cyber-Fraud Losses</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <p className="text-4xl font-serif text-text mb-2">21.77 Lakh</p>
              <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">Cyber-Fraud Complaints</p>
            </div>
          </div>
        </div>

        {/* CHART 8, 9, 10, 11 (US Fraud Data) */}
        <div className="forensic-panel p-6 border border-border lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
                US Impersonation Losses
              </h3>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={usImpersonation}>
                    <XAxis dataKey="year" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                    <Bar dataKey="losses" name="Losses (Billions USD)" fill="#374151" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
                US Reported Fraud Losses
              </h3>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={usTotalFraud}>
                    <XAxis dataKey="year" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                    <Bar dataKey="losses" name="Losses (Billions USD)" fill="var(--accent-primary)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
                US Impersonation By Category (2025)
              </h3>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={usCategories}>
                    <XAxis dataKey="category" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                    <Bar dataKey="losses" name="Losses (Billions USD)" fill="#4B5563" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
                US Social-Media Scams
              </h3>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={socialMediaFraud}>
                    <XAxis dataKey="year" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                    <Bar dataKey="losses" name="Losses (Billions USD)" fill="#6B7280" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* CHART 12 & 13 */}
        <div className="forensic-panel p-6 border border-border">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            Voice-Cloning Accessibility & Exposure
          </h3>
          <div className="grid grid-cols-1 gap-4 h-64">
            <div className="flex justify-between items-center p-4 border border-border bg-surface">
              <span className="text-xs font-mono uppercase text-text-secondary">Audio required for voice cloning</span>
              <span className="text-xl font-serif text-accent">~3 sec</span>
            </div>
            <div className="flex justify-between items-center p-4 border border-border bg-surface">
              <span className="text-xs font-mono uppercase text-text-secondary">Global exposure (personal/known)</span>
              <span className="text-xl font-serif text-text">25%</span>
            </div>
            <div className="flex justify-between items-center p-4 border border-border bg-surface">
              <span className="text-xs font-mono uppercase text-text-secondary">Indian exposure (personal/known)</span>
              <span className="text-xl font-serif text-text">47%</span>
            </div>
          </div>
        </div>

        <div className="forensic-panel p-6 border border-border">
          <h3 className="text-[10px] font-mono font-bold text-text-muted mb-6 uppercase tracking-widest border-b border-border pb-2">
            Global vs India: AI Voice Scam Exposure
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={globalVsIndia} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis dataKey="metric" stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} dy={10} />
                <YAxis stroke="var(--text-muted)" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 10, fill: 'var(--text-muted)' }} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--bg-surface)' }} />
                <Legend wrapperStyle={{ fontFamily: 'monospace', fontSize: '10px' }} iconType="square" />
                <Bar dataKey="global" name="Global (%)" fill="#374151" />
                <Bar dataKey="india" name="India (%)" fill="var(--accent-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </SectionLayout>
  );
};
