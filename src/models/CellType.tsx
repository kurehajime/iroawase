export const CellType = {
    Gu: 1,
    Choki: 2,
    Pa: 3
} as const;

export type CellType = typeof CellType[keyof typeof CellType];