import { Point } from "../models/Point"
import { Conf } from "../utils/Conf"
import "./ShadowElement.css"

type Props = {
    conf: Conf
    selected: Point | null
    diff: Point | null
}

export default function ShadowElement(props: Props) {
    if (props.selected && props.diff) {
        let x = 0
        let y = 0
        let width = 0
        let height = 0
        if (Math.abs(props.diff.x) > Math.abs(props.diff.y)) {
            x = props.conf.PAD
            y = props.conf.PAD + (props.selected.y) * props.conf.BLOCK_SIZE
            width = props.conf.BLOCK_SIZE * props.conf.COLS
            height = props.conf.BLOCK_SIZE
        }
        if (Math.abs(props.diff.x) < Math.abs(props.diff.y)) {
            x = props.conf.PAD + (props.selected.x) * props.conf.BLOCK_SIZE
            y = props.conf.PAD
            width = props.conf.BLOCK_SIZE
            height = props.conf.BLOCK_SIZE * props.conf.ROWS
        }
        return (<g>
            <rect x={x} y={y}
                width={width}
                height={height}
                fill="transparent"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth={5}
                className="shadow"
            >
            </rect>
        </g>)
    }


    return (<g></g>)
}