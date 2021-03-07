import React from "react";
import NewItemButton from "./NewItemButton";
import { shallow } from "enzyme";

describe("NewItemButton", () => {
  it("renders", () => {
    const wrapper = shallow(<NewItemButton />);
    expect(wrapper.find(".header__button-container")).toHaveLength(1);
  });
  it("displays dropdown menu when clicked", () => {
    const wrapper = shallow(<NewItemButton />);
    wrapper.find(".header__menu-button_new").simulate("click");
    expect(wrapper.find(".header__menu_drop-down")).toHaveLength(1);
  });
});
