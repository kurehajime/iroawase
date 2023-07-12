const COLORS = [
    "#19A3FE",
    "#93E01F",
    "#FFDE05",
    "#FF0F77",
]
const SUIT = [
    "♠\uFE0E",
    "♣\uFE0E",
    "♦\uFE0E",
    "♥\uFE0E",
]
export type Conf = {
    BLOCK_SIZE: number,
    BLOCK_SIZE3: number,
    COLS: number,
    ROWS: number,
    PAD: number,
    WIDTH: number,
    HEIGHT: number,
    COLORS: string[],
    SUIT: string[],
    MAX_NUM: number,
    INIT_MAP: number[],
    SHUFFLE_COUNT: number,
}
export type Mode = "easy" | "hard"
export class ConfBuilder {
    static build(mode: Mode): Conf {
        const maxNum = mode === "easy" ? 4 : 6;
        const blockSize = mode === "easy" ? 96 : 64;
        const cols = mode === "easy" ? 4 : 6;
        const rows = mode === "easy" ? 4 : 6;
        const pad = 8;
        const width = (blockSize * cols) + pad * 2;
        const height = (blockSize * rows) + pad * 2;
        const initMap = mode === "easy" ?
            [1, 1, 2, 2,
                1, 1, 2, 2,
                3, 3, 4, 4,
                3, 3, 4, 4] :
            [1, 1, 1, 2, 2, 2,
                1, 1, 1, 2, 2, 2,
                1, 1, 1, 2, 2, 2,
                3, 3, 3, 4, 4, 4,
                3, 3, 3, 4, 4, 4,
                3, 3, 3, 4, 4, 4]
        return {
            BLOCK_SIZE: blockSize,
            BLOCK_SIZE3: 96,
            COLS: cols,
            ROWS: rows,
            PAD: pad,
            WIDTH: width,
            HEIGHT: height,
            COLORS: COLORS,
            SUIT: SUIT,
            MAX_NUM: maxNum,
            INIT_MAP: initMap,
            SHUFFLE_COUNT: mode === "easy" ? 100 : 100,
        }
    }
}