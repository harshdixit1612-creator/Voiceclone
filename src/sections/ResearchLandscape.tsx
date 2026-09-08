import { SectionLayout } from '../components/SectionLayout';
import { ResearchCard } from '../components/ResearchCard';

export const ResearchLandscape = () => {
  return (
    <SectionLayout
      id="research"
      sectionNumber="05"
      title="Research Landscape"
      subtitle="Current academic and industry literature establishes both the state of detection technology and its critical limitations."
      className="bg-background border-b border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <ResearchCard
          year="2026"
          title="The Last Mile of Deepfake Speech Detection: An Industry-Academia Experience Report"
          summary={
            <p>
              This report highlights that strong in-domain benchmark performance does not necessarily translate into strong real-world performance. It identifies key challenges including unseen attacks, channel mismatch, distribution shift, realistic long audio, and codec degradation.
            </p>
          }
          sourceUrl="https://arxiv.org/abs/2608.17585"
        />
        <ResearchCard
          year="2026"
          title="A Survey of AI-Generated Voices and Their Detection"
          summary={
            <p>
              A broad survey examining the evolution of AI voice generation, voice cloning techniques, and current detection methodologies. The paper maps out the evolving attack methods and the inherent limitations in purely acoustic or spectral analysis when facing zero-shot voice synthesis.
            </p>
          }
          sourceUrl="https://arxiv.org/abs/2608.15411"
        />
      </div>

      <div className="forensic-panel p-8 md:p-12 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-serif text-text uppercase mb-4">THE GAP</h3>
        <div className="h-px w-16 bg-border mx-auto mb-6"></div>
        <p className="text-lg text-text-secondary leading-relaxed mb-6">
          While benchmark performance remains high, real-world conditions introduce <strong>distribution shift, channel degradation, codecs, long-duration audio, accents, dialects, and noisy conversational settings.</strong>
        </p>
        <p className="text-sm font-mono text-accent uppercase tracking-widest">
          This necessitates a defense-in-depth approach incorporating human feedback.
        </p>
      </div>
    </SectionLayout>
  );
};
