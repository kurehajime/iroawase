import { CellType } from "../utils/CellType";

export default class Cell {
    private _CellType: CellType
    public get CellType(): CellType { return this._CellType }
    constructor(cellType: CellType) {
        this._CellType = cellType
    }

    public clone(): Cell {
        return new Cell(this.CellType)
    }
}