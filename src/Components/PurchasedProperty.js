// import React from "react";
// import {useDispatch, useSelector} from 'react-redux'
// import purchasedPropertyAction from '../actions/purchasedPropertyAction'
// import PurchasedPropReducer from "../reducers/purchasedPorpertyReducer";
//
//
// const PurchasedProperty = () => {
//
//     const dispatch = useDispatch();
//     const dicePositions = useSelector(state => state.diceReducer.dicePosition);
//     const currentPositionName = useSelector(state => state.fullDataArray[dicePositions].name);
//     const currentPositionType = useSelector(state => state.fullDataArray[dicePositions].type);
//     const currentPositionPrice = useSelector(state => state.fullDataArray[dicePositions].price);
//     const currentPositionID = useSelector(state => state.fullDataArray[dicePositions].id);
//     const propertyReducer = useSelector(state => state.propertiesData);
//     const buyerName = useSelector(state => state.playerActive.playerName);
//     const dataOfBuyers =  useSelector(state => state.purchasedPropertyReducer1);   // data holding purchased property its an object of data
//
//     //  ^^ gets the Property Data from dice roll number as position ^^ //
//
//     console.log('CURRENT POSITION NAME',currentPositionName);
//         const nonLocationID =  '1' || '3' || '5' || '8'|| '11' || '18' || '21' || '23' || '31' || '34' || '37' ||'39';
//
//
//
//
//
//         //***** function that gives player option to buy with onscreen ALERT-
//     // connected to  purchasedPropertyAction => gets name + price
//
//  //    const purchasedPropMain = () => {
//  // return dicePositions > 0 && currentPositionType === 'location' ? purchasedProp() : null
//
// //alert box giving option to BUY//
//     };
//
//         // const purchasedProp =  () => {
//         //
//         //     if (window.confirm(`You are going to purchase ${currentPositionName}`)) {
//         //         dispatch(purchasedPropertyAction({currentPositionName}, {currentPositionPrice}, {propertyReducer}, {buyerName} ))
//         //     }
//         // };
//
//
//
//
//
//     // Below gets dice position + current Position Type , if 'LOCATION' then   alert() //
// return (
//
//     <div>
//
//         <h5> purchased Property : {currentPositionName} </h5>
//
//
//         {/*/!*{purchasedPropMain()}*!/    // alert to purchase X cancelled as keeps re-rendering as function is inside render() //*/}
//
//
//
//     </div>
// );
// }
// // ;
// export default PurchasedProperty