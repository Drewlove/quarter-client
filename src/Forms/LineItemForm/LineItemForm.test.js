import React from "react";
import Enzyme from "enzyme";
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
    wrapper = Enzyme.mount(<LineItemForm />);
  });

  it("renders", () => {
    shallow(<LineItemForm />);
  });

  it("renders two inputs", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });
  it("correctly updates the value on select", () => {
    const categoryDropDown = wrapper.find("#category");
    const event = { target: { name: "category", value: "sales" } };
    categoryDropDown.simulate("change", event);
    expect(wrapper.find("#category").props().value).toEqual("sales");
  });
  it("renders radio button container if category is COGS", () => {
    const categoryDropDown = wrapper.find("#category");
    const event = { target: { name: "category", value: "cogs" } };
    categoryDropDown.simulate("change", event);  
    expect(wrapper.find('.input-container__radio')).toHaveLength(1) 
  });
});
