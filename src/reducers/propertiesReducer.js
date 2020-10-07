
const initialState  =

    { 'Old Kent Road': {
            purchased: false,
            owner: '',
            id: 2
        },

        'Whitechapel': {
            purchased: false,
            owner: '',
            id: 4
        },

        'Kings Cross Station': {
            purchased: false,
            owner: '',
            id: 6
        },

        'The Angel Islington': {
            purchased: false,
            owner: '',
            id: 7
        },

        'Euston Road': {
            purchased: false,
            owner: '',
            id: 9
        },

        'Pentoville Road': {
            purchased: false,
            owner: '',
            id: 10
        },

        'Pall Mall': {
            purchased: false,
            owner: '',
            id: 12
        },
        'Electric Company': {
            purchased: false,
            owner: '',
            id: 13
        },
        'Whitehall': {
            purchased: false,
            owner: '',
            id: 14
        },
        'Northumberland Avenue': {
            purchased: false,
            owner: '',
            id: 15
        },
        'Marlebone Station': {
            purchased: false,
            owner: '',
            id: 16
        },
        'Bow Street': {
            purchased: false,
            owner: '',
            id: 17
        },
        'Great Marlborough': {
            purchased: false,
            owner: '',
            id: 19
        },
        'Vine Street': {
            purchased: false,
            owner: '',
            id: 20
        },
        'Strand': {
            purchased: false,
            owner: '',
            id: 22
        },
        'Fleet Street': {
            purchased: false,
            owner: '',
            id: 24
        },
        'Trafalgar Square': {
            purchased: false,
            owner: '',
            id: 25
        },
        'Fenchurch Street Station': {
            purchased: false,
            owner: '',
            id: 26
        },
        'Leicester Square': {
            purchased: false,
            owner: '',
            id: 27
        },
        'Coventry Street': {
            purchased: false,
            owner: '',
            id: 28
        },

        'Water Company': {
            purchased: false,
            owner: '',
            id: 29
        },

        'Picadilly': {
            purchased: false,
            owner: '',
            id: 30
        },

        'Regent Street': {
            purchased: false,
            owner: '',
            id: 32
        },
        'Oxford Street': {
            purchased: false,
            owner: '',
            id: 33
        },
        'Bond Street': {
            purchased: false,
            owner: '',
            id: 35
        },
        'Liverpool Street Station': {
            purchased: false,
            owner: '',
            id: 36
        },

        'Park Lane': {
            purchased: false,
            owner: '',
            id: 38
        },
        'Mayfair': {
            purchased: false,
            owner: '',
            id: 40
        },
    } ;

 const propertyData = (state = initialState, action ) => {

     switch (action.type) {

         case 'PURCHASE_PROPERTY':

             const propertyID = action.payload.active_properties_data.id;
             const playerOB = action.payload.active_Player_obj.map(x => x.name);
             const propertyName = action.payload.active_properties_data.name;
             const objEntries = Object.entries(state);

             if ( state[propertyName].purchased === false ) {
                 return {
                     ...state,
                     [propertyName]: {
                         purchased: true,
                         owner: playerOB,
                         id: propertyID
                     }
                 };

             } else if (state[propertyName].purchased === true ) {
                 alert('property has already been purchased')

             } else {

                 return state
             }

             return {
                 ...state,

             };

default:

     }
return state

 };

export default propertyData
