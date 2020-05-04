

export function setMapZoom(zoom) {
    return {
        type: "SET_MAP_ZOOM",
        payload: zoom
    }
}

export function setMapCenter(coord) {
    return {
        type: "SET_MAP_CENTER",
        payload: coord
    }
}


 