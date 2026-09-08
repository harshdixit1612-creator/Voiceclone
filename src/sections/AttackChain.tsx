import { SectionLayout } from '../components/SectionLayout';

export const AttackChain = () => {
  const steps = [
    { label: "Target Identification", desc: "Attacker identifies victim and contacts" },
    { label: "Voice Sample Collection", desc: "Scraping social media or making brief calls" },
    { label: "Voice Cloning", desc: "Synthesis using few-shot TTS models" },
    { label: "Social Engineering", desc: "Crafting a scenario of urgency or distress" },
    { label: "Live / Near-Live Call", desc: "Executing the impersonation attack" },
    { label: "Trust Manipulation", desc: "Exploiting victim's familiarity with the voice" },
    { label: "Financial / Info Loss", desc: "Extracting funds or sensitive data" },
  ];

  return (
    <SectionLayout
      id="threat"
      sectionNumber="01"
      title="The Threat Architecture"
      subtitle="The Anatomy of an AI Voice Cloning Attack"
      className="bg-background border-b border-border"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center w-full relative group">
              <div className="w-full md:w-2/3 forensic-panel p-6 flex flex-col md:flex-row md:items-center justify-between z-10 transition-colors group-hover:border-text-secondary">
                <span className="text-sm font-mono font-bold text-text uppercase tracking-widest">{step.label}</span>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider mt-2 md:mt-0 text-left md:text-right">{step.desc}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="h-8 w-px bg-border my-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
