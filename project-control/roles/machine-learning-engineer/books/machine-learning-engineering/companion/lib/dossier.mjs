import { canonicalJson, deepFreeze, sha256Bytes } from './canonical-json.mjs';
import { createEvidenceEnvelope } from './evidence-envelope.mjs';
import { resolveReopen } from './lifecycle.mjs';

export const FIXED_CLOCK = '2026-08-22T00:00:00.000Z';
export const FIXED_SEED = 'benchline-phase-08-seed-v1';
export const ENTRY_HASH = '24b2ef5873262d45c5fbf5df16386dfc7df434fc56295a35b25d32fa2a32c8c9';

export const CHAPTER_CONTRACTS = deepFreeze([
  ['MLE-CH-01','BL-00','UNORIENTED','ORIENTED','Locate the workload-specific MLE decision inside the full lifecycle and authority map.','Product and domain authorities own purpose; named specialists own formal gates.','The MLE identifies and supplies evidence but does not absorb adjacent authority.','Task and authority contract'],
  ['MLE-CH-02','BL-01','ORIENTED','CONTRACTED','Convert an approved purpose into a bounded task contract with explicit decision owners and a NO-ML or HOLD path.','Product owns purpose and priority; domain and formal authorities own validity and permissibility.','The MLE translates an approved purpose into technical evidence requirements but cannot authorize it.','Incumbent and consequence contract'],
  ['MLE-CH-03','BL-02','CONTRACTED','CONTRACTED','Bind a measurable incumbent, consequence model, segment obligations, and acceptance target before candidate work.','Product and domain owners accept the consequence model; evaluation owns independent gate adequacy.','The MLE implements and measures the incumbent but does not set business or domain tolerance alone.','Dataset and label identity'],
  ['MLE-CH-04','BL-03','CONTRACTED','CONTRACTED','Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.','Data owners retain source truth, access, retention, and shared pipeline authority; domain owners retain label validity.','The MLE owns workload-facing contracts and conformance, not the enterprise data estate or legal basis.','Feature and lineage contract'],
  ['MLE-CH-05','BL-04','CONTRACTED','CONTRACTED','Bind feature identity, transformations, feedback arrival, and source/consumer lineage without owning shared data architecture.','Data/platform owners retain shared sources and services; consumers own their product behavior.','The MLE specifies and tests workload transformations, not enterprise data-platform topology.','Population-aware split evidence'],
  ['MLE-CH-06','BL-05','CONTRACTED','ADMISSIBLE','Choose population-aware splits and prove that training and serving transformations conform.','Domain/evaluation owners judge representativeness; platform/data owners retain shared runtime/source authority.','The MLE designs workload splits and conformance tests but cannot self-certify population validity.','Controlled experiment record'],
  ['MLE-CH-07','BL-06','ADMISSIBLE','ADMISSIBLE','Design a controlled experiment that retains the incumbent and changes only the claimed intervention.','Applied Science owns scientific novelty claims; evaluation retains suite adequacy.','The MLE owns workload experiment integrity, not the research agenda or independent gate.','Reconstruction manifest'],
  ['MLE-CH-08','BL-07','ADMISSIBLE','RECONSTRUCTIBLE','Freeze code, data, dependency, parameter, seed, hardware, and execution-context identity and state the strongest supportable rerun claim.','Platform owners define supported runtime; research/evaluation owners retain claim-validity decisions.','The MLE records and tests bounded reconstruction, not universal determinism.','Candidate nomination record'],
  ['MLE-CH-09','BL-08','RECONSTRUCTIBLE','CANDIDATE','Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.','Evaluation retains qualification validity; Applied Science retains scientific-claim authority.','The MLE nominates a candidate but cannot self-certify the independent gate.','Representative segment suite'],
  ['MLE-CH-10','BL-09','CANDIDATE','CANDIDATE','Build a representative suite and segment gate whose thresholds follow consequence rather than aggregate convenience.','Evaluation owns suite adequacy; product/domain/formal authorities own acceptable consequences.','The MLE implements, diagnoses, and remediates but cannot waive a consequential gate.','Uncertainty and error record'],
  ['MLE-CH-11','BL-10','CANDIDATE','CANDIDATE','Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.','Evaluation owns method adequacy; domain/safety authorities judge consequential error sufficiency.','The MLE computes and diagnoses evidence but cannot turn method output into formal acceptance.','Technical qualification disposition'],
  ['MLE-CH-12','BL-11','CANDIDATE','TECHNICALLY-QUALIFIED','Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.','Independent evaluation and relevant formal authorities retain stop-ship and acceptance decisions.','The MLE issues the workload technical disposition and routes external decisions; it cannot self-approve them.','Immutable executable package'],
  ['MLE-CH-13','BL-12','TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED','Bind executable artifact, dependencies, interface, intended/excluded use, evaluated bounds, approvals, limitations, hashes, and previous-good target.','Security, platform, product, domain, and evaluation owners retain their formal approvals.','The MLE assembles and verifies the workload package but cannot fabricate or substitute approvals.','Consumer compatibility contract'],
  ['MLE-CH-14','BL-13','TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED','Freeze request/response contracts, consumer identities, coexistence/migration evidence, and fallback ownership.','Consumer/application owners accept product compatibility; platform owners own shared interface support.','The MLE validates workload compatibility but does not own every consuming application or agent effect.','Promotion and recovery packet'],
  ['MLE-CH-15','BL-14','TECHNICALLY-QUALIFIED','RELEASABLE','Verify end-to-end lineage, inventory, integrity, access evidence, promotion packet, and previous-good recovery identity.','Security owns control requirements and exceptions; platform owners own shared promotion mechanisms.','The MLE implements/tests workload controls and supplies evidence without self-approving security exceptions.','Operating envelope record'],
  ['MLE-CH-16','BL-15','RELEASABLE','OPERABLE','Measure representative demand, latency, error, capacity, staged exposure, bake/abort rules, and degraded mode for the workload.','Platform/SRE own fleet capacity, SLOs, and incident command; product owns exposure intent.','The MLE owns model-workload envelope evidence, not generalized fleet reliability.','Observation contract'],
  ['MLE-CH-17','BL-16','OPERABLE','OBSERVED','Bind observation signals, delayed labels, proxies, drift, segments, owners, and alert-to-decision routes without automatic truth claims.','Evaluation/domain owners define sufficient evidence; SRE/platform own shared telemetry and incident mechanisms.','The MLE diagnoses workload evidence but cannot invent ground truth or automate formal disposition.','Incident and repair evidence'],
  ['MLE-CH-18','BL-17','OBSERVED','REQUALIFIED','Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair.','SRE owns incident command/fleet action; evaluation and formal authorities retain their gates.','The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance.','Control decision record'],
  ['MLE-CH-19','BL-18','REQUALIFIED','CONTROLLED','Integrate workload-specific control tests, exceptions, residual limits, and formal decisions accumulated since the task contract.','Security, safety, privacy, governance, legal, product, domain, and evaluation owners retain formal decisions.','The MLE implements/tests workload controls and routes exceptions but cannot self-approve them.','Retirement evidence'],
  ['MLE-CH-20','BL-19','CONTROLLED','RETIRED','Execute retirement across consumers, endpoints, credentials, monitoring, registry, retention, recovery, and archive, then prove no serving path remains.','Product/domain/formal authorities approve retirement and retention; platform/security owners execute shared shutdown controls.','The MLE verifies workload non-serving evidence but cannot set legal retention or shared-system policy.','Hostile-reviewed dossier'],
  ['MLE-CH-21','BL-20','RETIRED','REVIEWED','Hostile-review the complete dossier, derive one reusable workload standard, and route one systemic issue to its actual owner.','Each specialist retains its decision; organization owners decide shared platform or policy adoption.','The MLE mentors through evidence review and routes systemic issues; it does not unilaterally set cross-team policy.','No further evidence in this companion'],
].map(([chapterId,milestoneId,incomingState,outgoingState,decision,owner,authorityCeiling,nextEvidence], index) => ({
  chapterId, milestoneId, incomingState, outgoingState, decision, owner, authorityCeiling, nextEvidence,
  incomingStates: index === 18 ? ['REQUALIFIED', 'ROLLED-BACK'] : [incomingState],
  outgoingStates: index === 17 ? ['REQUALIFIED', 'ROLLED-BACK'] : [outgoingState],
  labId: `${chapterId}-LAB-01`, fixtureId: `FIX-${chapterId}-1`, artifactVersion: '1.0.0', index,
})));

