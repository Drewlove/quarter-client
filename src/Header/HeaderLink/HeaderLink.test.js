import React from "react";
import { shallow, mount } from "enzyme";
import HeaderLink from "./HeaderLink";

describe("HeaderLink", () => {
  it("renders", () => {
    const wrapper = shallow(<HeaderLink url="/" class="props-class" />);
    expect(wrapper.find(".header__item")).toHaveLength(1);
  });
});
