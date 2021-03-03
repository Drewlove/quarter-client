import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import MenuAuthenticatedHamburger from "./MenuAuthenticatedHamburger";

describe("MenuAuthenticatedHamburger", () => {
  it("renders row container", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuAuthenticatedHamburger />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__link-container_row")).toHaveLength(1);
  });
  it("renders hamburger button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuAuthenticatedHamburger />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__menu-button_hamburger")).toHaveLength(1);
  });
  it("renders new item button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuAuthenticatedHamburger />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__button-container_new-button")).toHaveLength(
      1
    );
  });
});
