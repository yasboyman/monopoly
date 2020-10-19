import React from "react";
import {useDispatch, useSelector} from "react-redux";

const PlayerInfoUI = () => {

    const dispatch = useDispatch();
    const playerState = useSelector( state => state.playersReducer.players);

    const activePlayer = playerState.map(active => active.active)


    console.log('playerState ========',playerState);



    return (
        <div className={'playerInfoUI'}>

            <h4 onClick={dispatch({ type: 'HELLO'})}
            style={{zIndex: '9', color: 'white'}}
            >  {activePlayer.name} </h4>


            </div>

    )
}



export default PlayerInfoUI
