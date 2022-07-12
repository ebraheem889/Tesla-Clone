import {INCREMENT, DECREMENT,DECREMENT_BY_VAL,RESET } from "./types";

const counterReducer = (state={count:0,val:0},action) => {

        switch(action.type){

            case INCREMENT:
                return {count:state.count+1}
            case DECREMENT:
                return {count:state.count-1}
            case DECREMENT_BY_VAL:
                    return {count:state.count+5}
            // case RESET:
            //     console.log(state)
            //             return {...state,count:state.count+=state.val}
            default:
                return state;



        }


}


export default counterReducer;