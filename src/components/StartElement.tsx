import { Conf } from "../utils/Conf"
import "./StartElement.css"
type Props = {
    start: () => void
    conf: Conf
}
export default function StartElement(props: Props) {

    return (
        <g>
            <rect x={0} y={0}
                width={props.conf.WIDTH} height={props.conf.HEIGHT}
                fill="rgba(0,0,0,0.1)"
                className="start"
            ></rect>
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(95 -105)scale(0.45)" fill="white" />
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(110 221.5)scale(0.45)rotate(180)" fill="white" />
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(506 95)scale(0.45)rotate(90)" fill="white" />
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(180 110)scale(0.45)rotate(270)" fill="white" />
            <text x={props.conf.PAD} y={2 * props.conf.BLOCK_SIZE}
                fontSize="75"
                fontWeight="bold"
                fill="white"
                className="title">
                SWISH
            </text>
            <text x={props.conf.PAD} y={3 * props.conf.BLOCK_SIZE}
                fontSize="75"
                fontWeight="bold"
                fill="white"
                className="title"
            >
                SWOOSH
            </text>
            <rect x={0} y={0}
                width={props.conf.WIDTH} height={props.conf.HEIGHT}
                onClick={() => props.start()}
                fill="rgba(0,0,0,0)"
            ></rect>
        </g>
    )
}