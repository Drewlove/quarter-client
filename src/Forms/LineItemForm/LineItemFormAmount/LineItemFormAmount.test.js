import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormAmount from "./LineItemFormAmount";

describe("LineItemFormAmount", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemFormAmount />);
  });

  it("renders", () => {
    shallow(<LineItemFormAmount />);
  });

  it("If error, error component renders", () => {
    wrapper = mount(<LineItemFormAmount error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    wrapper = mount(<LineItemFormAmount error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
