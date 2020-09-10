import React from 'react';
import './App.css';
import Test from './pages/Test';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Singlepaper from './pages/Singlepaper';
import Error from './pages/Error';
import Login from './pages/Login';
import {Route,Switch} from 'react-router-dom';


import Paper from './pages/Paper';

function App() {
  return (
    <>
    <Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/' component={Home} />
    <Route exact path='/questions' component={Questions} />
    <Route exact path='/questions/:single' component={Singlepaper} />
    <Route exact path='/questions/:single/:year' component={Paper}/>
    <Route exact path='/questions//pdf' component={Test}/>
    
    <Route component={Error} />

    </Switch>
    </>
  );
}

export default App;
