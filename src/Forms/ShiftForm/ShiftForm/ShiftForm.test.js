import React from "react";
import ShiftForm from "./ShiftForm";
import { shallow, mount } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = mount(<ShiftForm />);
});

describe("ShiftForm", () => {
  it("renders", () => {
    wrapper;
  });
  it("renders correct number of input sections", () => {
    expect(wrapper.find(".input-section")).toHaveLength(7);
  });
});

describe("ShiftForm --> ShiftFormDays", () => {
  it("renders ShiftFormDays", () => {
    expect(wrapper.find(".input-section_days")).toHaveLength(1);
  });
  it("reflects user input for ShiftFormDays", () => {
    const event = { target: { name: "monday", checked: true } };
    wrapper.find("#monday").simulate("change", event);
    expect(wrapper.find("#monday").props().checked).toEqual(true);
  });
  it("If save button is clicked and fields are empty, then display errors for every field", () => {
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error")).toHaveLength(7);
  });
});

describe("ShiftForm --> ShiftFormDepartment", () => {
  it("renders ShiftFormDepartment", () => {
    expect(wrapper.find(".input-section_department")).toHaveLength(1);
  });
  it("reflects user input for ShiftFormDepartment", () => {
    const event = { target: { name: "department", value: "service" } };
    wrapper.find("#department").simulate("change", event);
    expect(wrapper.find("#department").props().value).toEqual("service");
  });
});

describe("ShiftForm --> ShiftFormPay", () => {
  it("renders ShiftFormPay", () => {
    expect(wrapper.find(".input-section_pay")).toHaveLength(1);
  });
  it("reflects user input for ShiftFormPay", () => {
    const event = { target: { name: "pay", value: "1.00" } };
    wrapper.find("#pay").simulate("change", event);
    expect(wrapper.find("#pay").props().value).toEqual("1.00");
  });
  it("displays error for ShiftFormPay if number has values in the hundreds place", () => {
    const event = { target: { name: "pay", value: "1.123" } };
    wrapper.find("#pay").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});

describe("ShiftForm --> ShiftFormPeople", () => {
  it("renders ShiftFormPeople", () => {
    expect(wrapper.find(".input-section_people")).toHaveLength(1);
  });
  it("reflects user input for ShiftFormPeople", () => {
    const event = { target: { name: "people", value: "1" } };
    wrapper.find("#people").simulate("change", event);
    expect(wrapper.find("#people").props().value).toEqual("1");
  });
  it("displays error for ShiftFormPeople if number is a decimal number", () => {
    const event = { target: { name: "people", value: "1.1" } };
    wrapper.find("#people").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});

describe("ShiftForm --> ShiftFormRole", () => {
  it("renders ShiftFormRole", () => {
    const wrapper = mount(<ShiftForm />);
    expect(wrapper.find(".input-section_role")).toHaveLength(1);
  });
  it("reflects user input for ShiftFormRole", () => {
    const event = { target: { name: "role", value: "server" } };
    wrapper.find("#role").simulate("change", event);
    expect(wrapper.find("#role").props().value).toEqual("server");
  });
});

describe("ShiftForm --> ShiftFormPay", () => {
  it("renders ShiftFormTime", () => {
    expect(wrapper.find(".input-section_time")).toHaveLength(1);
  });
  it("reflects user input for ShiftFormTime, start time", () => {
    const event = { target: { name: "startTime", value: "13:30" } };
    wrapper.find("#start-time").simulate("change", event);
    expect(wrapper.find("#start-time").props().value).toEqual("13:30");
  });
  it("reflects user input for ShiftFormTime, end time", () => {
    const event = { target: { name: "endTime", value: "13:30" } };
    wrapper.find("#end-time").simulate("change", event);
    expect(wrapper.find("#end-time").props().value).toEqual("13:30");
  });
});
