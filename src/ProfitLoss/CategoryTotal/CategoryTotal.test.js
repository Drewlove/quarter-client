import React from "react";
import { shallow, mount } from "enzyme";
import CategoryTotal from "./CategoryTotal";

describe("CategoryTotal", () => {
  it("Renders", () => {
    const wrapper = shallow(<CategoryTotal name="sales" />);
    expect(wrapper.find(".fieldset__item-text")).toHaveLength(1);
  });
  it("Renders the name", () => {
    const wrapper = shallow(<CategoryTotal name="sales" />);
    expect(wrapper.find(".fieldset__item-text").text()).toBe("sales");
  });
  it("Has the className that was passed to it", () => {
    const wrapper = shallow(
      <CategoryTotal name="sales" class="fieldset__item-container_kpi" />
    );
    expect(wrapper.find(".fieldset__item-container_kpi")).toHaveLength(1);
  });
});
