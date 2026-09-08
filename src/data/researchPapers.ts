import type { ResearchPaper } from '../types/data';

export const researchPapers: ResearchPaper[] = [
  {
    id: "PAPER_001",
    title: "The Last Mile of Deepfake Speech Detection: An Industry-Academia Experience Report",
    author: "arXiv",
    year: 2026,
    type: "Research Paper",
    topic: "Deepfake Detection challenges, distribution shift, channel mismatch",
    sourceId: "SRC_PAPER_001",
    summary: "Highlights that synthetic speech detection remains challenging. Benchmarks can show low error rates in-domain, but performance degrades under unseen attacks, channel mismatch, distribution shift, realistic long-form audio, and codec degradation.",
    relevance: "Explains why VoiceGuard focuses on robust real-time detection in realistic scenarios."
  },
  {
    id: "PAPER_002",
    title: "A survey of AI-generated voices and their detection",
    author: "arXiv",
    year: 2026,
    type: "Survey",
    topic: "AI voice generation, cloning, prosody, phonetics, detection",
    sourceId: "SRC_PAPER_002",
    summary: "Comprehensive survey of AI voice generation, voice cloning, synthetic speech, prosody, phonetics, detection methods, impersonation, fraud, disinformation, benchmark datasets, and open challenges.",
    relevance: "Provides foundational context for the VoiceGuard research portal."
  },
  {
    id: "PAPER_003",
    title: "All-Type Audio Deepfake Detection Challenge",
    author: "arXiv",
    year: 2026,
    type: "Benchmark",
    topic: "Audio Deepfake Detection",
    sourceId: "SRC_PAPER_003",
    summary: "Reports on the AT-ADD challenge. Best Track 1 Macro-F1: 90.71%. Best Track 2 Macro-F1: 96.10%. These are challenge-specific benchmark results.",
    relevance: "Shows the current state of research in controlled benchmark environments."
  }
];
