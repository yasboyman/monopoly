
const initialState  =

    { 'Old Kent Road': {
            purchased: false,
            owner: '',
            rent: 100,
            id: 2
        },

        'Whitechapel': {
            purchased: false,
            owner: '',
            rent: 150,
            id: 4
        },

        'Kings Cross Station': {
            purchased: false,
            owner: '',
            rent: 500,
            id: 6
        },

        'The Angel Islington': {
            purchased: false,
            owner: '',
            rent: 200,
            id: 7
        },

        'Euston Road': {
            purchased: false,
            owner: '',
            rent: 250,
            id: 9
        },

        'Pentoville Road': {
            purchased: false,
            owner: '',
            rent: 270,
            id: 10
        },

        'Pall Mall': {
            purchased: false,
            owner: '',
            rent: 300,
            id: 12
        },
        'Electric Company': {
            purchased: false,
            owner: '',
            rent: 300,
            id: 13
        },
        'Whitehall': {
            purchased: false,
            owner: '',
            rent: 300,
            id: 14
        },
        'Northumberland Avenue': {
            purchased: false,
            owner: '',
            rent: 350,
            id: 15
        },
        'Marlebone Station': {
            purchased: false,
            owner: '',
            rent: 500,
            id: 16
        },
        'Bow Street': {
            purchased: false,
            owner: '',
            rent: 370,
            id: 17
        },
        'Great Marlborough': {
            purchased: false,
            owner: '',
            rent: 350,
            id: 19
        },
        'Vine Street': {
            purchased: false,
            owner: '',
            rent: 370,
            id: 20
        },
        'Strand': {
            purchased: false,
            owner: '',
            rent: 400,
            id: 22
        },
        'Fleet Street': {
            purchased: false,
            owner: '',
            rent: 450,
            id: 24
        },
        'Trafalgar Square': {
            purchased: false,
            owner: '',
            rent: 500,
            id: 25
        },
        'Fenchurch Street Station': {
            purchased: false,
            owner: '',
            rent: 600,
            id: 26
        },
        'Leicester Square': {
            purchased: false,
            owner: '',
            rent: 600,
            id: 27
        },
        'Coventry Street': {
            purchased: false,
            owner: '',
            rent: 650,
            id: 28
        },

        'Water Company': {
            purchased: false,
            owner: '',
            rent: 250,
            id: 29
        },

        'Picadilly': {
            purchased: false,
            owner: '',
            rent: 700,
            id: 30
        },

        'Regent Street': {
            purchased: false,
            owner: '',
            rent: 800,
            id: 32
        },
        'Oxford Street': {
            purchased: false,
            owner: '',
            rent: 850,
            id: 33
        },
        'Bond Street': {
            purchased: false,
            owner: '',
            rent: 900,
            id: 35
        },
        'Liverpool Street Station': {
            purchased: false,
            owner: '',
            rent: 700,
            id: 36
        },

        'Park Lane': {
            purchased: false,
            owner: '',
            rent: 1000,
            id: 38
        },
        'Mayfair': {
            purchased: false,
            owner: '',
            rent: 1500,
            id: 40
        },
    } ;

 const propertyData = (state = initialState, action ) => {

     switch (action.type) {

         case 'PURCHASE_PROPERTY':

             const propertyID = action.payload.active_properties_data.id;
             const playerName = action.payload.active_Player_obj.map(x => x.name);
             const propertyName = action.payload.active_properties_data.name;
             const rentOfProp = action.payload.active_properties_data.rent;


                 return {
                     ...state,
                     [propertyName]: {
                         purchased: true,
                         owner: playerName,
                         id: propertyID,
                         rent: rentOfProp
                     }
                 };




default:

     }
return state

 };

export default propertyData
