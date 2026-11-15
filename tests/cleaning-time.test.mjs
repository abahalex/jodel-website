import test from "node:test";
import assert from "node:assert/strict";
import { calculateCleaningEstimate, MAX_ROOM_COUNT, rooms, extras } from "../src/lib/cleaning-time.mjs";

test("source form structure: seven rooms and six optional tasks", () => {
  assert.equal(rooms.length, 7);
  assert.equal(extras.length, 6);
  assert.equal(MAX_ROOM_COUNT, 10);
});

test("zero-room form refuses estimates, even if extras selected", () => {
  assert.deepEqual(calculateCleaningEstimate({}, { ironing: true }), {
    roomCount: 0, rawMinutes: 0, estimatedMinutes: 0, estimatedHours: 0,
  });
});

test("room time rounds up to nearest half-hour", () => {
  assert.deepEqual(calculateCleaningEstimate({ bedrooms: 1 }, {}), {
    roomCount: 1, rawMinutes: 25, estimatedMinutes: 30, estimatedHours: 0.5,
  });
  assert.deepEqual(calculateCleaningEstimate({ bathrooms: 2, kitchens: 1 }, {}), {
    roomCount: 3, rawMinutes: 110, estimatedMinutes: 120, estimatedHours: 2,
  });
});

test("checked recurring tasks contribute exactly once per visit", () => {
  const a = calculateCleaningEstimate({ kitchens: 1 }, { fridge: true, bedding: true });
  assert.deepEqual(a, { roomCount: 1, rawMinutes: 75, estimatedMinutes: 90, estimatedHours: 1.5 });
});

test("malformed or out-of-bounds input cannot inflate arbitrary estimates", () => {
  const a = calculateCleaningEstimate({ bedrooms: -2, bathrooms: 99.5, kitchens: 11 }, { ironing: true });
  assert.deepEqual(a, { roomCount: 10, rawMinutes: 430, estimatedMinutes: 450, estimatedHours: 7.5 });
  assert.deepEqual(calculateCleaningEstimate({ bedrooms: NaN, hallways: Infinity }, {}), {
    roomCount: 0, rawMinutes: 0, estimatedMinutes: 0, estimatedHours: 0,
  });
});

test("does not modify input and ignores unsupported keys", () => {
  const count = Object.freeze({ bedrooms: 1, invented: 1000 });
  const selected = Object.freeze({ laundry: true, invented: true });
  assert.equal(calculateCleaningEstimate(count, selected).rawMinutes, 45);
});
