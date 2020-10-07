import React, {Component} from 'react';
import './App.css';
import BoardContainer from "./Components/BoardContainer";
import Dice from "./Components/dice";
import PurchasedProperty from "./Components/PurchasedProperty";
import PlayerActiveButtons from './Components/player1'



class App extends Component {

    render() {

                    return (
                        <div className="App">
                            <BoardContainer />

                            <PlayerActiveButtons />
                            <Dice/>

                            <>
                                {/*<PurchasedProperty/>*/}
                            </>
                        </div>
                    );
                }


};

export default App
