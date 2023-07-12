import { useState } from "react";
import Field from "../models/Field";
import { ConfBuilder, Mode } from "../utils/Conf";
import FieldElement from "./FieldElement";
import GameMaster from "../models/GameMaster";
import { Point } from "../models/Point";
import React from "react";
import { useTimer } from "use-timer";
import "./GameElement.css"

export default function GameElement() {
    const { time: time, start: startTime, pause: pauseTime, reset: resetTime } = useTimer({ endTime: 999 })
    const [count, setCount] = React.useState<number>(0)
    const [mode, setMode] = React.useState<Mode>("easy")
    const conf = ConfBuilder.build(mode)
    const [field, setField] = useState<Field>(GameMaster.createInitField(conf))
    const [start, setStart] = React.useState<boolean>(false)
    const [ended, setEnded] = React.useState<boolean>(false)
    const [lock, setLock] = React.useState<boolean>(false)
    const check = (f: Field) => {
        if (GameMaster.complete(conf, f)) {
            pauseTime()
            setEnded(true)
            setLock(true)
            setTimeout(() => {
                setLock(false)
            }, 500)
        }
    }
    const restart = () => {
        if (!lock) {
            setEnded(false)
            setStart(false)
            setField(GameMaster.createInitField(conf))
        }
    }
    const shift = (cursor: Point, inc: Point) => {
        if (inc.x !== 0) {
            const f = GameMaster.shiftHorizonField(conf, field, cursor.y, -1 * inc.x)
            setField(f)
            check(f)
            setCount(c => c + 1)
        }
        if (inc.y !== 0) {
            const f = GameMaster.shiftVerticalField(conf, field, cursor.x, -1 * inc.y)
            setField(f)
            check(f)
            setCount(c => c + 1)
        }
    }

    return (
        <>
            <svg width={conf.WIDTH} height={conf.HEIGHT}
                className="canv">
                <FieldElement field={field}
                    shift={shift}
                    start={(level: string) => {
                        setMode(level as Mode)
                        const newConf = ConfBuilder.build(level as Mode)
                        console.log(level)
                        setStart(true)
                        setField(GameMaster.createFillField(newConf))
                        resetTime()
                        startTime()
                        setCount(0)
                    }}
                    started={start}
                    end={
                        () => {
                            setEnded(false)
                            setStart(true)
                            setField(GameMaster.createInitField(conf))
                        }
                    }
                    ended={ended}
                    restart={restart}
                    time={time}
                    count={count}
                    conf={conf}
                />
            </svg>
            <span className="score">
                {mode}/{`${(Math.floor(time / 60)).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`}
                / {`${count}moves`}
            </span>
        </>
    )
}