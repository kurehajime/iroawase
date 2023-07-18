import { ConfBuilder, Mode } from "../utils/Conf";
import Field from "./Field";
import GameMaster from "./GameMaster";
import { Log } from "./Log";
import { Point } from "./Point";

export default class URLManager {
    static generateSearchParams(initArray: number[], log: Log, mode: Mode, time: number): URLSearchParams {
        const fStr = initArray.join('')
        const lStr = log.map((l) => {
            return `${l[0].x}a${l[0].y}b${l[1].x}c${l[1].y}`
        }).join("d")
        const params = {
            f: fStr,
            l: lStr,
            m: mode,
            t: time.toString(),
        }
        return new URLSearchParams(params)
    }
    static parseSearchParams(params: string): [Field, Log, Mode, number] | null {
        const urlParams = new URLSearchParams(params)
        const fStr = urlParams.get('f')
        const lStr = urlParams.get('l')
        const mStr = urlParams.get('m')
        const tStr = urlParams.get('t')
        if (fStr && lStr && mStr && tStr) {
            const mode = mStr as Mode
            const conf = ConfBuilder.build(mode)
            const field = GameMaster.fromArray(conf, fStr.split('').map((c) => { return parseInt(c) }))
            const log = lStr.split('d').map((l) => {
                const logStr = l.split('b')
                const p1Str = logStr[0].split('a')
                const p2Str = logStr[1].split('c')
                return [
                    { x: parseInt(p1Str[0]), y: parseInt(p1Str[1]) } as Point,
                    { x: parseInt(p2Str[0]), y: parseInt(p2Str[1]) } as Point,
                ]
            }) as Log
            return [field, log, mode, parseInt(tStr)]
        }

        return null
    }
}