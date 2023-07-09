import { BLOCK_SIZE, HEIGHT, PAD, WIDTH } from "../utils/Conf"

type Props = {
    start: () => void
}
export default function StartElement(props: Props) {

    return (
        <g>
            <rect x={0} y={0}
                width={WIDTH} height={HEIGHT}
                fill="rgba(0,0,0,0.4)"
            ></rect>
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(100 -120)scale(0.5)" fill="white" />
            <path d="M100.993,264.985v50.531h-84c-.911,0-1.644,1.951-1.644,4.373v85.5c0,2.422.733,4.373,1.644,4.373h84V460.3l59.172-50.531h1.2c.609,0,1.115-.917,1.4-2.22l52.586-44.905-52.586-44.905c-.284-1.3-.789-2.22-1.4-2.22h-1.2Z"
                transform="translate(120 243)scale(0.5)rotate(180)" fill="white" />
            <text x={PAD} y={2 * BLOCK_SIZE}
                fontSize="75"
                fontWeight="bold"
                fill="white">
                SWISH
            </text>
            <text x={PAD} y={3 * BLOCK_SIZE}
                fontSize="75"
                fontWeight="bold"
                fill="white">
                SWOOSH
            </text>
            <rect x={0} y={0}
                width={WIDTH} height={HEIGHT}
                onClick={() => props.start()}
                fill="rgba(0,0,0,0)"
            ></rect>
        </g>
    )
}