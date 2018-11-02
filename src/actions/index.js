export function addPointCharge(charge, x, y) {
    return {
        type: 'ADD_POINT_CHARGE',
        charge,
        x,
        y,
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