// // import React from "react";
// // import {useDispatch, useSelector} from 'react-redux'
// // import purchasedPropertyAction from '../actions/purchasedPropertyAction'
// // import PurchasedPropReducer from "../reducers/purchasedPorpertyReducer";
// //
// //
// // const PurchasedProperty = () => {
// //
// //     const dispatch = useDispatch();
// //     const dicePositions = useSelector(state => state.diceReducer.dicePosition);
// //     const currentPositionName = useSelector(state => state.fullDataArray[dicePositions].name);
// //     const currentPositionType = useSelector(state => state.fullDataArray[dicePositions].type);
// //     const currentPositionPrice = useSelector(state => state.fullDataArray[dicePositions].price);
// //     const currentPositionID = useSelector(state => state.fullDataArray[dicePositions].id);
// //     const propertyReducer = useSelector(state => state.propertiesData);
// //     const buyerName = useSelector(state => state.playerActive.playerName);
// //     const dataOfBuyers =  useSelector(state => state.purchasedPropertyReducer1);   // data holding purchased property its an object of data
// //
// //     //  ^^ gets the Property Data from dice roll number as position ^^ //
// //
// //     console.log('CURRENT POSITION NAME',currentPositionName);
// //         const nonLocationID =  '1' || '3' || '5' || '8'|| '11' || '18' || '21' || '23' || '31' || '34' || '37' ||'39';
// //
// //
// //
// //
// //
// //         //***** function that gives player option to buy with onscreen ALERT-
// //     // connected to  purchasedPropertyAction => gets name + price
// //
// //  //    const purchasedPropMain = () => {
// //  // return dicePositions > 0 && currentPositionType === 'location' ? purchasedProp() : null
// //
// // //alert box giving option to BUY//
// //     };
// //
// //         // const purchasedProp =  () => {
// //         //
// //         //     if (window.confirm(`You are going to purchase ${currentPositionName}`)) {
// //         //         dispatch(purchasedPropertyAction({currentPositionName}, {currentPositionPrice}, {propertyReducer}, {buyerName} ))
// //         //     }
// //         // };
// //
// //
// //
// //
// //
// //     // Below gets dice position + current Position Type , if 'LOCATION' then   alert() //
// // return (
// //
// //     <div>
// //
// //         <h5> purchased Property : {currentPositionName} </h5>
// //
// //
// //         {/*/!*{purchasedPropMain()}*!/    // alert to purchase X cancelled as keeps re-rendering as function is inside render() //*/}
// //
// //
// //
// //     </div>
// // );
// // }
// // // ;
// // export default PurchasedProperty
//
//
// import React, {Component} from "react";
// import {connect} from "react-redux";
//
// //this component will grab data, and allow player to purchase using onClick //
// class PlayerActiveButtons extends Component {
//
//
//
//     render() {
//         const {players, dataArray} = this.props;
//
//
// //DISPLAYS CURRENT ACTIVE PLAYER
//         const  currentPlayerName = () =>  players.map(player => (player.active === true  ? player.name : null));
//
//
// // OBJ OF CURRENT ACTIVE PLAYER DATA
//         const active_Player_obj = players.filter(player => player.active);
//
// //CURRENT DICE POSITION OF PLAYER
//         const active_properties_info = players.map(player =>  ( player.active && player.position));
//         const playerDicePosition = active_properties_info.toString().replace(/[^0-9]/g, '');
//         const active_properties_data = dataArray[playerDicePosition];
//
//
//         const propertyName = active_properties_data && active_properties_data.name;
//         const priceOfProperty = active_properties_data && active_properties_data.price;
//         const colorOfProperty = active_properties_data && active_properties_data.color;
//         const rentOfProperty = active_properties_data && active_properties_data.rent;
//
//
//         const handlePurchase = () => {
//             const currentProperty = this.props.properties[active_properties_data.name];
//             if (!currentProperty.purchased) return  this.props.purchaseTing({active_Player_obj, active_properties_data, colorOfProperty}) && playAudioBuy.play() ;
//             alert('property has already been purchased');
//         };
//
//
//         const playAudioBuy =  new Audio('http://soundjay.com/misc/coins-in-hand-2.wav');
//
//         const endPlayerTurn  = new Audio('http://orteil.dashnet.org/cookieclicker/snd/buy2.mp3');
//
//
//         const handleEndPlayerTurn  = () => {
//
//
//
//             this.props.turnEndedClicked() &&   endPlayerTurn.play()
//
//         }
//
//
//
//         //
//         // let playPromise = endPlayerTurn.play();
//         //
//         // if (playPromise !== undefined) {
//         //     playPromise
//         //         .then(() => {
//         //             // Automatic playback started!
//         //             // Show playing UI.
//         //             console.log("audio played auto");
//         //         })
//         //         .catch(error => {
//         //             // Auto-play was prevented
//         //             // Show paused UI.
//         //             console.log("playback prevented");
//         //         });
//         // }
//
//         // console.log('PLAY PROMISE', endPlayerTurn.play())
//
//
//         return (
//
//
//             <div
//                 className={'players'}>
//
//
//
//                 { {active_properties_data} && <h5> Current Player : {currentPlayerName()} </h5>}
//
//                 {active_properties_data &&
//                 <div className={'propertyList'}>
//
//                     {{propertyName} && <h5> Property Details:  </h5>}
//                     <h5>{propertyName && propertyName}</h5>
//                     <h5>  {priceOfProperty &&  `£ ${priceOfProperty}`} </h5>
//                     <h5>  {rentOfProperty &&  ` Rent : £${rentOfProperty}`} </h5>
//
//
//
//
//
//                 </div> }
//
//
//
//                 <div className={'purchaseButton'}>
//                     {/*// DISPLAYS 'BUY' BUTTON IF PROPERTY TYPE IS 'LOCATION//*/}
//                     { active_properties_data && active_properties_data.type == 'location'  ? <button
//                         onClick={ handlePurchase }
//                         className={'purchaseButton'}
//                     > Buy Property </button> : null  }
//                     <button
//                         className={'purchaseButton'}
//                         onClick={ () =>  handleEndPlayerTurn() }>End turn</button>
//
//                 </div>
//
//
//             </div>
//         );
//     };
// }
//
//
// const mapStateToProps = (state) => ({
//
//
//     dicePositions: state.diceReducer.dicePosition,
//     dataArray: state.fullDataArray,
//     players: state.playersReducer.players,
//     properties: state.propertiesData,
//
// });
//
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//
//         turnEndedClicked:  () => dispatch({type: 'END_PLAYER_TURN'})  ,
//         purchaseTing: (payload) => dispatch({type: 'PURCHASE_PROPERTY', payload })
//
//     }
// };
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(PlayerActiveButtons)