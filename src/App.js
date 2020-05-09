import React from 'react';
import './App.css';
import Homepage from "./Components/Homepage";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import About from '../src/Components/About'

function App() {
  return (
<Router>
    <Route exact path='/shobhit_tiwari' component={Homepage} />
    <Switch>
        <Route exact path='/about' component={About}/>

    </Switch>


</Router>




  );
}

export default App;
