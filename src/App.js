import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header/Header";
import ScheduleContainer from "./Schedule/ScheduleContainer/ScheduleContainer";
import FormsRouter from "./Forms/FormsRouter";
import ProfitLossContainer from "./ProfitLoss/ProfitLossContainer/ProfitLossContainer";
import DepartmentsListContainer from "./DepartmentsListContainer/DepartmentsListContainer";
import RolesListContainer from "./RolesListContainer/RolesListContainer";
import HomePage from "./HomePage/HomePage";
import NotSignedIn from "./NotSignedIn/NotSignedIn";
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const renderRoute = (routeName) => {
    if (!isLoading && !isAuthenticated) return <NotSignedIn />;

    switch (routeName) {
      case "pnl":
        return <ProfitLossContainer />;
      case "departments":
        return <DepartmentsListContainer />;
      case "roles":
        return <RolesListContainer />;
      case "schedule":
        return <ScheduleContainer />;
      case "formsRouter":
        return <FormsRouter />;
      default:
        return <HomePage />;
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/pnl">
            {isLoading ? <LoadingIndicator /> : renderRoute("pnl")}
          </Route>
          <Route path="/departments">
            {isLoading ? <LoadingIndicator /> : renderRoute("departments")}
          </Route>
          <Route path="/roles">
            {isLoading ? <LoadingIndicator /> : renderRoute("roles")}
          </Route>
          <Route path="/schedule">
            {isLoading ? <LoadingIndicator /> : renderRoute("schedule")}
          </Route>
          <Route path="/form">
            {isLoading ? <LoadingIndicator /> : renderRoute("formsRouter")}
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
