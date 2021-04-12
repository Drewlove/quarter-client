import React from "react";
import Modal from "./Modal";
import { shallow } from "enzyme";

describe("Modal", () => {
  it("renders", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(".modal")).toHaveLength(1);
  });
  it("renders modal text", () => {
    const wrapper = shallow(<Modal text="modal text" />);
    expect(wrapper.find(".modal__text").text()).toBe("modal text");
  });
  it("renders confirm and cancel buttons if props.type = 'confirmation'", () => {
    const wrapper = shallow(<Modal type="confirmation" />);
    expect(wrapper.find(".modal__button_confirm")).toHaveLength(1);
    expect(wrapper.find(".modal__button_cancel")).toHaveLength(1);
  });
  it("Only renders acknowledge button if type does not equal 'confirmation'", () => {
    const wrapper = shallow(<Modal type="notification" />);
    expect(wrapper.find(".modal__button_acknowledge")).toHaveLength(1);
  });
});
