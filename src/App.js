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
import MenuAuthenticated from "./Header/MenuAuthenticated/MenuAuthenticated";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Route exact path="/" component={MenuNotAuthenticated} />
        <Route path="/app" component={MenuAuthenticated} />
        <Switch>
          <ProtectedRoute
            path="/app/pnl"
            component={ProfitLossContainer}
            skeletonNumber={7}
          />
          <ProtectedRoute
            path="/app/departments"
            component={DepartmentsListContainer}
            skeletonNumber={1}
          />
          <ProtectedRoute
            path="/app/roles"
            component={RolesListContainer}
            skeletonNumber={1}
          />
          <ProtectedRoute
            path="/app/schedule"
            component={ScheduleContainer}
            skeletonNumber={5}
          />
          <ProtectedRoute
            path="/app/form"
            component={FormsRouter}
            skeletonNumber={1}
          />
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
