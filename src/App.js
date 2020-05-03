import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import ListPage from "./pages/ListPage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Router>
      <div className="App">
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