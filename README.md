# Orchestrate KYC

**A Client Lifecycle Management (CLM) product demo built to show how AI agents can transform the end-to-end KYC and AML compliance workflow — from onboarding through to periodic review, trigger events, and case closure.**

🔗 **Live demo:** [arobayo19.github.io/orchestrate-clm-demo](https://arobayo19.github.io/orchestrate-clm-demo/)

---

## What it is

Orchestrate KYC is a front-end demo of a compliance operations platform. It simulates the full lifecycle of a KYC case — from intake and document collection through CDD review, screening, risk assessment, client outreach, and final analyst decision — with AI agents woven into each stage.

The demo is designed to show compliance teams, financial institutions, and investors what a modern, agent-assisted CLM workflow looks like in practice. Every screen, data point, and interaction reflects real compliance operations terminology and process logic.

---

## Key features

### Case management
- **Case workspace** with 10 tabs: Overview, Documents, Ownership Structure, Screening, Risk Assessment, CDD Checklist, Client Outreach, Activity Log, Audit Trail, and AI Agents
- **Submit Decision modal** — Approve, Refer to EDD, Escalate to MLCO, or Reject — with required analyst notes and audit trail logging
- **Workflow stage tracker** showing live case progression from intake to decision
- **SLA tracking** with overdue flags and aging indicators across all queues

### Queue views
- **Onboarding queue** — new client onboarding applications, missing-document follow-ups
- **Periodic reviews queue** — scheduled annual CDD refresh cases
- **Trigger reviews queue** — event-driven re-CDD (ownership changes, adverse media hits)
- **Screening queue** — sanctions and PEP alert dispositions
- **My Queue** — analyst-specific case list with urgency sorting

### AI agent layer
- **Completeness Review Agent** — automatically scans incoming document packages and flags gaps
- **Client Outreach Agent** — drafts CDD deficiency emails from outstanding checklist items
- **AI Extraction Agent** — processes client responses and maps extracted data back to case fields
- **Reminder Agent** — sends automated follow-up emails when clients don't respond within SLA
- **Screening Agent** — runs entity and UBO screening against OFAC, EU, UN, and PEP databases
- **Auto-Assignment Agent** — routes new cases to analysts based on workload, specialism, and case risk tier
- **Periodic Review Agent** — initiates scheduled review workflows and generates checklists
- **Trigger Detection Agent** — identifies trigger events (ownership changes, adverse media) and opens re-CDD cases

### Client Outreach tab
- AI-drafted outreach email auto-generated from outstanding CDD checklist items
- Full email thread view with sent/received/system message bubbles
- Demo simulation — paste a mock client reply, run AI processing, and see field extraction results applied to the case

### Dashboard
- **My View / Team View toggle** — analyst view shows personal queue and priority cases; manager view shows AI vs human handle time by case type, agent throughput MTD, SLA compliance rate, and time saved
- KPI cards, SLA breach panel, analyst workload tracker, EDD pipeline, and top priority cases

### Escalations
- **Human Action Required** — cases blocked pending analyst disposition
- **Compliance Review** — cases awaiting BSA Officer or MLCO sign-off
- **EDD Senior Sign-off** — EDD cases ready for senior review before closure

### Global tools
- **Cmd+K global search** — jump to any case or client instantly
- **Notification panel** — live feed of agent actions, client responses, and SLA alerts
- **System Audit Trail** — immutable, filterable log of all case events, agent decisions, and user actions across the platform
- **Download Report** — generates a formatted case summary for print or export
- **New Review flow** — multi-step intake form to open a new case, with auto-assignment and agent pre-screening

---

## Case data

The demo includes 8 pre-built cases spanning all case types and risk tiers:

| Case ID | Client | Type | Risk | Status |
|---|---|---|---|---|
| 00128 | Apex Digital LLC | Onboarding | Moderate | Client responded — extraction complete |
| 00127 | North Harbor Ventures LP | Onboarding | High | Awaiting EDD docs — 8-message thread |
| 00126 | Solstice Exchange Ltd | Onboarding | High | EDD review — SLA overdue |
| 00125 | Meridian Capital Partners | Periodic | Moderate | CDD review in progress |
| 00129 | Global Freight Holdings | Periodic | Moderate | Ownership attestation outstanding |
| 00130 | Atlas Commodities Ltd | Periodic | Moderate | UAE counterparty under review |
| 00131 | Nova Biotech Ltd | Trigger | Moderate | Ownership change — new UBO re-CDD |
| 00132 | Eastern Trading Co | Screening | High | OFAC SDN match — pending disposition |

---

## Tech

- Single-file HTML/CSS/JS — no build step, no dependencies, no backend
- All data is in-memory; state resets on refresh
- Deployable to any static host (GitHub Pages, Netlify, Vercel)

---

## Running locally

```bash
git clone https://github.com/arobayo19/orchestrate-clm-demo.git
cd orchestrate-clm-demo
npx serve .
```

Then open `http://localhost:3000`.

To update the live demo, paste the latest `index.html` into the GitHub editor and commit to `main`. GitHub Pages will deploy within ~60 seconds.

---

## Purpose

This is a sales and product demo — not production software. It is designed to make the value proposition of an agent-assisted CLM platform tangible and navigable for compliance stakeholders, without requiring a live backend or real customer data.
