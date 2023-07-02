import Cell from "./Cell";

export default class Field {
    private _Cells: Cell[]
    public get Cells(): Cell[] { return this._Cells }
    constructor(Cells: Cell[]) {
        this._Cells = Cells.map(cell => { return cell.clone() })
    }
}