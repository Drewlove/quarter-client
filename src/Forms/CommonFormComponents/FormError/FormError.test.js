import React from "react";
import { shallow } from "enzyme";
import FormError from "./FormError";

describe("Error", () => {
  it("renders", () => {
    const wrapper = shallow(<FormError />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});
