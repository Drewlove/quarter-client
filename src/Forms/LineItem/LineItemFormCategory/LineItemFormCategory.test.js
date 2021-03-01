import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormCategory from "./LineItemFormCategory";

const categories = [
  { actualVal: "sales", displayVal: "Sales" },
  { actualVal: "cogs", displayVal: "COGS" },
  { actualVal: "overhead", displayVal: "Overhead" },
];

describe("LineItemFormCategory", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormCategory categories={categories} />);
    expect(wrapper.find(".input-section")).toHaveLength(1);
  });
  it("If value is given, the value renders", () => {
    const wrapper = shallow(
      <LineItemFormCategory value="Sales" categories={categories} />
    );
    expect(wrapper.find("select").props().value).toBe("Sales");
  });

  it("If no value is given, then no value renders", () => {
    const wrapper = shallow(
      <LineItemFormCategory value="" categories={categories} />
    );
    expect(wrapper.find("select").props().value).toBe("");
  });
  it("renders category options", () => {
    const wrapper = shallow(<LineItemFormCategory categories={categories} />);
    expect(wrapper.find("option")).toHaveLength(4);
    expect(wrapper.find("option").at(0).text()).toBe("- Select Category -");
    expect(wrapper.find("option").at(1).text()).toBe("Sales");
    expect(wrapper.find("option").at(2).text()).toBe("COGS");
    expect(wrapper.find("option").at(3).text()).toBe("Overhead");
  });
  it("If error, error component renders", () => {
    const wrapper = mount(
      <LineItemFormCategory error="There is an error" categories={categories} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(
      <LineItemFormCategory error="" categories={categories} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
