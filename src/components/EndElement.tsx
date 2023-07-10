import { BLOCK_SIZE, COLORS, HEIGHT, PAD, WIDTH } from "../utils/Conf"
import "./EndElement.css"
export default function EndElement() {

    return (
        <g>
            <rect x={0} y={0}
                width={WIDTH} height={HEIGHT}
                fill="rgba(0,0,0,0.4)"
            ></rect>
            <rect x={0 * (WIDTH / 2)} y={0 * (HEIGHT / 2)}
                width={WIDTH / 2} height={HEIGHT / 2}
                fill={COLORS[0]}
            ></rect>
            <rect x={1 * (WIDTH / 2)} y={0 * (HEIGHT / 2)}
                width={WIDTH / 2} height={HEIGHT / 2}
                fill={COLORS[1]}
            ></rect>
            <rect x={0 * (WIDTH / 2)} y={1 * (HEIGHT / 2)}
                width={WIDTH / 2} height={HEIGHT / 2}
                fill={COLORS[2]}
            ></rect>
            <rect x={1 * (WIDTH / 2)} y={1 * (HEIGHT / 2)}
                width={WIDTH / 2} height={HEIGHT / 2}
                fill={COLORS[3]}
            ></rect>
            <text x={PAD} y={HEIGHT / 2 - BLOCK_SIZE}
                fontSize="95"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                className="end">
                CONGR
            </text>
            <text x={PAD} y={HEIGHT / 2}
                fontSize="95"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                className="end">
                ATULA
            </text>
            <text x={PAD} y={HEIGHT / 2 + BLOCK_SIZE}
                fontSize="95"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                className="end">
                TION!
            </text>
            <rect x={0} y={0}
                width={WIDTH} height={HEIGHT}
                fill="rgba(255,255,255,0)"
            ></rect>
        </g>
    )
}