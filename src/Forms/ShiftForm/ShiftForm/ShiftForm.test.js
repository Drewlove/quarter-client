import React from "react";
import ShiftForm from "./ShiftForm";
import { shallow, mount } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = mount(<ShiftForm />);
});

describe("ShiftForm", () => {
  it("renders", () => {
    expect(wrapper.find(".fieldset_form")).toHaveLength(1);
  });
  it("renders correct number of input sections", () => {
    expect(wrapper.find(".input-section")).toHaveLength(7);
  });
});

describe("ShiftForm, Field: Department", () => {
  it("renders", () => {
    expect(wrapper.find(".input-section_department")).toHaveLength(1);
  });
  it("updates value correctly based on user input", () => {
    wrapper
      .find("#department")
      .simulate("change", { target: { name: "department", value: "service" } });
    expect(wrapper.find("#department").props().value).toEqual("service");
  });
});

describe("ShiftForm, Field: Role", () => {
  it("renders", () => {
    expect(wrapper.find(".input-section_role")).toHaveLength(1);
  });
  it("updates value correctly based on user input", () => {
    wrapper
      .find("#role")
      .simulate("change", { target: { name: "role", value: "chef" } });
    expect(wrapper.find("#role").props().value).toEqual("chef");
  });
});

describe("ShiftForm, Field: People", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ShiftForm />);
  });
  it("renders", () => {
    expect(wrapper.find(".input-section_people")).toHaveLength(1);
  });
  it("renders error when user inputs empty value", () => {
    const event = { target: { name: "people", value: "" } };
    wrapper.find("#people").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders error if pay is negative", () => {
    const event = { target: { name: "people", value: "-1" } };
    wrapper.find("#people").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders error if any decimal numbers", () => {
    const event = { target: { name: "people", value: "1.1" } };
    wrapper.find("#people").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("updates value based on user input", () => {
    const event = { target: { name: "people", value: "1" } };
    wrapper.find("#people").simulate("change", event);
    expect(wrapper.find("#people").props().value).toBe("1");
  });
});

describe("ShiftForm, Field: Pay", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ShiftForm />);
  });
  it("renders", () => {
    expect(wrapper.find(".input-section_pay")).toHaveLength(1);
  });
  it("renders error when user inputs empty value", () => {
    const event = { target: { name: "pay", value: "" } };
    wrapper.find("#pay").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders error if pay is negative", () => {
    const event = { target: { name: "pay", value: "-1" } };
    wrapper.find("#pay").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders error if more than 2 numbers appear after decimal place", () => {
    const event = { target: { name: "pay", value: "1.000" } };
    wrapper.find("#pay").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("updates value based on user input", () => {
    const event = { target: { name: "pay", value: "1" } };
    wrapper.find("#pay").simulate("change", event);
    expect(wrapper.find("#pay").props().value).toBe("1");
  });
  it("on blur, formats value with commas and decimals if pay is valid", () => {
    const event = { target: { name: "pay", value: "123456" } };
    wrapper.find("#pay").simulate("change", event);
    wrapper.find("#pay").simulate("blur");
    expect(wrapper.find("#pay").props().value).toBe("123,456.00");
  });
});

describe("ShiftForm, Field: Time", () => {
  it("renders", () => {
    expect(wrapper.find(".input-section_time")).toHaveLength(2);
  });
  it("updates start time correctly based on user input", () => {
    wrapper
      .find("#start-time")
      .simulate("change", { target: { name: "startTime", value: "00:24" } });
    expect(wrapper.find("#start-time").props().value).toEqual("00:24");
  });
  it("updates end time correctly based on user input", () => {
    wrapper
      .find("#end-time")
      .simulate("change", { target: { name: "endTime", value: "00:24" } });
    expect(wrapper.find("#end-time").props().value).toEqual("00:24");
  });
});

describe("ShiftForm, Field: Days", () => {
  it("renders", () => {
    expect(wrapper.find(".input-section_days")).toHaveLength(1);
  });
  it("updates value correctly based on user input", () => {
    const event = { target: { name: "monday", checked: true } };
    wrapper.find("#monday").simulate("change", event);
    expect(wrapper.find("#monday").props().checked).toEqual(true);
  });
  it("renders error when user selects one day, then deselects day, leaving no days selected", () => {
    const eventOne = { target: { name: "monday", checked: true } };
    const eventTwo = { target: { name: "monday", checked: false } };
    wrapper.find("#monday").simulate("change", eventOne);
    wrapper.find("#monday").simulate("change", eventTwo);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});
