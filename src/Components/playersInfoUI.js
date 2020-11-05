import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSpring, animated, useTrail} from 'react-spring';
import {Trail} from 'react-spring/renderprops'



const PlayerInfoUI = () => {

    const dispatch = useDispatch();
    const playerState = useSelector( state => state.playersReducer.players);
    const propertiesData = useSelector( state => state.fullDataArray);
    const rentActivated = useSelector( state => state.playersReducer.popUpBox);


    const activePlayerPos = playerState.map( player => player.active ? player.position : null);
    // propertiesData[activePlayerPos].color  inside map below- put it back
    let  playerInfo = '';


    const props2 = useSpring({
        opacity: 1, from: {opacity: 0}

    });

    const activePlayerName  = playerState.map((player) => {

        const propsss = player.properties.map( x =>

            <Trail items={x} keys={x => x.key} from={{transform: 'translate3d(0,-40px,0)'}} to={{transform: 'translate3d(0,0px,0)'}}>
        {x => props =>  <animated.div style={props}> <br /> {x} </animated.div> }
    </Trail>

    ) ;

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



    const playerPosition = playerInfo.position;
    const fullDataProperties = propertiesData[playerPosition];

    const props = useSpring({
        opacity: playerInfo.properties ? 1 : 0,
        marginTop: playerInfo.properties  ? 0 : -500
    });



    return (
        <>


        <animated.div className={'playerInfoUI'} style={props}>

            <h5
                style={{zIndex: '900', color: 'black'  , backgroundColor: playerInfo.color, marginTop: '0%', borderRadius: '1px', height: '25px'  }}> {playerInfo.name}  </h5>
            <h5
                style={{zIndex: '900', color: 'black'}}>    Money: £  {playerInfo.money}  </h5>



                <h5
                    style={{zIndex: '900'}} > Properties:  </h5>

            <div>


                      {  playerInfo.properties &&  playerInfo.properties }

          </div>

        </animated.div>


            {/*// RENT POP UP BOX //*/}
            {rentActivated === true ?  <div
                    onClick={ () => dispatch({type: 'BYEBYE'}) }
                    style={{display: "flex", flexDirection: 'column', alignItems: 'center',
                        width: '200px', height: '180px', backgroundColor: "white", top: '10%', position: 'absolute',
                        right: '70%', marginRight: '-200px', zIndex: '999', borderRadius: '20%', padding: '20px', fontSize: '24px',}} >


            <h5> Rent of £££  paid to </h5>

            </div> : null }




            </>



    )
};




export default PlayerInfoUI
