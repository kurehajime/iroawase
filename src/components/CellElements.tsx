import Cell from "../models/Cell"
import { BLOCK_SIZE } from "../utils/Conf"

type Props = {
    x: number,
    y: number,
    cell: Cell,
    onClick: (n: number) => void
}
export default function CellElement(props: Props) {
    return (
        <g onClick={() => props.onClick(props.cell.Index)}>
            <rect x={props.x} y={props.y}
                width={BLOCK_SIZE} height={BLOCK_SIZE}
                fill={
                    props.cell.CellType === 1 ? "red" :
                        props.cell.CellType === 2 ? "green" :
                            props.cell.CellType === 3 ? "blue" : "white"
                }
                stroke="black"
            ></rect>
            <text x={props.x + BLOCK_SIZE / 2}
                y={props.y + BLOCK_SIZE / 2}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize={BLOCK_SIZE / 2}
            >{
                    props.cell.CellType === 1 ? "✊" :
                        props.cell.CellType === 2 ? "✌" :
                            props.cell.CellType === 3 ? "🖐" : ""
                }</text>
        </g>
    )
}