import { SectionLayout } from '../components/SectionLayout';

export const DetectionArchitecture = () => {
  const steps = [
    { label: "AUDIO INPUT", desc: "Raw waveform extraction" },
    { label: "PREPROCESSING", desc: "Noise reduction and normalization" },
    { label: "ACOUSTIC FEATURES", desc: "MFCCs, spectrogram extraction" },
    { label: "SPECTRAL FEATURES", desc: "Frequency domain analysis" },
    { label: "PROSODIC FEATURES", desc: "Pitch, timing, and energy variance" },
    { label: "MODEL INFERENCE", desc: "Evaluation via ensemble architecture" },
    { label: "RISK SCORE", desc: "Probabilistic output generation" },
  ];

  return (
    <SectionLayout
      id="detection"
      sectionNumber="07"
      title="VoiceGuard Detection"
      subtitle="Proposed Architecture for SIH 2026"
      className="bg-background border-b border-border"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center w-full relative">
              <div className="w-full forensic-panel px-6 py-4 flex flex-col items-center justify-center z-10">
                <span className="text-sm font-mono font-bold text-text uppercase tracking-widest">{step.label}</span>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider mt-1">{step.desc}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="h-6 w-px bg-border my-1 flex flex-col justify-end items-center">
                   <div className="w-1.5 h-1.5 border-r border-b border-text-muted rotate-45 mb-1"></div>
                </div>
              )}
            </div>
          ))}
          
          <div className="h-6 w-px bg-border my-1 flex flex-col justify-end items-center">
            <div className="w-1.5 h-1.5 border-r border-b border-text-muted rotate-45 mb-1"></div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="flex-1 forensic-panel p-3 text-center border-danger/30 bg-danger/5">
              <span className="text-xs font-mono font-bold text-danger">SYNTHETIC</span>
            </div>
            <div className="flex-1 forensic-panel p-3 text-center border-success/30 bg-success/5">
              <span className="text-xs font-mono font-bold text-success">GENUINE</span>
            </div>
            <div className="flex-1 forensic-panel p-3 text-center border-warning/30 bg-warning/5">
              <span className="text-xs font-mono font-bold text-warning">UNCERTAIN</span>
            </div>
          </div>

        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h3 className="text-xs font-mono font-bold text-text uppercase tracking-widest border-b border-border pb-2 mb-4">Requirements & Constraints</h3>
            <ul className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <li className="flex gap-3">
                <span className="text-accent font-mono">→</span>
                <span>Real-time / near-real-time processing under 200ms latency.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-mono">→</span>
                <span>Privacy preservation and strict data handling protocols.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-mono">→</span>
                <span>Robustness against Indian accents, dialects, and multilingual code-switching.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-text uppercase tracking-widest border-b border-border pb-2 mb-4">Proposed Integrations (Future)</h3>
            <div className="flex flex-wrap gap-2">
              {['Banking Infrastructure', 'Telecom Networks', 'Enterprise VoIP', 'Mobile SDKs', 'Law Enforcement API'].map((item) => (
                <span key={item} className="px-3 py-1 text-[10px] font-mono border border-border bg-background text-text-muted uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
