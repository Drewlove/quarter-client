import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("renders", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
  it("if logged OUT, renders logged out menu", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.find(".header__link-container_signed-out")).toHaveLength(1);
  });
  it("if logged OUT, does NOT render menu for users that are signed-in", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.find(".header__button-container")).toHaveLength(0);
  });
  it("if logged IN, does render both signed-in menu containers", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/p&L"]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.find(".header__button-container")).toHaveLength(2);
  });
  it("if logged IN, does NOT render sign-in and register links", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/p&L"]}>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.find(".header__user-link_register")).toHaveLength(0);
    expect(wrapper.find(".header__user-link_sign-in")).toHaveLength(0);
  });
});
