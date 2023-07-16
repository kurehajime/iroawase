import React from "react"
import Field from "../models/Field"
import { Point } from "../models/Point"
import { Conf } from "../utils/Conf"
import CellElement from "./CellElements"
import CoverElement from "./CoverElement"
import FrameElement from "./FrameElement"
import StartElement from "./StartElement"
import EndElement from "./EndElement"
import ShadowElement from "./ShadowElement"

type Props = {
    field: Field
    shift: (cursor: Point, inc: Point) => void
    start: (level: string) => void
    end: () => void
    replay: () => void
    started: boolean
    ended: boolean
    restart: () => void
    time: number
    count: number
    conf: Conf
}
export default function FieldElement(props: Props) {
    const [selected, setSelected] = React.useState<Point | null>(null)
    const [diff, setDiff] = React.useState<Point | null>(null)
    const [target, setTarget] = React.useState<Point | null>(null)
    const clicked = (point: Point) => {
        if (selected) {
            setSelected(null)
            const xx = point.x - selected.x
            const yy = point.y - selected.y
            if (diff && Math.abs(diff.x) > Math.abs(diff.y)) {
                props.shift({ x: selected.x, y: selected.y }, { x: xx, y: 0 })
            }
            if (diff && Math.abs(diff.y) > Math.abs(diff.x)) {
                props.shift({ x: selected.x, y: selected.y }, { x: 0, y: yy })
            }
        } else {
            setSelected({ ...point })
        }
    }

    const moved = (target: Point | null, point: Point | null) => {
        setDiff(point)
        setTarget(target)
    }
    return (
        <g>
            {
                props.field.Cells.map((cell, index) => {
                    const ix = index % props.conf.COLS
                    const iy = Math.floor(index / props.conf.ROWS)
                    let x = ix * props.conf.BLOCK_SIZE
                    let y = iy * props.conf.BLOCK_SIZE
                    if (diff && selected && Math.abs(diff.x) > Math.abs(diff.y) && selected.y === iy) {
                        x += diff.x
                    }
                    if (diff && selected && Math.abs(diff.x) < Math.abs(diff.y) && selected.x === ix) {
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
            <ShadowElement
                selected={selected}
                diff={diff}
                conf={props.conf}
            />
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
                    restart={props.restart}
                    replay={props.replay}
                    time={props.time}
                    count={props.count}
                    conf={props.conf} />
            }

        </g >
    )
}