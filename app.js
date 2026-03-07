const views = {
  dashboard: { id: "dashboard-view", eyebrow: "Overview", title: "Dashboard" },
  intake: { id: "intake-view", eyebrow: "Onboarding", title: "Intake Queue" },
  workspace: { id: "workspace-view", eyebrow: "Case Management", title: "Case Workspace" },
  escalations: { id: "escalations-view", eyebrow: "Case Management", title: "Escalations" },
  risk: { id: "risk-view", eyebrow: "Risk", title: "Risk Overview" },
  edd: { id: "edd-view", eyebrow: "Risk", title: "EDD Pipeline" },
  monitoring: { id: "monitoring-view", eyebrow: "Monitoring", title: "Periodic Reviews" },
  triggers: { id: "triggers-view", eyebrow: "Monitoring", title: "Trigger Reviews" },
  agents: { id: "agents-view", eyebrow: "AI Agents", title: "Automation Activity" },
  audit: { id: "audit-view", eyebrow: "System", title: "Audit Trail" }
};

const cases = [
  {
    id: "CASE-2026-00128",
    client: "Apex Digital LLC",
    status: "Completeness Review",
    statusClass: "blue",
    pipeline: "Standard CDD",
    pipelineClass: "gray",
    aging: "2h 12m / target 4h",
    priority: "Escalated",
    priorityClass: "gold",
    assignee: "Ops Queue",
    entityType: "LLC",
    jurisdiction: "Delaware, US",
    activity: "Digital asset exchange",
    expected: "OTC trading, custody, settlement",
    summary: "Application received from onboarding portal. AI extraction completed on formation and tax documents. Corporate registry evidence still pending before case can advance into full CDD review.",
    checks: [
      ["Document completeness", "Missing registry confirmation", "gold"],
      ["Entity verification", "In progress", "blue"],
      ["Address verification", "Verified", "green"],
      ["Screening status", "Pending review", "gold"]
    ],
    documents: [
      ["Certificate of Formation", "Parsed · 96% confidence · Entity name, formation date, jurisdiction extracted", "green"],
      ["Operating Agreement", "Parsed · 91% confidence · Ownership sections mapped", "green"],
      ["W-9", "Parsed · 98% confidence · EIN extracted and matched", "green"],
      ["Corporate Registry Evidence", "Outstanding document request sent to client", "gold"]
    ],
    ownershipNotes: "Two direct beneficial owners identified from operating agreement. Percentages total 75%. Remaining 25% is held across minority shareholders below threshold. No nominee or shell ownership identified at this stage.",
    sanctions: "No sanctions matches returned for the entity or named control persons.",
    pep: "No direct PEP match. One related-party name requires low-confidence watchlist review.",
    media: "One tangential media mention identified with no direct allegation tied to the entity. Disposition pending analyst confirmation.",
    riskScore: 63,
    riskNarrative: "Risk is elevated by industry profile and expected transaction activity, but partially mitigated by domestic formation, complete tax documentation, and a currently understandable ownership structure.",
    riskFactors: ["Crypto services", "Moderate geography risk", "OTC activity", "Incomplete registry evidence"],
    activity: [
      ["11:08 UTC", "Application received", "Case created from onboarding portal payload."],
      ["11:09 UTC", "Document Classification Agent", "Classified 4 uploaded files and routed them for extraction."],
      ["11:11 UTC", "Ownership Mapping Agent", "Mapped beneficial ownership from operating agreement."],
      ["11:13 UTC", "Deficiency Notice Agent", "Generated request for missing corporate registry evidence."]
    ],
    audit: [
      ["11:08 UTC", "System", "Created case record and started intake SLA timer."],
      ["11:09 UTC", "Document Extraction Agent", "Extracted entity name, formation date, EIN, and ownership references."],
      ["11:12 UTC", "Screening Agent", "Submitted screening request for entity and associated parties."],
      ["11:14 UTC", "Orchestration Agent", "Retained case in intake due to missing registry evidence."]
    ],
    agents: [
      ["Document Extraction Agent", "Completed parsing on 3 of 4 files. Confidence threshold met."],
      ["Ownership Mapping Agent", "Resolved direct 25%+ owners. No opaque ownership detected."],
      ["Screening Agent", "Entity screening complete. Related-party review still pending."],
      ["Deficiency Notice Agent", "Client request sent for missing registry evidence."]
    ]
  },
  {
    id: "CASE-2026-00127",
    client: "North Harbor Ventures LP",
    status: "Pending Client Response",
    statusClass: "gold",
    pipeline: "Standard CDD",
    pipelineClass: "gray",
    aging: "1d 4h",
    priority: "FIFO",
    priorityClass: "gray",
    assignee: "Client Pending",
    entityType: "Limited Partnership",
    jurisdiction: "Cayman Islands",
    activity: "Investment vehicle",
    expected: "Treasury movements, subscriptions, redemptions",
    summary: "Application is paused pending director ID upload and updated proof of address. Intake remains open and aging continues until required materials are received.",
    checks: [
      ["Document completeness", "Pending client response", "gold"],
      ["Entity verification", "Not started", "gray"],
      ["Address verification", "Pending", "gold"],
      ["Screening status", "Queued", "gray"]
    ],
    documents: [
      ["Formation Certificate", "Uploaded · pending extraction", "blue"],
      ["Partnership Agreement", "Uploaded · pending extraction", "blue"],
      ["Director ID", "Missing document", "gold"]
    ],
    ownershipNotes: "Preliminary structure indicates layered fund ownership and nominee-style management rights requiring deeper review once full documents are received.",
    sanctions: "No screening run until completeness requirements are met.",
    pep: "Not started.",
    media: "Not started.",
    riskScore: 74,
    riskNarrative: "Preliminary risk is higher due to offshore jurisdiction and fund structure complexity. Case may require EDD after missing materials are received.",
    riskFactors: ["Offshore entity", "Fund structure", "Layered ownership"],
    activity: [
      ["09:44 UTC", "Application received", "Case created from client onboarding submission."],
      ["09:47 UTC", "Completeness Review Agent", "Detected missing director ID and stale address evidence."],
      ["09:50 UTC", "Deficiency Notice Agent", "Generated client request with missing items list."]
    ],
    audit: [
      ["09:44 UTC", "System", "Created intake case and logged submission payload."],
      ["09:47 UTC", "Completeness Review Agent", "Marked required onboarding package incomplete."],
      ["09:50 UTC", "Deficiency Notice Agent", "Sent request for additional documents to client portal."]
    ],
    agents: [
      ["Completeness Review Agent", "Flagged missing control-person identity evidence."],
      ["Deficiency Notice Agent", "Awaiting client response in portal."]
    ]
  },
  {
    id: "CASE-2026-00126",
    client: "Solstice Exchange Ltd",
    status: "Pending Human Review",
    statusClass: "red",
    pipeline: "EDD Review",
    pipelineClass: "red",
    aging: "6h 51m / target 4h",
    priority: "High Risk",
    priorityClass: "red",
    assignee: "Ana M.",
    entityType: "Corporation",
    jurisdiction: "Singapore",
    activity: "Digital asset infrastructure",
    expected: "Cross-border institutional trading flows",
    summary: "Case escalated to human review following adverse media hit and sanctions match requiring analyst disposition. EDD remains open.",
    checks: [
      ["EDD trigger", "Adverse media + screening match", "red"],
      ["Entity verification", "Verified", "green"],
      ["Address verification", "Verified", "green"],
      ["Screening status", "Human disposition required", "red"]
    ],
    documents: [
      ["Certificate of Incorporation", "Verified", "green"],
      ["Share Register", "Parsed · layered ownership flagged", "gold"],
      ["Financial Statements", "Reviewed for source of funds consistency", "green"]
    ],
    ownershipNotes: "Ownership chain includes one intermediary holding company. UBOs identified, but one associated entity sits in a higher-risk jurisdiction and requires annotation in final report.",
    sanctions: "Potential sanctions match returned on associated entity. AI triage classified as uncertain; human disposition required.",
    pep: "No direct PEP match.",
    media: "Material adverse media identified regarding historic regulatory inquiry; relevance assessed as moderate pending analyst review.",
    riskScore: 86,
    riskNarrative: "High risk driven by cross-border activity, complex ownership, and unresolved screening findings. Senior approval likely required even if screening is cleared.",
    riskFactors: ["Cross-border trading", "Complex ownership", "Screening uncertainty", "Adverse media"],
    activity: [
      ["08:11 UTC", "Screening Agent", "Returned uncertain match on associated entity."],
      ["08:16 UTC", "Adverse Media Agent", "Compiled regulatory inquiry references and categorized severity."],
      ["08:25 UTC", "Orchestration Agent", "Escalated case into pending human review."]
    ],
    audit: [
      ["08:11 UTC", "Screening Agent", "Logged possible sanctions match with confidence score 0.61."],
      ["08:16 UTC", "Adverse Media Agent", "Attached media source references and relevance notes."],
      ["08:25 UTC", "Orchestration Agent", "Changed case status to Pending Human Review."]
    ],
    agents: [
      ["Screening Agent", "Disposition blocked until human analyst decision."],
      ["Adverse Media Agent", "Generated review package for analyst."],
      ["Risk Summary Agent", "Marked case as high risk pending final screening outcome."]
    ]
  }
];

