import { Log } from "../models/Log"
import { Conf } from "../utils/Conf"

type Props = {
    endReplay: () => void
    log: Log
    logIndex: number
    conf: Conf
}
export default function ReplayElement(props: Props) {
    const l = props.log[props.logIndex]
    if (l === undefined) return (<></>)
    const x = (l[0].x + 0.5) * props.conf.BLOCK_SIZE
    const y = (l[0].y + 0.5) * props.conf.BLOCK_SIZE
    const xInc = (l[1].x) * props.conf.BLOCK_SIZE
    const yInc = (l[1].y) * props.conf.BLOCK_SIZE
    const ball = [0.1, 0.2, 0.4, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

    return (
        <g>
            {
                ball.map((b, i) => {
                    return (
                        <circle key={i}
                            cx={x + xInc * b}
                            cy={y + yInc * b}
                            r={props.conf.BLOCK_SIZE * 0.2}
                            fill="white"
                            opacity={b ** 2 * 0.5}
                        />
                    )
                })
            }
            <rect x={0} y={0}
                width={props.conf.WIDTH}
                height={props.conf.HEIGHT}
                fill="transparent"
                stroke="transparent"
                onClick={props.endReplay}
            />
        </g>
    )
}