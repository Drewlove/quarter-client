import React from "react";
import { Switch, Route } from "react-router-dom";
import ScheduleContainer from "./Schedule/ScheduleContainer/ScheduleContainer";
import FormsRouter from "./Forms/FormsRouter";
import ProfitLossContainer from "./ProfitLoss/ProfitLossContainer/ProfitLossContainer";
import DepartmentsListContainer from "./DepartmentsListContainer/DepartmentsListContainer";
import RolesListContainer from "./RolesListContainer/RolesListContainer";
import HomePage from "./HomePage/HomePage";
import ProtectedRoute from "./Authentication/ProtectedRoute/ProtectedRoute";
import MenuNotAuthenticated from "./Header/MenuNotAuthenticated/MenuNotAuthenticated";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Route exact path="/" component={MenuNotAuthenticated} />
        <Switch>
          <ProtectedRoute path="/app/pnl" component={ProfitLossContainer} />
          <ProtectedRoute
            path="/app/departments"
            component={DepartmentsListContainer}
          />
          <ProtectedRoute path="/app/roles" component={RolesListContainer} />
          <ProtectedRoute path="/app/schedule" component={ScheduleContainer} />
          <ProtectedRoute path="/app/form" component={FormsRouter} />
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