const priorityList = document.getElementById("priorityList");
const queueBody = document.getElementById("queueBody");
const caseSearch = document.getElementById("caseSearch");
const statusFilter = document.getElementById("statusFilter");
const pipelineFilter = document.getElementById("pipelineFilter");
const priorityFilter = document.getElementById("priorityFilter");
const jurisdictionFilter = document.getElementById("jurisdictionFilter");
const assigneeFilter = document.getElementById("assigneeFilter");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const sortAgingBtn = document.getElementById("sortAgingBtn");
const queueChips = document.querySelectorAll(".queue-chip");

let activeStatusChip = "all";
let sortByAgingDesc = true;

const pageEyebrow = document.getElementById("pageEyebrow");
const pageTitle = document.getElementById("pageTitle");

const caseId = document.getElementById("caseId");
const caseClientName = document.getElementById("caseClientName");
const caseStatus = document.getElementById("caseStatus");
const casePipeline = document.getElementById("casePipeline");
const casePriority = document.getElementById("casePriority");

const ovEntityType = document.getElementById("ovEntityType");
const ovJurisdiction = document.getElementById("ovJurisdiction");
const ovActivity = document.getElementById("ovActivity");
const ovExpected = document.getElementById("ovExpected");
const overviewChecks = document.getElementById("overviewChecks");
const overviewSummary = document.getElementById("overviewSummary");
const documentsList = document.getElementById("documentsList");
const ownershipEntity = document.getElementById("ownershipEntity");
const ownershipNotes = document.getElementById("ownershipNotes");
const screenSanctions = document.getElementById("screenSanctions");
const screenPep = document.getElementById("screenPep");
const screenMedia = document.getElementById("screenMedia");
const riskScore = document.getElementById("riskScore");
const riskNarrative = document.getElementById("riskNarrative");
const riskFactors = document.getElementById("riskFactors");
const activityTimeline = document.getElementById("activityTimeline");
const auditTimeline = document.getElementById("auditTimeline");
const agentFeed = document.getElementById("agentFeed");

