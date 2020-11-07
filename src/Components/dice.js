import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";



// RETURNS DICE IMAGES.......

// TWO STATES IN 'DICE' [array] GENERATED RANDOM NUMBER 1-6

const Dice = () => {
    const dispatch = useDispatch();
    const diceState1 = useSelector( state => state.playersReducer.dice1);
    const diceState2 = useSelector( state => state.playersReducer.dice2);
    const rollAgain = useSelector(state => state.playersReducer.letDiceClickAgain);
    const purchasedProperty = useSelector(state => state.propertiesData);

    const  playAudio  =  new Audio( 'http://cd.textfiles.com/itcontinues/WIN/YTB22/ONEDICE.WAV');

    const [diceRoll, setCount] = useState({diceRoll: false});



    // console.log('DI',playAudio.play())

    console.log('ROLL AGAIN', diceRoll)





    return (

        <div className={'dice'}>


            <h1 className={'monopolyTitle'}>MONOPOLY</h1>

            { /*/    rollAgain Boolean  - true once end turn clicked- avoids repeat dice click & deals with animation style below   /*/ }
            { rollAgain ?


                <div>
                    < img

                        onClick={() => dispatch({
                            type: 'ROLL_DICE',
                            payload: purchasedProperty
                        })  && playAudio.play() && setCount( {diceRoll: true})  }

                        className={'diceImages1'} alt={'dice'}
                        style={{ animation:  !rollAgain ? 'rotate-scale-up-diag-2 0.7s linear both' : null   }}
                        onAnimationEnd={ () => setCount( {diceRoll: false}) }
                        src={require(`../assests/Dice-${diceState1}.svg`)}/>

                    <img
                        onClick={() => dispatch({
                            type: 'ROLL_DICE',
                            payload: purchasedProperty
                        }) && playAudio.play() && setCount ({diceRoll: true}) }

                        className={diceRoll ? 'diceImages1' : 'diceImages'} alt={'dice'}
                        style={{ animation:  !rollAgain ? 'rotate-scale-up-diag-2 0.7s linear both' : null   }}
                        onAnimationEnd={ () => setCount({diceRoll: false}) }
                        src={require(`../assests/Dice-${diceState2}.svg`)}/>
                </div>


                :

                <div>
                    < img

                        className={'diceImages1'} alt={'dice'}
                        style={{ animation:  !rollAgain ? 'rotate-scale-up-diag-2 0.7s linear both' : null   }}
                        onAnimationEnd={ () => setCount( {diceRoll: false}) }
                        src={require(`../assests/Dice-${diceState1}.svg`)}/>

                    <img

                        className={diceRoll ? 'diceImages1' : 'diceImages'} alt={'dice'}
                        style={{ animation:  !rollAgain ? 'rotate-scale-up-diag-2 0.7s linear both' : null   }}
                        onAnimationEnd={ () => setCount({diceRoll: false}) }
                        src={require(`../assests/Dice-${diceState2}.svg`)}/>
                </div>


            }






        </div>


    )
};
export default Dice