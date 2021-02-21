import React from "react";
import LineItemAmount from "./LineItemAmount";
import { shallow, mount } from "enzyme";

describe("LineItemAmount", () => {
  it("renders", () => {
    let wrapper = shallow(
      <LineItemAmount amount={"123456.78"} numberSymbol="$" />
    );
    expect(wrapper.find(".fieldset__amount-container")).toHaveLength(1);
  });
  it("renders dollar amount with dollar sign and commmas", () => {
    let wrapper = shallow(
      <LineItemAmount amount={"123456.78"} numberSymbol="$" />
    );
    expect(wrapper.find(".fieldset__amount").at(0).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(1).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(2).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(3).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(4).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(5).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(6).text()).toBe("2");
    expect(wrapper.find(".fieldset__amount").at(7).text()).toBe("3");
    expect(wrapper.find(".fieldset__amount").at(8).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(9).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(10).text()).toBe("5");
    expect(wrapper.find(".fieldset__amount").at(11).text()).toBe("6");
    expect(wrapper.find(".fieldset__amount").at(12).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(13).text()).toBe("7");
    expect(wrapper.find(".fieldset__amount").at(14).text()).toBe("8");
  });
  it("renders percentage amount with percentage sign", () => {
    let wrapper = shallow(<LineItemAmount amount={"23.70"} numberSymbol="%" />);
    expect(wrapper.find(".fieldset__amount").at(0).text()).toBe("%");
    expect(wrapper.find(".fieldset__amount").at(1).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(2).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(3).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(4).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(5).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(6).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(7).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(8).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(9).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(10).text()).toBe("2");
    expect(wrapper.find(".fieldset__amount").at(11).text()).toBe("3");
    expect(wrapper.find(".fieldset__amount").at(12).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(13).text()).toBe("7");
    expect(wrapper.find(".fieldset__amount").at(14).text()).toBe("0");
  });
});
