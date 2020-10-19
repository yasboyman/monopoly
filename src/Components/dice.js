import React from "react";
import {useDispatch, useSelector} from "react-redux";



// RETURNS DICE IMAGES.......

// TWO STATES IN 'DICE' [array] GENERATED RANDOM NUMBER 1-6

const Dice = () => {
    const dispatch = useDispatch();
    const diceState1 = useSelector( state => state.playersReducer.dice1);
    const diceState2 = useSelector( state => state.playersReducer.dice2);
    const rollAgain = useSelector(state => state.playersReducer.letDiceClickAgain);
    const playerPosition =  useSelector( state => state.playersReducer.players);
    const purchasedProperty = useSelector(state => state.propertiesData);

    const playerPOS = playerPosition.map(x => (x.active &&  x.position));

    const propertyCardData = useSelector(state => state.fullDataArray[playerPOS[0]]);

    const  playAudio  =  new Audio('http://cd.textfiles.com/itcontinues/WIN/YTB22/ONEDICE.WAV');



    return (

        <div className={'dice'}>

            <h1 className={'monopolyTitle'}>MONOPOLY</h1>

            {/*<img*/}
            {/*    // className={'monopolyTitle'} alt={'chance'} src={require('../assests/monopoly-logo.png')}/>*/}


            {rollAgain === true ?
                    <div >

                            < img
                                onClick={ () => dispatch({type: 'ROLL_DICE', payload: purchasedProperty  }) && playAudio.play()} className={'diceImages1'} alt={'dice'} src={require(`../assests/Dicey-${diceState1}.png`)} />
                            <img onClick={ () => dispatch({type: 'ROLL_DICE', payload: purchasedProperty  }) && playAudio.play() } className={'diceImages'} alt={'dice'} src={require(`../assests/Dicey-${diceState2}.png`)} />

                    </div>

                : null}


        </div>


    )
};


// flexbox , image resizing
export default Dice