import produce from "immer"

const baseState = {

    loading: false,
    error:"",
    mapCenter: [37.6050705, 127.0768575],
    mapZoom: 14,
    stores: { },

};

// redux에서 데이터가 들어왔으니까 리스트 페이지에서 리스트를 만들 데이터가 생김

const reducer = produce((state, action) => {
    switch(action.type) {
        case "SET_MAP_ZOOM":
            state.mapZoom = action.payload;
            break;
        case "SET_MAP_CENTER":
            state.mapCenter = action.payload;
            break;
        // 전체 global state를 바꿔준 것..!
        case "FETCH_STORES":
            action.payload.stores.forEach(store => {
                // sotres에 있는 배열을 하나하나 읽으면서
                state.stores[store.code] = store;
                // state의 stores의 안에 있는 스토어의 코드를 스토어로 바꾼다.
                // 이렇게 해야지 새로 케치를 해왔을 때 기존에 있던 것을 엎어서 추가로 받는 형태가 되겠지?.
                // 그럼 store을 찍어주는 코드는 다 바뀌어야 한다.
            })
            break;
        default:
            break;
    }
}, baseState);

export default reducer;



/*
state와 action이 들어왔을 때 새로운 state를 만들어내는 function을.. -> immer을 통해 만들어 볼 것
const reducer = (state, action) => {
}
immer을 안쓰면 이렇게 되는데 immer의 produce를 사용하여 Immutable한 state를 바로 만들 것이다. 
그럼 이것을 produce 안에 한번만 감싸주면 된다. 
나중에 reducer가 여러개 생기면 combine reducer을 이용하면 된다. 
*/