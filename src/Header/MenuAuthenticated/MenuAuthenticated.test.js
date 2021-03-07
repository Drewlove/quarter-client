import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import MenuAuthenticated from "./MenuAuthenticated";

describe("MenuAuthenticated", () => {
  it("renders row container", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuAuthenticated />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__nav-authenticated")).toHaveLength(1);
  });
  it("renders hamburger button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuAuthenticated />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__menu-button_hamburger")).toHaveLength(1);
  });
  it("renders new item button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuAuthenticated />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__menu-button_new")).toHaveLength(1);
  });
});
