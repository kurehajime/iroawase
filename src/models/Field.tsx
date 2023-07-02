import { CellType } from "../utils/CellType";
import Cell from "./Cell";

export default class Field {
    private _Cells: Cell[]
    public get Cells(): Cell[] { return this._Cells }
    constructor(Cells: Cell[]) {
        this._Cells = Cells.map(cell => { return cell.clone() })
    }

    static createFillField(): Field {
        const Cells: Cell[] = []
        for (let i = 0; i < 9 * 18; i++) {
            const rand = Math.floor(Math.random() * 4)
            Cells.push(new Cell(rand as CellType))
        }
        return new Field(Cells)
    }
}