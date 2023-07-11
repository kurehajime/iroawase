import Cell from "../models/Cell"
import { Conf } from "../utils/Conf"

type Props = {
    x: number,
    y: number,
    cell: Cell,
    conf: Conf,
}
export default function CellElement(props: Props) {
    return (
        <g>
            <rect x={props.x} y={props.y}
                width={props.conf.BLOCK_SIZE} height={props.conf.BLOCK_SIZE}
                fill={
                    props.cell.CellType === 1 ? props.conf.COLORS[0] :
                        props.cell.CellType === 2 ? props.conf.COLORS[1] :
                            props.cell.CellType === 3 ? props.conf.COLORS[2] :
                                props.cell.CellType === 4 ? props.conf.COLORS[3] :
                                    "white"
                }
                stroke="#3B495E"
            ></rect>
            <text x={props.x + props.conf.BLOCK_SIZE / 2}
                y={props.y + props.conf.BLOCK_SIZE / 2}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize={props.conf.BLOCK_SIZE / 2}
                opacity={0.9}
            >{
                    props.cell.CellType === 1 ? props.conf.SUIT[0] :
                        props.cell.CellType === 2 ? props.conf.SUIT[1] :
                            props.cell.CellType === 3 ? props.conf.SUIT[2] :
                                props.cell.CellType === 4 ? props.conf.SUIT[3] :
                                    "white"
                }</text>
        </g>
    )
}