import type { Claim } from '../types/data';

export const claims: Claim[] = [
  {
    id: "E001",
    claim: "Reported cyber-fraud losses in India",
    value: "₹52,976 crore",
    period: "2020–2025",
    sourceId: "SRC_I4C_001",
    type: "external",
    status: "REPORTED",
    verified: false,
    notes: "Requires primary-source verification against I4C data before final submission."
  },
  {
    id: "E002",
    claim: "Reported loss in Nashik matrimonial AI voice fraud",
    value: "₹11.8 lakh",
    year: 2026,
    sourceId: "SRC_NEWS_001",
    type: "external",
    status: "REPORTED",
    verified: false,
    notes: "Reported case, police investigation ongoing."
  },
  {
    id: "E003",
    claim: "Best Track 1 Macro-F1 in AT-ADD benchmark",
    value: "90.71%",
    year: 2026,
    sourceId: "SRC_PAPER_003",
    type: "research",
    status: "VERIFIED",
    verified: true,
    notes: "Challenge-specific benchmark results, not general real-world accuracy."
  },
  {
    id: "E004",
    claim: "Best Track 2 Macro-F1 in AT-ADD benchmark",
    value: "96.10%",
    year: 2026,
    sourceId: "SRC_PAPER_003",
    type: "research",
    status: "VERIFIED",
    verified: true,
    notes: "Challenge-specific benchmark results."
  }
];
