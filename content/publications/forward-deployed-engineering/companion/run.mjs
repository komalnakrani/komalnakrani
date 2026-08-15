import { createOrchidFixture } from "./src/synthetic-fixture.mjs";
import { runVerticalSlice } from "./src/vertical-slice.mjs";

const result = await runVerticalSlice(createOrchidFixture());
process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
