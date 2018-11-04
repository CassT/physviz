const pointCharges = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POINT_CHARGE':
            return [
                ...state,
                {
                    id: action.id,
                    charge: action.charge,
                    x: action.x,
                    y: action.y,
                },
            ];
        case 'UPDATE_POINT_CHARGE':
            var newState = state.slice();
            newState[action.id] = {
                id: action.id,
                charge: action.charge,
                x: action.x,
                y: action.y,
            }
            return newState;
        default:
            return state;
    }
}

export default pointCharges;