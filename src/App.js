import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import ProfitLossPage from './ProfitLossPage/ProfitLossPage/ProfitLossPage';
import HomePage from './HomePage/HomePage'
import FormsRouter from './Forms/FormsRouter'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route path = '/form'>
            <FormsRouter />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/">
            <ProfitLossPage />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
