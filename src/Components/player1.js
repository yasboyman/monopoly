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



            // GETS INFO OF PROPERTIES- NAME, PRICE, COLOR, RENT
        const propertyName = active_properties_data && active_properties_data.name;
        const priceOfProperty = active_properties_data && active_properties_data.price;
        const colorOfProperty = active_properties_data && active_properties_data.color;
        const rentOfProperty = active_properties_data && active_properties_data.rent;
        const ownerOfProperty =  Object.keys(properties)

        // const findPlayerOwner = ownerOfProperty.on

        const handlePurchase = () => {
            const currentProperty = properties[active_properties_data.name];
            if (!currentProperty.purchased) {
                return dispatch(purchasePropertyAction({
                    active_Player_obj, active_properties_data,
                    colorOfProperty
                })) && playAudioBuy.play()
            } else {
                alert('property has already been purchased')
            }
        }


    const showIfPurchased = () => {
        const currentProperty = properties[active_properties_data.name];
        const ownerOfProperty11 =
            active_properties_data.type === 'location' ||active_properties_data.type === 'Station' &&
            currentProperty ? currentProperty.owner.toString() : null

        console.log('ownerOfProperty11', ownerOfProperty11)
        if (ownerOfProperty11) {
            return `Owner: ${ownerOfProperty11}`
        }

        else if (active_properties_data.type === 'location' ||active_properties_data.type === 'Station' ) {

            return `You can purchase this property`
        }
    }


        const playAudioBuy =  new Audio('http://soundjay.com/misc/coins-in-hand-2.wav');
            const endPlayerTurn  = new Audio('http://orteil.dashnet.org/cookieclicker/snd/buy2.mp3');

            const handleEndPlayerTurn  = () => {
               return    dispatch({type:'END_PLAYER_TURN'})
                   // && endPlayerTurn.play(); Uncaught (in promise) DOMException: The element has no supported sources.
            };

            // console.log('FIREEEEE',   active_properties_data && ownerOfProperty[active_properties_data.name])

        return (

            <div

                className={'players'}>
                {/*{active_Player_Money < 0 ? dispatch({type:'PLAYER_BROKE'}) : null}*/}

                {active_properties_data &&

                <div
                    className={'propertyList'}
                    style={{display: "flex", flexDirection: 'column', alignItems: 'center',
                        width: '200px', height: 'auto', backgroundColor: "white", top: '10%',
                        right: '70%', marginRight: '-200px', zIndex: '999', borderRadius: '12%', fontSize: '12px',}}>

                    {{propertyName} && <h5> Property Details:  </h5>}
                    <h5> Current Player : {currentPlayerName()} </h5>
                    <h5 style={{margin: '-8px'}}>{propertyName && propertyName}</h5>
                        <h5>  {priceOfProperty &&  `£ ${priceOfProperty}`} </h5>
                    <h5>{showIfPurchased()}</h5>
                    <h5>  {rentOfProperty &&  ` Rent : £${rentOfProperty}`}</h5>




                   

                </div> }



                <div className={'purchaseButton1'}>
                    {/*// DISPLAYS 'BUY' BUTTON IF PROPERTY TYPE IS 'LOCATION//*/}
                    { active_properties_data && active_properties_data.type === 'location' ||
                    active_properties_data && active_properties_data.type === 'Station'  ? <button
                        onClick={ handlePurchase }
                        className={'purchaseButton'}
                    > Buy Property </button> : null  }

                    {active_properties_data  &&   <button
                            className={'endTurnButton'}
                            onClick={  () => handleEndPlayerTurn() }>End turn</button>

                    }





                </div>


            </div>
        )

};



export default PlayerActiveButtons