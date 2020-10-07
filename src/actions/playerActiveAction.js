const playerActiveAction = (nameOfPlayer) => {

    return {

        type: 'PLAYER_NAME_ACTIVE',
         payload: nameOfPlayer
    }

};

export default playerActiveAction