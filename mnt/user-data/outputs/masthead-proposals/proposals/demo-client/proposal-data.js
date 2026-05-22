// ─────────────────────────────────────────────
//  MASTHEAD FINANCIAL PLANNING
//  Demo Client — Template Proposal
//  Duplicate this file into a new folder under /proposals
//  and replace all values to create a new client proposal.
// ─────────────────────────────────────────────

window.proposalData = {

  // ── COVER & META ──────────────────────────
  clientName:       "Demo Client",
  proposalTitle:    "Portfolio Recommendation",
  adviserName:      "Marc Barnes",
  firmName:         "Masthead Financial Planning",
  fspNumber:        "[FSP NUMBER]",
  date:             "May 2026",
  status:           "Draft",

  // ── KEY STATS ─────────────────────────────
  portfolioValue:   "R[AMOUNT]",
  incomeGoal:       "R[AMOUNT] / month",
  riskProfile:      "[RISK PROFILE]",
  dfmName:          "[DFM NAME]",
  portfolioName:    "[PORTFOLIO NAME]",
  offshoreAlloc:    "[X]%",
  localAlloc:       "[Y]%",
  existingProvider: "[CURRENT PROVIDER]",

  // ── EXECUTIVE SUMMARY ─────────────────────
  executiveSummary: [
    "[CLIENT NAME] presents with an investment portfolio valued at [AMOUNT]. Following a thorough financial needs analysis, it is recommended that the portfolio be invested into the [PORTFOLIO NAME] strategy, managed by [DFM NAME] as the appointed Discretionary Fund Manager.",
    "The recommended structure provides meaningful exposure to growth assets across both local and offshore markets. [ADVISER TO CONFIRM full recommendation rationale]"
  ],

  // ── CURRENT SITUATION ─────────────────────
  currentSituation: {
    narrative: "[CLIENT NAME]'s existing portfolio is currently held with [CURRENT PROVIDER]. The following observations have been noted following a review of the current structure:",
    holdings: [
      "[Fund name] — R[Amount] [ADVISER TO CONFIRM]",
      "[Fund name] — R[Amount] [ADVISER TO CONFIRM]",
      "[ADVISER TO CONFIRM all holdings]"
    ],
    concerns: [
      "[Concern 1 — e.g. risk profile misalignment] [ADVISER TO CONFIRM]",
      "[Concern 2 — e.g. insufficient offshore exposure] [ADVISER TO CONFIRM]",
      "[Concern 3 — e.g. fee comparison required] [ADVISER TO CONFIRM]"
    ]
  },

  // ── RECOMMENDED STRATEGY ──────────────────
  recommendedStrategy: {
    narrative: "It is recommended that [CLIENT NAME]'s portfolio of [AMOUNT] be invested into the [PORTFOLIO NAME] mandate, managed by [DFM NAME], to be held via [LISP PLATFORM — ADVISER TO CONFIRM].",
    reasons: [
      { title: "Mandate alignment",     body: "[Explain why this mandate suits the client's confirmed risk profile] [ADVISER TO CONFIRM]" },
      { title: "Active DFM management", body: "[Explain DFM value proposition and what they manage on behalf of the client]" },
      { title: "Geographic diversification", body: "[Explain offshore allocation rationale and rand-hedge benefits]" },
      { title: "Transparency",          body: "[Explain fee structure, reporting, and adviser oversight]" }
    ]
  },

  // ── CHARTS ────────────────────────────────
  geoAllocation: {
    labels: ["South Africa ([Y]%)", "Offshore ([X]%)"],
    data:   [75, 25],
    colors: ["#222a3e", "#f78f1e"]
  },

  assetAllocation: {
    labels: ["SA Equity", "Global Equity", "Bonds", "Property", "Cash"],
    data:   [45, 25, 15, 10, 5],
    colors: ["#222a3e", "#f78f1e", "#a7b8bc", "#4a6070", "#e5e5e5"]
  },

  // ── PORTFOLIO COMPARISON ──────────────────
  comparisonRows: [
    { label: "Mandate",      current: "[ADVISER TO CONFIRM]", recommended: "[PORTFOLIO NAME]" },
    { label: "Risk level",   current: "[ADVISER TO CONFIRM]", recommended: "[RISK PROFILE]" },
    { label: "Offshore %",   current: "[ADVISER TO CONFIRM]", recommended: "[X]%" },
    { label: "DFM fee",      current: "[ADVISER TO CONFIRM]", recommended: "[ADVISER TO CONFIRM]" },
    { label: "Platform fee", current: "[ADVISER TO CONFIRM]", recommended: "[ADVISER TO CONFIRM]" },
    { label: "Total cost",   current: "[ADVISER TO CONFIRM]", recommended: "[ADVISER TO CONFIRM]" },
    { label: "Liquidity",    current: "[ADVISER TO CONFIRM]", recommended: "[ADVISER TO CONFIRM]" }
  ],

  feeComparison: {
    labels: ["DFM Fee", "Platform Fee", "Adviser Fee", "Total"],
    current:     [0.75, 0.50, 1.00, 2.25],
    recommended: [0.65, 0.40, 1.00, 2.05],
    note: "[ADVISER TO REPLACE WITH ACTUAL FEE DATA] — illustrative values only."
  },

  // ── RISK FACTORS ──────────────────────────
  risks: [
    { name: "Market & equity risk",    level: "Moderate–High",        pct: 70, color: "default", note: "[Describe equity/market risk relevant to this client and portfolio] [ADVISER TO CONFIRM]" },
    { name: "Currency risk",           level: "Moderate",             pct: 50, color: "default", note: "[Describe offshore currency exposure and how it is managed within the mandate]" },
    { name: "Drawdown sustainability", level: "[ADVISER TO ASSESS]",  pct: 50, color: "orange",  note: "[Assess whether income goal is sustainable relative to portfolio size] [ADVISER TO CONFIRM]" },
    { name: "Inflation risk",          level: "Low–Moderate",         pct: 35, color: "default", note: "[Describe how the mandate addresses inflation risk over the long term]" },
    { name: "Liquidity risk",          level: "Low",                  pct: 20, color: "default", note: "[Confirm liquidity terms on the recommended platform] [ADVISER TO CONFIRM]" }
  ],

  // ── IMPLEMENTATION STEPS ──────────────────
  implementationSteps: [
    { title: "Confirm full financial picture",     phase: "Adviser action", body: "Verify income goal, total asset base, existing products, and tax position. [ADVISER TO CONFIRM]" },
    { title: "Finalise and sign Record of Advice", phase: "Compliance",     body: "Complete ROA with all fees disclosed. Obtain client signature before any transaction." },
    { title: "Verify FICA documentation",          phase: "FICA",           body: "Confirm FICA documents are current and on file. [ADVISER TO CONFIRM]" },
    { title: "Manage existing portfolio switch",   phase: "Transition",     body: "Confirm CGT position, exit penalties, and settlement timeline. No funds moved without signed instruction. [ADVISER TO CONFIRM]" },
    { title: "Submit investment application",      phase: "Application",    body: "Submit via [LISP PLATFORM]. Confirm mandate selection and complete all application fields." },
    { title: "Confirm and onboard client",         phase: "Onboarding",     body: "Provide client with transaction confirmation, onboarding documentation, and schedule first review." }
  ],

  // ── DISCLOSURES ───────────────────────────
  disclosures: [
    "This proposal has been prepared for adviser review and must not be presented to the client until all [ADVISER TO CONFIRM] items have been verified and completed.",
    "This document does not constitute a guarantee of investment returns. Past performance is not indicative of future results. All investments carry risk, including the risk of loss of capital.",
    "This proposal has been prepared in accordance with the Financial Advisory and Intermediary Services Act (FAIS) and the Treating Customers Fairly (TCF) framework.",
    "The adviser is obligated to act in the client's best interest at all times. All fees must be fully disclosed prior to client signature of the Record of Advice."
  ]

};
