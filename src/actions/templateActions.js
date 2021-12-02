// multiple actions in this file
import { SAMPLE } from "./types"

export const sampleAction = (sampleData) => {
    return {
        type: SAMPLE,
        data: sampleData
    }
}