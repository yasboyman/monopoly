import React, {Component} from "react";
import {connect} from "react-redux";
import BoardData from "./BoardData";
import PlayersInfoUI from "./playersInfoUI";

 //this component will grab data, and allow player to purchase using onClick //

class PlayerActiveButtons extends Component {




    render() {
        const {players, dataArray} = this.props;


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



        console.log('active_Player_obj',active_Player_obj);



        const handlePurchase = () => {
            const currentProperty = this.props.properties[active_properties_data.name];
            console.log(currentProperty);
            if (!currentProperty.purchased) return  playAudioBuy.play() && this.props.purchaseTing({active_Player_obj, active_properties_data});
            alert('property has already been purchased');
        };


        const playAudioBuy =  new Audio('http://soundjay.com/misc/coins-in-hand-2.wav')

            const endPlayerTurn  = new Audio('http://orteil.dashnet.org/cookieclicker/snd/buy2.mp3')


        return (


            <div className={'players'}>



                { {currentPlayerName} && <h5> Current Player : {currentPlayerName()} </h5>}

                {active_properties_data &&
                <div className={'propertyList'}>
                    <ul>
                        Property Details:
                        <li>{propertyName}</li>
                        <li>  {priceOfProperty &&  `£ ${priceOfProperty}`} </li>

                    </ul>
                </div> }

                <dice
                     data={active_properties_data}
                />


                 {/*// DISPLAYS 'BUY' BUTTON IF PROPERTY TYPE IS 'LOCATION//*/}
                { active_properties_data && active_properties_data.type == 'location'  ? <button
                    onClick={ handlePurchase }
                    className={'purchaseButton'}
                > Buy Property </button> : null  }
                    <button
                        className={'purchaseButton'}
                        onClick={ () => endPlayerTurn.play() && this.props.turnEndedClicked() }>End turn</button>
            </div>
        );
    };
}


const mapStateToProps = (state) => ({


    dicePositions: state.diceReducer.dicePosition,
    dataArray: state.fullDataArray,
    players: state.playersReducer.players,
    properties: state.propertiesData,

});


const mapDispatchToProps = (dispatch) => {
    return {

        turnEndedClicked:  () => dispatch({type: 'END_PLAYER_TURN'}),
        purchaseTing: (payload) => dispatch({type: 'PURCHASE_PROPERTY', payload })

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PlayerActiveButtons)