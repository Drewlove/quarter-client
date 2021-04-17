import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemFormContainer from "./LineItem/LineItemFormContainer/LineItemFormContainer";
import ShiftFormContainer from "../Forms/Shift/ShiftFormContainer/ShiftFormContainer";
import DepartmentFormContainer from "./Department/DepartmentFormContainer/DepartmentFormContainer";
import RoleFormContainer from "./Role/RoleFormContainer/RoleFormContainer";
import Error from "../Error/Error";

function FormsRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/app/form/line-item/:rowId">
          <LineItemFormContainer />
        </Route>
        <Route exact path="/app/form/schedule/:rowId">
          <ShiftFormContainer />
        </Route>
        <Route exact path="/app/form/department/:rowId">
          <DepartmentFormContainer />
        </Route>
        <Route exact path="/app/form/role/:rowId">
          <RoleFormContainer />
        </Route>
        <Route
          render={(props) => (
            <Error
              {...props}
              error={{ status: 404, statusText: "Not Found" }}
            />
          )}
        />
      </Switch>
    </>
  );
}

export default FormsRouter;
