import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import MenuNotAuthenticated from "./MenuNotAuthenticated";

describe("MenuNotAuthenticated", () => {
  it("renders row container", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuNotAuthenticated />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__nav_not-authenticated")).toHaveLength(1);
  });
});
