import React from "react";
import CellBlank from "./CellBlank";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

describe("CellBlank", () => {
  it("renders", () => {
    const wrapper = mount(
      <MemoryRouter>
        <CellBlank />
      </MemoryRouter>
    );
    expect(wrapper.find(".schedule-row__cell_blank")).toHaveLength(1);
  });
});
