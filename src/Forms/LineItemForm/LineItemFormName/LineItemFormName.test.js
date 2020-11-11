import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormName from "./LineItemFormName";

describe("LineItemFormName", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemFormName />);
  });
  it("renders", () => {
    shallow(<LineItemFormName />);
  });
  it("If error, error component renders", () => {
    wrapper = mount(<LineItemFormName error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    wrapper = mount(<LineItemFormName error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
