import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  NavLink
} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Formulario from './Components/Formulario';



function App(props) {

  return (
    <Router>
      <div className="container mt-5">
        <div className = "btn-grupo">
          <Link to ="/" className="btn btn-light">
          Formulario
          </Link>
          <NavLink to="/Dashboard" className= "btn btn-light" activeClassName="active">
        Dashboard
        </NavLink>
        </div>
      
        <Switch>
             <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Switch>
              <Route path="/" exact>
                <Formulario />
              </Route>
            </Switch>
      </Switch>

    </div>
      
      
      
    </Router>

  );
}

export default App;