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
                transform="translate(95 -105)scale(0.45)" fill="rgba(255,255,255,1)" />
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(110 221.5)scale(0.45)rotate(180)" fill="rgba(255,255,255,1)" />
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(506 95)scale(0.45)rotate(90)" fill="rgba(255,255,255,1)" />
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(180 110)scale(0.45)rotate(270)" fill="rgba(255,255,255,1)" />
            <text x={props.conf.PAD + 7} y={2.25 * props.conf.BLOCK_SIZE3 + 7}
                fontSize="65"
                fontWeight="bold"
                fill="white"
                className="title_shadow">
                IROAWASE
            </text>
            <text x={props.conf.PAD} y={2.25 * props.conf.BLOCK_SIZE3}
                fontSize="65"
                fontWeight="bold"
                fill="white"
                className="title">
                IROAWASE
            </text>
            <g>
                <rect x={props.conf.PAD}
                    y={props.conf.PAD + (props.conf.BLOCK_SIZE3 * 2.75)}
                    width={props.conf.BLOCK_SIZE3 * 2 - 3} height={props.conf.BLOCK_SIZE3 * 0.5}
                    fill={"white"}
                    className="level"
                    opacity={0.9}
                ></rect>
                <text x={props.conf.PAD + (props.conf.BLOCK_SIZE3 * 1)} y={props.conf.PAD + (props.conf.BLOCK_SIZE3 * 3)}
                    dominantBaseline="central"
                    textAnchor="middle"
                    fontSize={props.conf.BLOCK_SIZE3 * 0.3}
                    fontWeight="bold"
                    fill="black"
                >
                    🐣EASY
                </text>
            </g>
            <g>
                <rect x={props.conf.PAD + (props.conf.BLOCK_SIZE3 * 2 + 3)}
                    y={props.conf.PAD + (props.conf.BLOCK_SIZE3 * 2.75)}
                    width={props.conf.BLOCK_SIZE3 * 2 - 3} height={props.conf.BLOCK_SIZE3 * 0.5}
                    fill={"white"}
                    className="level"
                    opacity={0.9}
                ></rect>
                <text x={props.conf.PAD + (props.conf.BLOCK_SIZE3 * 3)} y={props.conf.PAD + (props.conf.BLOCK_SIZE3 * 3)}
                    dominantBaseline="central"
                    textAnchor="middle"
                    fontSize={props.conf.BLOCK_SIZE3 * 0.3}
                    fontWeight="bold"
                    fill="black"
                >
                    🔥HARD
                </text>
            </g>
            <rect x={0} y={0}
                width={props.conf.WIDTH} height={props.conf.HEIGHT}
                onClick={() => props.start()}
                fill="rgba(255,255,255,0.1)"
            ></rect>
        </g>
    )
}