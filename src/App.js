import { Route, Switch } from "react-router-dom";
import "./App.css";

import { routes } from "./components/Navigation/Util/routes";

function App() {
  return (
    <main>
      <div className="App">
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route path={route.path} exact={route.exact} key={route.path}>
                {<route.component />}
              </Route>
            );
          })}
        </Switch>
      </div>
    </main>
  );
}

export default App;
