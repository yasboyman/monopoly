import React from "react";
import {connect} from 'react-redux'

const BoardData = ({data, position, players}) => {
// sets the position of the board and css of each Card on Board

    // console.log('dice Position: ' , `${(window.innerHeight - 120)/20}px`)   // what is this 20px?

    const style = {
        border: 'solid 1px black',
        width: position === 'side' ? '17%' : '80%' ,
        fontSize: '9px',
        height: `${(window.innerHeight)/11.75}px` ,
        // `${(window.innerHeight) / 20}px'
        marginBottom: '30px',
        textAlign: 'center',
        margin: '1px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: ' 0 0 10% 10%',



    };

    // sets the card title name along with Color of title
    const styleName = {
        backgroundColor: data.color,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        fontSize: '10px',
        marginTop: '0px',
        width: '100%',
        height: '20%',
        border: 'hidden',
        textAlign: 'inherit',



    };

    const renderPlayers = () => {
        return players.map(player => {
            if (player.position === data.id -1){
                return (
                    <h4 style={{
                        backgroundColor: player.active ? 'yellow' : 'white smoke',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                        zIndex: '2',
                        marginTop: '2px',
                        left: '40%',
                    }}>{player.name}</h4>


                )
            }
        })
    };

    return (
        <div style={style}>


            <header style={styleName}> {data.name} </header>

            {/*// renders the name of the player on the cards //*/}
            <div> {players.length > 1 && renderPlayers()} </div>

            {data.price && <h3 style={{fontSize: '8px'}}>Price: £{data.price}</h3> }

            {data.name === ' Chance ' &&

            <div  style={{backgroundColor: '#F2F8F4'}}>
                <img
                    className={'chance'} alt={'chance'} src={require('../assests/chanceMonopoly.png')} />
            </div>
            }

            {data.name === 'Free Parking' &&
            <img className={'freeParking'} alt={'parking'} src={require('../assests/Free-parking.png')} />
            }

            {data.name === 'Community Chest' &&
            <img className={'communityChest'} alt={'chest'} src={require('../assests/chest.jpeg')} />
            }






        </div>

    );
};

const mapStateToProps = (state) => ({
    dicePosition: state.diceReducer.dicePosition,
    dataArray: state.fullDataArray,
    players: state.playersReducer.players

});


export default connect(mapStateToProps) (BoardData)


// {TO DO LIST}


//- unless double, roll once-
//- players to be on outside of board - position will be : 'absolute' // parent relative,
// -
// -
//- RENT ? -



// const currentDicePosition = useSelector(state => state.diceReducer.dicePosition);
// const currentProperty = useSelector(state => state.fullDataArray[currentDicePosition]);
//
// const purchaseProperties = () => dispatch(purchasedPropertyAction({ property: currentProperty.name, buyer: 'yasir', price: currentProperty.price }));
// // type: PURCHASE_PROPERTY
