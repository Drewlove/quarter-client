import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormSelect from "./LineItemFormSelect";

describe("LineItemFormSelect", () => {
  it("renders", () => {
    const wrapper = mount(<LineItemFormSelect options={[]} />);
    expect(wrapper.find(".input-section_select")).toHaveLength(1);
  });
  it("If error, error component renders", () => {
    const wrapper = mount(<LineItemFormSelect error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<LineItemFormSelect error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
