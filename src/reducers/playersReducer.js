

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
                console.log('!!!!!!!!!!!! prop', property);
                console.log('!!!!!!!!!!!! 2222222', action.payload);
                return action.payload[property].purchased &&
                    action.payload[property].id - 1 === newPlayerPosition &&
                    activePlayer.name !== action.payload[property].owner.toString();
            } )


            // rent activating when it shouldnt//
            const purchasedPropertyObject =  action.payload[purchasedPropertyName];

            // purchasedPropertyObject.owner  && purchasedPropertyObject.owner !== activePlayer.name &&
            // ATTTEMPTING TO NOT INCLUDE  RENT ACTION IF PLAYER OWNS IT AND LANDS ON IT
            // include property details info from propertyReducer show who owns it
            // playerInfoUI add commas for prices



            // activePlayer.name !== purchasedPropertyObject.owner.toString()

            // console.log('!!0!0!0!',  purchasedPropertyName && purchasedPropertyObject.owner.toString()  !== activePlayer.name   );
            // console.log('!!  ACTIVE PLAYER NAME  !!!', activePlayer.name  );
            // console.log('! PURCHASEPROPERTYOBJECT  !', purchasedPropertyName && purchasedPropertyObject.owner.toString() );


       // purchasedPropertyObject.owner.toString() !== activePlayer.name



            if (purchasedPropertyName) {
                alert('RENT BITCH')


                console.log('active Player',activePlayer.name);
                console.log('propertyObjectOwner', purchasedPropertyObject.owner.toString());

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
            }


            // if(purchasedPropertyName) {
            //
            //     return {
            //         ...state,
            //         popUpBox: true
            //     };
            // }
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


            // const isPlayaInTheGame = state.players.find(i => {
            //     if (i.active) {
            //         return i.inGame
            //     }
            //
            //     return i
            //
            //
            // } );


            // console.log('test',isPlayaInTheGame)

            if(nextIndex > max - 1) nextIndex = 0;

            const newPlayers = state.players.map((player, key) => ({ ...player, active: key === nextIndex }));



          // const molly =  state.players.map(player => {
          //        if(player.inGame) {
          //            return newPlayers
          //
          //        } else {
          //
          //              return  newPlayersplus1
          //        }
          //
          //    })
            // const newPlayers = state.players.map((player, key) => ({ ...player, active: key === nextIndex }));

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



            // *****    ATTEMPTING TO REMOVE PLAYER IF MONEY LESS THAN 0 = BROKE ******** ///
         // state.players.map( (player) =>  {
         //
         //
         //    if (player.active && player.money < 0  ) {
         //
         //       alert('removed')
         //
         //        return {
         //            ...state,
         //            players: state.players.filter(i => i !== player)
         //        }
         //
         //
         //    }
         //    return player
         //
         // })


            return {
                ...state,
                players: newPlayer
            };




        case 'BYEBYE':

            return {
                ...state,
                popUpBox: false
            }



// *****     SHOULD REMOVE PLAYER IF BROKE **** //////
        case 'PLAYER_BROKE':
            console.log('PLAYA IS BROKE')


    };






    return state;
};



export default playersReducer




