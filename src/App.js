import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Nosotros from './components/nosotros';
import Contactos from './components/contactos';
import Inicio from './components/inicio';
import User from './components/User';




function App() {
  return (
    <Router>
    <div className="container">
    <div className="btn-group">
    <Link to="/" className="btn btn-dark">
      inicio
   </Link>
   <Link to="/contacto" className="btn btn-dark">
      Contactos
   </Link>
   <NavLink to="/Nosotros" className="btn btn-dark" activeClassName="active">
      Nosotros
   </NavLink>
    </div>
     <h1>Navbar...</h1>
     <hr />
      <Switch>
      <Route path="/nosotros/:id">
      <User / >
     </Route>
      <Route path="/" exact><Inicio/>
     </Route>
     <Route path="/contacto"><Contactos/>
     </Route>
     <Route path="/nosotros"><Nosotros/>
     </Route> 
    
      </Switch>
    </div>
   </Router>
  );
}

export default App;
