import React from "react";
import { shallow } from "enzyme";
import Roles from "./Roles";

describe("Roles", () => {
  it("renders", () => {
    const wrapper = shallow(<Roles />);
    expect(wrapper.find(".fieldset_roles")).toHaveLength(1);
  });
});
