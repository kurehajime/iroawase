import React from "react"
import Field from "../models/Field"
import { Point } from "../models/Point"
import { BLOCK_SIZE, COLS, PAD, ROWS } from "../utils/Conf"
import CellElement from "./CellElements"
import CoverElement from "./CoverElement"
import FrameElement from "./FrameElement"

type Props = {
    field: Field
    shift: (cursor: Point, inc: Point) => void
}
export default function FieldElement(props: Props) {
    const [selected, setSelected] = React.useState<Point | null>(null)
    const [touched, setTouched] = React.useState<boolean>(false)
    const [diff, setDiff] = React.useState<Point | null>(null)
    const [target, setTarget] = React.useState<Point | null>(null)
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

    const moved = (target: Point | null, point: Point | null) => {
        if (target && selected && target.x !== selected.x && target.y !== selected.y) {
            setDiff(null)
            setTarget(null)
        } else {
            setDiff(point)
            setTarget(target)
        }
    }

    return (
        <g>
            {
                props.field.Cells.map((cell, index) => {
                    const ix = index % COLS
                    const iy = Math.floor(index / ROWS)
                    let x = ix * BLOCK_SIZE
                    let y = iy * BLOCK_SIZE
                    if (diff && target && target.y === iy) {
                        x += diff.x
                    }
                    if (diff && target && target.x === ix) {
                        y += diff.y
                    }
                    return (
                        <g key={index}>
                            < CellElement cell={cell}
                                x={x + PAD} y={y + PAD}
                            />
                            < CellElement cell={cell}
                                x={x + PAD + 1 * (BLOCK_SIZE * COLS)} y={y + PAD + 0 * (BLOCK_SIZE * ROWS)}
                            />
                            < CellElement cell={cell}
                                x={x + PAD + 0 * (BLOCK_SIZE * COLS)} y={y + PAD + 1 * (BLOCK_SIZE * ROWS)}
                            />
                            < CellElement cell={cell}
                                x={x + PAD + -1 * (BLOCK_SIZE * COLS)} y={y + PAD + 0 * (BLOCK_SIZE * ROWS)}
                            />
                            < CellElement cell={cell}
                                x={x + PAD + 0 * (BLOCK_SIZE * COLS)} y={y + PAD + -1 * (BLOCK_SIZE * ROWS)}
                            />
                        </g>
                    )
                })
            }
            <FrameElement />
            <CoverElement
                x={0}
                y={0}
                clicked={clicked}
                selected={selected}
                moved={moved}
            />
        </g >
    )
}