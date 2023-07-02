import Cell from "../models/Cell"
import { BLOCK_SIZE } from "../utils/Conf"

type Props = {
    x: number,
    y: number,
    cell: Cell
}
export default function CellElement(props: Props) {
    return (
        <g>
            <rect x={props.x} y={props.y}
                width={BLOCK_SIZE} height={BLOCK_SIZE}
                fill="white"
                stroke="black"
            ></rect>
            <text x={props.x + BLOCK_SIZE / 2}
                y={props.y + BLOCK_SIZE / 2}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize={BLOCK_SIZE / 2}
            >{props.cell.CellType}</text>
        </g>
    )
}