import { useState } from "react";
import Field from "../models/Field";
import { HEIGHT, WIDTH } from "../utils/Conf";
import FieldElement from "./FieldElement";
import GameMaster from "../models/GameMaster";

export default function GameElement() {
    const [field, setField] = useState<Field>(GameMaster.createFillField())
    const onClick = (n: number) => {
        setField(GameMaster.incrementField(field, n))
    }

    return (
        <svg width={WIDTH} height={HEIGHT}>
            <FieldElement field={field}
                onClick={onClick}
            />
        </svg>
    )
}