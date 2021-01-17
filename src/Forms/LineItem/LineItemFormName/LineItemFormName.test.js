import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormName from "./LineItemFormName";

describe("LineItemFormName", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormName />);
    expect(wrapper.find(".input-section_name")).toHaveLength(1);
  });
  it("If error, error component renders", () => {
    const wrapper = mount(<LineItemFormName error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<LineItemFormName error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
