import React from "react";
import {useDispatch, useSelector} from "react-redux";


// RETURNS DICE IMAGES.......

// TWO STATES IN 'DICE' [array] GENERATED RANDOM NUMBER 1-6

const Dice = () => {
    const dispatch = useDispatch();
    const diceState1 = useSelector( state => state.playersReducer.dice1);
    const diceState2 = useSelector( state => state.playersReducer.dice2);

    return (

        <div className={'dice'}>

            <h1 className={'monopolyTitle'}>MONOPOLY</h1>


                    <div >
                        < img  onClick={ () => dispatch({type: 'ROLL_DICE'}) } className={'diceImages1'} alt={'dice'} src={require(`../assests/Dicey-${diceState1}.png`)} />
                        <img  onClick={ () => dispatch({type: 'ROLL_DICE'}) } className={'diceImages'} alt={'dice'} src={require(`../assests/Dicey-${diceState2}.png`)} />

                    </div>
        </div>


    )
};


// flexbox , image resizing
export default Dice