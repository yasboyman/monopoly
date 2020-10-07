import React, {Component} from "react";
import {connect} from "react-redux";
import BoardData from "./BoardData";

 //this component will grab data, and allow player to purchase using onClick //

class PlayerActiveButtons extends Component {




    render() {
        const {players, dataArray} = this.props;

        const playerStateCopy = this.props.players;

//DISPLAYS CURRENT ACTIVE PLAYER
       const  currentPlayerName = () =>  players.map(player =>

             (player.active === true  ? player.name : null));


// OBJ OF CURRENT ACTIVE PLAYER DATA
        const active_Player_obj = players.filter(player => player.active);

//CURRENT DICE POSITION OF PLAYER
        const active_properties_info = players.map(player =>  ( player.active && player.position));
        const playerDicePosition = active_properties_info.toString().replace(/[^0-9]/g, '');

        const active_properties_data = dataArray[playerDicePosition];


        const numbersNot = [ 1, 3 , 5 , 8 , 11 , 18 , 21 , 23 , 31 , 34 ,37 ,39];

        // if(numbersNot.indexOf(playerDicePosition) == -1)
        // {
        //     console.log('yay')
        // }
        //
        // console.log(numbersNot.indexOf(playerDicePosition));


        return (

            <div className={'players'}>
                 { {currentPlayerName} && <h5> Current Player : {currentPlayerName()} </h5>}

                 {/*// DISPLAYS 'BUY' BUTTON IF PROPERTY TYPE IS 'LOCATION//*/}
                { active_properties_data && active_properties_data.type == 'location'  ? <button
                    onClick={ () => this.props.purchaseTing({active_Player_obj, active_properties_data}) }
                > Buy Property </button> : null  }

                    <button onClick={this.props.turnEndedClicked}>End turn</button>

            </div>
        );
    };
}


const mapStateToProps = (state) => ({


    dicePositions: state.diceReducer.dicePosition,
    dataArray: state.fullDataArray,
    players: state.playersReducer.players,

});


const mapDispatchToProps = (dispatch) => {
    return {

        turnEndedClicked:  () => dispatch({type: 'END_PLAYER_TURN'}),
        purchaseTing: (payload) => dispatch({type: 'PURCHASE_PROPERTY', payload })



    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PlayerActiveButtons)