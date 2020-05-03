import produce from "immer"

const baseState = {

    loading: false,
    error:""
};


const reducer = produce((state, action) => {
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