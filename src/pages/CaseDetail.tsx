import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, ShieldAlert } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export const CaseDetail = () => {
  const { id } = useParams();
  
  const caseData = caseStudies?.find(c => c.id === id) || {
    title: `Scan Report: ${id}`,
    caseNumber: id,
    year: new Date().toISOString(),
    location: 'System Generated',
    attackType: 'Deepfake Analysis',
    description: 'A detailed forensic analysis of the uploaded audio stream. The system detected multiple anomalies in the spectral envelope and phase consistency, indicating a high likelihood of synthesis using a neural vocoder.',
    impact: 'Blocked unauthorized transfer',
    technology: 'ElevenLabs/RVC signature detected'
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/dashboard" className="inline-flex items-center text-xs font-mono text-text-secondary hover:text-text uppercase tracking-widest transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          BACK TO DASHBOARD
        </Link>

        <div className="forensic-panel p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-danger/10 border-l border-b border-danger/30 text-danger px-4 py-2 text-[10px] font-mono font-bold tracking-widest uppercase flex items-center gap-2">
            <ShieldAlert className="w-3 h-3" /> SYNTHETIC ALERT
          </div>

          <h1 className="text-2xl font-serif text-text mb-6 pr-32 uppercase tracking-wide border-b border-border pb-6">{caseData.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-text-secondary mb-8">
            <div className="flex items-center gap-2 uppercase tracking-widest">
              <FileText className="w-4 h-4" /> ID: {caseData.caseNumber}
            </div>
            <div className="flex items-center gap-2 uppercase tracking-widest">
              <Calendar className="w-4 h-4" /> {caseData.year}
            </div>
            <div className="px-2 py-1 border border-border bg-background text-text-muted uppercase tracking-widest">{caseData.attackType}</div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-mono font-bold text-text mb-3 uppercase tracking-widest">Incident Description</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{caseData.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 border border-border">
                <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Detected Technology</h4>
                <p className="text-accent font-mono text-sm uppercase">{caseData.technology}</p>
              </div>
              <div className="bg-background p-6 border border-border">
                <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Business Impact</h4>
                <p className="text-text font-mono text-sm uppercase">{caseData.impact}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono font-bold text-text mb-6 uppercase tracking-widest border-b border-border pb-2">Forensic Analysis Timeline</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                  <div>
                    <div className="text-text font-mono text-sm uppercase">00:00.000 - Audio Ingestion</div>
                    <div className="text-text-secondary text-xs font-mono mt-1 uppercase">Stream received and format normalized to 16kHz WAV.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                  <div>
                    <div className="text-text font-mono text-sm uppercase">00:00.045 - Biomarker Extraction</div>
                    <div className="text-text-secondary text-xs font-mono mt-1 uppercase">MFCC and Mel-Spectrogram features extracted.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-danger flex-shrink-0" />
                  <div>
                    <div className="text-danger font-mono text-sm uppercase font-bold">00:00.120 - Anomaly Detected</div>
                    <div className="text-danger/80 text-xs font-mono mt-1 uppercase">High-frequency spectral artifact signature matching known neural vocoder models.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                  <div>
                    <div className="text-text font-mono text-sm uppercase">00:00.180 - Verdict Rendered</div>
                    <div className="text-text-secondary text-xs font-mono mt-1 uppercase">Deepfake probability: 99.8%. Alert triggered.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
