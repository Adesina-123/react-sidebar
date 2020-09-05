import React from 'react';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Switch> 
          <Route exact path="/" />


        </Switch>

      </Router>
    </>
  );
}

export default App;
