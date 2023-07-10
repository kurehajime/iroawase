import { useState } from "react";
import Field from "../models/Field";
import { HEIGHT, WIDTH } from "../utils/Conf";
import FieldElement from "./FieldElement";
import GameMaster from "../models/GameMaster";
import { Point } from "../models/Point";
import React from "react";

export default function GameElement() {
    const [field, setField] = useState<Field>(GameMaster.createInitField())
    const [start, setStart] = React.useState<boolean>(false)
    const [ended, setEnded] = React.useState<boolean>(false)
    const check = (f: Field) => {
        if (GameMaster.complete(f)) {
            setEnded(true)
            setTimeout(() => {
                setEnded(false)
                setStart(false)
                setField(GameMaster.createInitField())
            }, 3500)
        }
    }
    const shift = (cursor: Point, inc: Point) => {
        if (inc.x !== 0) {
            const f = GameMaster.shiftHorizonField(field, cursor.y, -1 * inc.x)
            setField(f)
            check(f)
        }
        if (inc.y !== 0) {
            const f = GameMaster.shiftVerticalField(field, cursor.x, -1 * inc.y)
            setField(f)
            check(f)
        }
    }

    return (
        <svg width={WIDTH} height={HEIGHT}
            className="canv">
            <FieldElement field={field}
                shift={shift}
                start={() => {
                    setStart(true)
                    setField(GameMaster.createFillField())
                }}
                started={start}
                end={
                    () => {
                        setEnded(false)
                        setStart(true)
                        setField(GameMaster.createInitField())
                    }
                }
                ended={ended}
            />
        </svg>
    )
}