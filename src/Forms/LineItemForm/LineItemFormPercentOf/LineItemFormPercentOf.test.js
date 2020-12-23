import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormPercentOf from "./LineItemFormPercentOf";

describe("LineItemFormPercentOf", () => {
  it("renders", () => {
    const wrapper = mount(<LineItemFormPercentOf />);
    expect(wrapper.find(".input-section_percent-of")).toHaveLength(1);
  });
  it("If error, error component renders", () => {
    const wrapper = mount(<LineItemFormPercentOf error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<LineItemFormPercentOf error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
