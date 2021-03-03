import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemFormContainer from "./LineItem/LineItemFormContainer/LineItemFormContainer";
import ShiftFormContainer from "../Forms/Shift/ShiftFormContainer/ShiftFormContainer";
import DepartmentFormContainer from "./Department/DepartmentFormContainer/DepartmentFormContainer";
import RoleFormContainer from "./Role/RoleFormContainer/RoleFormContainer";
import MenuAuthenticated from "../Header/MenuAuthenticated/MenuAuthenticated";

function FormsRouter() {
  return (
    <>
      <MenuAuthenticated />
      <Switch>
        <Route path="/app/form/line-item/:id">
          <LineItemFormContainer />
        </Route>
        <Route path="/app/form/schedule/:id">
          <ShiftFormContainer />
        </Route>
        <Route path="/app/form/department/:id">
          <DepartmentFormContainer />
        </Route>
        <Route path="/app/form/role/:id">
          <RoleFormContainer />
        </Route>
      </Switch>
    </>
  );
}

export default FormsRouter;
