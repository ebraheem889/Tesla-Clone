import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction,decrementAction } from './incrementActions';
import { DECREMENT, INCREMENT ,DECREMENT_BY_VAL ,RESET } from './types';

export default function Counter() {

    const countState = useSelector(state=>state.count);
    const dispatch = useDispatch();

    const IncrementCount = ()=>{

            dispatch(incrementAction());
    }

    const DecrementCount = ()=>{

        dispatch(decrementAction());
}

    const INCREMENT_BY_val = ()=>{

        dispatch({
            type:DECREMENT_BY_VAL
        })
    }
    // const IncreaseBY_Val = ()=>{

    //     const va =  document.getElementById("val").value;
        
    //     dispatch({
    //         type:RESET,
    //         val:va
    //     })
    // }

  return (
        <div>
            <h2>{countState}</h2>
            <button onClick={IncrementCount}>INCREMENT</button>
            <button onClick={DecrementCount}>DECREMENT</button>
            <button onClick={INCREMENT_BY_val}>INCREMENT_BY_5</button>
            {/* <button onClick={IncreaseBY_Val}>IncreaseBY_Val</button>
            <input  id="val"/> */}
        </div>
  )
}
