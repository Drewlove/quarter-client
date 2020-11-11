import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormAmountType from "./LineItemFormAmountType";

describe("LineItemFormAmountType", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemFormAmountType />);
  });

  it("renders", () => {
    shallow(<LineItemFormAmountType />);
  });

  it("If error, error component renders", () => {
    wrapper = mount(<LineItemFormAmountType error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    wrapper = mount(<LineItemFormAmountType error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
