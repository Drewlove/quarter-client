import React from "react";
import ShiftFormPayrollTax from "./ShiftFormPayrollTax";
import { mount } from "enzyme";

describe("ShiftFormPayrollTax", () => {
  it("Renders", () => {
    const wrapper = mount(
      <ShiftFormPayrollTax error="" handleChangePayrollTax={() => null} />
    );
    expect(wrapper.find(".input-section_payroll-tax")).toHaveLength(1);
  });
  it("Renders the value correctly", () => {
    const wrapper = mount(
      <ShiftFormPayrollTax value="7.65" handleChangePayrollTax={() => null} />
    );
    expect(
      wrapper.find(".input-section__input_payroll-tax").props().value
    ).toBe("7.65");
  });
  it("Renders error message if there is an error", () => {
    const wrapper = mount(
      <ShiftFormPayrollTax
        formError="Error"
        handleChangePayrollTax={() => null}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders NO error message if there is NO error", () => {
    const wrapper = mount(
      <ShiftFormPayrollTax formError="" handleChangePayrollTax={() => null} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
