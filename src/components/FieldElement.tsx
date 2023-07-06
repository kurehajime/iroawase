import React from "react"
import Field from "../models/Field"
import { Point } from "../models/Point"
import { BLOCK_SIZE, COLS, ROWS } from "../utils/Conf"
import CellElement from "./CellElements"
import CoverElement from "./CoverElement"

type Props = {
    field: Field
    shift: (cursor: Point, inc: Point) => void
}
export default function FieldElement(props: Props) {
    const [selected, setSelected] = React.useState<Point | null>(null)
    const [touched, setTouched] = React.useState<boolean>(false)
    const clicked = (point: Point, touched = false) => {
        if (selected) {
            setSelected(null)
            setTouched(false)

            if (point.x === selected.x || point.y === selected.y) {
                const xx = point.x - selected.x
                const yy = point.y - selected.y
                if (xx !== 0) {
                    props.shift({ x: point.x, y: point.y }, { x: xx, y: 0 })
                }
                if (yy !== 0) {
                    props.shift({ x: point.x, y: point.y }, { x: 0, y: yy })
                }
            }
        } else {
            setSelected({ ...point })
            setTouched(touched)
        }
    }
    return (
        <g>
            {
                props.field.Cells.map((cell, index) => {
                    const ix = index % COLS
                    const iy = Math.floor(index / ROWS)
                    const x = ix * BLOCK_SIZE
                    const y = iy * BLOCK_SIZE
                    return (
                        <CellElement key={index} cell={cell}
                            x={x} y={y}
                        />
                    )
                })
            }
            <CoverElement
                x={0}
                y={0}
                clicked={clicked}
                selected={selected}
            />
        </g>
    )
}