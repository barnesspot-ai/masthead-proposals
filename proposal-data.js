// ─────────────────────────────────────────────
//  MASTHEAD FINANCIAL PLANNING
//  Proposal Data File — Brand Colours Applied
//  Primary: #222a3e (Navy) | Accent: #f78f1e (Orange) | Silver: #a7b8bc
// ─────────────────────────────────────────────

window.proposalData = {

  // ── COVER & META ──────────────────────────
  clientName:      "Marc Barnes",
  proposalTitle:   "i2 Growth Solutions — Portfolio Recommendation",
  adviserName:     "Marc Barnes",
  firmName:        "Masthead Financial Planning",
  fspNumber:       "[FSP NUMBER]",
  date:            "May 2026",
  status:          "Adviser Review Draft",

  // ── KEY STATS ─────────────────────────────
  portfolioValue:  "R1 000 000",
  incomeGoal:      "R50 000 / month",
  riskProfile:     "Moderately Aggressive",
  dfmName:         "i2 Solutions",
  portfolioName:   "i2 Growth Solutions",
  offshoreAlloc:   "25%",
  localAlloc:      "75%",
  existingProvider:"Morningstar",

  // ── EXECUTIVE SUMMARY ─────────────────────
  executiveSummary: [
    "Mr Marc Barnes presents with an investment portfolio valued at R1 000 000, a Moderately Aggressive risk profile, and a monthly income goal of R50 000. Following a thorough financial needs analysis, it is recommended that Mr Barnes' portfolio be invested into the i2 Growth Solutions strategy, managed by i2 Solutions as the appointed Discretionary Fund Manager.",
    "The recommended structure provides meaningful exposure to high-quality, diversified growth assets across both local and offshore markets. A 25% offshore allocation is included to provide geographic diversification and rand-hedge exposure.",
    "[ASSUMPTION] The R1 000 000 is a discretionary investment and not subject to retirement fund restrictions. [ADVISER TO CONFIRM]"
  ],

  // ── CURRENT SITUATION ─────────────────────
  currentSituation: {
    narrative: "Mr Barnes' existing portfolio is currently held with Morningstar. Following a review of the current structure, the following observations have been noted:",
    holdings: [
      "Allan Gray Balanced Fund — R850 000 [ADVISER TO CONFIRM]",
      "Stanlib Core Bond Fund — R150 000 [ADVISER TO CONFIRM]",
      "No offshore exposure currently held [ADVISER TO CONFIRM]"
    ],
    concerns: [
      "Portfolio may not be optimally aligned to confirmed Moderately Aggressive risk profile [ADVISER TO CONFIRM]",
      "No current offshore allocation — geographic concentration risk to South Africa",
      "Monthly income goal of R50 000 from R1 000 000 represents a 60% annual drawdown — sustainability requires urgent discussion [ADVISER TO CONFIRM]",
      "Fee structure comparison warranted against recommended solution [ADVISER TO CONFIRM]"
    ]
  },

  // ── RECOMMENDED STRATEGY ──────────────────
  recommendedStrategy: {
    narrative: "It is recommended that Mr Barnes' portfolio of R1 000 000 be invested into the i2 Growth Solutions mandate, managed by i2 Solutions as the appointed Discretionary Fund Manager, to be held via [LISP PLATFORM — ADVISER TO CONFIRM].",
    reasons: [
      { title: "Mandate alignment", body: "Portfolio constructed specifically for Moderately Aggressive investors targeting above-inflation real returns over a full market cycle." },
      { title: "Active DFM management", body: "Specialist investment team handles rebalancing, manager selection, and tactical allocation — removing the burden from adviser and client." },
      { title: "Geographic diversification", body: "Structured 25% offshore allocation with disciplined implementation, providing rand-hedge exposure and access to global growth themes." },
      { title: "Transparency", body: "Defined mandate, regular reporting, and clear fee structure. Adviser retains full oversight." }
    ]
  },

  // ── CHARTS — MFP Brand Colours ────────────
  geoAllocation: {
    labels: ["South Africa (75%)", "Offshore (25%)"],
    data:   [75, 25],
    colors: ["#222a3e", "#f78f1e"]
  },

  assetAllocation: {
    labels: ["SA Equity (45%)", "Global Equity (25%)", "Bonds (15%)", "Property (10%)", "Cash (5%)"],
    data:   [45, 25, 15, 10, 5],
    colors: ["#222a3e", "#f78f1e", "#a7b8bc", "#4a6070", "#e5e5e5"]
  },

  // ── PORTFOLIO COMPARISON ──────────────────
  comparisonRows: [
    { label: "Mandate",      current: "[ADVISER TO CONFIRM]",   recommended: "Moderately Aggressive Growth" },
    { label: "Risk level",   current: "[ADVISER TO CONFIRM]",   recommended: "Moderately Aggressive" },
    { label: "Offshore %",   current: "0% [CONFIRM]",           recommended: "25%" },
    { label: "DFM fee",      current: "[ADVISER TO CONFIRM]",   recommended: "[ADVISER TO CONFIRM]" },
    { label: "Platform fee", current: "[ADVISER TO CONFIRM]",   recommended: "[ADVISER TO CONFIRM]" },
    { label: "Total cost",   current: "[ADVISER TO CONFIRM]",   recommended: "[ADVISER TO CONFIRM]" },
    { label: "Liquidity",    current: "[ADVISER TO CONFIRM]",   recommended: "[ADVISER TO CONFIRM]" }
  ],

  feeComparison: {
    labels: ["DFM Fee", "Platform Fee", "Adviser Fee", "Total"],
    current:     [0.75, 0.50, 1.00, 2.25],
    recommended: [0.65, 0.40, 1.00, 2.05],
    note: "[ADVISER TO REPLACE WITH ACTUAL FEE DATA] — illustrative values only."
  },

  // ── RISK FACTORS ──────────────────────────
  risks: [
    { name: "Market & equity risk",    level: "Moderate–High",        pct: 72, color: "default", note: "Growth assets will experience volatility. Short-term drawdowns are expected and should not trigger reactive decisions." },
    { name: "Currency risk",           level: "Moderate",             pct: 50, color: "default", note: "The 25% offshore allocation introduces rand/foreign currency exposure. Managed within the DFM mandate." },
    { name: "Drawdown sustainability", level: "High — Action Required", pct: 88, color: "orange", note: "Monthly income goal relative to portfolio size requires immediate adviser review. [ADVISER TO CONFIRM full income picture]" },
    { name: "Inflation risk",          level: "Low–Moderate",         pct: 35, color: "default", note: "Growth mandate is designed to outperform inflation over a full market cycle." },
    { name: "Liquidity risk",          level: "Low",                  pct: 20, color: "default", note: "Discretionary investment structure provides reasonable liquidity. [CONFIRM platform liquidity terms]" }
  ],

  // ── IMPLEMENTATION STEPS ──────────────────
  implementationSteps: [
    { title: "Confirm full financial picture",      phase: "Adviser action", body: "Verify income goal context, total asset base, existing product details, and tax position before proceeding. [ADVISER TO CONFIRM]" },
    { title: "Finalise and sign Record of Advice",  phase: "Compliance",     body: "Complete the ROA, ensuring all fees are disclosed and all items are resolved. Obtain client signature before any transaction is processed." },
    { title: "Verify FICA documentation",           phase: "FICA",           body: "Confirm FICA documents are current and on file. New investment application requires valid identity and address verification. [ADVISER TO CONFIRM]" },
    { title: "Manage existing portfolio switch",    phase: "Transition",     body: "Confirm CGT position, any exit penalties, and expected settlement timeline (typically 3–10 business days). No funds moved without signed written instruction. [ADVISER TO CONFIRM]" },
    { title: "Submit investment application",       phase: "Application",    body: "Submit application via [LISP PLATFORM]. Ensure i2 Solutions mandate is correctly selected and all application fields are complete." },
    { title: "Confirm and onboard client",          phase: "Onboarding",     body: "Provide Mr Barnes with transaction confirmation, onboarding documentation, and schedule first portfolio review date." }
  ],

  // ── DISCLOSURES ───────────────────────────
  disclosures: [
    "This proposal has been prepared for adviser review and is not for direct client distribution until all [ADVISER TO CONFIRM] items have been verified and completed.",
    "This document does not constitute a guarantee of investment returns. Past performance is not indicative of future results. All investments carry risk, including the risk of loss of capital.",
    "This proposal has been prepared in accordance with the Financial Advisory and Intermediary Services Act (FAIS) and the Treating Customers Fairly (TCF) framework.",
    "The adviser is obligated to act in the client's best interest at all times. All fees must be fully disclosed prior to client signature of the Record of Advice."
  ]

};