const POSITIVE_EVIDENCE = deepFreeze([
  ['workload identity','evidence state','owner route'], ['purpose','population','authority'],
  ['incumbent','consequence','segment'], ['dataset identity','label identity','provenance'],
  ['feature identity','transformation','consumer lineage'], ['population split','time cutoff','conformance'],
  ['incumbent retained','single intervention','controlled comparison'], ['code digest','data digest','execution context'],
  ['baseline retained','candidate identity','failed candidates'], ['representative suite','segment gate','consequence'],
  ['uncertainty applicability','sample limit','error taxonomy'], ['technical disposition','external owner','rollback evidence'],
  ['artifact digest','dependency identity','previous-good target'], ['interface contract','consumer identity','fallback owner'],
  ['lineage','integrity','promotion packet'], ['representative demand','latency distribution','abort rule'],
  ['observation window','label maturity','decision route'], ['incident separation','exact recovery target','new candidate identity'],
  ['control provenance','exception scope','formal owner'], ['consumer inventory','negative serving probe','bounded observation time'],
  ['hash chain','reverse links','retained authority'],
]);

export const POSITIVE_FIXTURES = deepFreeze(CHAPTER_CONTRACTS.map((contract, index) => ({
  chapterId: contract.chapterId, evidence: [...POSITIVE_EVIDENCE[index]],
  fixtureId: contract.fixtureId, milestoneId: contract.milestoneId,
})));

