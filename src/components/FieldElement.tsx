import React from "react"
import Field from "../models/Field"
import { Point } from "../models/Point"
import { Conf } from "../utils/Conf"
import CellElement from "./CellElements"
import CoverElement from "./CoverElement"
import FrameElement from "./FrameElement"
import StartElement from "./StartElement"
import EndElement from "./EndElement"

type Props = {
    field: Field
    shift: (cursor: Point, inc: Point) => void
    start: (level: string) => void
    end: () => void
    started: boolean
    ended: boolean
    conf: Conf
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
                    const ix = index % props.conf.COLS
                    const iy = Math.floor(index / props.conf.ROWS)
                    let x = ix * props.conf.BLOCK_SIZE
                    let y = iy * props.conf.BLOCK_SIZE
                    if (diff && target && target.y === iy) {
                        x += diff.x
                    }
                    if (diff && target && target.x === ix) {
                        y += diff.y
                    }
                    return (
                        <g key={index}>
                            < CellElement cell={cell}
                                x={x + props.conf.PAD} y={y + props.conf.PAD}
                                conf={props.conf}
                            />
                            < CellElement cell={cell}
                                x={x + props.conf.PAD + 1 * (props.conf.BLOCK_SIZE * props.conf.COLS)} y={y + props.conf.PAD + 0 * (props.conf.BLOCK_SIZE * props.conf.ROWS)}
                                conf={props.conf}
                            />
                            < CellElement cell={cell}
                                x={x + props.conf.PAD + 0 * (props.conf.BLOCK_SIZE * props.conf.COLS)} y={y + props.conf.PAD + 1 * (props.conf.BLOCK_SIZE * props.conf.ROWS)}
                                conf={props.conf}
                            />
                            < CellElement cell={cell}
                                x={x + props.conf.PAD + -1 * (props.conf.BLOCK_SIZE * props.conf.COLS)} y={y + props.conf.PAD + 0 * (props.conf.BLOCK_SIZE * props.conf.ROWS)}
                                conf={props.conf}
                            />
                            < CellElement cell={cell}
                                x={x + props.conf.PAD + 0 * (props.conf.BLOCK_SIZE * props.conf.COLS)} y={y + props.conf.PAD + -1 * (props.conf.BLOCK_SIZE * props.conf.ROWS)}
                                conf={props.conf}
                            />
                        </g>
                    )
                })
            }
            <FrameElement
                conf={props.conf} />
            <CoverElement
                x={0}
                y={0}
                clicked={clicked}
                selected={selected}
                moved={moved}
                conf={props.conf}
            />
            {
                !props.started && <StartElement start={props.start}
                    conf={props.conf} />
            }
            {
                props.ended && <EndElement
                    conf={props.conf} />
            }

        </g >
    )
}