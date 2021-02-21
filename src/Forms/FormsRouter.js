import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemFormContainer from "./LineItem/LineItemFormContainer/LineItemFormContainer";
import ShiftFormContainer from "../Forms/Shift/ShiftFormContainer/ShiftFormContainer";
import DepartmentFormContainer from "./Department/DepartmentFormContainer/DepartmentFormContainer";
import RoleFormContainer from "./Role/RoleFormContainer/RoleFormContainer";

function FormsRouter() {
  return (
    <Switch>
      <Route path="/form/line-item/:id">
        <LineItemFormContainer />
      </Route>
      <Route path="/form/schedule/:id">
        <ShiftFormContainer />
      </Route>
      <Route path="/form/department/:id">
        <DepartmentFormContainer />
      </Route>
      <Route path="/form/role/:id">
        <RoleFormContainer />
      </Route>
    </Switch>
  );
}

export default FormsRouter;
