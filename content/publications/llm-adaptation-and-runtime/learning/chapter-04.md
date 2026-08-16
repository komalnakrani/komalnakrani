# Learning Pack 4 - Specify the Data Recipe

> Publication learning material only. Not an Abhyaas certification bank.

## Recall and explain

1. Which fields make a data recipe reproducible?
2. Why must every example map to a target or protected behavior clause?
3. What is the difference between a mixture allocation and a population estimate?
4. Why does dataset documentation not create rights or consent?
5. Which synthetic-generation records must remain visible?

## Scenario decisions

### Convenient export

A production export lacks an approving owner and retention rule, includes personal data, and overlaps a frozen holdout family. State the decision and why later redaction cannot repair every defect.

### Multilingual shortfall

Gujarati examples consume more tokens and one conflict slice has too few independent families. Decide whether to downsample, generate, revise, or record a gap.

### Expired authority

A source approval expires after curation. Trace the invalidation and name which authority decides deletion and future artifact handling.

## Applied exercise

Write a recipe with hypothesis, example schema, authorized sources, transformation functions, mixture dimensions, exclusions, retention states, split firewall, reviewers, authorities, gaps, stop rules, and an immutable identity.

## Formative questions

1. Is synthetic data independent truth? **Answer:** no; it remains generated candidate data with disclosed origin and review limits.
2. May evaluation examples repair a sparse training slice? **Answer:** no; their families remain excluded.
3. What does `recipe-specified-data-gate-pending` authorize? **Answer:** execution of the synthetic recipe audit, not training or real-data use.

## Completion evidence

Pass when another engineer can reproduce the planned units, sources, transformations, mixture, exclusions, decisions, and gaps and independently reject the unsafe shortcut.
