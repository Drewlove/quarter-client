import React from "react";
import { shallow, mount } from "enzyme";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders", () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.find(HomePage)).toHaveLength(1);
  });
  it("renders three home page containers", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(".home-page__container")).toHaveLength(3);
  });
});
