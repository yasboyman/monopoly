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
        marginBottom: '30px',
        textAlign: 'center',
        margin: '1px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
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
        position: 'relative',
        fontWeight: 'bold',
    };

    const renderPlayers = () => {
        return players.map((player) => {
            if (player.position === data.id -1){
                return (
                    <h4 style={{

                        backgroundColor: player.color,
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                        zIndex: '99  !important',
                        paddingTop: '10px',
                        animation:  player.active? 'shake 1s cubic-bezier(.36,.07,.19,.97) both': null,
                        animationIterationCount:'infinite',
                        transform: 'translate3d(0, 0, 0)',
                        backfaceVisibility: 'hidden',
                        borderRadius:'30%',
                        // padding:' 10% 10% 10% 10px',
                        height: '25px',
                        position: 'absolute',
                        width: 'auto',
                        maxHeight: '25px'


                    }}>{player.name}</h4>


                )
            }

        })

    };

    return (
        <div  className={'cards'} style={style}>


            <header style={styleName}> {data.name} </header>

            {/*// renders the name of the player on the cards //*/}
            <div> {renderPlayers() && renderPlayers()} </div>

            {data.price && <h3 style={{fontSize: '8px', marginTop: '37px'}}>£{data.price}</h3> }

            {data.name === ' Chance ' &&

            <div>

                <img
                    className={'chance'} alt={'chance'} src={require('../assests/monopoly-chance-question-mark.png')}/>
            </div>
            }

            {data.name === 'Free Parking' &&
            <img className={'freeParking'} alt={'parking'} src={require('../assests/Free-parking.png')} />
            }

            {data.name === 'Community Chest' &&
            <img
                style={{backgroundColor: 'white'} }
                className={'communityChest'} alt={'chest'} src={require('../assests/chest.gif')} />
            }


            {data.name === 'Go to Jail' &&
            <img className={'goToJail'} alt={'jail'} src={require('../assests/monopoly-prison-board.jpg')} />
            }

            {data.type == 'Station' &&
            <img
                style={{backgroundColor: 'white'}}
                className={'station'} alt={'station'} src={require('../assests/trainStation.jpeg')} />
            }

            {data.name == 'GO' &&
            <img
                style={{backgroundColor: 'white'}}
                className={'go'} alt={'go'} src={require('../assests/go.gif')} />
            }

            {data.name == 'Jail' &&
            <img
                style={{backgroundColor: 'white'}}
                className={'jail'} alt={'jail'} src={require('../assests/inJail.jpg')} />
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


// {TO DO LIST}  //


//- unless double, roll once-                                                                   **** DONE!!
//- players to be on outside of board - position will be : 'absolute' // parent relative,       **** DONE!!
//- add images no background                                                                    **** DONE!!
// - implement rent                                                                              **** DONE!!
// - current player - money display in UI, mark on UI purchased property,                       ******DONE !!!!
// pass go get 200                                                                              **** DONE!!!
// income tax - reducer
// title for prop bold                                                                          **** DONE!!
// remove price, move  numbers to bottom,                                                       ***** DONE!!
// players color ... each player added to store                                                 *****DONE!!!
    // change anywhere class to functional, useSelectors //
// player data on main board  data price properties with color of propers cards divs           ******DONE!!!!


// fix dice  z index                                    DONE!!!
// images fix                                       DONE!!!
// player names more cirlly- radius               DONE!!!
// apppeal to buyer to puchase, cost preview     DONE!!!
// h1 to pay rent how much lost
// dice animation                                   DONE !!!