import React from 'react';
import './App.css';
import {Read,} from "./_pages"
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";import {PrivateRoute} from './_routers/privateRoute';
import { history } from "./_helper/history";

// function usePageViews() {
//   let location = useLocation();
//   React.useEffect(() => {
//     ga.send(["pageview", location.pathname]);
//   }, [location]);
// }

function App() {
  // usePageViews();
  return  <Switch>
      <PrivateRoute path="/read"  component={Read} />
      {/* <Route path="/add" exact component={add} />
      <Route path="/edit" exact component={edit} /> */}
    </Switch>
}

export default App;