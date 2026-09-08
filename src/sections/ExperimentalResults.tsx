import { SectionLayout } from '../components/SectionLayout';
import { SourceBadge } from '../components/SourceBadge';

export const ExperimentalResults = () => {
  return (
    <SectionLayout
      id="experiments"
      sectionNumber="08"
      title="Experimental Results"
      subtitle="Evaluation of detection architectures across synthetic and genuine datasets."
      className="bg-background border-b border-border"
    >
      <div className="space-y-12">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-xl font-serif text-text uppercase">External Benchmark: AT-ADD</h3>
            <SourceBadge label="VERIFIED EXTERNAL RESEARCH" type="verified" />
          </div>
          <p className="text-sm text-text-secondary mb-6 max-w-3xl">
            The All-Type Audio Deepfake Detection (AT-ADD) Challenge establishes baseline performance metrics for state-of-the-art models on standardized datasets. Note: These are challenge-specific benchmark results, not universal real-world accuracy claims.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="forensic-panel p-6 flex flex-col items-center text-center">
              <span className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-4">Track 1</span>
              <span className="text-5xl font-serif text-text mb-2">90.71%</span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Macro-F1</span>
            </div>
            <div className="forensic-panel p-6 flex flex-col items-center text-center">
              <span className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-4">Track 2</span>
              <span className="text-5xl font-serif text-text mb-2">96.10%</span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Macro-F1</span>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-border"></div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-xl font-serif text-text uppercase">VoiceGuard Results</h3>
            <SourceBadge label="OUR EXPERIMENT" type="experiment" />
          </div>
          <div className="forensic-panel p-12 text-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')]">
            <p className="text-lg font-mono text-text-secondary uppercase tracking-widest">
              VoiceGuard experimental results pending.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
