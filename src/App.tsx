
import { Route, Switch } from "react-router-dom";
import './App.css';
import './sass/main.scss'
import Home from './Home';
import Restaurants from "./containers/Restaurants";
import ViewRestaurant from "./containers/ViewRestaurant";


function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/restaurants">
          <Restaurants />
        </Route>

        <Route exact path="/restaurant">
          <ViewRestaurant />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
