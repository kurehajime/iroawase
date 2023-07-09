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
    const shift = (cursor: Point, inc: Point) => {
        if (inc.x !== 0) {
            setField(GameMaster.shiftHorizonField(field, cursor.y, -1 * inc.x))
        }
        if (inc.y !== 0) {
            setField(GameMaster.shiftVerticalField(field, cursor.x, -1 * inc.y))
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
            />
        </svg>
    )
}