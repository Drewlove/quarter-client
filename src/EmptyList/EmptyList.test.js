import React from "react";
import EmptyList from "./EmptyList";
import { MemoryRouter } from "react-router-dom";

import { shallow, mount } from "enzyme";

describe("EmptyList", () => {
  it("renders", () => {
    const wrapper = mount(
      <MemoryRouter>
        <EmptyList name="test" url="/test" />
      </MemoryRouter>
    );
    expect(wrapper.find(".empty-list")).toHaveLength(1);
  });
  it("displays text accurately", () => {
    const wrapper = mount(
      <MemoryRouter>
        <EmptyList name="test" url="/test" />
      </MemoryRouter>
    );
    expect(wrapper.find(".empty-list__text").text()).toEqual("No tests found.");
  });
  it("displays link text accurately", () => {
    const wrapper = mount(
      <MemoryRouter>
        <EmptyList name="test" url="/test" />
      </MemoryRouter>
    );
    expect(wrapper.find("a").text()).toEqual("Add Test");
  });
  it("generates correct href", () => {
    const wrapper = mount(
      <MemoryRouter>
        <EmptyList name="test" url="/test" />
      </MemoryRouter>
    );
    expect(wrapper.find("a").props().href).toBe("/test");
  });
});
