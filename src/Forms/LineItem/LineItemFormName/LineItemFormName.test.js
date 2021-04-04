import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormName from "./LineItemFormName";

describe("LineItemFormName", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormName />);
    expect(wrapper.find(".form-section_name")).toHaveLength(1);
  });
  it("If value is given, the value renders", () => {
    const wrapper = shallow(
      <LineItemFormName value="merchandise" handleChange={() => null} />
    );
    expect(wrapper.find("input").props().value).toBe("merchandise");
  });
  it("If no value is given, then no value renders", () => {
    const wrapper = shallow(
      <LineItemFormName value="" handleChange={() => null} />
    );
    expect(wrapper.find("input").props().value).toBe("");
  });
  it("If error, error component renders", () => {
    const wrapper = mount(<LineItemFormName error="Error" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<LineItemFormName error="" />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
