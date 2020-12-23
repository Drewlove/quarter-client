import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import MenuSignedOut from "./MenuSignedOut";

describe("MenuSignedOut", () => {
  it("renders row container", () => {
    const wrapper = mount(
      <BrowserRouter>
        <MenuSignedOut />
      </BrowserRouter>
    );
    expect(wrapper.find(".header__link-container_signed-out")).toHaveLength(1);
  });
});
