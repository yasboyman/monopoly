import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import purchasePropertyAction from '../actions/passingINFOAction'


 //this component will grab data, and allow player to purchase using onClick //
const  PlayerActiveButtons  = () => {

    // dicePositions: state.diceReducer.dicePosition,
    // dataArray: state.fullDataArray,
    // players: state.playersReducer.players,
    // properties: state.propertiesData,


    const dispatch = useDispatch();

  const dicePositions = useSelector( state=> state.diceReducer.dicePosition);
const dataArray = useSelector( state => state.fullDataArray);
const players = useSelector( state => state.playersReducer.players);
    const properties = useSelector( state => state.propertiesData );


//DISPLAYS CURRENT ACTIVE PLAYER
       const  currentPlayerName = () =>  players.map(player => (player.active === true  ? player.name : null));


// OBJ OF CURRENT ACTIVE PLAYER DATA
        const active_Player_obj = players.filter(player => player.active);

//CURRENT DICE POSITION OF PLAYER
        const active_properties_info = players.map(player =>  ( player.active && player.position));
        const playerDicePosition = active_properties_info.toString().replace(/[^0-9]/g, '');
        const active_properties_data = dataArray[playerDicePosition];




        const propertyName = active_properties_data && active_properties_data.name;
        const priceOfProperty = active_properties_data && active_properties_data.price;
        const colorOfProperty = active_properties_data && active_properties_data.color;
        const rentOfProperty = active_properties_data && active_properties_data.rent;

        const handlePurchase = () => {
            const currentProperty = properties[active_properties_data.name];
            if (!currentProperty.purchased) {
                return dispatch( purchasePropertyAction({
                    active_Player_obj, active_properties_data,
                    colorOfProperty
                })) && playAudioBuy.play()
            } else {
                alert('property has already been purchased')
            }

        };


        const playAudioBuy =  new Audio('http://soundjay.com/misc/coins-in-hand-2.wav');
            const endPlayerTurn  = new Audio('http://orteil.dashnet.org/cookieclicker/snd/buy2.mp3');



            const handleEndPlayerTurn  = () => {
                 dispatch({type:'END_PLAYER_TURN'}) &&   endPlayerTurn.play()
            };


        return (

            <div
                className={'players'}>

                { {active_properties_data} && <h5> Current Player : {currentPlayerName()} </h5>}

                {active_properties_data &&
                <div className={'propertyList'}>

                    {{propertyName} && <h5> Property Details:  </h5>}
                        <h5>{propertyName && propertyName}</h5>
                        <h5>  {priceOfProperty &&  `£ ${priceOfProperty}`} </h5>
                    <h5>  {rentOfProperty &&  ` Rent : £${rentOfProperty}`} </h5>

                </div> }


                <div className={'purchaseButton'}>
                    {/*// DISPLAYS 'BUY' BUTTON IF PROPERTY TYPE IS 'LOCATION//*/}
                    { active_properties_data && active_properties_data.type == 'location'  ? <button
                        onClick={ handlePurchase }
                        className={'purchaseButton'}
                    > Buy Property </button> : null  }
                    <button
                        className={'purchaseButton'}
                        onClick={ () =>  handleEndPlayerTurn() }>End turn</button>

                </div>


            </div>
        )

};



export default PlayerActiveButtons