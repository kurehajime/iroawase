import Cell from "../models/Cell"
import { BLOCK_SIZE } from "../utils/Conf"

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
                    props.cell.CellType === 1 ? "#FF0F77" :
                        props.cell.CellType === 2 ? "#FFDE05" :
                            props.cell.CellType === 3 ? "#93E01F" :
                                props.cell.CellType === 4 ? "#19A3FE" :
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
                    props.cell.CellType === 1 ? "♥" :
                        props.cell.CellType === 2 ? "♦" :
                            props.cell.CellType === 3 ? "♣" :
                                props.cell.CellType === 4 ? "♠" :
                                    "white"
                }</text>
        </g>
    )
}