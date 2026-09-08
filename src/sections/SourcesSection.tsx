import { SectionLayout } from '../components/SectionLayout';

export const SourcesSection = () => {
  const sources = [
    { title: "PS-26104", url: "https://sihone.pages.dev/ps/26104", label: "Smart India Hackathon 2026" },
    { title: "Indian Cyber-Fraud Context", url: "https://indianexpress.com/article/india/indians-lost-rs-53000-crore-fraud-cheating-cases-six-years-maharashtra-2025-10452185/", label: "Indian Express" },
    { title: "Arijit Singh Case", url: "https://indiankanoon.org/doc/103091928/", label: "Bombay High Court / Indian Kanoon" },
    { title: "Asha Bhosle Case", url: "https://indiankanoon.org/doc/52178832/", label: "Indian Kanoon" },
    { title: "Nashik Reported Case", url: "https://timesofindia.indiatimes.com/city/nashik/man-arrested-for-crafting-fake-female-matrimonial-profile-and-defrauding-doctor-of-rs-11.8-lakh/articleshow/133522295.cms", label: "Times of India" },
    { title: "The Last Mile of Deepfake Speech Detection", url: "https://arxiv.org/abs/2608.17585", label: "arXiv (2026)" },
    { title: "A Survey of AI-Generated Voices and Their Detection", url: "https://arxiv.org/abs/2608.15411", label: "arXiv (2026)" },
    { title: "AT-ADD Benchmark", url: "https://arxiv.org/abs/2608.14249", label: "arXiv (2026)" },
  ];

  return (
    <SectionLayout
      id="sources"
      sectionNumber="10"
      title="Verified Sources"
      subtitle="Complete bibliography and source index for all claims, benchmarks, and legal developments referenced."
      className="bg-background border-b border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sources.map((source, idx) => (
          <a
            key={idx}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-border hover:border-text-secondary transition-colors group forensic-panel"
          >
            <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">{source.label}</p>
            <h4 className="text-sm font-serif text-text group-hover:text-accent transition-colors leading-tight">
              {source.title}
            </h4>
          </a>
        ))}
      </div>
    </SectionLayout>
  );
};
