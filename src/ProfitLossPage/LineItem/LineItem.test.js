import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import LineItem from "./LineItem";

describe("LineItem", () => {
  it("renders", () => {
    const wrapper = shallow(
      <LineItem category="category" name="name" amount={200} />
    );
  });
  it("displays two paragraph elements", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LineItem category="category" name="name" amount={200} />
      </BrowserRouter>
    );
    expect(wrapper.find(".fieldset__item-text")).toHaveLength(2);
  });
  it("capitalizes line item name", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LineItem category="category" name="name" amount={200} />
      </BrowserRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(0).text()).toEqual("Name");
  });
  it("formats href correctly", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LineItem category="category" id="1" amount={200} name="name" />
      </BrowserRouter>
    );
    expect(wrapper.find("a").props().href).toEqual("/form/line-item/1");
  });
});
