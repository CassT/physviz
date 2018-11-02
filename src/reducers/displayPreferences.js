const defaultDisplayState = {
    displayGrid: true,
    displayGridPoints: true,
    displayGridVectors: true,
}

const displayPreferences = (state = defaultDisplayState, action) => {
    switch(action.type) {
        case 'TOGGLE_GRID':
            return {
                ...state,
                displayGrid: !state.displayGrid,
            }
        case 'TOGGLE_GRID_POINTS':
            return {
                ...state,
                displayGridPoints: !state.displayGridPoints,
            }
        case 'TOGGLE_GRID_VECTORS':
            return {
                ...state,
                displayGridVectors: !state.displayGridVectors,
            }
        default:
            return state;
    }
};

export default displayPreferences;