import { useState } from "react";
import Field from "../models/Field";
import { ConfBuilder, Mode } from "../utils/Conf";
import FieldElement from "./FieldElement";
import GameMaster from "../models/GameMaster";
import { Point } from "../models/Point";
import React from "react";

export default function GameElement() {
    const [mode, setMode] = React.useState<Mode>("normal")
    const conf = ConfBuilder.build(mode)
    const [field, setField] = useState<Field>(GameMaster.createInitField(conf))
    const [start, setStart] = React.useState<boolean>(false)
    const [ended, setEnded] = React.useState<boolean>(false)
    const check = (f: Field) => {
        if (GameMaster.complete(conf, f)) {
            setEnded(true)
            setTimeout(() => {
                setEnded(false)
                setStart(false)
                setField(GameMaster.createInitField(conf))
            }, 3500)
        }
    }
    const shift = (cursor: Point, inc: Point) => {
        if (inc.x !== 0) {
            const f = GameMaster.shiftHorizonField(conf, field, cursor.y, -1 * inc.x)
            setField(f)
            check(f)
        }
        if (inc.y !== 0) {
            const f = GameMaster.shiftVerticalField(conf, field, cursor.x, -1 * inc.y)
            setField(f)
            check(f)
        }
    }

    return (
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
                conf={conf}
            />
        </svg>
    )
}