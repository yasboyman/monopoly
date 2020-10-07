

//
// active: true
// id: 1
// money: 5000000
// name: "a"
// position: 0
// properties: []
// whoseTurn: ""

const initialState ={
    players: [],
    dice1: 1,
    dice2: 1,
};

const playersReducer  = (state =  initialState, action) => {
    switch (action.type) {


        case 'SUBMIT_PLAYERS':
            console.log('action payload for SUBMIT_PLAYERS: ' , action.payload);

            const playersInfo = [...action.payload];    // **  RETURNS PLAYERS ADDED, PUTS THEM IN STORE - NO REAL DATA, JUST NAMES, AND EMPTY OBJECTS  ** //
            playersInfo[0].active = true;

            return {
               ...state,
                players: playersInfo
            };





// sets player poisition //
        case 'ROLL_DICE':

            const dice1 =  Math.floor(Math.random() * 6 + 1);
            const dice2 = Math.floor(Math.random() * 6 + 1);
            let totalDice = dice1 + dice2;


            const players = state.players.map(player => {
                const position = player.position + totalDice;
                if (player.active){
                    return {
                        ...player,
                        position: position > 40 ?  position - 40 : position,
                    }

                }
                return player;
            });



            return {
                ...state,
                players,
                dice1,
                dice2,


            };


        case 'END_PLAYER_TURN':

            const max = state.players.length;
            let nextIndex = state.players.findIndex( player => player.active) + 1 ;
            if(nextIndex > max - 1) nextIndex = 0;

            const newPlayers = state.players.map((player, key) => ({ ...player, active: key === nextIndex }));
            return {
                ...state,
                players: newPlayers,
            };



        // Money from active player - payload/price of property //

        case 'PURCHASE_PROPERTY':
            const priceOfProperty = action.payload.active_properties_data.price;   // grabs price from payload //
            const findActivePlayer = state.players.findIndex( player => player.active); // finds index of player that is active //
            console.log(findActivePlayer);

            const newPlayer = state.players.map((player) => {
                if ( player.active) {
                    return {
                        ...player,
                        money: player.money - parseFloat(priceOfProperty)
                        }
                    }
                return player

                });



                  // change state here






            //
            return {
                ...state,

                players: newPlayer



                };

            };
// how to add more info into object, how to input diceData//

            return state;
    };



export default playersReducer




