import React from "react";
import ShiftFormDays from "./ShiftFormDays";
import { mount } from "enzyme";

const handleChangeDay = (e) => {
  const dayStatus = days[e.target.name];
  setDays({ ...days, [e.target.name]: !dayStatus });
  validateDaysInput(e);
};

describe("ShiftFormDays", () => {
  it("renders", () => {
    const wrapper = mount(
      <ShiftFormDays
        error=""
        days={{
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        }}
        handleChangeDay={(e) => handleChangeDay(e)}
      />
    );
    expect(wrapper.find(".input-section_days")).toHaveLength(1);
  });

  it("renders error message if there is an error", () => {
    const wrapper = mount(
      <ShiftFormDays
        error="Error message here"
        days={{
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        }}
        handleChangeDay={(e) => handleChangeDay(e)}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });

  it("renders NO error message if there is NO error", () => {
    const wrapper = mount(
      <ShiftFormDays
        error=""
        days={{
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        }}
        handleChangeDay={(e) => handleChangeDay(e)}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });

  it("Displays box as checked if it is marked as true", () => {
    const wrapper = mount(
      <ShiftFormDays
        error=""
        days={{
          monday: true,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        }}
        handleChangeDay={(e) => handleChangeDay(e)}
      />
    );
    expect(wrapper.find("#monday").prop("checked")).toBe(true);
  });
});
