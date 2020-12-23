import React from "react";
import { shallow } from "enzyme";
import Departments from "./Departments";

describe("Departments", () => {
  it("renders", () => {
    const wrapper = shallow(<Departments />);
    expect(wrapper.find(".fieldset_departments")).toHaveLength(1);
  });
});
