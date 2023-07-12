import { Conf } from "../utils/Conf"
import "./EndElement.css"
type Props = {
    restart: () => void
    time: number
    count: number
    conf: Conf
}
export default function EndElement(props: Props) {

    return (
        <g>
            <rect x={0} y={0}
                width={props.conf.WIDTH} height={props.conf.HEIGHT}
                fill="rgba(0,0,0,0.4)"
            ></rect>
            <rect x={0 * (props.conf.WIDTH / 2)} y={0 * (props.conf.HEIGHT / 2)}
                width={props.conf.WIDTH / 2} height={props.conf.HEIGHT / 2}
                fill={props.conf.COLORS[0]}
                opacity={0.5}
            ></rect>
            <rect x={1 * (props.conf.WIDTH / 2)} y={0 * (props.conf.HEIGHT / 2)}
                width={props.conf.WIDTH / 2} height={props.conf.HEIGHT / 2}
                fill={props.conf.COLORS[1]}
                opacity={0.5}
            ></rect>
            <rect x={0 * (props.conf.WIDTH / 2)} y={1 * (props.conf.HEIGHT / 2)}
                width={props.conf.WIDTH / 2} height={props.conf.HEIGHT / 2}
                fill={props.conf.COLORS[2]}
                opacity={0.5}
            ></rect>
            <rect x={1 * (props.conf.WIDTH / 2)} y={1 * (props.conf.HEIGHT / 2)}
                width={props.conf.WIDTH / 2} height={props.conf.HEIGHT / 2}
                fill={props.conf.COLORS[3]}
                opacity={0.5}
            ></rect>
            <text x={props.conf.WIDTH / 2} y={props.conf.HEIGHT / 2 - props.conf.BLOCK_SIZE3 * 0.5}
                fontSize="70"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                textAnchor="middle"
                className="end">
                CLEAR!
            </text>
            <text x={props.conf.WIDTH / 2} y={props.conf.HEIGHT / 2 + props.conf.BLOCK_SIZE3 * 0.5}
                fontSize="30"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                textAnchor="middle">
                Time: {`${(Math.floor(props.time / 60)).toString().padStart(2, "0")}:${(props.time % 60).toString().padStart(2, "0")}`}
            </text>
            <text x={props.conf.WIDTH / 2} y={props.conf.HEIGHT / 2 + props.conf.BLOCK_SIZE3 * 1}
                fontSize="30"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                textAnchor="middle">
                {props.count}moves
            </text>
            <rect x={0} y={0}
                width={props.conf.WIDTH} height={props.conf.HEIGHT}
                fill="rgba(255,255,255,0)"
                onClick={() => props.restart()}
            ></rect>
        </g>
    )
}