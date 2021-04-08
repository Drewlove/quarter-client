import React, { useState, useEffect } from "react";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import ShiftFormDepartment from "../ShiftFormDepartment/ShiftFormDepartment";
import ShiftFormRole from "../ShiftFormRole/ShiftFormRole";
import ShiftFormPeople from "../ShiftFormPeople/ShiftFormPeople";
import ShiftFormWage from "../ShiftFormWage/ShiftFormWage";
import ShiftFormPayrollTax from "../ShiftFormPayrollTax/ShiftFormPayrollTax";
import ShiftFormTime from "../ShiftFormTime/ShiftFormTime";
import ShiftFormDays from "../ShiftFormDays/ShiftFormDays";
import { SUM_WEEKLY_SHIFT_TOTAL } from "../../../Utilities/UtilityFunctions";
import { FORMAT_NUM } from "../../../Utilities/UtilityFunctions";
import { GET_ERROR_MESSAGE } from "../../ValidateForm/GET_ERROR_MESSAGE";

function ShiftForm(props) {
  const [formData, setFormData] = useState({
    shift_id: "",
    shift_department: "",
    shift_role: "",
    people: "",
    wage: "",
    shift_start: "",
    shift_end: "",
    payroll_tax: "",
    shift_day: [],
  });

  const [timePeriod, setTimePeriod] = useState("quarter");

  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [formError, setFormError] = useState({
    shift_id: "",
    shift_department: "",
    shift_role: "",
    people: "",
    wage: "",
    shift_start: "",
    shift_end: "",
    payroll_tax: "",
    shift_day: "",
  });

  useEffect(() => {
    if (props.rowId !== "new") {
      setFormData({
        shift_id: props.data[2].shift_id,
        shift_department: props.data[2].shift_department.toString(),
        shift_role: props.data[2].shift_role.toString(),
        people: props.data[2].people,
        wage: props.data[2].wage,
        shift_start: props.data[2].shift_start,
        shift_end: props.data[2].shift_end,
        payroll_tax: props.data[2].payroll_tax,
        shift_day: props.data[2].shift_day,
      });
    }
    setDepartments(props.data[0]);
    setRoles(props.data[1]);
  }, [props.data, props.rowId]);

  const handleChange = (e) => {
    validate(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeWage = (e) => {
    if (formError.wage) validate(e);
    setFormData({ ...formData, wage: e.target.value });
  };

  const handleChangePayrollTax = (e) => {
    if (Number(e.target.value) <= 100 && Number(e.target.value) >= 0)
      setFormData({ ...formData, payroll_tax: e.target.value });
  };

  const handleChangeShiftStart = (e) => {
    handleChange(e);
    if (formData.shift_end !== "")
      validateShiftEnd(e.target.value, formData.shift_end);
  };

  const validateShiftEnd = (shiftStartVal, shiftEndVal) => {
    let errorShiftEnd = GET_ERROR_MESSAGE(
      "shift_end",
      shiftStartVal,
      shiftEndVal
    );
    setFormError({
      ...formError,
      shift_end: errorShiftEnd,
    });
  };

  const handleChangeShiftEnd = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateShiftEnd(formData.shift_start, e.target.value);
  };

  const handleChangeDay = (e) => {
    let dayVal = parseInt(e.target.value);
    let days = [...formData.shift_day];
    const dayIndex = formData.shift_day.indexOf(dayVal);
    dayIndex >= 0 ? days.splice(dayIndex, 1) : days.push(dayVal);
    validateDays(days);
    setFormData({ ...formData, shift_day: days });
  };

  const handleBlur = (e) => {
    validate(e);
  };

  const handleBlurWage = (e) => {
    const formattedWage = FORMAT_NUM(e.target.value);
    setFormData({ ...formData, wage: formattedWage });
    let errorMessage = GET_ERROR_MESSAGE("wage", formattedWage);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const handleBlurPayrollTax = (e) => {
    const formattedPayrollTax = FORMAT_NUM(e.target.value);
    setFormData({ ...formData, payroll_tax: formattedPayrollTax });
    let errorMessage = GET_ERROR_MESSAGE("payroll_tax", formattedPayrollTax);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const validate = (e) => {
    let errorMessage = GET_ERROR_MESSAGE(e.target.name, e.target.value);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const handleBlurShiftEnd = (e) => {
    validateShiftEnd(formData.shift_start, formData.shift_end);
  };

  const validateDays = (days) => {
    let errorMessage = GET_ERROR_MESSAGE("shift_day", days);
    setFormError({ ...formError, shift_day: errorMessage });
  };

  const getWeeklyTotal = () => {
    const multiplier = timePeriod === "quarter" ? 13 : 1;
    let sum = SUM_WEEKLY_SHIFT_TOTAL(formData) * multiplier;
    return Number(sum).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const renderDeleteButton = () => {
    return (
      <FormDeleteButton
        endpointSuffix="shifts"
        rowId={props.rowId}
        redirectSuffix="app/schedule"
      />
    );
  };

  const toggleTimePeriod = (e) => {
    e.preventDefault();
    const newTimePeriod = timePeriod === "week" ? "quarter" : "week";
    setTimePeriod(newTimePeriod);
  };

  const handleMouseLeave = (e) => {
    document.activeElement.blur();
  };

  const timePeriodName = timePeriod === "week" ? "Weekly" : "Quarterly";

  return (
    <main className="main">
      <form className="form form_shift">
        <fieldset className="fieldset fieldset_form">
          {props.rowId !== "new" ? renderDeleteButton() : null}
          <section className="form-section__shift-total">
            <button
              onClick={(e) => toggleTimePeriod(e)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <div>
                <p className="form-section__shift-total-text">
                  {timePeriodName} Total: ${getWeeklyTotal()}
                </p>
              </div>
            </button>
          </section>
          <ShiftFormDepartment
            handleChange={(e) => handleChange(e)}
            value={formData.shift_department}
            departments={departments}
            formError={formError.shift_department}
          />
          <ShiftFormRole
            handleChange={(e) => handleChange(e)}
            roles={roles}
            departmentId={formData.shift_department}
            value={formData.shift_role}
            formError={formError.shift_role}
          />
          <ShiftFormPeople
            handleChange={(e) => handleChange(e)}
            value={formData.people}
            formError={formError.people}
            handleBlur={handleBlur}
          />

          <ShiftFormWage
            handleChangeWage={(e) => handleChangeWage(e)}
            value={formData.wage}
            formError={formError.wage}
            handleBlurWage={handleBlurWage}
          />

          <ShiftFormPayrollTax
            handleChangePayrollTax={(e) => handleChangePayrollTax(e)}
            value={formData.payroll_tax}
            formError={formError.payroll_tax}
            handleBlurPayrollTax={handleBlurPayrollTax}
          />

          <ShiftFormTime
            handleChangeShiftStart={(e) => handleChangeShiftStart(e)}
            handleChangeShiftEnd={(e) => handleChangeShiftEnd(e)}
            handleBlurShiftEnd={(e) => handleBlurShiftEnd(e)}
            handleBlur={(e) => handleBlur(e)}
            startTime={formData.shift_start}
            endTime={formData.shift_end}
            formErrorStart={formError.shift_start}
            formErrorEnd={formError.shift_end}
          />
          <ShiftFormDays
            days={formData.shift_day}
            handleChangeDay={(e) => handleChangeDay(e)}
            formError={formError.shift_day}
          />
          <FormSaveButton
            formData={{ ...formData, wage: formData.wage.replace(",", "") }}
            formName="shift"
            endpointSuffix="shifts"
            redirectSuffix="app/schedule"
            rowId={props.rowId}
            setFormError={setFormError}
          />
        </fieldset>
      </form>
    </main>
  );
}

export default ShiftForm;
