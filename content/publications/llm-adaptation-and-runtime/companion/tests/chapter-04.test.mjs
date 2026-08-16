import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {validateDataRecipe} from "../lib/data-recipe.mjs";
const fixture=JSON.parse(await readFile(new URL("../md10/mosaic-data-recipe.json",import.meta.url)));
test("recipe preserves MD-09 no-training boundary",()=>assert.equal(fixture.incoming.status,"method-selection-complete-training-not-approved"));
test("convenient production export is rejected for all declared causes",()=>assert.deepEqual(validateDataRecipe(fixture).rejectedSources,["production-export-convenient.csv"]));
test("mixture is a hypothesis rather than population estimate",()=>assert.equal(fixture.mixturePlan.isPopulationEstimate,false));
test("recipe is reproducible and authority bounded",()=>assert.deepEqual(validateDataRecipe(fixture).errors,[]));
