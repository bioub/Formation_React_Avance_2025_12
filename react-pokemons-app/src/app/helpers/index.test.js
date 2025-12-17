import { expect, test, vi } from "vitest";
import { formatDate, formatType } from ".";

test("formatType", () => {
  expect(formatType('Feu')).toBe('chip red lighten-1');
  expect(formatType('Eau')).toBe('chip blue lighten-1');
  expect(formatType('Plante')).toBe('chip green lighten-1');
  expect(formatType('Insecte')).toBe('chip brown lighten-1');
  expect(formatType('Normal')).toBe('chip grey lighten-3');
  expect(formatType('Vol')).toBe('chip blue lighten-3');
  expect(formatType('Poison')).toBe('chip deep-purple accent-1');
  expect(formatType('Fée')).toBe('chip pink lighten-4');
  expect(formatType('Psy')).toBe('chip deep-purple darken-2');
  expect(formatType('Electrik')).toBe('chip lime accent-1');
  expect(formatType('Combat')).toBe('chip deep-orange');
  expect(formatType('Inconnu')).toBe('chip grey');
});

test("formatDate", () => {
  const date = new Date('2020-01-15');
  expect(formatDate(date)).toBe('15/1/2020');

  const date2 = new Date('1995-12-31');
  expect(formatDate(date2)).toBe('31/12/1995');
});

test("formatDate with default date", () => {
  vi.useFakeTimers().setSystemTime(new Date('2024-06-15'));
  expect(formatDate()).toBe('15/6/2024');
  vi.useRealTimers();
});