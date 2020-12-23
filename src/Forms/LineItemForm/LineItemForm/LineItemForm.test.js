import React from "react";
import { shallow, mount } from "enzyme";
import LineItemForm from "./LineItemForm";

describe("LineItemForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemForm />);
  });

  it("renders", () => {
    expect(wrapper.find(".fieldset_form")).toHaveLength(1);
  });
  it("renders four inputs", () => {
    expect(wrapper.find("input")).toHaveLength(4);
  });
  it("if user clicks save, and amount type is set to 'dollars', and all fields are empty, renders three errors", () => {
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error")).toHaveLength(3);
  });
  it("if user clicks save, and amount type is set to 'percent of', and all fields are empty, renders four errors", () => {
    wrapper.find("#percentage").simulate("change", {
      target: { name: "amountType", value: "percentage" },
    });
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error")).toHaveLength(4);
  });
});

describe("LineItemForm, Field: Category", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemForm />);
  });

  it("renders", () => {
    expect(wrapper.find("#category")).toHaveLength(1);
  });
  it("updates value correctly based on user input", () => {
    const event = { target: { name: "category", value: "sales" } };
    wrapper.find("#category").simulate("change", event);
    expect(wrapper.find("#category").props().value).toBe("sales");
  });
});

describe("LineItemForm, Field: Name", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemForm />);
  });

  it("renders", () => {
    expect(wrapper.find("#name")).toHaveLength(1);
  });
  it("renders error when user inputs empty value", () => {
    const event = { target: { name: "name", value: "" } };
    wrapper.find("#name").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("updates value correctly based on user input", () => {
    const event = { target: { name: "name", value: "utilities" } };
    wrapper.find("#name").simulate("change", event);
    expect(wrapper.find("#name").props().value).toBe("utilities");
  });
});

describe("LineItemForm, Field: Amount", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemForm />);
  });

  it("renders", () => {
    expect(wrapper.find("#name")).toHaveLength(1);
  });
  it("renders error when user inputs empty value", () => {
    const event = { target: { name: "amount", value: "" } };
    wrapper.find("#amount").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders error if amount is negative", () => {
    const event = { target: { name: "amount", value: "-1" } };
    wrapper.find("#amount").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders error if more than 2 numbers appear after decimal place", () => {
    const event = { target: { name: "amount", value: "1.000" } };
    wrapper.find("#amount").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("updates value based on user input", () => {
    const event = { target: { name: "amount", value: "1" } };
    wrapper.find("#amount").simulate("change", event);
    expect(wrapper.find("#amount").props().value).toBe("1");
  });
  it("on blur, formats value with commas and decimals if amount is valid", () => {
    const event = { target: { name: "amount", value: "123456" } };
    wrapper.find("#amount").simulate("change", event);
    wrapper.find("#amount").simulate("blur");
    expect(wrapper.find("#amount").props().value).toBe("123,456.00");
  });
});

describe("LineItemForm, Field: Amount Type", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemForm />);
  });

  it("renders", () => {
    expect(wrapper.find(".input-section_amount-type")).toHaveLength(1);
  });
  it("since default is set to 'dollars', the 'percent of' field does NOT render", () => {
    wrapper.find("#dollars").simulate("click");
    expect(wrapper.find("#percentOf")).toHaveLength(0);
  });
  it("if user clicks on percentage, updates value to 'percentage' ", () => {
    wrapper.find("#percentage").simulate("change", {
      target: { name: "amountType", value: "percentage" },
    });
    expect(wrapper.find("#percentage").props().checked).toEqual(true);
  });
  it("if user clicks on percentage, the 'percent of' field DOES render", () => {
    wrapper.find("#percentage").simulate("change", {
      target: { name: "amountType", value: "percentage" },
    });
    expect(wrapper.find("#percentOf")).toHaveLength(1);
  });
});

describe("LineItemForm, Field: Percent Of", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LineItemForm />);
  });

  it("renders", () => {
    wrapper.find("#percentage").simulate("change", {
      target: { name: "amountType", value: "percentage" },
    });
    expect(wrapper.find("#percentOf")).toHaveLength(1);
  });
  it("updates value correctly based on user input", () => {
    wrapper.find("#percentage").simulate("change", {
      target: { name: "amountType", value: "percentage" },
    });
    wrapper
      .find("#percentOf")
      .simulate("change", { target: { name: "percentOf", value: "beverage" } });
    expect(wrapper.find("#percentOf").props().value).toBe("beverage");
  });
});
