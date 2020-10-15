import React, {Component} from "react";
import BoardData from "./BoardData";
import {connect} from "react-redux";
import diceAction from "../actions/diceAction";
import submitPlayers from "../actions/players";


class BoardContainer extends Component {
    // RENDERS CARDS DATA WITH FOR LOOP  PROPS=  data & position  +  grabs players names +  dispatches data to store //

    state = {
        players: [],
        showPlayersPrompt: true,
        playerName: '',
    };

    renderBoardBottom = () => {

        let places =[];
        for(let i= 0; i < 11 ; i++){

            places.push(
              <BoardData
                data={this.props.dataArray[i]}
              /> )
        }

        return <div style={{ width:'100%', display: 'flex', flexDirection: 'row-reverse', height: '15%',} }> {places} </div>
    };

    renderBoardLeft = () => {

        let places =[];
        for(let i= 11; i < 20 ; i++){


            places.push(
              <BoardData
                data={this.props.dataArray[i]}
                position={'side'}
              /> )
        }

        return <div style={{width:'100%', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column-reverse',
            alignItems:'flex-start', height: '75%', padding: '1px'}}> {places} </div>
    };

    renderBoardTop = () => {

        let places =[];
        for(let i= 20; i < 31 ; i++){

            places.push( <BoardData
              data={this.props.dataArray[i]}/> )
        }

        return <div style={{width:'100%', display: 'flex', flexDirection: 'row', height: '10%'}}> {places} </div>
    };

    renderBoardRight = () => {

        let places =[];
        for(let i= 31; i < 40 ; i++){

            places.push(
              <BoardData
                data={this.props.dataArray[i]}
                position={'side'}
              /> )
        }

        return <div style={{width:'100%', display: 'flex', flexDirection: 'column',
            alignItems:'flex-end', height: '80%', padding: '1px',}}> {places} </div>
    };

    // after submitting, removes input box  && dispatches action - moving this state data into store //

    onFinish = () => {
        this.setState({ showPlayersPrompt: false });
        this.props.addPlayersToStore(this.state.players);
        alert('lets Play! click on the dice to get rolling!');
    };

    // grabs input value {playerName}, moves to state //
    handleKeyDown = (event) => {

        event.target.value == " " ?  alert('Please Enter a Name') :  this.setState({playerName: event.target.value})
    };



    // grabs players name, adds to state, moves to state with player data to store when submitted//
    addPlayer = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const { playerName, players } = this.state;


        this.setState({
            players: [...players,
                {
                    name: playerName,
                    id: players.length + 1,
                    properties: [],
                    money: 5000000,
                    active: false,
                    position: 0,
                } ], playerName: ''  })
    };

    // Removes player with CLICK
    onRemovePlayer = (id) => {

        const newState = this.state;
        const index = newState.players.findIndex(a => a.id === id);

        if (index === 1) return;
        newState.players.splice(index, 1);

        this.setState(newState);

    };
    // prop reducer add player id to property
    //    player reducer add propery id to the player

    render() {

        const { showPlayersPrompt, playerName, players } = this.state;


        return (
          <div style={{ width:'100%', position: 'relative', backgroundColor: 'brown', height: '100%', } }>
              {/*window.innerHeight,this was instead of height 100%*/}
              {showPlayersPrompt && <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center',
                  width: '400px', height: '300px', backgroundColor: "darkRed", top: '10%', position: 'absolute',
                  right: '50%', marginRight: '-200px', zIndex: '2', borderRadius: '6px', padding: '20px', fontSize: '24px',}}>


                  <form onSubmit={this.addPlayer}>

                      <input
                        style={{ width: '100px'}}
                        value={playerName}
                        placeholder="Enter name"
                        onChange={event => this.handleKeyDown(event)} required/>
                      <button style={{ width: '100px'}} type={'submit'}>Add Player</button>
                      <button style={{ width: '100px'}} type={'button'}
                              onClick={this.onRemovePlayer}
                      >Click on player to remove</button>

                  </form>

                  {players.map(player =>
                    <div
                      style={{padding: '10px'}}
                      onClick={this.onRemovePlayer}>{player.name}</div>  )}

                  <button style={{ width: '100px'}} onClick={this.onFinish}>Finished </button>

                  {/*<img className={'monopolyMan'} alt={'monoMan'} src={require('../assests/monoPolyMan.png')} />*/}

              </div> }
              {/*//The above renders at the beginning, then dissapears once submitted- Input player names using INPUT, moves to STATE with player data//*/}



              {this.renderBoardTop()}
              <div style={{display:'flex', width:'100%', flexDirection: 'row', justifyContent: 'space-between', height: '80%' }}>
                  {this.renderBoardLeft()}
                  {this.renderBoardRight()}
              </div>
              {this.renderBoardBottom()}
          </div>
        )
    }
}


const mapStateToProps = (state) => ({
    dataArray: state.fullDataArray,
    dicePosition: state.diceReducer.dicePosition,
    players: state.playersReducer.players
});

const mapDispatchToProps = (dispatch) => ({
    diceClicked: () =>  dispatch(diceAction()),// using actions passing functions
    addPlayersToStore: (players) => dispatch(submitPlayers(players)),
});

export default connect(mapStateToProps, mapDispatchToProps) (BoardContainer)