import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header/Header";
import ScheduleContainer from "./Schedule/ScheduleContainer/ScheduleContainer";
import FormsRouter from "./Forms/FormsRouter";
import ProfitLossContainer from "./ProfitLoss/ProfitLossContainer/ProfitLossContainer";
import DepartmentsListContainer from "./DepartmentsListContainer/DepartmentsListContainer";
import RolesListContainer from "./RolesListContainer/RolesListContainer";
import HomePage from "./HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/schedule">
            <ScheduleContainer />
          </Route>
          <Route path="/form">
            <FormsRouter />
          </Route>
          <Route path="/pnl">
            <ProfitLossContainer />
          </Route>
          <Route path="/departments">
            <DepartmentsListContainer />
          </Route>
          <Route path="/roles">
            <RolesListContainer />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
