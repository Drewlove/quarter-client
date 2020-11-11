import React from "react";
import { shallow, mount } from "enzyme";
import LineItemForm from "./LineItemForm";

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
    expect(wrapper.find('.input-section__input_radio')).toHaveLength(1) 
  });

  it("it renders 'Percent Of' drop down if amountType 'percent' is selected", () => {
    const eventCogs = { target: { name: "category", value: "cogs" } };
    const eventPercentage = { target: { name: "amountType", value: "percentage" } };
    wrapper.find("#category").simulate("change", eventCogs); 
    wrapper.find("#percentage").simulate("change", eventPercentage); 
    expect(wrapper.find('#percentage').prop('checked')).toBe(true)
  }); 
  it('renders error component onBlur when input is empty', ()=> {
    wrapper.find('#name').simulate('blur'); 
    expect(wrapper.find('.form-error')).toHaveLength(1); 
  })
  it('renders error component on change when input has a blank value', () => {
    const eventLineItemNoValue = {target: {name: 'name', value: ''}}; 
    wrapper.find('#name').simulate('change', eventLineItemNoValue);
    expect(wrapper.find('.form-error')).toHaveLength(1); 
  })
  it('renders error component after clicking save, and no input values are present', () => {
    wrapper.find('#button-save').simulate('click'); 
    expect(wrapper.find('.form-error')).toHaveLength(3)
  })
  it("renders no error if amount contains only number and valid decimal", () => {
    const eventValidChange = { target: { name: "amount", value: "123.45" } };
    wrapper.find("#amount").simulate("change", eventValidChange);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
  it("renders error if amount contains letters", () => {
    const eventAmountLetters = { target: { name: "amount", value: "abc" } };
    wrapper.find("#amount").simulate("change", eventAmountLetters);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("reformats number on blur: rounds decimal places, removes excessive commas, inserts necessary commas", () => {
    const eventAmountLetters = {
      target: { name: "amount", value: "1,2,3,4,5.567" },
    };
    wrapper.find("#amount").simulate("change", eventAmountLetters);
    wrapper.find("#amount").simulate("blur");
    expect(wrapper.find("#amount").props().value).toEqual("12,345.57");
  });
});
