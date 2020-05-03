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

---

##### todo

- Reducer / Redux / React-Redux / Redux-thunk / Redux-logger  store를 provider에
- React-Router 통해 Page Switch
- AppBar, BottomNavigation


##### Tip

- redux-dev-tool을 만드려면 스토어에 해당 코드를 넣어줘야 함


```
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );


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


##### error
