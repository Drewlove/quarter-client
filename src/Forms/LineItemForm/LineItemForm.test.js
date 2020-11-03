import React from "react";
import { shallow, mount } from "enzyme";
import LineItemForm from "./LineItemForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "sales",
  }),
}));

describe("LineItemForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemForm />);
  });

  it("renders", () => {
    shallow(<LineItemForm />);
  });

  it("renders two inputs", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("correctly updates the value on select", () => {
    const event = { target: { name: "category", value: "sales" } };
    wrapper.find("#category").simulate("change", event);
    expect(wrapper.find("#category").props().value).toEqual("sales");
  });
  
  it("renders radio button container if category is COGS", () => {
    const event = { target: { name: "category", value: "cogs" } };
    wrapper.find("#category").simulate("change", event);  
    expect(wrapper.find('.input-container__radio')).toHaveLength(1) 
  });

  it("it renders 'Percent Of' drop down if amountType 'percent' is selected", () => {
    const eventCogs = { target: { name: "category", value: "cogs" } };
    const eventPercentage = { target: { name: "amountType", value: "percentage" } };
    wrapper.find("#category").simulate("change", eventCogs); 
    wrapper.find("#percentage").simulate("change", eventPercentage); 
    expect(wrapper.find('#percentage').prop('checked')).toBe(true)
  }); 
});
