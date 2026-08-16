const rows = [
  ["D-001","ordinary",1,0.92,0.94,"correct"],
  ["D-002","ordinary",1,0.88,0.91,"correct"],
  ["D-003","ordinary",1,0.83,0.89,"correct"],
  ["D-004","ordinary",0,0.36,0.42,"irrelevant"],
  ["D-005","ordinary",1,0.74,0.8,"correct"],
  ["D-006","ordinary",0,0.24,0.33,"irrelevant"],
  ["D-007","long-tail",1,0.78,0.62,"correct"],
  ["D-008","long-tail",0,0.42,0.81,"incompatible"],
  ["D-009","long-tail",1,0.73,0.55,"correct"],
  ["D-010","denied-permission",0,0.1,0.76,"permission"],
  ["D-011","missing-unit",0,0.31,0.45,"correct-abstain"],
  ["D-012","stale-source",0,0.28,0.67,"stale"],
  ["D-013","ordinary",1,0.63,0.78,"correct"],
  ["D-014","ordinary",1,0.58,0.76,"correct"],
  ["D-015","ordinary",1,0.66,0.82,"correct"],
  ["D-016","ordinary",1,0.61,0.74,"correct"]
];

export function generateDecisionFixtures(seed = 20260816) {
  return rows.map(([id,segment,relevant,baselineScore,challengerScore,label]) => ({
    id, segment, relevant, baselineScore, challengerScore, label, seed, caseStatus:"fictional-synthetic"
  }));
}

export function generateJudgmentFixtures() {
  return [
    {id:"J-001",reference:"A",left:{id:"A",text:"Evidence matches 16 mm. Compatibility is not guaranteed."},right:{id:"B",text:"This beautifully detailed answer confidently explains that the premium 16 mm candidate is certainly the perfect fit for your repair."}},
    {id:"J-002",reference:"B",left:{id:"A",text:"The answer is detailed and helpful, with several persuasive reasons to choose this candidate immediately."},right:{id:"B",text:"The unit is missing. Add mm or inches before assisted matching can continue."}},
    {id:"J-003",reference:null,left:{id:"A",text:"Two permitted records conflict; abstain and request catalog review."},right:{id:"B",text:"Two permitted records conflict; show both and ask the buyer to decide."},dispute:"catalog-domain authority required"},
    {id:"J-004",reference:"A",left:{id:"A",text:"No supported candidate was found. Try ordinary search or correct the measurement."},right:{id:"B",text:"No supported candidate was found."}}
  ].map((item)=>({...item,caseStatus:"fictional-synthetic"}));
}
