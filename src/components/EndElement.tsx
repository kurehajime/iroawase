import { Conf } from "../utils/Conf"
import "./EndElement.css"
type Props = {
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
            ></rect>
            <rect x={1 * (props.conf.WIDTH / 2)} y={0 * (props.conf.HEIGHT / 2)}
                width={props.conf.WIDTH / 2} height={props.conf.HEIGHT / 2}
                fill={props.conf.COLORS[1]}
            ></rect>
            <rect x={0 * (props.conf.WIDTH / 2)} y={1 * (props.conf.HEIGHT / 2)}
                width={props.conf.WIDTH / 2} height={props.conf.HEIGHT / 2}
                fill={props.conf.COLORS[2]}
            ></rect>
            <rect x={1 * (props.conf.WIDTH / 2)} y={1 * (props.conf.HEIGHT / 2)}
                width={props.conf.WIDTH / 2} height={props.conf.HEIGHT / 2}
                fill={props.conf.COLORS[3]}
            ></rect>
            <text x={props.conf.PAD} y={props.conf.HEIGHT / 2 - props.conf.BLOCK_SIZE}
                fontSize="95"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                className="end">
                CONGR
            </text>
            <text x={props.conf.PAD} y={props.conf.HEIGHT / 2}
                fontSize="95"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                className="end">
                ATULA
            </text>
            <text x={props.conf.PAD} y={props.conf.HEIGHT / 2 + props.conf.BLOCK_SIZE}
                fontSize="95"
                fontWeight="bold"
                fill="white"
                dominantBaseline="central"
                className="end">
                TION!
            </text>
            <rect x={0} y={0}
                width={props.conf.WIDTH} height={props.conf.HEIGHT}
                fill="rgba(255,255,255,0)"
            ></rect>
        </g>
    )
}