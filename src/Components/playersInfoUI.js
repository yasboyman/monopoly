import React from "react";
import {useDispatch, useSelector} from "react-redux";

const PlayerInfoUI = () => {

    const dispatch = useDispatch();
    const playerState = useSelector( state => state.playersReducer.players);
    const propertiesData = useSelector( state => state.fullDataArray);
    const rentActivated = useSelector( state => state.playersReducer.popUpBox);

    const activePlayerPos = playerState.map( player => player.active ? player.position : null);


    // propertiesData[activePlayerPos].color  inside map below- put it back
    let  playerInfo = '';

    const activePlayerName  = playerState.map((player) => {


        const propsss = player.properties.map( x =>
            <div style={{ color: 'green' }}> <br /> {x}
            </div>);


        if  (player.active)
            playerInfo = {
            name: player.name,
                money: player.money,
                color:player.color,
                position: player.position,
                properties: propsss,
        };

        return playerInfo

    });

    console.log('FIRE RENT',   rentActivated );

    const playerPosition = playerInfo.position;
    const fullDataProperties = propertiesData[playerPosition];




    return (
        <>


        <div className={'playerInfoUI'} style={{backgroundColor: 'smokey white', border: 'solid  0.5px black' }}>

            <h5 style={{zIndex: '900', color: 'black'  , backgroundColor: playerInfo.color, marginTop: '0%', borderRadius: '1px', height: '25px'  }}> {playerInfo.name}  </h5>
            <h5 style={{zIndex: '900', color: 'black'}}>    Money: £  {playerInfo.money}  </h5>
            <h5 style={{zIndex: '900'}} > Properties:  </h5>
            <div>
                      {  playerInfo.properties && playerInfo.properties }
            </div>
        </div>


            {rentActivated === true ?  <div
                    onClick={ () => dispatch({type: 'BYEBYE'}) }
                    style={{display: "flex", flexDirection: 'column', alignItems: 'center',
                        width: '400px', height: '300px', backgroundColor: "white", top: '10%', position: 'absolute',
                        right: '50%', marginRight: '-200px', zIndex: '999', borderRadius: '20%', padding: '20px', fontSize: '24px',}} >


            <h5> Rent of £££  paid to </h5>

            </div> : null };




            </>



    )
};




export default PlayerInfoUI