export const MUTATION_CONTRACTS = deepFreeze([
  ['OWNER-MISSING','HOLD'], ['PURPOSE-DISPUTED','HOLD'], ['COMPARATOR-DRIFT','REJECT'],
  ['PROVENANCE-ABSENT','HOLD'], ['CONSUMER-UNDECLARED','HOLD'], ['TEMPORAL-LEAK','REJECT'],
  ['PREPROCESSING-CONFOUNDED','REJECT'], ['MANIFEST_FIELD_MISSING','HOLD'], ['BASELINE_ERASED','REJECT'],
  ['AGGREGATE_OVERRIDES_SEGMENT','HOLD'], ['CALIBRATION_INAPPLICABLE','HOLD'], ['EXTERNAL_OWNER_MISSING','HOLD'],
  ['MUTABLE_TAG_ONLY','REJECT'], ['VERSION_AXES_COLLAPSED','HOLD'], ['SUBJECT_DIGEST_MISSING','HOLD'],
  ['MEAN_ONLY_SERVING_CLAIM','HOLD'], ['BASELINE_OR_WINDOW_MISSING','HOLD'], ['COMMAND_OWNER_COLLAPSED','REJECT'],
  ['CONTROL_PROVENANCE_MISSING','REOPEN'], ['RESIDUAL_ENDPOINT_OR_ALIAS','REOPEN'], ['STALE_HASH','REJECT'],
].map(([diagnostic, disposition], index) => ({
  chapterId: CHAPTER_CONTRACTS[index].chapterId, diagnostic, disposition,
  fixtureId: `FIX-${CHAPTER_CONTRACTS[index].chapterId}-2`,
  labId: `${CHAPTER_CONTRACTS[index].chapterId}-LAB-02`,
})));

