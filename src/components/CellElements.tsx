import Cell from "../models/Cell"
import { BLOCK_SIZE, COLORS, SUIT } from "../utils/Conf"

type Props = {
    x: number,
    y: number,
    cell: Cell,
}
export default function CellElement(props: Props) {
    return (
        <g>
            <rect x={props.x} y={props.y}
                width={BLOCK_SIZE} height={BLOCK_SIZE}
                fill={
                    props.cell.CellType === 1 ? COLORS[0] :
                        props.cell.CellType === 2 ? COLORS[1] :
                            props.cell.CellType === 3 ? COLORS[2] :
                                props.cell.CellType === 4 ? COLORS[3] :
                                    "white"
                }
                stroke="#3B495E"
            ></rect>
            <text x={props.x + BLOCK_SIZE / 2}
                y={props.y + BLOCK_SIZE / 2}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize={BLOCK_SIZE / 2}
                opacity={0.9}
            >{
                    props.cell.CellType === 1 ? SUIT[0] :
                        props.cell.CellType === 2 ? SUIT[1] :
                            props.cell.CellType === 3 ? SUIT[2] :
                                props.cell.CellType === 4 ? SUIT[3] :
                                    "white"
                }</text>
        </g>
    )
}