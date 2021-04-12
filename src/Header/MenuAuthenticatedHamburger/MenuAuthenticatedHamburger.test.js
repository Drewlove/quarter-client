import React from "react";
import MenuAuthenticatedHamburger from "./MenuAuthenticatedHamburger";
import { shallow } from "enzyme";

describe("MenuAuthenticatedHamburger", () => {
  it("renders the signed-in link container", () => {
    const wrapper = shallow(<MenuAuthenticatedHamburger />);
    expect(wrapper.find(".header__button-container")).toHaveLength(1);
  });
  it("renders the hamburger menu button", () => {
    const wrapper = shallow(<MenuAuthenticatedHamburger />);
    expect(wrapper.find(".header__menu-button_hamburger")).toHaveLength(1);
  });
  it("renders the drop down menu when hamburger button is clicked", () => {
    const wrapper = shallow(<MenuAuthenticatedHamburger />);
    wrapper.find(".header__menu-button_hamburger").simulate("click");
    expect(wrapper.find(".header__menu_drop-down")).toHaveLength(1);
  });
});
