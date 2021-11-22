export const idRangeByGeneration = {
  '1': { start: 1, end: 151 },
  '2': { start: 152, end: 251 },
  '3': { start: 252, end: 386 },
  '4': { start: 387, end: 493 },
  '5': { start: 494, end: 649 },
  '6': { start: 650, end: 721 },
  '7': { start: 722, end: 809 },
  '8': { start: 810, end: 898 },
} as const;

export type GenMap = typeof idRangeByGeneration;

export type Generation = keyof GenMap;
