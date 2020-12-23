import React from "react";
import { shallow } from "enzyme";
import FormDeleteButton from "./FormDeleteButton";

describe("Error", () => {
  it("renders", () => {
    const wrapper = shallow(<FormDeleteButton />);
    expect(wrapper.find(".delete-button-section")).toHaveLength(1);
  });
});
