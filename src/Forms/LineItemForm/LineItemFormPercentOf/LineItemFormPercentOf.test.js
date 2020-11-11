import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormPercentOf from "./LineItemFormPercentOf";

describe("LineItemFormPercentOf", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemFormPercentOf />);
  });
  it("renders", () => {
    shallow(<LineItemFormPercentOf />);
  });
  it("If error, error component renders", () => {
    wrapper = mount(<LineItemFormPercentOf error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    wrapper = mount(<LineItemFormPercentOf error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
