import { evaluateCases } from '../../../publications/forward-deployed-engineering/companion/src/evaluation.mjs';
import {
  IncidentTimeline,
  incidentUpdate,
  stabilizationDisposition,
  validateIncidentCommand,
} from '../../../publications/forward-deployed-engineering/companion/src/incident.mjs';
import { summarizeCohorts } from '../../../publications/forward-deployed-engineering/companion/src/observability.mjs';
import {
  transferAccess,
  validateOwnershipAcceptance,
} from '../../../publications/forward-deployed-engineering/companion/src/ownership.mjs';
import { dossierIndex, multiAltitudeMemo } from '../../../publications/forward-deployed-engineering/companion/src/portfolio.mjs';
import { classifyLeverage } from '../../../publications/forward-deployed-engineering/companion/src/product-leverage.mjs';
import { readinessDisposition } from '../../../publications/forward-deployed-engineering/companion/src/readiness.mjs';
import {
  artifactHash,
  chooseRecovery,
  recoveryRehearsal,
  simulateMigration,
} from '../../../publications/forward-deployed-engineering/companion/src/release-recovery.mjs';
import { createOrchidFixture } from '../../../publications/forward-deployed-engineering/companion/src/synthetic-fixture.mjs';
import { runVerticalSlice } from '../../../publications/forward-deployed-engineering/companion/src/vertical-slice.mjs';

const boundary = Object.freeze({
  evidence: 'synthetic-local',
  productionProof: false,
  certificationUse: false,
});

export function module01() {
  const evidence = [
    { id: 'E-01', status: 'reported', statement: 'Technicians spend time finding approved service evidence.' },
    { id: 'E-02', status: 'observed', statement: 'The synthetic ticket lacks a reconciled equipment identity.' },
    { id: 'E-03', status: 'inferred', statement: 'Evidence retrieval may be a useful intervention point.' },
    { id: 'E-04', status: 'unknown', statement: 'The representative cohort and baseline are not established.' },
  ];
  return {
    module: '01',
    evidence,
    boundedRecommendation: 'Investigate one non-safety evidence-assisted inspection path without production access.',
    stopCondition: 'Stop if legitimate data use or a qualified domain authority cannot be established.',
    boundary,
  };
}

export async function module02() {
  const acceptedFixture = createOrchidFixture();
  const accepted = await runVerticalSlice(acceptedFixture);
  const calls = { evidence: 0, inventory: 0 };
  const ambiguousFixture = createOrchidFixture();
  ambiguousFixture.ticket.equipmentCandidates = [
    ambiguousFixture.ticket.equipmentCandidates[0],
    { ...ambiguousFixture.ticket.equipmentCandidates[0], equipmentId: 'OES-PUMP8' },
  ];
  ambiguousFixture.evidenceStore = {
    async findApproved() { calls.evidence += 1; return []; },
  };
  ambiguousFixture.inventoryAdapter = {
    async check() { calls.inventory += 1; return { accepted: true, finalState: 'committed', responseReceived: true, available: true }; },
  };
  const ambiguous = await runVerticalSlice(ambiguousFixture);
  return {
    module: '02',
    accepted: { state: accepted.state, reason: accepted.reason, trace: accepted.trace },
    ambiguous: { state: ambiguous.state, reason: ambiguous.reason, trace: ambiguous.trace },
    downstreamCallsAfterAmbiguity: calls,
    boundary,
  };
}

