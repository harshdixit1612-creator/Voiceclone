import { Hero } from '../sections/Hero';
import { ProblemScale } from '../sections/ProblemScale';
import { WhyVoiceDifferent } from '../sections/WhyVoiceDifferent';
import { CaseStudiesSection } from '../sections/CaseStudiesSection';
import { ResearchLandscape } from '../sections/ResearchLandscape';
import { DetectionArchitecture } from '../sections/DetectionArchitecture';
import { AttackChain } from '../sections/AttackChain';
import { ExperimentalResults } from '../sections/ExperimentalResults';
import { EvidenceLibrary } from '../sections/EvidenceLibrary';
import { SourcesSection } from '../sections/SourcesSection';
import { HumanFallbackSection } from '../sections/HumanFallbackSection';

export const Home = () => {
  return (
    <>
      <Hero />
      <ProblemScale />
      <WhyVoiceDifferent />
      <AttackChain />
      <CaseStudiesSection />
      <ResearchLandscape />
      <DetectionArchitecture />
      <ExperimentalResults />
      <HumanFallbackSection />
      <EvidenceLibrary />
      <SourcesSection />
    </>
  );
};
