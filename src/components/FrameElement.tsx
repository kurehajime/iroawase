import { COLORS, HEIGHT, PAD, WIDTH } from "../utils/Conf";

export default function FrameElement() {
    return (
        <g>
            <rect
                x={0 + (0 * (WIDTH / 2))}
                y={0 + (0 * (HEIGHT / 2))}
                width={WIDTH / 2}
                height={PAD}
                stroke="none"
                fill={COLORS[0]} />
            <rect
                x={0 + (0 * (WIDTH / 2))}
                y={0 + (0 * (HEIGHT / 2))}
                width={PAD}
                height={HEIGHT / 2}
                stroke="none"
                fill={COLORS[0]} />
            <rect
                x={0 + (1 * (WIDTH / 2))}
                y={0 + (0 * (HEIGHT / 2))}
                width={WIDTH / 2}
                height={PAD}
                stroke="none"
                fill={COLORS[1]} />
            <rect
                x={-PAD + (2 * (WIDTH / 2))}
                y={0 + (0 * (HEIGHT / 2))}
                width={PAD}
                height={HEIGHT / 2}
                stroke="none"
                fill={COLORS[1]} />
            <rect
                x={0 + (0 * (WIDTH / 2))}
                y={-PAD + (2 * (HEIGHT / 2))}
                width={WIDTH / 2}
                height={PAD}
                stroke="none"
                fill={COLORS[2]} />
            <rect
                x={0 + (0 * (WIDTH / 2))}
                y={0 + (1 * (HEIGHT / 2))}
                width={PAD}
                height={HEIGHT / 2}
                stroke="none"
                fill={COLORS[2]} />
            <rect
                x={0 + (1 * (WIDTH / 2))}
                y={-PAD + (2 * (HEIGHT / 2))}
                width={WIDTH / 2}
                height={PAD}
                stroke="none"
                fill={COLORS[3]} />
            <rect
                x={-PAD + (2 * (WIDTH / 2))}
                y={0 + (1 * (HEIGHT / 2))}
                width={PAD}
                height={HEIGHT / 2}
                stroke="none"
                fill={COLORS[3]} />
        </g>
    )
}