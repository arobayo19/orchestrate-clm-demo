const views = {
  dashboard: { id: "dashboard-view", eyebrow: "Overview", title: "Dashboard" },
  intake: { id: "intake-view", eyebrow: "Intake Queue", title: "Onboarding Queue" },
  workspace: { id: "workspace-view", eyebrow: "Case Management", title: "Case Workspace" },
  escalations: { id: "escalations-view", eyebrow: "Case Management", title: "Escalations" },
  risk: { id: "risk-view", eyebrow: "Risk", title: "Risk Overview" },
  edd: { id: "edd-view", eyebrow: "Risk", title: "EDD Pipeline" },
  monitoring: { id: "monitoring-view", eyebrow: "Intake Queue", title: "Periodic Reviews Queue" },
  triggers: { id: "triggers-view", eyebrow: "Intake Queue", title: "Trigger Reviews Queue" },
  screening: { id: "screening-view", eyebrow: "Intake Queue", title: "Screening Queue" },
  agents: { id: "agents-view", eyebrow: "AI Agents", title: "Automation Activity" },
  audit: { id: "audit-view", eyebrow: "System", title: "Audit Trail" }
};

const cases = [
  {
    id: "CASE-2026-00128",
    client: "Apex Digital LLC",
    queueType: "onboarding",
    legalName: "Apex Digital LLC",
    formationDate: "2020-07-14",
    registrationNumber: "REG-2020-88421",
    taxId: "12-3456789",
    registeredAddress: "244 Harbor Avenue, Boston, MA, United States",
    businessDescription: "Digital asset exchange and institutional settlement services.",
    industry: "Crypto Services",
    purposeOfAccount: "Brokerage & Custody",
    sourceOfFunds: "Operating Revenue",
    beneficialOwnersCount: "2 identified",
    controlPersonCount: "1 identified",
    authorizedUsersCount: "2 identified",
    ownershipStructureSummary: "Direct ownership, no layered entities",
    complexityFlag: "None",
    riskTier: "Moderate",
    eddTriggered: "No",
    mainRiskFactorsSummary: "Crypto services, OTC activity",

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
    activityLog: [
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
    queueType: "onboarding",
    legalName: "North Harbor Ventures LP",
    formationDate: "2019-03-11",
    registrationNumber: "CAY-LP-44318",
    taxId: "Pending",
    registeredAddress: "Maple House, George Town, Cayman Islands",
    businessDescription: "Investment vehicle for subscriptions, treasury movements, and fund redemptions.",
    industry: "Investment Management",
    purposeOfAccount: "Custody Only",
    sourceOfFunds: "Capital Contributions",
    beneficialOwnersCount: "Pending full review",
    controlPersonCount: "1 identified",
    authorizedUsersCount: "Pending",
    ownershipStructureSummary: "Layered fund structure under review",
    complexityFlag: "Layered ownership",
    riskTier: "High",
    eddTriggered: "Likely",
    mainRiskFactorsSummary: "Offshore entity, fund structure, layered ownership",

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
    activityLog: [
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
    queueType: "screening",
    legalName: "Solstice Exchange Ltd",
    formationDate: "2018-11-23",
    registrationNumber: "SG-88411-EX",
    taxId: "84-9382741",
    registeredAddress: "88 Market Street, Singapore",
    businessDescription: "Digital asset infrastructure provider supporting institutional cross-border trading flows.",
    industry: "Crypto Services",
    purposeOfAccount: "Brokerage & Custody",
    sourceOfFunds: "Operating Revenue",
    beneficialOwnersCount: "UBOs identified",
    controlPersonCount: "1 identified",
    authorizedUsersCount: "3 identified",
    ownershipStructureSummary: "Intermediary holding company in chain",
    complexityFlag: "Complex ownership",
    riskTier: "High",
    eddTriggered: "Yes",
    mainRiskFactorsSummary: "Cross-border trading, complex ownership, screening uncertainty",

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
    activityLog: [
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
  },
  {
    id: "CASE-2026-00125",
    client: "Meridian Capital Partners",
    queueType: "periodic",
    legalName: "Meridian Capital Partners",
    formationDate: "2021-01-09",
    registrationNumber: "REG-2021-11390",
    taxId: "91-2245780",
    registeredAddress: "120 Federal Street, Boston, MA, United States",
    businessDescription: "Institutional investment advisory firm supporting treasury transfers and investment subscriptions.",
    industry: "Investment Management",
    purposeOfAccount: "Custody Only",
    sourceOfFunds: "Operating Revenue",
    beneficialOwnersCount: "1 identified",
    controlPersonCount: "1 identified",
    authorizedUsersCount: "1 identified",
    ownershipStructureSummary: "Direct ownership and fully reconciled",
    complexityFlag: "None",
    riskTier: "Moderate",
    eddTriggered: "No",
    mainRiskFactorsSummary: "Investment advisory, domestic entity, low ownership complexity",

    status: "In CDD Review",
    statusClass: "blue",
    pipeline: "Standard CDD",
    pipelineClass: "gray",
    aging: "3h 18m",
    priority: "FIFO",
    priorityClass: "gray",
    assignee: "Jordan T.",
    entityType: "LLC",
    jurisdiction: "Delaware, US",
    activity: "Institutional investment advisory",
    expected: "Treasury transfers and investment subscriptions",
    summary: "CDD extraction and validation are underway. Entity documents and ownership information are complete, with screening still in progress.",
    checks: [
      ["Document completeness", "Complete", "green"],
      ["Entity verification", "Verified", "green"],
      ["Address verification", "Verified", "green"],
      ["Screening status", "Pending screening", "gold"]
    ],
    documents: [
      ["Certificate of Formation", "Verified", "green"],
      ["Operating Agreement", "Ownership extracted and reconciled", "green"],
      ["W-9", "Verified against EIN data", "green"]
    ],
    ownershipNotes: "Ownership structure is direct and fully reconciled. One control person identified with no additional complexity.",
    sanctions: "Pending screening results from connected provider.",
    pep: "No PEP concerns identified at intake.",
    media: "No material negative media found so far.",
    riskScore: 52,
    riskNarrative: "Moderate operational risk due to transaction profile, but otherwise mitigated by straightforward structure and complete onboarding data.",
    riskFactors: ["Investment advisory", "Domestic entity", "Low ownership complexity"],
    activityLog: [
      ["10:18 UTC", "CDD Review started", "Case entered standard CDD workflow."],
      ["10:24 UTC", "Entity Verification Agent", "Verified formation and address records."],
      ["10:31 UTC", "Screening Agent", "Submitted sanctions and adverse media screening requests."]
    ],
    audit: [
      ["10:18 UTC", "System", "Moved case into In CDD Review."],
      ["10:24 UTC", "Entity Verification Agent", "Verified entity details against public registry."],
      ["10:31 UTC", "Screening Agent", "Submitted screening request."]
    ],
    agents: [
      ["Entity Verification Agent", "Entity and address checks passed."],
      ["Screening Agent", "Awaiting provider results."],
      ["Risk Summary Agent", "Preliminary risk profile generated."]
    ]
  }
];
function getLastAction(caseObj) {
  if (!caseObj.activityLog || !caseObj.activityLog.length) return ["No activity", ""];
  const [time, title] = caseObj.activityLog[caseObj.activityLog.length - 1];
  return [title, time];
}

function getRiskBadge(score) {
  if (score >= 80) return { label: "High", className: "red" };
  if (score >= 60) return { label: "Moderate", className: "gold" };
  return { label: "Low", className: "green" };
}

function parseAgingHours(agingText) {
  const lower = agingText.toLowerCase();
  let total = 0;
  const dayMatch = lower.match(/(\d+)d/);
  const hourMatch = lower.match(/(\d+)h/);
  const minMatch = lower.match(/(\d+)m/);
  if (dayMatch) total += Number(dayMatch[1]) * 24;
  if (hourMatch) total += Number(hourMatch[1]);
  if (minMatch) total += Number(minMatch[1]) / 60;
  return total;
}

function isSLARisk(caseObj) {
  return caseObj.priority === "Escalated" || parseAgingHours(caseObj.aging) >= 4;
}

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

const pageEyebrow = document.getElementById("pageEyebrow");
const pageTitle = document.getElementById("pageTitle");

const caseId = document.getElementById("caseId");
const caseClientName = document.getElementById("caseClientName");
const caseStatus = document.getElementById("caseStatus");
const casePipeline = document.getElementById("casePipeline");
const casePriority = document.getElementById("casePriority");

const ovLegalName = document.getElementById("ovLegalName");
const ovEntityType = document.getElementById("ovEntityType");
const ovJurisdiction = document.getElementById("ovJurisdiction");
const ovFormationDate = document.getElementById("ovFormationDate");
const ovRegistrationNumber = document.getElementById("ovRegistrationNumber");
const ovTaxId = document.getElementById("ovTaxId");
const ovRegisteredAddress = document.getElementById("ovRegisteredAddress");
const ovBusinessDescription = document.getElementById("ovBusinessDescription");
const ovIndustry = document.getElementById("ovIndustry");
const ovPurpose = document.getElementById("ovPurpose");
const ovExpected = document.getElementById("ovExpected");
const ovSourceOfFunds = document.getElementById("ovSourceOfFunds");

const ovBeneficialOwners = document.getElementById("ovBeneficialOwners");
const ovControlPerson = document.getElementById("ovControlPerson");
const ovAuthorizedUsers = document.getElementById("ovAuthorizedUsers");
const ovOwnershipStructure = document.getElementById("ovOwnershipStructure");
const ovComplexityFlag = document.getElementById("ovComplexityFlag");

const overviewChecks = document.getElementById("overviewChecks");
const overviewSummary = document.getElementById("overviewSummary");

const ovRiskScoreSummary = document.getElementById("ovRiskScoreSummary");
const ovRiskTier = document.getElementById("ovRiskTier");
const ovEddTriggered = document.getElementById("ovEddTriggered");
const ovMainRiskFactors = document.getElementById("ovMainRiskFactors");
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
let activeStatusChip = "all";
let sortByAgingDesc = true;

function renderPriorityList() {
  if (!priorityList) return;
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

function renderQueueCounts() {
  const counts = {
    all: cases.length,
    completeness: cases.filter(c => c.status === "Completeness Review").length,
    pendingClient: cases.filter(c => c.status === "Pending Client Response").length,
    cdd: cases.filter(c => c.status === "In CDD Review").length,
    screening: cases.filter(c => c.status === "Pending Screening").length,
    human: cases.filter(c => c.status === "Pending Human Review").length,
    sla: cases.filter(c => isSLARisk(c)).length
  };

  const byId = (id) => document.getElementById(id);
  if (byId("countAll")) byId("countAll").textContent = counts.all;
  if (byId("countCompleteness")) byId("countCompleteness").textContent = counts.completeness;
  if (byId("countPendingClient")) byId("countPendingClient").textContent = counts.pendingClient;
  if (byId("countCDD")) byId("countCDD").textContent = counts.cdd;
  if (byId("countScreening")) byId("countScreening").textContent = counts.screening;
  if (byId("countHuman")) byId("countHuman").textContent = counts.human;
  if (byId("countSLA")) byId("countSLA").textContent = counts.sla;
}

function renderQueue() {
  if (!queueBody) return;
  queueBody.innerHTML = "";

  const searchValue = (caseSearch?.value || "").toLowerCase().trim();
  const statusValue = statusFilter?.value || "all";
  const pipelineValue = pipelineFilter?.value || "all";
  const priorityValue = priorityFilter?.value || "all";
  const jurisdictionValue = jurisdictionFilter?.value || "all";
  const assigneeValue = assigneeFilter?.value || "all";

  let visibleCases = [...cases].filter((item) => {
    const searchable = `${item.client} ${item.id} ${item.activity} ${item.jurisdiction}`.toLowerCase();

    const matchesSearch = !searchValue || searchable.includes(searchValue);
    const matchesStatus = statusValue === "all" ? true : item.status === statusValue;
    const matchesPipeline = pipelineValue === "all" ? true : item.pipeline === pipelineValue;
    const matchesPriority = priorityValue === "all" ? true : item.priority === priorityValue;
    const matchesJurisdiction = jurisdictionValue === "all" ? true : item.jurisdiction === jurisdictionValue;
    const matchesAssignee = assigneeValue === "all" ? true : item.assignee === assigneeValue;
    const matchesChip =
      activeStatusChip === "all"
        ? true
        : activeStatusChip === "sla-risk"
        ? isSLARisk(item)
        : item.status === activeStatusChip;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPipeline &&
      matchesPriority &&
      matchesJurisdiction &&
      matchesAssignee &&
      matchesChip
    );
  });

  visibleCases.sort((a, b) => {
    const aHours = parseAgingHours(a.aging);
    const bHours = parseAgingHours(b.aging);
    return sortByAgingDesc ? bHours - aHours : aHours - bHours;
  });

  visibleCases.forEach((item) => {
    const risk = getRiskBadge(item.riskScore);
    const [lastActionLabel, lastActionTime] = getLastAction(item);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="client-cell">
          <div class="client-name">${item.client}</div>
          <div class="client-sub">${item.id}</div>
          <div class="client-meta">${item.activity}</div>
        </div>
      </td>
      <td><span class="badge ${item.statusClass}">${item.status}</span></td>
      <td><span class="badge ${item.pipelineClass}">${item.pipeline}</span></td>
      <td>
        <div class="risk-cell">
          <span class="badge ${risk.className}">${risk.label}</span>
          <div class="table-note">Score ${item.riskScore}</div>
        </div>
      </td>
      <td>${item.jurisdiction}</td>
      <td>
        <div>${item.aging}</div>
        <div class="${isSLARisk(item) ? "sla-flag" : "sla-safe"}" style="margin-top:8px;">
          ${isSLARisk(item) ? "SLA Risk" : "On Track"}
        </div>
      </td>
      <td>${item.assignee}</td>
      <td>
        <div class="last-action">
          ${lastActionLabel}
          <span>${lastActionTime}</span>
        </div>
      </td>
      <td><button class="open-link" data-case="${item.id}">Open</button></td>
    `;
    queueBody.appendChild(tr);
  });

  document.querySelectorAll(".open-link").forEach((btn) => {
    btn.addEventListener("click", () => openCase(btn.dataset.case));
  });

  renderQueueCounts();
}

function setActiveView(viewKey) {
  document.querySelectorAll(".view").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));

  const target = views[viewKey];
  if (!target) return;

  document.getElementById(target.id)?.classList.add("active");
  document.querySelector(`.nav-item[data-view="${viewKey}"]`)?.classList.add("active");
  if (pageEyebrow) pageEyebrow.textContent = target.eyebrow;
  if (pageTitle) pageTitle.textContent = target.title;
}

function renderCase(caseObj) {
  currentCase = caseObj;

  if (caseId) caseId.textContent = caseObj.id;
  if (caseClientName) caseClientName.textContent = caseObj.client;

  if (caseStatus) {
    caseStatus.className = `badge ${caseObj.statusClass}`;
    caseStatus.textContent = caseObj.status;
  }

  if (casePipeline) {
    casePipeline.className = `badge ${caseObj.pipelineClass}`;
    casePipeline.textContent = caseObj.pipeline;
  }

  if (casePriority) {
    casePriority.className = `badge ${caseObj.priorityClass}`;
    casePriority.textContent = caseObj.priority;
  }

  if (ovLegalName) ovLegalName.textContent = caseObj.legalName || caseObj.client;
if (ovEntityType) ovEntityType.textContent = caseObj.entityType || "-";
if (ovJurisdiction) ovJurisdiction.textContent = caseObj.jurisdiction || "-";
if (ovFormationDate) ovFormationDate.textContent = caseObj.formationDate || "-";
if (ovRegistrationNumber) ovRegistrationNumber.textContent = caseObj.registrationNumber || "-";
if (ovTaxId) ovTaxId.textContent = caseObj.taxId || "-";
if (ovRegisteredAddress) ovRegisteredAddress.textContent = caseObj.registeredAddress || "-";
if (ovBusinessDescription) ovBusinessDescription.textContent = caseObj.businessDescription || "-";
if (ovIndustry) ovIndustry.textContent = caseObj.industry || "-";
if (ovPurpose) ovPurpose.textContent = caseObj.purposeOfAccount || "-";
if (ovExpected) ovExpected.textContent = caseObj.expected || "-";
if (ovSourceOfFunds) ovSourceOfFunds.textContent = caseObj.sourceOfFunds || "-";

if (ovBeneficialOwners) ovBeneficialOwners.textContent = caseObj.beneficialOwnersCount || "-";
if (ovControlPerson) ovControlPerson.textContent = caseObj.controlPersonCount || "-";
if (ovAuthorizedUsers) ovAuthorizedUsers.textContent = caseObj.authorizedUsersCount || "-";
if (ovOwnershipStructure) ovOwnershipStructure.textContent = caseObj.ownershipStructureSummary || "-";
if (ovComplexityFlag) ovComplexityFlag.textContent = caseObj.complexityFlag || "-";

if (ovRiskScoreSummary) ovRiskScoreSummary.textContent = caseObj.riskScore || "-";
if (ovRiskTier) ovRiskTier.textContent = caseObj.riskTier || "-";
if (ovEddTriggered) ovEddTriggered.textContent = caseObj.eddTriggered || "-";
if (ovMainRiskFactors) ovMainRiskFactors.textContent = caseObj.mainRiskFactorsSummary || "-";

if (overviewSummary) overviewSummary.textContent = caseObj.summary;

  if (overviewChecks) {
    overviewChecks.innerHTML = "";
    caseObj.checks.forEach(([label, result, cls]) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${label}</span><span class="badge ${cls}">${result}</span>`;
      overviewChecks.appendChild(li);
    });
  }

  if (documentsList) {
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
  }

  if (ownershipEntity) ownershipEntity.textContent = caseObj.client;
  if (ownershipNotes) ownershipNotes.textContent = caseObj.ownershipNotes;
  if (screenSanctions) screenSanctions.textContent = caseObj.sanctions;
  if (screenPep) screenPep.textContent = caseObj.pep;
  if (screenMedia) screenMedia.textContent = caseObj.media;
  if (riskScore) riskScore.textContent = caseObj.riskScore;
  if (riskNarrative) riskNarrative.textContent = caseObj.riskNarrative;

  if (riskFactors) {
    riskFactors.innerHTML = "";
    caseObj.riskFactors.forEach((factor) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = factor;
      riskFactors.appendChild(chip);
    });
  }

  if (activityTimeline) {
    activityTimeline.innerHTML = "";
    caseObj.activityLog.forEach(([time, title, text]) => {
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
  }

  if (auditTimeline) {
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
  }

  if (agentFeed) {
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
    document.getElementById(`tab-${tab.dataset.tab}`)?.classList.add("active");
  });
});

caseSearch?.addEventListener("input", renderQueue);
statusFilter?.addEventListener("change", renderQueue);
pipelineFilter?.addEventListener("change", renderQueue);
priorityFilter?.addEventListener("change", renderQueue);
jurisdictionFilter?.addEventListener("change", renderQueue);
assigneeFilter?.addEventListener("change", renderQueue);

resetFiltersBtn?.addEventListener("click", () => {
  if (caseSearch) caseSearch.value = "";
  if (statusFilter) statusFilter.value = "all";
  if (pipelineFilter) pipelineFilter.value = "all";
  if (priorityFilter) priorityFilter.value = "all";
  if (jurisdictionFilter) jurisdictionFilter.value = "all";
  if (assigneeFilter) assigneeFilter.value = "all";

  activeStatusChip = "all";
  queueChips.forEach((chip) => chip.classList.remove("active"));
  document.querySelector('.queue-chip[data-status-filter="all"]')?.classList.add("active");

  renderQueue();
});

sortAgingBtn?.addEventListener("click", () => {
  sortByAgingDesc = !sortByAgingDesc;
  sortAgingBtn.textContent = sortByAgingDesc ? "Sort by Aging" : "Sort by Aging ↑";
  renderQueue();
});

queueChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    queueChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeStatusChip = chip.dataset.statusFilter;
    renderQueue();
  });
});

renderPriorityList();
renderQueue();
renderCase(currentCase);
