# 00mask

### development environment
- Material UI
- Immer
- Redux
- React-Redux
- Redux-Thunk
- Axios
- Redux Dev Tool
- Redux Logger
- React Router
- <a href="https://www.data.go.kr/data/15058203/openapi.do">공적 마스크 재고API</a>
- <a href="https://www.ncloud.com/product/applicationService/maps">NaverMapAPI</a>

---

##### todo

- Reducer / Redux / React-Redux / Redux-thunk / Redux-logger  store를 provider에
- React-Router 통해 Page Switch
- AppBar, BottomNavigation
- ListUI
- Map Page
- NaverMap -> Component
- Map - Redux 연결

<br/>

##### Tip

- redux-dev-tool을 만드려면 스토어에 해당 코드를 넣어줘야 함


```
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```


미들웨어랑 같이 쓸 경우는?

```
  import { createStore, applyMiddleware, compose } from 'redux';

+ const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
+ const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
- const store = createStore(reducer, /* preloadedState, */ compose(
    applyMiddleware(...middleware)
  ));
```

적용결과!

reducers/index.js의 baseState에 값을 넣어보고

<img width="201" alt="Screen Shot 2020-05-03 at 12 15 14 PM" src="https://user-images.githubusercontent.com/33794732/80897812-d2593200-8d37-11ea-8459-eac2a2b8f432.png">

redux-dev-tool chrome 에서 확인 

<img width="415" alt="Screen Shot 2020-05-03 at 12 14 54 PM" src="https://user-images.githubusercontent.com/33794732/80897810-d08f6e80-8d37-11ea-9987-fab60377eb32.png">

<br/>

- css 적용

"& .MuiBottomNavigationAction-root" 이 태그를 만나면  css를 변경시켜줄 수도 있음

```
const useStyles = makeStyles({
  root: {
    background: "#eee",
    width: "100%",
    "& .MuiBottomNavigationAction-root": {
        minWidth: 0
    }
  },

});
```
<br/>

- useState


```
  const [value, setValue] = React.useState(() =>{

      const path = location.pathname;
      //pathname은 URL의 경로 이름을 설정하거나 반환합니다.
      if (path === "/list") return 1;
      if (path === "/help") return 2;
      if (path === "/about") return 3;
      return 0; 
  });
```


현재 누가 선택되어있는지는 valueState를 통제하고 있다. hooks을 이용해서 훅을 쓰고 있다. 초기값이 0이라서 무조건 0번째가 선택되어서 링크페이지가 바뀌어도 map에 고정되어 있다. 여기의 초기값은 path를 선택해줘야 하는데...
react-router-dom의 hooks 참고! useLocation, 초기값은 함수로 넣어주는 것이 좋다. 초기값이 함수로 되어있지 않으면 앱을 랜더링 할 때마다 실행을 해야 한다. 그만큼 안좋은 점이 생김..

useState에는 intinalState가 들어가는데 intinalState가 함수면 
이 함수가 제일 처음 콜할때 한번만 콜하고 기억이 된다?....

<br/>

- <a href=Convert JSON to JavaScript object>Convert JSON to JavaScript object</a>

json 파일을 js object로 바꿔줌

<br/>

- 밖에서 들어왔으므로 더 이상 에러라고 표시해주지 마세요...!

```
/* global naver */
```

<br/>

- css 내에서 직접 계산을 할 수 있도록 해주는?!

```
const useStyles = makeStyles((theme) => ({
    mapWrapper: {
      width: "100%",
      marginBottom: theme.spacing(7),
      height: `calc(100vh - ${ 2 * theme.spacing(7)}px)`
    },
}));
```

기계 화면마다 사이즈가 달라지기 때문에 조절을 해줘야 한다ㅜㅜ

<br/>

- What is ... ?

The ... can also be used to spread objects and not just arrays

```
// Using rest syntax here
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }; 
x; // 1
y; // 2
z; // { a: 3, b: 4 }

// Using spread here
let n = { x, y, ...z };
n; // { x: 1, y: 2, a: 3, b: 4 }
```
<a href="https://stackoverflow.com/questions/54963457/react-js-spread-syntax">출처</a>

<br/>

- action을 추가,,이렇게 보이는 이유는 리덕스 로그를 받아놨기 때문..!

<img width="589" alt="Screen Shot 2020-05-04 at 11 11 36 PM" src="https://user-images.githubusercontent.com/33794732/80975142-ad121400-8e5c-11ea-925f-e6ad61bf397d.png">

하지만 아직 state는 바뀌지 않음 reducer에서 처리를 안해줬기 때문에ㅠㅜ

- 큰 문제가?...

```
const reducer = produce((state, action) => {
    switch(action.type) {
        case "SET_MAP_ZOOM":
            state.mapZoom = action.payload;
            break;
        case "SET_MAP_CENTER":
            state.mapCenter = action.payload;
            break;
        // 전체 global state를 바꿔준 것..!
        default:
            break;
    }
}, baseState);
```
왜 생길 수 있냐면...

<img width="578" alt="Screen Shot 2020-05-04 at 11 24 07 PM" src="https://user-images.githubusercontent.com/33794732/80976530-87860a00-8e5e-11ea-9ca5-75bb901a1550.png">

이렇게 랜더가 두번 먼저 불리면 상관이 없다. 
처음 랜더가 되었을 때는 마운트 되기 전, 리덕스 값이. 바뀌지 않음, 따라서 랜더 후 Map이 initialized 되는 것은 좋음..근데 지금 상태에서 드래그 해서 옮기면 계속 랜더가 발생한다.
Map이 initialized되면 문제가 생김 ㅜ -> 페이지 바꿀 때마다 initialized 됨
##### error
