import React from "react";
import MenuSignedInNewItem from "./MenuSignedInNewItem";
import { shallow, mount } from "enzyme";

describe("MenuSignedInNewItem", () => {
  it("renders", () => {
    const wrapper = shallow(<MenuSignedInNewItem />);
    expect(wrapper.find(".header__button-container_new-button")).toHaveLength(
      1
    );
  });
  it("displays dropdown menu when clicked", () => {
    const wrapper = shallow(<MenuSignedInNewItem />);
    wrapper.find(".header__menu-button_new").simulate("click");
    expect(wrapper.find(".header__menu_drop-down")).toHaveLength(1);
  });
});
