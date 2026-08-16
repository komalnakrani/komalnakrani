# Learning Pack 9 - Establish the Training Experiment

> Publication learning material only. Not an Abhyaas certification bank.

## Questions and scenarios

1. Which fields make a run manifest reconstructable?
2. Calculate effective batch from microbatch, devices, and accumulation.
3. Which state makes a checkpoint resumable?
4. What do smoke, tiny-overfit, and resource probes establish?
5. Why can loss never replace behavior hooks?

Repair the unrecorded accumulation change and weights-only resume, then walk the preflight state machine. Stop at template incompatibility and explain why all later evidence remains `not-run`.

## Completion evidence

Pass when state, resources, lineage, recovery, behavioral hooks, stop rules, and authority can be reconstructed without fabricating a run.
