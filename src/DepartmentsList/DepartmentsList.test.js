import React from "react";
import { shallow } from "enzyme";
import DepartmentsList from "./DepartmentsList";

describe("DepartmentsList", () => {
  it("renders", () => {
    const wrapper = shallow(<DepartmentsList />);
    expect(wrapper.find(".fieldset_departments")).toHaveLength(1);
  });
});
