import { useState } from "react";
import Field from "../models/Field";
import { ConfBuilder, Mode } from "../utils/Conf";
import FieldElement from "./FieldElement";
import GameMaster from "../models/GameMaster";
import { Point } from "../models/Point";
import React from "react";
import { useTimer } from "use-timer";
import "./GameElement.css"
import { Log } from "../models/Log";
import ReplayElement from "./ReplayElement";
import URLManager from "../models/URLManager";

export default function GameElement() {
    const { time: time, start: startTime, pause: pauseTime, reset: resetTime } = useTimer({ endTime: 999 })
    const { time: timeReplay, start: startReplayTime, pause: pauseReplayTime, reset: resetReplayTime } = useTimer({ interval: 250 })
    const [count, setCount] = React.useState<number>(0)
    const [mode, setMode] = React.useState<Mode>("easy")
    const conf = ConfBuilder.build(mode)
    const [field, setField] = useState<Field>(GameMaster.createInitField(conf))
    const [start, setStart] = React.useState<boolean>(false)
    const [ended, setEnded] = React.useState<boolean>(false)
    const [lock, setLock] = React.useState<boolean>(false)
    const [initMap, setInitMap] = React.useState<number[]>([])
    const [log, setLog] = React.useState<Log>([])
    const [logIndex, setLogIndex] = React.useState<number>(0)
    const [replay, setReplay] = React.useState<boolean>(false)
    const [resume, setResume] = React.useState<boolean>(false)
    const [resumeTime, setResumeTime] = React.useState<number | null>(null)
    const check = (f: Field): boolean => {
        if (GameMaster.complete(conf, f)) {
            if (!replay) {
                pauseTime()
                setEnded(true)
                setLock(true)

                setTimeout(() => {
                    setLock(false)
                }, 500)
                return true
            }
        }
        return false
    }
    const restart = () => {
        if (!lock) {
            setEnded(false)
            setStart(false)
            setField(GameMaster.createInitField(conf))
            setResumeTime(null)
            const url = new URL(window.location.toString())
            url.search = ''
            history.pushState("", document.title, url.href);
        }
    }
    const shift = (cursor: Point, inc: Point) => {
        let result = false
        if (inc.x !== 0) {
            const f = GameMaster.shiftHorizonField(conf, field, cursor.y, -1 * inc.x)
            if (!replay) {
                setLog(l => [...l, [cursor, inc]])
                setCount(c => c + 1)
            }
            setField(f)
            result = check(f)
        }
        if (inc.y !== 0) {
            const f = GameMaster.shiftVerticalField(conf, field, cursor.x, -1 * inc.y)
            if (!replay) {
                setLog(l => [...l, [cursor, inc]])
                setCount(c => c + 1)
            }
            setField(f)
            result = check(f)
        }
        if (result) {
            const url = new URL(window.location.toString())
            const searchParams = URLManager.generateSearchParams(initMap, [...log, [cursor, inc]], mode, time)
            url.search = searchParams.toString()
            history.pushState("", document.title, url.href);
        }
    }
    const startFunc = (level: string) => {
        setMode(level as Mode)
        const newConf = ConfBuilder.build(level as Mode)
        console.log(level)
        setStart(true)
        const f = GameMaster.createFillField(newConf)
        setField(f)
        setInitMap(GameMaster.toArray(f))
        setLog([])
        resetTime()
        startTime()
        setCount(0)
        setResumeTime(null)
        setReplay(false)
        const url = new URL(window.location.toString())
        url.search = ''
        history.pushState("", document.title, url.href);
    }
    const endFunc = () => {
        setEnded(false)
        setStart(true)
        setField(GameMaster.createInitField(conf))
    }
    const replayFunc = () => {
        const f = GameMaster.fromArray(conf, initMap)
        doReplay(f)
    }
    const doReplay = (f: Field) => {
        setField(f)
        setEnded(false)
        setReplay(true)
        resetReplayTime()
        startReplayTime()
    }
    const endReplay = () => {
        pauseReplayTime()
        setLogIndex(0)
        setReplay(false)
        setEnded(true)
    }
    React.useEffect(() => {
        if (!resume) {
            setResume(true)
            const url = new URL(window.location.toString())
            const searchParams = url.searchParams
            const result = URLManager.parseSearchParams(searchParams.toString())
            if (result) {
                const [f, l, m, t] = result
                console.log(result)
                setMode(m)
                setField(f)
                setLog(l)
                setInitMap(GameMaster.toArray(f))
                setStart(true)
                setCount(l.length)
                setResumeTime(t)
                doReplay(f)
            }
        }
    }, [resume])
    React.useEffect(() => {
        if (replay) {
            if (logIndex >= log.length) {
                endReplay()
                return
            }
            const l = log[logIndex]
            if (l) {
                const [cursor, inc] = l
                shift(cursor, inc)
                setLogIndex(i => i + 1)
            }
        }

    }, [replay, timeReplay])
    return (
        <>
            <svg width={conf.WIDTH} height={conf.HEIGHT}
                className="canv">
                <FieldElement field={field}
                    shift={shift}
                    start={startFunc}
                    replay={replayFunc}
                    started={start}
                    end={endFunc}
                    ended={ended}
                    restart={restart}
                    time={resumeTime ?? time}
                    count={count}
                    conf={conf}
                />
                {
                    replay && <ReplayElement
                        conf={conf}
                        log={log}
                        logIndex={logIndex}
                        endReplay={endReplay} />
                }
            </svg>
            <span className="score">
                {mode}/{`${(Math.floor((resumeTime ?? time) / 60)).toString().padStart(2, "0")}:${((resumeTime ?? time) % 60).toString().padStart(2, "0")}`}
                / {`${count}moves`}
            </span>
        </>
    )
}