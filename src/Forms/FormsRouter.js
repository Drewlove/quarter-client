import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemFormContainer from "./LineItem/LineItemFormContainer/LineItemFormContainer";
import ShiftFormContainer from "../Forms/Shift/ShiftFormContainer/ShiftFormContainer";
import DepartmentFormContainer from "./Department/DepartmentFormContainer/DepartmentFormContainer";
import RoleFormContainer from "./Role/RoleFormContainer/RoleFormContainer";

function FormsRouter() {
  return (
    <>
      <Switch>
        <Route path="/app/form/line-item/:rowId">
          <LineItemFormContainer />
        </Route>
        <Route path="/app/form/schedule/:rowId">
          <ShiftFormContainer />
        </Route>
        <Route path="/app/form/department/:rowId">
          <DepartmentFormContainer />
        </Route>
        <Route path="/app/form/role/:rowId">
          <RoleFormContainer />
        </Route>
      </Switch>
    </>
  );
}

export default FormsRouter;
