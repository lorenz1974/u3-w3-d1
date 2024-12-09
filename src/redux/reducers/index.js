const initialState = {
    favouriteCompanies: [],
    searchQueries: ''
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                searchQueries: action.payload,
            };

        case "MANAGE_FAVOURITE":
            if (state.favouriteCompanies.includes(action.payload)) {
                // Rimuovi l'azienda dai preferiti
                return {
                    ...state,
                    favouriteCompanies: state.favouriteCompanies.filter(
                        (company) => company !== action.payload
                    ),
                };
            } else {
                // Aggiungi l'azienda ai preferiti
                return {
                    ...state,
                    favouriteCompanies: [...state.favouriteCompanies, action.payload],
                };
            }

        default:
            return state;
    }
};

export default mainReducer;
