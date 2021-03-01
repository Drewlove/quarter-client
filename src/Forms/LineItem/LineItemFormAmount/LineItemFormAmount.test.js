import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormAmount from "./LineItemFormAmount";

describe("LineItemFormAmount", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormAmount />);
    expect(wrapper.find(".input-section_amount")).toHaveLength(1);
  });
  it("If value is given, the value renders", () => {
    const wrapper = shallow(
      <LineItemFormAmount value="100.50" handleChange={() => null} />
    );
    expect(wrapper.find("input").props().value).toBe("100.50");
  });
  it("If no value is given, then no value renders", () => {
    const wrapper = shallow(
      <LineItemFormAmount value="" handleChange={() => null} />
    );
    expect(wrapper.find("input").props().value).toBe("");
  });
  it("If error, error component renders", () => {
    const wrapper = mount(<LineItemFormAmount error="Error" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = shallow(<LineItemFormAmount error="" />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
