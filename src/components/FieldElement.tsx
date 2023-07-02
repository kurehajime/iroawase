import Field from "../models/Field"
import { BLOCK_SIZE, COLS, ROWS } from "../utils/Conf"
import CellElement from "./CellElements"

type Props = {
    field: Field
}
export default function FieldElement(props: Props) {
    return (
        <g>
            {
                props.field.Cells.map((cell, index) => {
                    const ix = index % COLS
                    const iy = Math.floor(index / ROWS)
                    const x = ix * BLOCK_SIZE
                    const y = iy * BLOCK_SIZE
                    return (
                        <CellElement key={index} cell={cell}
                            x={x} y={y}
                        />
                    )
                })
            }
        </g>
    )
}