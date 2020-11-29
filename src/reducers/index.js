import {combineReducers} from "redux";
import fullDataArrayReducer from './fullDataArrayReducer'
import diceReducer from "./diceReducer";
import propertiesReducer from './propertiesReducer';
import playersReducer from './playersReducer';


const rootReducer = combineReducers ({

            fullDataArray: fullDataArrayReducer,
            diceReducer: diceReducer,
            propertiesData: propertiesReducer,
            playersReducer: playersReducer,
    }
);





export default rootReducer

