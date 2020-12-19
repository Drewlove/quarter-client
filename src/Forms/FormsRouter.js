import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemForm from "./LineItemForm/LineItemForm";
import ShiftForm from "./ShiftForm/ShiftForm/ShiftForm";
import DepartmentForm from "./DepartmentForm/DepartmentForm";
import RoleForm from "./RoleForm/RoleForm";

function FormsRouter() {
  return (
    <Switch>
      <Route path="/form/line-item/:lineItem">
        <LineItemForm />
      </Route>
      <Route path="/form/schedule/:shift">
        <ShiftForm />
      </Route>
      <Route path="/form/department/:department">
        <DepartmentForm />
      </Route>
      <Route path="/form/role/:role">
        <RoleForm />
      </Route>
    </Switch>
  );
}

export default FormsRouter;
