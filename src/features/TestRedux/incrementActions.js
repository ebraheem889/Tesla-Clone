import { DECREMENT, INCREMENT } from "./types"



export const incrementAction= ()=>{

    return {
        type:INCREMENT
    }
}

export const decrementAction= ()=>{

    return {
        type:DECREMENT
    }
}