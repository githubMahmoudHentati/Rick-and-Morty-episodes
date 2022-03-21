import React from "react";

export const TimerButton =({buttonAction,buttonValue})=>{
    return(
        <div className="button-container" onClick={() => buttonAction()}>
            <p className="button-value">{buttonValue}</p>
        </div>
        )
}