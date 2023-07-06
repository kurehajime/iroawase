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
                    props.cell.CellType === 1 ? "red" :
                        props.cell.CellType === 2 ? "orange" :
                            props.cell.CellType === 3 ? "yellow" :
                                props.cell.CellType === 4 ? "green" :
                                    props.cell.CellType === 5 ? "blue" :
                                        props.cell.CellType === 6 ? "purple" :
                                            "white"
                }
                stroke="black"
            ></rect>
            <text x={props.x + BLOCK_SIZE / 2}
                y={props.y + BLOCK_SIZE / 2}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize={BLOCK_SIZE / 2}
            >{
                    props.cell.CellType
                }</text>
        </g>
    )
}