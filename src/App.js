import React from 'react';
import ProfitLossPage from './ProfitLossPage/ProfitLossPage/ProfitLossPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
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
          <Route path="/">
            <ProfitLossPage />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
