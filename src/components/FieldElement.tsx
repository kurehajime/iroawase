import React from "react"
import Field from "../models/Field"
import { Point } from "../models/Point"
import { BLOCK_SIZE, COLS, ROWS } from "../utils/Conf"
import CellElement from "./CellElements"
import CoverElement from "./CoverElement"

type Props = {
    field: Field
    onClick: (n: number) => void
}
export default function FieldElement(props: Props) {
    const [selected, setSelected] = React.useState<Point | null>(null)
    const [touched, setTouched] = React.useState<boolean>(false)
    const clicked = (point: Point, touched = false) => {
        if (selected) {
            setSelected(null)
            setTouched(false)
            console.log("はなす", point, touched)
        } else {
            setSelected({ ...point })
            setTouched(touched)
            console.log("つかむ", point, touched)
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
                            onClick={props.onClick}
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