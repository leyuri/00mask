import axios from "axios";

const BASE_URL = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1"

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

export function fetchStoresByGeo(lat, lng, m) {
    // asyn 작업을 해야하므로 redux-thunk을 사용해야 하고, 이를 사용하기 위해 함수를 리턴해줘야 한다.
    return async (dispatch) => {
        // 함수는 dispatch를 받고, 무언가 하는 함수를 리턴해준다. 
        const url = `${BASE_URL}/storesByGeo/json`;
        try {
        const result = await axios(url, {params: { lat, lng, m }})
        dispatch({
            type: 'FETCH_STORES',
            payload: result.data
            // payload 에 result안에 있는 data를 넘겨준다
        })
        // result를 받으면 그때 dispatch를 할 것..!

        } catch (error) {
            // error 처리
            console.error(error);
        }
    }
}



/*
params: {
    lat: lat,
    lng: lng,
    m: m
}
와 같은 것!

*/
 