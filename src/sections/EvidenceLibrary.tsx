import { SectionLayout } from '../components/SectionLayout';
import { EvidenceCard } from '../components/EvidenceCard';

export const EvidenceLibrary = () => {
  return (
    <SectionLayout
      id="sources"
      sectionNumber="09"
      title="Evidence Library"
      subtitle="Digital archive of verified incidents, research benchmarks, and official sources."
      className="bg-background border-b border-border"
    >
      <div className="flex flex-col gap-2">
        <EvidenceCard 
          id="EV-2025-01"
          date="2025"
          category="OFFICIAL SOURCE"
          title="Indian Cyber-Fraud Scale"
          description="Reported cyber-fraud losses in India over six years (2020-2025) totaling approximately ₹52,976 crore. This establishes the broad context of digital financial crime."
          source="Indian Express / I4C"
          sourceUrl="https://indianexpress.com/article/india/indians-lost-rs-53000-crore-fraud-cheating-cases-six-years-maharashtra-2025-10452185/"
          verificationState="REPORTED / ESTIMATED"
        />
        
        <EvidenceCard 
          id="EV-2024-02"
          date="26 JUL 2024"
          category="COURT RECORD"
          title="Arijit Singh vs. AI Platforms"
          description="Bombay High Court order granting ex parte ad-interim protection against unauthorized use of name, voice, and image via Real Voice Cloning (RVC)."
          source="Indian Kanoon"
          sourceUrl="https://indiankanoon.org/doc/103091928/"
          verificationState="VERIFIED"
        />

        <EvidenceCard 
          id="EV-2026-03"
          date="2026"
          category="NEWS REPORT"
          title="Nashik AI Voice Fraud"
          description="Reported case involving alleged AI voice manipulation and deepfake technology utilized within a matrimonial scam targeting a doctor for ₹11.8 lakh."
          source="Times of India"
          sourceUrl="https://timesofindia.indiatimes.com/city/nashik/man-arrested-for-crafting-fake-female-matrimonial-profile-and-defrauding-doctor-of-rs-11.8-lakh/articleshow/133522295.cms"
          verificationState="PENDING VERIFICATION"
        />

        <EvidenceCard 
          id="EV-2026-04"
          date="2026"
          category="RESEARCH PAPER"
          title="AT-ADD Benchmark"
          description="All-Type Audio Deepfake Detection Challenge Summary demonstrating baseline performance metrics for state-of-the-art models."
          source="arXiv"
          sourceUrl="https://arxiv.org/abs/2608.14249"
          verificationState="VERIFIED"
        />
      </div>
    </SectionLayout>
  );
};
