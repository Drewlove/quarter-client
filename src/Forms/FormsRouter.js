import React from "react";
import { Switch, Route } from "react-router-dom";
import LineItemForm from "./LineItemForm/LineItemForm";
import ShiftForm from "./ShiftForm/ShiftForm/ShiftForm";

function FormsRouter() {
  return (
    <Switch>
      <Route path="/form/line-item/:lineItem">
        <LineItemForm />
      </Route>
      <Route path="/form/schedule/:shift">
        <ShiftForm />
      </Route>
    </Switch>
  );
}

export default FormsRouter;
