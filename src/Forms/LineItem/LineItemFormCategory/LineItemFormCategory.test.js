import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormCategory from "./LineItemFormCategory";

describe("LineItemFormCategory", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormCategory />);
    expect(wrapper.find(".input-section")).toHaveLength(1);
  });
  it("If error, error component renders", () => {
    const wrapper = mount(<LineItemFormCategory error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<LineItemFormCategory error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
