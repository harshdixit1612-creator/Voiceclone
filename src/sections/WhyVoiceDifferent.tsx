import { SectionLayout } from '../components/SectionLayout';

export const WhyVoiceDifferent = () => {
  return (
    <SectionLayout
      id="why-voice"
      sectionNumber="03"
      title="Why Voice Is Different"
      subtitle="Voice is deeply tied to identity, familiarity, emotion, and authority."
      className="bg-background border-b border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            Unlike text or generic images, voice acts as an inherent trust signal. A familiar voice naturally conveys authenticity, leading victims to bypass normal skepticism.
          </p>
          <div className="forensic-panel p-6">
            <h3 className="text-xs font-mono font-bold text-text uppercase tracking-widest border-b border-border pb-2 mb-4">Required Detection Features</h3>
            <ul className="space-y-3 text-sm text-text-secondary font-mono">
              <li>[✓] Acoustic characteristics</li>
              <li>[✓] Spectral characteristics</li>
              <li>[✓] Prosody (Pitch, Timing)</li>
              <li>[✓] Pronunciation nuances</li>
              <li>[✓] Breathing & Pauses</li>
              <li>[✓] Emotional consistency</li>
              <li>[✓] Conversational behavior</li>
            </ul>
          </div>
        </div>
        
        <div>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            Detection models face significant challenges moving from laboratory conditions to real-world telecom networks.
          </p>
          <div className="forensic-panel p-6 border-warning/30 bg-warning/5">
            <h3 className="text-xs font-mono font-bold text-warning uppercase tracking-widest border-b border-warning/20 pb-2 mb-4">Real-World Degradation</h3>
            <ul className="space-y-3 text-sm text-text-secondary font-mono">
              <li>[!] Channel degradation</li>
              <li>[!] Compression codecs (GSM, Opus)</li>
              <li>[!] Background noise interference</li>
              <li>[!] Accents & Dialects</li>
              <li>[!] Unseen synthesis models</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