const AUTHORITY_ROUTE = 'Route any approval, consequence, control, or shared-system decision to the named external owner.';
const LIMITATION = 'This fixed synthetic result demonstrates contract mechanics only; it does not prove model quality, safety, legal or privacy approval, deployment readiness, production availability, fleet reliability, business value, or complete retirement of unknown paths.';

export function contractForMilestone(milestoneId) {
  const contract = CHAPTER_CONTRACTS.find((candidate) => candidate.milestoneId === milestoneId);
  if (!contract) throw Object.assign(new Error(`unknown milestone: ${milestoneId}`), { code: 'MILESTONE_UNKNOWN' });
  return contract;
}

export function createPositiveRecord(options) {
  const contract = contractForMilestone(options.milestoneId);
  if (!contract.incomingStates.includes(options.incomingState) || !contract.outgoingStates.includes(options.outgoingState)) {
    throw Object.assign(new Error(`wrong state contract for ${options.milestoneId}`), { code: 'DOSSIER_TRANSITION_INVALID' });
  }
  if (contract.index === 18 && options.incomingState !== options.predecessorState) {
    throw Object.assign(new Error('BL-18 must consume the exact BL-17 branch state'), { code: 'DOSSIER_TRANSITION_INVALID' });
  }
  if (!/^[a-f0-9]{64}$/.test(options.priorHash ?? '')) throw Object.assign(new Error('priorHash must be SHA-256'), { code: 'DOSSIER_HASH_INVALID' });
  const branchEvidence = contract.index === 17 && options.outgoingState === 'ROLLED-BACK'
    ? ['BL-17 fixed-fixture contract satisfied for the previous-good recovery identity.', 'Any repaired new-candidate identity remains separate and must requalify under external authority.']
    : contract.index === 18 && options.incomingState === 'ROLLED-BACK'
      ? ['BL-18 fixed-fixture control gate consumed the exact ROLLED-BACK recovery identity.', 'Control does not waive requalification or any external authority decision.']
      : [`${contract.milestoneId} fixed-fixture contract satisfied`, 'All authority decisions remain external to the companion.'];
  const envelope = createEvidenceEnvelope({
    chapterId: contract.chapterId, decision: contract.decision,
    evidence: branchEvidence,
    owner: contract.owner, authorityRoute: AUTHORITY_ROUTE, authorityCeiling: contract.authorityCeiling,
    limitation: LIMITATION, nextEvidence: contract.nextEvidence,
  });
  const fixture = POSITIVE_FIXTURES[contract.index];
  if (fixture.chapterId !== contract.chapterId || fixture.milestoneId !== contract.milestoneId || fixture.fixtureId !== contract.fixtureId) {
    throw Object.assign(new Error(`positive fixture drift for ${contract.chapterId}`), { code: 'FIXTURE_INVALID' });
  }
  return deepFreeze({
    schema: 'mle-companion-dossier-record/v1', artifactVersion: contract.artifactVersion,
    authorityCeiling: contract.authorityCeiling, authorityRoute: AUTHORITY_ROUTE,
    chapterId: contract.chapterId, decision: contract.decision, disposition: 'PASS',
    evidence: [...envelope.evidence], fixedClock: FIXED_CLOCK, fixedSeed: FIXED_SEED,
    fixtureHash: sha256Bytes(canonicalJson(fixture)), fixtureId: contract.fixtureId,
    incomingState: options.incomingState, inputHash: options.priorHash,
    labId: contract.labId, limitation: LIMITATION, milestoneId: contract.milestoneId,
    nextEvidence: contract.nextEvidence, outgoingState: options.outgoingState,
    outputHash: sha256Bytes(canonicalJson(envelope)), owner: contract.owner,
    priorHash: options.priorHash, truthState: 'synthetic-deterministic',
  });
}

