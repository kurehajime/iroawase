export const CellType = {
    N1: 1,
    N2: 2,
    N3: 3,
    N4: 4,
} as const;

export type CellType = typeof CellType[keyof typeof CellType];