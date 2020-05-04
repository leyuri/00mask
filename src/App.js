import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import ListPage from "./pages/ListPage";
import MapPage from "./pages/MapPage";


// 여기서만 적용될 수 있도록 스타일을 설정해준다. 
const useStyles = makeStyles((theme) => ({
  // theme라는게 넘어오면 테마에 기본적인 space들이 정해져 있다. 
  app: {
    marginTop: theme.spacing(7)
  },
}));

function App() {
  const classes = useStyles();
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