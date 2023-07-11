import { Conf } from "../utils/Conf";
type Props = {
    conf: Conf
}
export default function FrameElement(props: Props) {
    return (
        <g>
            <rect
                x={0 + (0 * (props.conf.WIDTH / 2))}
                y={0 + (0 * (props.conf.HEIGHT / 2))}
                width={props.conf.WIDTH / 2}
                height={props.conf.PAD}
                stroke="none"
                fill={props.conf.COLORS[0]} />
            <rect
                x={0 + (0 * (props.conf.WIDTH / 2))}
                y={0 + (0 * (props.conf.HEIGHT / 2))}
                width={props.conf.PAD}
                height={props.conf.HEIGHT / 2}
                stroke="none"
                fill={props.conf.COLORS[0]} />
            <rect
                x={0 + (1 * (props.conf.WIDTH / 2))}
                y={0 + (0 * (props.conf.HEIGHT / 2))}
                width={props.conf.WIDTH / 2}
                height={props.conf.PAD}
                stroke="none"
                fill={props.conf.COLORS[1]} />
            <rect
                x={-props.conf.PAD + (2 * (props.conf.WIDTH / 2))}
                y={0 + (0 * (props.conf.HEIGHT / 2))}
                width={props.conf.PAD}
                height={props.conf.HEIGHT / 2}
                stroke="none"
                fill={props.conf.COLORS[1]} />
            <rect
                x={0 + (0 * (props.conf.WIDTH / 2))}
                y={-props.conf.PAD + (2 * (props.conf.HEIGHT / 2))}
                width={props.conf.WIDTH / 2}
                height={props.conf.PAD}
                stroke="none"
                fill={props.conf.COLORS[2]} />
            <rect
                x={0 + (0 * (props.conf.WIDTH / 2))}
                y={0 + (1 * (props.conf.HEIGHT / 2))}
                width={props.conf.PAD}
                height={props.conf.HEIGHT / 2}
                stroke="none"
                fill={props.conf.COLORS[2]} />
            <rect
                x={0 + (1 * (props.conf.WIDTH / 2))}
                y={-props.conf.PAD + (2 * (props.conf.HEIGHT / 2))}
                width={props.conf.WIDTH / 2}
                height={props.conf.PAD}
                stroke="none"
                fill={props.conf.COLORS[3]} />
            <rect
                x={-props.conf.PAD + (2 * (props.conf.WIDTH / 2))}
                y={0 + (1 * (props.conf.HEIGHT / 2))}
                width={props.conf.PAD}
                height={props.conf.HEIGHT / 2}
                stroke="none"
                fill={props.conf.COLORS[3]} />
        </g>
    )
}