import { Conf } from "../utils/Conf"

type Props = {
    endReplay: () => void
    conf: Conf
}
export default function ReplayElement(props: Props) {
    return (
        <g>
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