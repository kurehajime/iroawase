import { CellType } from "../utils/CellType"
import Cell from "./Cell"
import Field from "./Field"

export default class GameMaster {
    static createFillField(): Field {
        const Cells: Cell[] = []
        for (let i = 0; i < 9 * 18; i++) {
            const rand = Math.floor(Math.random() * 3) + 1
            Cells.push(new Cell(i, rand as CellType))
        }
        return new Field(Cells)
    }
    static incrementField(field: Field, index: number): Field {
        const cells = field.Cells.map((cell, i) => {
            if (i === index && cell.CellType < 3) {
                return new Cell(i, cell.CellType + 1 as CellType)
            }
            return new Cell(i, cell.CellType)
        })
        return new Field(cells)
    }
}