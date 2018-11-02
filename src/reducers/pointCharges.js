const pointCharges = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POINT_CHARGE':
            return [
                ...state,
                {
                    charge: action.charge,
                    x: action.x,
                    y: action.y,
                },
            ];
        default:
            return state;
    }
}

export default pointCharges;