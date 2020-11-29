
const initialState = {
    dice1: [1],
    dice2: [1],
    dicePosition: 0
};



const diceReducer  = (state =  initialState, action) => {
    switch (action.type) {

        case 'DICE_CLICKED':
//if state.dicePosition + state.totalDice > 40 ? state.dicePostion + state.totalDice - 40 : dicePosition+totalDice

            const dice1 =  Math.floor(Math.random() * 6 + 1);
            const dice2 = Math.floor(Math.random() * 6 + 1);
            let totalDice = dice1 + dice2;
            const position = state.dicePosition + totalDice;


            return {
                ...state,
                dicePosition: position > 40 ?  position - 40 : position,
                dice1: state.dice1 = [dice1],
                dice2: state.dice2 = [dice2]

            };

        default:
            return state;
    }

};

export default diceReducer




