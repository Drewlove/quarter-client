import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemForm from "./LineItemForm/LineItemForm/LineItemForm";
import ShiftForm from "./ShiftForm/ShiftForm/ShiftForm";
import DepartmentFormContainer from "./Department/DepartmentFormContainer/DepartmentFormContainer";
import RoleFormContainer from "./RoleForm/RoleFormContainer/RoleFormContainer";

function FormsRouter() {
  return (
    <Switch>
      <Route path="/form/line-item/:lineItem">
        <LineItemForm />
      </Route>
      <Route path="/form/schedule/:shift">
        <ShiftForm />
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