export function createNegativeRecord(options) {
  const contract = contractForMilestone(options.milestoneId);
  if (!/^[a-f0-9]{64}$/.test(options.priorHash ?? '')) throw Object.assign(new Error('priorHash must be SHA-256'), { code: 'DOSSIER_HASH_INVALID' });
  if (!contract.incomingStates.includes(options.incomingState)) {
    throw Object.assign(new Error(`wrong incoming state for ${options.milestoneId}`), { code: 'DOSSIER_TRANSITION_INVALID' });
  }
  const mutation = MUTATION_CONTRACTS[contract.index];
  if (mutation.chapterId !== contract.chapterId) throw Object.assign(new Error(`mutation fixture drift for ${contract.chapterId}`), { code: 'FIXTURE_INVALID' });
  const reopen = options.reopenTrigger ? resolveReopen(options.reopenTrigger) : null;
  const mutationReopen = !reopen && mutation.disposition === 'REOPEN'
    ? resolveReopen(contract.index === 18 ? 'authority constraint or permitted use' : 'runtime dependencies interface or serving envelope')
    : null;
  const activeReopen = reopen ?? mutationReopen;
  const diagnostic = reopen
    ? `REOPEN_${reopen.change.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}`
    : mutation.diagnostic;
  const fixture = reopen
    ? { change: reopen.change, invalidates: reopen.invalidates, reopenTarget: reopen.reopenTarget, sourceState: options.incomingState }
    : { chapterId: mutation.chapterId, diagnostic: mutation.diagnostic, disposition: mutation.disposition, fixtureId: mutation.fixtureId };
  const evidence = reopen
    ? [`Changed evidence: ${reopen.change}`, `Invalidated evidence: ${reopen.invalidates.join(', ')}`]
    : [`${mutation.fixtureId} changed-evidence fixture`, `Named diagnostic ${mutation.diagnostic}`];
  const outputPayload = {
    diagnostic, disposition: activeReopen ? 'REOPEN' : mutation.disposition,
    evidence, inputHash: options.priorHash, milestoneId: contract.milestoneId,
    outgoingState: activeReopen?.reopenTarget ?? options.incomingState,
  };
  return deepFreeze({
    schema: 'mle-companion-port-result/v1', authorityCeiling: contract.authorityCeiling,
    authorityRoute: AUTHORITY_ROUTE, chapterId: contract.chapterId,
    diagnostic, disposition: activeReopen ? 'REOPEN' : mutation.disposition, evidence,
    fixedClock: FIXED_CLOCK, fixedSeed: FIXED_SEED,
    fixtureHash: sha256Bytes(canonicalJson(fixture)),
    fixtureId: reopen ? `FIX-REOPEN-${String(reopenTriggerIndex(reopen.change) + 1).padStart(2, '0')}` : mutation.fixtureId,
    incomingState: options.incomingState, inputHash: options.priorHash, labId: reopen ? `${contract.chapterId}-REOPEN` : mutation.labId,
    limitation: LIMITATION, milestoneId: contract.milestoneId, nextEvidence: contract.nextEvidence,
    outgoingState: activeReopen?.reopenTarget ?? options.incomingState,
    outputHash: sha256Bytes(canonicalJson(outputPayload)), owner: contract.owner,
    priorHash: options.priorHash, truthState: 'synthetic-deterministic',
    ...(activeReopen ? {
      changedEvidence: activeReopen.change, invalidatedEvidence: [...activeReopen.invalidates],
      reopenTarget: activeReopen.reopenTarget, reopenTrigger: activeReopen.change,
      sourceState: options.incomingState,
    } : {}),
  });
}

function reopenTriggerIndex(change) {
  const order = ['purpose or intended use', 'data labels features or population', 'runtime dependencies interface or serving envelope', 'authority constraint or permitted use'];
  return order.indexOf(change);
}
