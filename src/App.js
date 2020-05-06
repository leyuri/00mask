import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { fetchStoresByGeo } from "./actions";
import { useSelector, useDispatch } from "react-redux";


import { makeStyles } from '@material-ui/core/styles';

import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import ListPage from "./pages/ListPage";
import MapPage from "./pages/MapPage";
import StorePage from "./pages/StorePage";


// 여기서만 적용될 수 있도록 스타일을 설 정해준다. 
const useStyles = makeStyles((theme) => ({
  // theme라는게 넘어오면 테마에 기본적인 space들이 정해져 있다. 
  app: {
    marginTop: theme.spacing(7)
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const center = useSelector(state => state.center);
  // center을 알고 있는 게 더 나을 것 같아서 , 현재 마지막 패치된 center 을 가지고 있는 것으로
  //  react hook
  useEffect(() => {
  // 컴포넌트가 마운트 되면 할 수 있는 것
      dispatch(fetchStoresByGeo(...center, 5000));
  })
  return (
    <Router>
      <div className={classes.app}>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/list">
              <ListPage />
            </Route>
            <Route path="/help">
              <HelpPage />
            </Route>
            <Route path="/stores/:code">
              <StorePage />
            </Route>
            <Route path="/">
              <MapPage />
            </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;

/*
<Route path="/">
  <MapPage />
</Route>
이건 제일 뒤에 나와야 함..!

<Router></Router>전체를 감싸줘야 react-router-dom이 동작함

*/