import React from "react";
import { shallow, mount } from "enzyme";
import CogsForm from "./CogsForm";

const salesCategories = ["food", "beverage", "other"];

describe("CogsForm", () => {
  it("renders", () => {
    shallow(<CogsForm />);
  });

  it("renders a drop down with all categories", () => {
    const wrapper = mount(<CogsForm salesCategores={salesCategories} />);
    expect(wrapper.find("#category").children()).toHaveLength(
      salesCategories.length
    );
  });
  it("displays new category when user selects new category", () => {
    const wrapper = mount(<CogsForm />);
    wrapper.find("#category").instance().value = "food";
    expect(wrapper.find("#category").instance().value).toEqual("food");
  });
  it("displays amount when user enters amount", () => {
    const wrapper = mount(<CogsForm />);
    wrapper.find("#amount").instance().value = "123";
    expect(wrapper.find("#amount").instance().value).toEqual("123");
  });
  it("there are two inputs for amountType", () => {
    const wrapper = mount(<CogsForm />);
    const radioButtons = wrapper.find({ name: "amountType" });
    expect(radioButtons).toHaveLength(2);
  });
  it('changes checked status of amountType based on user click', () => {
      const wrapper = mount(<CogsForm />); 
      const radioButtonDollars = wrapper.find('#dollars');
      radioButtonDollars.getDOMNode().dispatchEvent(new Event('click'));
      expect(radioButtonDollars.getDOMNode().checked).toEqual(true);
  })
});
