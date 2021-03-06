import React from "react";
import MenuAuthenticatedNavBar from "./MenuAuthenticatedNavBar";
import { shallow } from "enzyme";

describe("MenuAuthenticatedNavBar", () => {
  it("renders", () => {
    const wrapper = shallow(<MenuAuthenticatedNavBar />);
    expect(wrapper.find(".header__items-container")).toHaveLength(1);
  });
});
