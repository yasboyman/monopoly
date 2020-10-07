// Adds  property into data, minus  property value from totalInBank\

// import {submitPlayers} from '../actions/players.js'



import {combineReducers} from "redux";

const initialState = {
    property: [],
};


const PurchasedPropReducer = (state = initialState, action) => {


    // const playersDataAction = submitPlayers.payload;

    switch (action.type) {



        case 'PROPERTY_PURCHASED':
            // console.log('Onclick data PROPERTY_PURCHASED: ', 'WORKINGGGGGG');
            // console.log('Onclick data PROPERTY_PURCHASED: ', action);

            // console.log('action payload for player Reducer: PLAYEER DATA ' , action.payload.data);
            return {
                ...state,

                property: [...state.property, action.payload.property],
                price: action.payload.price,
                data: action.payload.data,
                buyer: action.payload.buyers,
                // data1: playersDataAction.payload

            };



            // const totalInBank = state. - parseFloat(action.price.currentPositionPrice);  // gets Bank amount minus property value



            // const playerName = action.buyer;  // not active

            // const propertyData = action.propertyReducerData;
            // const playerPropertiesCopy = [...state.properties];


            //  !!!!!  ATTEMPTING TO PUT DATA FROM GAME INTO PLAYER OBJECTS,
            //  EACH PLAYER HAVING THEIR OWN DATA, WHICH UPDATES WITH THE GAME *******

            // const newPlayer = {       //DID NOT WORK*******//
            //
            //
            //     name: action.buyer,
            //     playerActive: true,
            //     properties: [...player.properties, action.property.currentPositionName],
            //     cash: totalInBank
            //
            //
            // };

        // ...state,       DID NOT WORK *********
        //
        //     [action.buyer]: {
        //
        //     playerActive: true,
        //         properties: [...player[action.buyer].properties].concat(action.property),
        //         cash: totalInBank
        // }

            // const propertiesFromActionCopy = [...action.property];


            // return {
            //     ...state,
            //
            //     data: action.property
            //
            // //     initialState = [
            // //
            // // //         name: action.buyer,
            // // // playerActive: true,
            // // // properties: [...state.properties.concat(action.property.currentPositionName)],
            // // // cash: totalInBank
            // //
            // //     ]
            //
            //
            //  };

        default:
            return state
    }


};

export default PurchasedPropReducer

