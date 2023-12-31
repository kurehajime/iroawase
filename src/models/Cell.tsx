import { CellType } from "./CellType";

export default class Cell {
    private _CellType: CellType
    private _index: number
    public get CellType(): CellType { return this._CellType }
    public get Index(): number { return this._index }
    constructor(index: number, cellType: CellType) {
        this._CellType = cellType
        this._index = index
    }

    public clone(): Cell {
        return new Cell(this._index, this.CellType)
    }
}