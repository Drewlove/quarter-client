import React from "react";
import { mount, shallow } from "enzyme";
import FormDeleteButton from "./FormDeleteButton";
import * as MOCK from "../../../Utilities/API_Methods/API_DELETE";

describe("Error", () => {
  it("renders", () => {
    const wrapper = shallow(<FormDeleteButton />);
    expect(wrapper.find(".delete-button-section")).toHaveLength(1);
  });
});
