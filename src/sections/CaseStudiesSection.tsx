import { SectionLayout } from '../components/SectionLayout';
import { CaseStudyCard } from '../components/CaseStudyCard';

export const CaseStudiesSection = () => {
  return (
    <SectionLayout
      id="cases"
      sectionNumber="04"
      title="Real-World Evidence"
      subtitle="Documented instances and allegations of AI voice manipulation and personality rights misuse."
      className="bg-background border-b border-border bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CaseStudyCard
          id="01"
          title="Arijit Singh"
          year="26 JUL 2024"
          classification="Personality Rights"
          description={
            <>
              <p className="mb-4">
                The Bombay High Court granted ex parte ad-interim protection against certain unauthorized use and exploitation of name, voice, and image.
              </p>
              <p>
                The court record explicitly describes allegations involving an AI platform allowing the conversion of speech into his voice using Real Voice Cloning (RVC), including an allegation describing an unauthorized dataset containing <strong className="text-text font-mono">456 songs</strong>.
              </p>
            </>
          }
          sourceName="Bombay High Court"
          sourceUrl="https://indiankanoon.org/doc/103091928/"
          status="COURT RECORD"
        />

        <CaseStudyCard
          id="02"
          title="Asha Bhosle"
          year="2025"
          classification="Personality Rights"
          description={
            <p>
              The Bombay High Court provided interim protection of personality rights against unauthorized AI-related exploitation involving voice and personality. This represents a significant judicial development regarding the unauthorized synthetic generation of celebrity voices.
            </p>
          }
          sourceName="Bombay High Court"
          sourceUrl="https://indiankanoon.org/doc/52178832/"
          status="JUDICIAL DEVELOPMENT"
        />

        <CaseStudyCard
          id="03"
          title="Nashik Incident"
          year="2026"
          classification="Financial Fraud"
          description={
            <>
              <p className="mb-4">
                A reported police investigation concerning alleged AI voice manipulation and deepfake technology utilized within a matrimonial scam targeting a doctor.
              </p>
              <p className="font-mono text-text">
                Reported Loss: <strong className="text-xl">₹11.8 LAKH</strong>
              </p>
            </>
          }
          sourceName="Times of India"
          sourceUrl="https://timesofindia.indiatimes.com/city/nashik/man-arrested-for-crafting-fake-female-matrimonial-profile-and-defrauding-doctor-of-rs-11.8-lakh/articleshow/133522295.cms"
          status="REPORTED CASE"
        />
      </div>
    </SectionLayout>
  );
};
