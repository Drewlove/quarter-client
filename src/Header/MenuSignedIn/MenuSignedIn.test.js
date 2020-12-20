import React from "react";
import { shallow, mount } from "enzyme";
import MenuSignedIn from "./MenuSignedIn";

describe("MenuSignedIn", () => {
  it("renders both link containers that should appear when user is signed in", () => {
    const wrapper = mount(<MenuSignedIn />);
    expect(wrapper.find(".header__button-container")).toHaveLength(2);
  });
});
