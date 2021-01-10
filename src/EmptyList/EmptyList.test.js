import React from "react";
import EmptyList from "./EmptyList";
import { shallow } from "enzyme";

describe("EmptyList", () => {
  it("renders", () => {
    const wrapper = shallow(<EmptyList />);
    expect(wrapper.find(".empty-list")).toHaveLength(1);
  });
  it("displays text accurately", () => {
    const wrapper = shallow(<EmptyList name="test" />);
    expect(wrapper.find(".empty-list__text").text()).toEqual("No tests found.");
  });
  it("displays link text accurately", () => {
    const wrapper = shallow(<EmptyList name="test" />);
    expect(wrapper.find(".empty-list__link").text()).toEqual("Add Test");
  });
});
