import React from "react";
import { shallow, mount } from "enzyme";
import KpiTotal from "./KpiTotal";

describe("CategoryTotal", () => {
  it("Renders", () => {
    const wrapper = shallow(<KpiTotal name="Gross Profit" />);
    expect(wrapper.find(".fieldset_pl-kpi")).toHaveLength(1);
  });
  it("Renders the name", () => {
    const wrapper = shallow(<KpiTotal name="Gross Profit" />);
    expect(wrapper.find(".fieldset__header").text()).toBe("Gross Profit");
  });
});
