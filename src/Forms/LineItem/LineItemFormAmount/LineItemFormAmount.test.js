import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormAmount from "./LineItemFormAmount";

describe("LineItemFormAmount", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormAmount />);
    expect(wrapper.find(".input-section_amount")).toHaveLength(1);
  });

  it("If error, error component renders", () => {
    const wrapper = mount(<LineItemFormAmount error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<LineItemFormAmount error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
