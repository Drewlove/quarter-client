import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import MenuSignedIn from "./MenuSignedIn";

describe("MenuSignedIn", () => {
  it("renders row container", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuSignedIn />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__link-container_row")).toHaveLength(1);
  });
  it("renders hamburger button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuSignedIn />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__menu-button_hamburger")).toHaveLength(1);
  });
  it("renders new item button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuSignedIn />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__button-container_new-button")).toHaveLength(
      1
    );
  });
});
