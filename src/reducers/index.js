import {combineReducers} from "redux";
import fullDataArrayReducer from './fullDataArrayReducer'
import diceReducer from "./diceReducer";
import PurchasedPropReducer from "./purchasedPorpertyReducer";
import propertiesReducer from './propertiesReducer';
import playersReducer from './playersReducer';


const rootReducer = combineReducers ({

        fullDataArray: fullDataArrayReducer,
        diceReducer: diceReducer,
        purchasedPropertyReducer1: PurchasedPropReducer,
        propertiesData: propertiesReducer,
        playersReducer: playersReducer,
    }


);





export default rootReducer

