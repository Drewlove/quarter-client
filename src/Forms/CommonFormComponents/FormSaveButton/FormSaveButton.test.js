import React from "react";
import { shallow } from "enzyme";
import FormSaveButton from "./FormSaveButton";

describe("Error", () => {
  it("renders", () => {
    const wrapper = shallow(<FormSaveButton />);
    expect(wrapper.find(".save-button-section")).toHaveLength(1);
  });
});
