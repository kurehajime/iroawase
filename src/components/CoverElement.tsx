import React, { useEffect } from "react"
import { BLOCK_SIZE, WIDTH } from "../utils/Conf"
import { Point } from "../models/Point"

type Props = {
    x: number,
    y: number,
    clicked: (point: Point, touched: boolean) => void
    selected: Point | null
}
export default function CoverElement(props: Props) {
    const ref = React.useRef<SVGRectElement>(null)
    const [mouseX, setMouseX] = React.useState<number>(0)
    const [mouseY, setMouseY] = React.useState<number>(0)
    const [mouseStartX, setMouseStartX] = React.useState<number>(0)
    const [mouseStartY, setMouseStartY] = React.useState<number>(0)


    const touchStart = (event: Event) => {
        const e = event as PointerEvent
        const rect = (e.target as SVGSVGElement).getBoundingClientRect()
        const x = (e.clientX - window.pageXOffset - rect.left)
        const y = (e.clientY - window.pageYOffset - rect.top)
        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches
        if (!props.selected) {
            setMouseX(x)
            setMouseY(y)
            setMouseStartX(x)
            setMouseStartY(y)
            clicked(x, y, isTouch)
        } else {
            setMouseX(x)
            setMouseY(y)
            clicked(x, y)
        }
        e.preventDefault()
    }
    const touchEnd = (event: Event) => {
        const e = event as PointerEvent
        if (props.selected) {
            const x = mouseX
            const y = mouseY
            if (Math.sqrt((x - mouseStartX) ** 2 + (y - mouseStartY) ** 2) < 20) {
                return;
            }
            setMouseX(x)
            setMouseY(y)
            clicked(x, y, true)
        }
        e.preventDefault()
    }

    const touchMove = (event: Event) => {
        const e = event as PointerEvent
        const rect = (e.target as SVGSVGElement).getBoundingClientRect()
        const x = (e.clientX - window.pageXOffset - rect.left)
        const y = (e.clientY - window.pageYOffset - rect.top)
        setMouseX(x)
        setMouseY(y)
    }

    const clicked = (x: number, y: number, touched = false) => {
        props.clicked({ x: Math.floor(x / BLOCK_SIZE), y: Math.floor(y / BLOCK_SIZE) }, touched)
    }

    useEffect(() => {
        ref.current?.addEventListener("pointerdown", touchStart)
        ref.current?.addEventListener("pointerup", touchEnd)
        ref.current?.addEventListener("pointermove", touchMove)
        return () => {
            ref.current?.removeEventListener("pointerdown", touchStart)
            ref.current?.removeEventListener("pointerup", touchEnd)
            ref.current?.removeEventListener("pointermove", touchMove)
        }
    },)


    return (<g
        x={props.x}
        y={props.y}
        width={WIDTH}
        height={WIDTH}
    >
        <rect
            ref={ref}
            x={props.x}
            y={props.y}
            width={WIDTH}
            height={WIDTH}
            fill="transparent"
            stroke="transparent"
        />
    </g>)
}