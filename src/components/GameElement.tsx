import { useState } from "react";
import Field from "../models/Field";
import { HEIGHT, WIDTH } from "../utils/Conf";
import FieldElement from "./FieldElement";

export default function GameElement() {
    const [field, setField] = useState<Field>(Field.createFillField())


    return (
        <svg width={WIDTH} height={HEIGHT}>
            <FieldElement field={field} />
        </svg>
    )
}