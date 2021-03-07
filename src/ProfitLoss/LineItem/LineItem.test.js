import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import LineItem from "./LineItem";

describe("LineItem", () => {
  it("renders", () => {
    const wrapper = shallow(
      <LineItem
        category="cogs"
        name="food"
        amount={200}
        id={1}
        number_symbol="$"
      />
    );
    expect(wrapper.find(".fieldset__item-container_line-item")).toHaveLength(1);
  });
  it("renders the name", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LineItem
          category="cogs"
          name="food"
          amount={200}
          id={1}
          number_symbol="$"
        />
      </BrowserRouter>
    );
    expect(wrapper.find(".fieldset__item-text").text()).toBe("food");
  });
  it("formats link correctly when line_item_category prop does NOT equal direct_labor", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LineItem
          category="cogs"
          name="food"
          amount={200}
          id={1}
          number_symbol="$"
        />
      </BrowserRouter>
    );
    expect(wrapper.find("a").prop("href")).toEqual("/app/form/line-item/1");
  });
  it("formats link correctly when line_item_category prop does equal direct_labor", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LineItem
          category="direct_labor"
          name="kitchen"
          amount={200}
          id={2}
          number_symbol="$"
        />
      </BrowserRouter>
    );
    expect(wrapper.find("a").prop("href")).toEqual("/app/schedule");
  });
});