export async function module03() {
  const cases = [
    ...Array.from({ length: 96 }, (_, index) => ({
      id: `routine-${String(index + 1).padStart(2, '0')}`,
      segment: 'routine',
      input: { output: { action: 'inspect-filter', evidenceIds: ['MANUAL-SYNTHETIC-7'] } },
    })),
    {
      id: 'critical-prohibited',
      segment: 'critical-safety',
      input: { output: { action: 'bypass-safety-interlock', evidenceIds: ['MANUAL-SYNTHETIC-7'] } },
    },
    { id: 'low-connectivity', segment: 'low-connectivity', input: { output: { state: 'fallback-unavailable' } } },
    { id: 'missing-evidence', segment: 'missing-evidence', input: { output: { action: 'inspect-filter', evidenceIds: [] } } },
    { id: 'conflicting-evidence', segment: 'conflicting-evidence', input: { output: { state: 'abstain' } } },
  ];
  const model = { async suggest(input) { return input.output; } };
  const flawedGrader = ({ output }) => ({ pass: Boolean(output.action && output.evidenceIds?.length) });
  const evaluation = await evaluateCases({ model, cases, grader: flawedGrader });
  const passed = evaluation.results.filter((result) => result.grade.pass).length;
  const critical = evaluation.results.find((result) => result.caseId === 'critical-prohibited');
  return {
    module: '03',
    aggregatePassRate: passed / cases.length,
    critical: { ...critical, policyViolation: true, releaseBlocking: true },
    failedSegments: Object.entries(evaluation.segments).filter(([, value]) => value.failed > 0).map(([segment]) => segment),
    disposition: 'stop-critical-segment-and-repair-fallback',
    boundary,
  };
}

export function module04() {
  const cohorts = summarizeCohorts([
    { cohort: 'connected', success: true, latencyMs: 80 },
    { cohort: 'connected', success: true, latencyMs: 100 },
    { cohort: 'low-connectivity', success: true, latencyMs: 850 },
    { cohort: 'low-connectivity', success: false, latencyMs: 1_100 },
  ]);
  const initial = { records: [{ id: 'synthetic-a', schemaVersion: 1 }, { id: 'synthetic-b', schemaVersion: 1 }] };
  const divergent = simulateMigration({ state: initial, requestedConnections: 2, capacityLimit: 4, failAfter: 1 });
  const recovered = simulateMigration({ state: divergent.state, requestedConnections: 2, capacityLimit: 4 });
  const recovery = chooseRecovery({
    externallyVisible: true,
    reversible: false,
    destructiveMigration: true,
    dependencyHealthy: true,
    restoreEvidence: null,
  });
  const rehearsal = recoveryRehearsal({
    scenario: 'synthetic partial migration',
    initialState: 'divergent',
    action: 'roll-forward',
    expectedState: 'completed',
    actualState: recovered.status,
    observedMs: 42,
    targetMs: 100,
    evidence: artifactHash(recovered.state),
    owner: 'synthetic-release-owner',
    limitation: 'local in-memory timing; not a production RTO claim',
  });
  return { module: '04', cohorts, divergent, recovered, recovery, rehearsal, boundary };
}

export function module05() {
  const command = {
    incidentCommander: 'customer-operations-synthetic',
    technicalLead: 'fde-synthetic',
    communicationsOwner: 'customer-comms-synthetic',
    customerImpactOwner: 'customer-service-synthetic',
    cadence: '18-minutes',
    fdeActorId: 'fde-synthetic',
    fdeDesignatedCommander: false,
  };
  const timeline = new IncidentTimeline();
  timeline.append({ occurredAt: '2026-08-16T10:07:00Z', track: 'impact', statement: 'Two sites exceed the evidence-review window.', confidence: 'confirmed', evidence: 'SUPPORT-SYNTHETIC-01' });
  timeline.append({ occurredAt: '2026-08-16T10:10:00Z', track: 'release', statement: 'Expansion is held.', confidence: 'confirmed', evidence: 'RELEASE-SYNTHETIC-01' });
  timeline.append({ occurredAt: '2026-08-16T10:14:00Z', track: 'diagnosis', statement: 'Retry amplification may contribute to latency.', confidence: 'probable' });
  const update = incidentUpdate({
    impact: 'Two synthetic sites cannot complete evidence review inside the operating window.',
    facts: ['Expansion held', 'Offline fallback available'],
    unknowns: ['Connectivity contribution', 'Retry amplification magnitude'],
    actions: ['Compare cohort traces', 'Inspect retry budget'],
    nextUpdateAt: '2026-08-16T10:25:00Z',
  });
  const ownership = Object.fromEntries(['knowledge', 'access', 'telemetry', 'runbook', 'release', 'recovery', 'support', 'decisions', 'openRisk', 'changePath'].map((area) => [area, { owner: `customer-${area}-owner`, demonstratedEvidence: `${area}-synthetic-evidence` }]));
  ownership.fdeAccess = { revoked: false };
  ownership.customerAuthority = { designated: true };
  const access = transferAccess({
    customerPrincipal: { permissions: ['operate', 'release', 'recover'] },
    fdePrincipal: { permissions: ['release'] },
    requiredPermissions: ['operate', 'release', 'recover'],
  });
  const stabilization = stabilizationDisposition({
    impactContained: true,
    serviceRestored: true,
    durableCorrectionVerified: false,
    regressionEvidence: false,
    monitoringWindowComplete: false,
    ownerTransferred: false,
    residualRiskDisposition: false,
  });
  return {
    module: '05',
    command: validateIncidentCommand(command),
    timeline: timeline.list(),
    update,
    ownership: validateOwnershipAcceptance(ownership),
    access,
    stabilization,
    boundary,
  };
}

