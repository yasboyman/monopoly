

const initialState ={
    players: [],
    dice1: 1,
    dice2: 1,
    letDiceClickAgain: true,
    popUpBox: false,
};


// const isPurchased = useSelector(state => state.propertiesData);

const playersReducer  = (state =  initialState, action) => {



    switch (action.type) {

        case 'SUBMIT_PLAYERS':

            const playersInfo = [...action.payload];    // **  RETURNS PLAYERS ADDED, PUTS THEM IN STORE - NO REAL DATA, JUST NAMES, AND EMPTY OBJECTS  ** //
            playersInfo[0].active = true;

            return {
                ...state,
                players: playersInfo,
            };


        case 'ROLL_DICE':
            const dice1 =  Math.floor(Math.random() * 6 + 1);
            const dice2 = Math.floor(Math.random() * 6 + 1);
            let totalDice = dice1 + dice2;

            let newPlayerPosition = null;

            let players = state.players.map(player => {
                const position = player.position + totalDice;
                newPlayerPosition = position > 40 ?  position - 40 : position;
                if (player.active){
                    return {
                        ...player,
                        position: newPlayerPosition,
                        money: position > 40 ?  player.money +200 : player.money,
                    }
                }

                return player;
            });

            const activePlayer = state.players.find( i => i.active)
            const propertiesDataArray = Object.keys(action.payload);
            const purchasedPropertyName = propertiesDataArray.find(property => {

                return action.payload[property].purchased &&
                    action.payload[property].id - 1 === newPlayerPosition &&
                    activePlayer.name !== action.payload[property].owner.toString();
            } );


            const purchasedPropertyObject =  action.payload[purchasedPropertyName];

            if (purchasedPropertyName) {
                alert('RENT BITCH')
                players = players.map((player) => {
                    if (player.active) {
                        return {
                            ...player,
                            money: player.money - purchasedPropertyObject.rent,
                            popUpBox: true
                        }
                    }

                    if (player.name === purchasedPropertyObject.owner.toString()) {
                        return {
                            ...player,
                            money: player.money + purchasedPropertyObject.rent,
                            popUpBox: true
                        }
                    }
                    return player
                });
            };

            return {
                ...state,
                players,
                dice1,
                dice2,
                letDiceClickAgain: dice1.toString() === dice2.toString(),
            };


        case 'END_PLAYER_TURN':

            const max = state.players.length;
            let nextIndex = state.players.findIndex( player => player.active) + 1 ;

            if(nextIndex > max - 1) nextIndex = 0;
            const newPlayers = state.players.map((player, key) => ({ ...player, active: key === nextIndex }));

            return {
                ...state,
                // players: molly,
                players: newPlayers,
                letDiceClickAgain: true,
                popUpBox: false
            };

        // Money from active player - payload/price of property //

        case 'PURCHASE_PROPERTY':
            const priceOfProperty = action.payload.active_properties_data.price.replace(/,/g,"")   // grabs price from payload //
            const findActivePlayer = state.players.findIndex( player => player.active); // finds index of player that is active //


            const newPlayer = state.players.map((player) => {
                if ( player.active) {
                    return {
                        ...player,
                        money: player.money - parseFloat(priceOfProperty),
                        properties: [...player.properties, action.payload.active_properties_data.name]
                    }
                }
                return player

            });

            return {
                ...state,
                players: newPlayer
            };


        case 'BYEBYE':

            return {
                ...state,
                popUpBox: false
            };


// *****     SHOULD REMOVE PLAYER IF BROKE **** //////
        case 'PLAYER_BROKE':
            console.log('PLAYA IS BROKE')
    }

    return state;
};



export default playersReducer




