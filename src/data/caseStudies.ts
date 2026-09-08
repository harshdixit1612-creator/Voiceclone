import type { CaseStudy } from '../types/data';

export const caseStudies: CaseStudy[] = [
  {
    id: "CASE_001",
    caseNumber: "CASE 01",
    title: "Arijit Singh v. Codible Ventures",
    year: 2024,
    location: "Bombay High Court",
    attackType: "AI Voice Synthesis",
    description: "Court record describes allegations involving AI tools capable of converting speech/audio into an AI version of the singer's voice. The plaint described a dataset of 456 songs allegedly uploaded for this purpose using the Real Voice Cloning (RVC) method.",
    impact: "Legal precedent regarding personality rights and unauthorized AI voice models.",
    technology: "Real Voice Cloning (RVC)",
    sourceId: "SRC_COURT_001"
  },
  {
    id: "CASE_002",
    caseNumber: "CASE 02",
    title: "Asha Bhosle v. Mayk Inc.",
    year: 2025,
    location: "Bombay High Court",
    attackType: "Unauthorized AI Voice Use",
    description: "Ad-interim protection against unauthorized use/exploitation of the singer's voice and personality, including through AI tools.",
    impact: "Judicial development and interim protection for personality rights.",
    technology: "AI Voice Synthesis",
    sourceId: "SRC_COURT_002"
  },
  {
    id: "CASE_003",
    caseNumber: "CASE 03",
    title: "Nashik AI Voice Fraud",
    year: 2026,
    location: "Nashik, India",
    attackType: "Social Engineering / Fraud",
    description: "A reported cybercrime case involving alleged AI voice manipulation in a matrimonial fraud.",
    impact: "Reported ₹11.8 lakh loss.",
    technology: "AI Voice Manipulation",
    sourceId: "SRC_NEWS_001"
  }
];
