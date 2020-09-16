import React from 'react';
import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Main from './main/Main'
import NavBarComp from './nav/NavBarComp'
import About from './about/About'
import Footer from './footer/Footer'
import { Switch, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <NavBarComp />
      <Switch>
          <Route exact path='/' component={Main} /> 
          <Route path='/about' component={About}/>
      </Switch>
    <Footer />
    </div>
  );
}

export default App;
