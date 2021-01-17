import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormAmountType from "./LineItemFormAmountType";

describe("LineItemFormAmountType", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormAmountType />);
    expect(wrapper.find(".input-section_amount-type")).toHaveLength(1);
  });

  it("If error, error component renders", () => {
    const wrapper = mount(<LineItemFormAmountType error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<LineItemFormAmountType error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
