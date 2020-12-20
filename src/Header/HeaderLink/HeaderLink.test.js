import React from "react";
import { shallow, mount } from "enzyme";
import HeaderLink from "./HeaderLink";

describe("HeaderLink", () => {
  it("renders", () => {
    const wrapper = shallow(<HeaderLink url="/" />);
    expect(wrapper.find(".header__new-menu-link")).toHaveLength(1);
  });
});
