import React from "react";
import MenuSignedInMainRow from "./MenuSignedInMainRow";
import { shallow, mount } from "enzyme";

describe("MenuSignedInMainRow", () => {
  it("renders", () => {
    const wrapper = shallow(<MenuSignedInMainRow />);
    expect(wrapper.find(".header__link-container_row")).toHaveLength(1);
  });
});
