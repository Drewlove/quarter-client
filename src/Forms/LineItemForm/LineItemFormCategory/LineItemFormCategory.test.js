import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormCategory from "./LineItemFormCategory";

describe("LineItemFormCategory", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemFormCategory />);
  });
  it("renders", () => {
    shallow(<LineItemFormCategory />);
  });
  it("If error, error component renders", () => {
    wrapper = mount(<LineItemFormCategory error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    wrapper = mount(<LineItemFormCategory error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
