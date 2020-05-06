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
- Map에 Marker 추가 (<a href="https://www.iconfinder.com/iconsets/map-location-solid-style">iconfinder이용</a>)
- 맵을 움직인 다음에 현재 중심에서 데이터를 추가로 가져오기
- 재고 list 정렬
- 상점 상세 페이지
- 맵 마커에서 상세 페이지 연결
- responsive하게 상단 padding 크기가 변경되는데, 마진 조정ㅎㅏ기..ㅜ

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

<br/>

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

<br/>

- 지금은..
지금은 pin을 stores의 100만개를 받아왔으면 백만개를 마커로 찍고 있다. 근데 그럴 필요 없음..ㅜㅜ
바운드 안에 (=맵 화면) 있는 것들만 찍는 게 좋다 -> getBounds,,,,,,
```
hasLatLng(latlng)
```
객체의 좌표 경계 내에 지정한 좌표가 있는지 여부를 확인!

<img width="363" alt="Screen Shot 2020-05-05 at 9 18 37 AM" src="https://user-images.githubusercontent.com/33794732/81025401-79150e00-8eb1-11ea-9a62-3007c8186304.png">

<img width="371" alt="Screen Shot 2020-05-05 at 9 18 47 AM" src="https://user-images.githubusercontent.com/33794732/81025407-7e725880-8eb1-11ea-8011-31cd8f2225a7.png">
위와 같이 다른 곳에 위치한 곳의 마커는 나타나지 않음!
근데 단점 존재 ㅠ 다른 곳에 위치한 곳의 스토어를 가지고 있음에도 불구하고 나오지 않는 것..

```
naver.maps.Event.addListener(this.map, 'dragend', () => {
    const coord = this.map.getCenter();
    dispatch(setMapCenter([coord.lat(), coord.lng()]));
    this.loadPins();
    // dragend가 되었을 때 다시 loadPins 해줘야 할 필요가 있다. 그 안에 핀들을 다시 불러내주도록!
});
```
this.loadPins(); 추가하기
근데 여전히 문제 존재, 이미 있는 marker를 또 만들고 있을 것이다. 

```
if (this.markers[store.code]) {
    // code에 해당하는 마커가 있으면 더 할 필요가 없으ㅁ,,빠져나가면 됨 
    return;
}
```
이 부분을 추가해주면서 해결

- stores가 변경 됬는데 왜 아무것도 화면에 나타나지 않을까?...stores가 변하면 렌더가 될 것이다. 근데 렌더가 된 이후 아무것도 변하지 않음
```
    render() {
        console.log("RENDER~~~~~~~")
        return (
            <MapDiv ref={this.mapRef}/>
            /* 이렇게 id를 주면 컴포넌트들로서의 역할을 할 수 없다. 
            리액트의 refs를 사용하는 방식으로!
            */

        )
    }
```
<img width="583" alt="Screen Shot 2020-05-06 at 9 03 32 AM" src="https://user-images.githubusercontent.com/33794732/81127319-d1fba980-8f78-11ea-8d53-b8014b2d4496.png">

<img width="595" alt="Screen Shot 2020-05-06 at 9 03 38 AM" src="https://user-images.githubusercontent.com/33794732/81127328-d627c700-8f78-11ea-81b7-3d046557e696.png">

- 새로 패치를 해와야 할 필요가 있는데 패치가 안된거고 stores나 그런 것들이 바뀌었을 때 그거에 대해서 반응을 안하고 있다. 렌더에게다 이것을 넣기 보다는...

- 현재의 center에서 새로 데이터를 가져오는 것을 만들자

- 패치를 안했기 때문에 stores에 아무것도 없음
<img width="1157" alt="Screen Shot 2020-05-06 at 1 52 56 PM" src="https://user-images.githubusercontent.com/33794732/81139522-fff4e400-8fa0-11ea-8047-307130ae8ff2.png">

##### error
