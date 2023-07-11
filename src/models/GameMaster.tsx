import { CellType } from "../utils/CellType"
import { Conf } from "../utils/Conf"
import Cell from "./Cell"
import Field from "./Field"

export default class GameMaster {
    static fromArray(conf: Conf, array: number[]): Field {
        const Cells: Cell[] = []
        for (let i = 0; i < conf.COLS * conf.ROWS; i++) {
            Cells.push(new Cell(i, array[i] as CellType))
        }
        return new Field(Cells)
    }
    static createInitField(conf: Conf): Field {
        return GameMaster.fromArray(conf, conf.INIT_MAP)
    }

    static createFillField(conf: Conf,): Field {
        const map = GameMaster.shuffleMap(conf, conf.INIT_MAP)
        return GameMaster.fromArray(conf, map)
    }
    static complete(conf: Conf, field: Field): boolean {
        for (let i = 0; i < field.Cells.length; i++) {
            if (field.Cells[i].CellType !== conf.INIT_MAP[i]) {
                return false
            }
        }
        return true
    }

    static shuffleMap(conf: Conf, map: number[]): number[] {
        let newMap = [...map]
        for (let i = 0; i < conf.SHUFFLE_COUNT; i++) {
            if (i % 2 === 0) {
                const index = Math.floor(Math.random() * conf.ROWS)
                newMap = GameMaster.shiftHorizon(conf, newMap, index, 1)
            } else {
                const index = Math.floor(Math.random() * conf.COLS)
                newMap = GameMaster.shiftVertical(conf, newMap, index, 1)
            }
        }
        return newMap
    }

    static shiftHorizonField(conf: Conf, field: Field, index: number, inc: number): Field {
        const map = field.Cells.map(cell => cell.CellType)
        return GameMaster.fromArray(conf, GameMaster.shiftHorizon(conf, map, index, inc))
    }
    static shiftVerticalField(conf: Conf, field: Field, index: number, inc: number): Field {
        const map = field.Cells.map(cell => cell.CellType)
        return GameMaster.fromArray(conf, GameMaster.shiftVertical(conf, map, index, inc))
    }
    private static shiftHorizon(conf: Conf, map: number[], index: number, inc: number): number[] {
        const newMap = [...map]
        for (let i = 0; i < map.length; i++) {
            const y = Math.floor(i / conf.COLS)
            const x = i % conf.COLS
            if (y !== index) continue
            let x2 = (x + inc) % conf.COLS
            if (x2 < 0) {
                x2 = conf.COLS + x2
            }
            const index2 = y * conf.COLS + x2
            newMap[i] = map[index2]
        }
        return newMap
    }
    private static shiftVertical(conf: Conf, map: number[], index: number, inc: number): number[] {
        const newMap = [...map]
        for (let i = 0; i < map.length; i++) {
            const y = Math.floor(i / conf.COLS)
            const x = i % conf.COLS
            if (x !== index) continue
            let y2 = (y + inc) % conf.ROWS
            if (y2 < 0) {
                y2 = conf.ROWS + y2
            }
            const index2 = y2 * conf.COLS + x
            newMap[i] = map[index2]
        }
        return newMap
    }
}