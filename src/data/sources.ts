import type { Source } from '../types/data';

export const sources: Source[] = [
  {
    id: "SRC_I4C_001",
    title: "Indians lost Rs 53,000 crore to fraud, cheating cases in six years",
    organization: "Indian Express / I4C",
    year: 2025,
    type: "News",
    url: "https://indianexpress.com/article/india/indians-lost-rs-53000-crore-fraud-cheating-cases-six-years-maharashtra-10452185/",
    primary: false
  },
  {
    id: "SRC_COURT_001",
    title: "Arijit Singh vs Codible Ventures LLP & Ors.",
    organization: "Bombay High Court",
    year: 2024,
    type: "Court Order",
    url: "https://indiankanoon.org/doc/103091928/",
    primary: true
  },
  {
    id: "SRC_COURT_002",
    title: "Asha Bhosle v. Mayk Inc. & Ors.",
    organization: "Bombay High Court",
    year: 2025,
    type: "Court Order",
    url: "https://www.livelaw.in/high-court/bombay-high-court/bombay-high-court-protects-personality-rights-of-singer-asha-bhosle-305803",
    primary: false
  },
  {
    id: "SRC_NEWS_001",
    title: "Man arrested for crafting fake female matrimonial profile and defrauding doctor of Rs 11.8 lakh",
    organization: "Times of India",
    year: 2026,
    type: "News",
    url: "https://timesofindia.indiatimes.com/city/nashik/man-arrested-for-crafting-fake-female-matrimonial-profile-and-defrauding-doctor-of-rs-11-8-lakh/articleshow/133522295.cms",
    primary: false
  },
  {
    id: "SRC_PAPER_001",
    title: "The Last Mile of Deepfake Speech Detection: An Industry-Academia Experience Report",
    organization: "arXiv",
    year: 2026,
    type: "Research Paper",
    url: "https://arxiv.org/abs/2608.17585",
    primary: true
  },
  {
    id: "SRC_PAPER_002",
    title: "A survey of AI-generated voices and their detection",
    organization: "arXiv",
    year: 2026,
    type: "Research Paper",
    url: "https://arxiv.org/abs/2608.15411",
    primary: true
  },
  {
    id: "SRC_PAPER_003",
    title: "All-Type Audio Deepfake Detection Challenge (AT-ADD)",
    organization: "arXiv",
    year: 2026,
    type: "Research Paper",
    url: "https://arxiv.org/abs/2608.14249",
    primary: true
  }
];
