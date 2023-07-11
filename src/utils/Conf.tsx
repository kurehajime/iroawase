const COLORS = [
    "#19A3FE",
    "#93E01F",
    "#FFDE05",
    "#FF0F77",
]
const SUIT = [
    "♠",
    "♣",
    "♦",
    "♥",
]
export type Conf = {
    BLOCK_SIZE: number,
    COLS: number,
    ROWS: number,
    PAD: number,
    WIDTH: number,
    HEIGHT: number,
    COLORS: string[],
    SUIT: string[],
    MAX_NUM: number,
}
export type Mode = "normal" | "hard"
export class ConfBuilder {
    static build(mode: Mode): Conf {
        const maxNum = mode === "normal" ? 4 : 6;
        const blockSize = mode === "normal" ? 96 : 64;
        const cols = mode === "normal" ? 4 : 6;
        const rows = mode === "normal" ? 4 : 6;
        const pad = 8;
        const width = (blockSize * cols) + pad * 2;
        const height = (blockSize * rows) + pad * 2;
        return {
            BLOCK_SIZE: blockSize,
            COLS: cols,
            ROWS: rows,
            PAD: pad,
            WIDTH: width,
            HEIGHT: height,
            COLORS: COLORS,
            SUIT: SUIT,
            MAX_NUM: maxNum,
        }
    }
}