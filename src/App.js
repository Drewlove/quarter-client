import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header/Header/Header";
import ScheduleContainer from "./Schedule/ScheduleContainer/ScheduleContainer";
import FormsRouter from "./Forms/FormsRouter";
import ProfitLossContainer from "./ProfitLoss/ProfitLossContainer/ProfitLossContainer";
import DepartmentsListContainer from "./DepartmentsListContainer/DepartmentsListContainer";
import RolesListContainer from "./RolesListContainer/RolesListContainer";
import HomePage from "./HomePage/HomePage";
import ProtectedRoute from "./Authentication/ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <ProtectedRoute path="/pnl" component={ProfitLossContainer} />
          <ProtectedRoute
            path="/departments"
            component={DepartmentsListContainer}
          />
          <ProtectedRoute path="/roles" component={RolesListContainer} />
          <ProtectedRoute path="/schedule" component={ScheduleContainer} />
          <ProtectedRoute path="/form" component={FormsRouter} />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
