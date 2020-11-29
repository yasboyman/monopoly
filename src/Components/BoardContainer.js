import React, {Component} from "react";
import BoardData from "./BoardData";
import {connect} from "react-redux";
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

        return <div style={{ width:'100%', display: 'flex', flexDirection: 'row-reverse', height: '15%', backgroundColor: 'rgb(198 228 195)' } }> {places} </div>
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

        return <div style={{width:'100%', display: 'flex', flexDirection: 'row', height: '10%', backgroundColor: 'rgb(198 228 195)'}}> {places} </div>
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

    randomColorGenerator = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0 ; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // after submitting, removes input box  && dispatches action - moving this state data into store //
    onFinish = () => {
            this.setState({showPlayersPrompt: false});
            this.props.addPlayersToStore(this.state.players);
            alert('lets Play! click on the dice to get rolling!');

        };

    // grabs input value {playerName}, moves to state //
    handleKeyDown = (event) => {
        event.target.value === " " ?  alert('Please Enter a Name') :  this.setState({playerName: event.target.value})
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
                    color: this.randomColorGenerator(),
                    inGame: true,
                } ], playerName: ''  })
    };

    // Removes player with CLICK
    onRemovePlayer = (index) => {
        let newState = [...this.state.players];
        newState.splice(index, 1)

        this.setState({players: newState});

    };


    isPlayerBroke = () => {
        const  active_player =   this.props.playersReduxState.filter( x => x.active);
        const findMoneyAmount =  active_player.find( i =>  (i.money));
        const active_Player_Money = findMoneyAmount && findMoneyAmount.money;
        if (active_Player_Money < 0 ) {
            this.props.playerIsBroke()
        }
    };




    render() {


        const { showPlayersPrompt, playerName, players } = this.state;

        return (


            <div style={{ width:'100%' ,position: 'relative', backgroundColor: 'brown', height:'auto'} }>
                {/*window.innerHeight,this was instead of height 100%*/}
                {showPlayersPrompt && <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center',
                    width: '400px', backgroundColor: 'rgb(198 228 195)', top: '10%', position: 'absolute',
                    right: '50%', marginRight: '-200px', zIndex: '2', borderRadius: '20%', padding: '20px',
                    paddingBottom: '20px', border: 'solid #ebffeb 8px', fontSize: '24px', animation: 'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1000ms both', overflow: "auto", height: "auto"

                }}>
                    <form
                        onSubmit={this.addPlayer}>
                        <br  />
                        <input

                            className={'playersInputForm'}
                            value={playerName}
                            placeholder="Enter name"
                            onChange={event => this.handleKeyDown(event)} required/>

                        <br />
                        <button    className={'add_Player_Button'} type={'submit'}>Add Player</button>

                    </form>



                    {/*// renders PLAYERS name at the start INPUT*/}
                    {players.map((player, index)  =>
                        <div
                            key={player.id}
                            style={{padding: '10px'}}>{player.name}

                            <button
                                className={'remove_Player_Button'}
                                onClick={  () => this.onRemovePlayer(index)}>X</button></div>  )}
                    <br />   <br />  <br />

                    {this.state.players.length === 0 ?
                        null : <button className={'submitPlayersButton'} onClick={this.onFinish}>Finished </button>
                    }


                </div> }
                {/*//The above renders at the beginning, then dissapears once submitted- Input player names using INPUT, moves to STATE with player data//*/}


                {this.renderBoardTop()}

                <div style={{display:'flex', width:'100%', flexDirection: 'row', justifyContent: 'space-between', height: '80%', backgroundColor: 'rgb(198 228 195)' }}>
                    {this.renderBoardLeft()}
                    {this.renderBoardRight()}

                </div>
                {this.renderBoardBottom()}
                {this.isPlayerBroke}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    dataArray: state.fullDataArray,
    dicePosition: state.diceReducer.dicePosition,
    playersReduxState: state.playersReducer.players
});

const mapDispatchToProps = (dispatch) => ({
    addPlayersToStore: (players) => dispatch(submitPlayers(players)),
    playerIsBroke : () =>  dispatch({type: 'PLAYER_BROKE'})
});

export default connect(mapStateToProps, mapDispatchToProps) (BoardContainer)