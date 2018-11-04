let nextChargeId = 0;
export function addPointCharge(charge, x, y) {
    return {
        type: 'ADD_POINT_CHARGE',
        id: nextChargeId++,
        charge,
        x,
        y,
    }
}

export function updatePointCharge(id, charge, x, y) {
    return {
        type: 'UPDATE_POINT_CHARGE',
        id,
        charge,
        x,
        y,
    }
}

export function selectPointCharge(id) {
    return {
        type: 'SELECT_POINT_CHARGE',
        id,
    }
}

export function toggleGrid() {
    return {
        type: 'TOGGLE_GRID',
    }
}

export function toggleGridVectors() {
    return {
        type: 'TOGGLE_GRID_VECTORS',
    }
}

export function toggleGridPoints() {
    return {
        type: 'TOGGLE_GRID_POINTS',
    }
}