export function module06() {
  const readiness = readinessDisposition({
    items: [
      { itemId: 'R-01', criterion: 'Non-safety connected path verified', status: 'met', evidence: 'OA-07', owner: 'verification-owner', consequence: 'permit bounded cohort' },
      { itemId: 'R-02', criterion: 'Low-connectivity operating window', status: 'reduced-scope', owner: 'operations-owner', consequence: 'exclude low-connectivity sites' },
    ],
    cohort: 'connected-internal-non-safety',
    gates: ['critical-policy', 'fallback', 'audit', 'recovery'],
    authority: { designated: true, actorId: 'release-owner-synthetic' },
  });
  const baseReuse = classifyLeverage({
    observation: 'Intent and reconciliation seam repeated.',
    contexts: ['orchid-synthetic', 'satellite-synthetic'],
    frequency: 2,
    variance: 'bounded',
    consequence: 'prevents blind retry',
    workaround: 'local ledgers',
    evidenceQuality: 'synthetic',
    isolation: 'isolated',
    candidateLeverage: 'provider-neutral seam',
    disconfirmingEvidence: ['third context absent'],
    validation: 'test a third distinct context',
    owner: 'product-owner-synthetic',
    invariant: true,
  });
  const reuse = {
    ...baseReuse,
    decision: 'defer',
    reason: 'agreed-third-context-gate-not-met',
    baseClassifier: baseReuse,
  };
  const sharedFacts = ['Critical safety segment blocked', 'Low-connectivity cohort excluded', 'FDE access not yet revoked'];
  const memo = multiAltitudeMemo({
    executive: 'Reduced-scope recommendation; ownership transfer blocked.',
    operational: 'Connected internal non-safety cohort only, with recorded stop gates.',
    technical: 'Critical policy defect and retained FDE release permission remain open.',
    sharedFacts,
    authority: 'release-owner-synthetic',
    reviewTrigger: 'critical policy rerun and access exit',
  });
  const evidence = { readiness, reuse, memo };
  const closure = dossierIndex({
    sourceHash: artifactHash(evidence),
    buildHash: artifactHash({ moduleCount: 6, testMode: 'deterministic-local' }),
    issueState: 'course-capstone-review',
    riskState: 'critical-segment-blocked; low-connectivity-excluded; access-exit-open',
    reuseState: 'proposal only; third-context validation required',
    nextOwner: 'synthetic-release-and-customer-ownership-authorities',
  });
  return { module: '06', readiness, reuse, memo, closure, boundary };
}

const modules = { '01': module01, '02': module02, '03': module03, '04': module04, '05': module05, '06': module06 };

export async function runModule(id) {
  const normalized = String(id).padStart(2, '0');
  if (!modules[normalized]) throw new RangeError(`unknown course module: ${id}`);
  return modules[normalized]();
}

export async function runAllModules() {
  const results = [];
  for (const id of Object.keys(modules)) results.push(await runModule(id));
  return results;
}
