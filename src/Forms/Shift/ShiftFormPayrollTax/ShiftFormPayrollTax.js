import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormPayrollTax(props) {
  return (
    <section className="input-section input-section_payroll-tax">
      <label className="input-section__label" htmlFor="payroll_tax">
        Payroll Tax (%)
      </label>
      <div className="input-section__input-container">
        <input
          className="input-section__input input-section__input_payroll-tax"
          type="text"
          id="payroll_tax"
          placeholder="Payroll Tax"
          name="payroll_tax"
          value={props.value}
          onChange={props.handleChangePayrollTax}
          onBlur={props.handleBlurPayrollTax}
        />
        {props.formError ? <FormError message={props.formError} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormPayrollTax;