let currentCase = cases[0];

function renderPriorityList() {
  priorityList.innerHTML = "";
  cases.forEach((item) => {
    const row = document.createElement("div");
    row.className = "simple-row";
    row.innerHTML = `
      <div class="left">
        <strong>${item.client}</strong>
        <span>${item.status} · ${item.pipeline}</span>
      </div>
      <div class="right">${item.id}</div>
    `;
    row.addEventListener("click", () => openCase(item.id));
    priorityList.appendChild(row);
  });
}

function renderQueue(filter = "") {
  queueBody.innerHTML = "";
  const visibleCases = cases.filter((item) => {
    const text = `${item.client} ${item.id}`.toLowerCase();
    return text.includes(filter.toLowerCase());
  });

  visibleCases.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="client-name">${item.client}</div>
        <div class="client-sub">${item.id}</div>
      </td>
      <td><span class="badge ${item.statusClass}">${item.status}</span></td>
      <td><span class="badge ${item.pipelineClass}">${item.pipeline}</span></td>
      <td>${item.aging}</td>
      <td><span class="badge ${item.priorityClass}">${item.priority}</span></td>
      <td>${item.assignee}</td>
      <td><button class="open-link" data-case="${item.id}">Open</button></td>
    `;
    queueBody.appendChild(tr);
  });

  document.querySelectorAll(".open-link").forEach((btn) => {
    btn.addEventListener("click", () => openCase(btn.dataset.case));
  });
}

function setActiveView(viewKey) {
  document.querySelectorAll(".view").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));

  const target = views[viewKey];
  if (!target) return;

  document.getElementById(target.id).classList.add("active");
  document.querySelector(`.nav-item[data-view="${viewKey}"]`)?.classList.add("active");
  pageEyebrow.textContent = target.eyebrow;
  pageTitle.textContent = target.title;
}

function renderCase(caseObj) {
  currentCase = caseObj;

  caseId.textContent = caseObj.id;
  caseClientName.textContent = caseObj.client;

  caseStatus.className = `badge ${caseObj.statusClass}`;
  caseStatus.textContent = caseObj.status;

  casePipeline.className = `badge ${caseObj.pipelineClass}`;
  casePipeline.textContent = caseObj.pipeline;

  casePriority.className = `badge ${caseObj.priorityClass}`;
  casePriority.textContent = caseObj.priority;

  ovEntityType.textContent = caseObj.entityType;
  ovJurisdiction.textContent = caseObj.jurisdiction;
  ovActivity.textContent = caseObj.activity;
  ovExpected.textContent = caseObj.expected;
  overviewSummary.textContent = caseObj.summary;

  overviewChecks.innerHTML = "";
  caseObj.checks.forEach(([label, result, cls]) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${label}</span><span class="badge ${cls}">${result}</span>`;
    overviewChecks.appendChild(li);
  });

  documentsList.innerHTML = "";
  caseObj.documents.forEach(([name, meta, cls]) => {
    const item = document.createElement("div");
    item.className = "doc-item";
    item.innerHTML = `
      <div class="doc-meta">
        <strong>${name}</strong>
        <span>${meta}</span>
      </div>
      <span class="badge ${cls}">${cls === "green" ? "Verified" : cls === "gold" ? "Review" : "In Progress"}</span>
    `;
    documentsList.appendChild(item);
  });

  ownershipEntity.textContent = caseObj.client;
  ownershipNotes.textContent = caseObj.ownershipNotes;
  screenSanctions.textContent = caseObj.sanctions;
  screenPep.textContent = caseObj.pep;
  screenMedia.textContent = caseObj.media;
  riskScore.textContent = caseObj.riskScore;
  riskNarrative.textContent = caseObj.riskNarrative;

  riskFactors.innerHTML = "";
  caseObj.riskFactors.forEach((factor) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = factor;
    riskFactors.appendChild(chip);
  });

  activityTimeline.innerHTML = "";
  caseObj.activity.forEach(([time, title, text]) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-time">${time}</div>
      <div class="timeline-body">
        <strong>${title}</strong>
        <span>${text}</span>
      </div>
    `;
    activityTimeline.appendChild(item);
  });

  auditTimeline.innerHTML = "";
  caseObj.audit.forEach(([time, actor, text]) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-time">${time}</div>
      <div class="timeline-body">
        <strong>${actor}</strong>
        <span>${text}</span>
      </div>
    `;
    auditTimeline.appendChild(item);
  });

  agentFeed.innerHTML = "";
  caseObj.agents.forEach(([name, text]) => {
    const card = document.createElement("div");
    card.className = "agent-card";
    card.innerHTML = `
      <strong>${name}</strong>
      <span>${text}</span>
    `;
    agentFeed.appendChild(card);
  });
}

function openCase(caseIdValue) {
  const found = cases.find((c) => c.id === caseIdValue);
  if (!found) return;
  renderCase(found);
  setActiveView("workspace");
}

document.querySelectorAll(".nav-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveView(btn.dataset.view);
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
  });
});

caseSearch?.addEventListener("input", (e) => renderQueue(e.target.value));

renderPriorityList();
renderQueue();
renderCase(currentCase);
