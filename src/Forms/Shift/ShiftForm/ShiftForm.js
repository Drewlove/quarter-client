import React, { useState, useEffect } from "react";
import { GET_ERROR_MESSAGE } from "../../ValidateForm/GET_ERROR_MESSAGE";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import ShiftFormDepartment from "../ShiftFormDepartment/ShiftFormDepartment";
import ShiftFormRole from "../ShiftFormRole/ShiftFormRole";
import ShiftFormTime from "../ShiftFormTime/ShiftFormTime";
import ShiftFormPeople from "../ShiftFormPeople/ShiftFormPeople";
import ShiftFormDays from "../ShiftFormDays/ShiftFormDays";
import ShiftFormWage from "../ShiftFormWage/ShiftFormWage";
import { FormatNumToDollars } from "../../../Utilities/UtilityFunctions";

function ShiftForm(props) {
  const [formData, setFormData] = useState({
    shift_id: "",
    shift_department: "",
    shift_role: "",
    people: "",
    wage: "",
    shift_start: "",
    shift_end: "",
    shift_day: [],
  });

  const [roles, setRoles] = useState([]);

  const [formError, setFormError] = useState({
    shift_id: "",
    shift_department: "",
    shift_role: "",
    people: "",
    wage: "",
    shift_start: "",
    shift_end: "",
    shift_day: "",
  });

  useEffect(() => {
    if (props.id !== "new") {
      setFormData({
        shift_id: props.data[1].shift_id,
        shift_department: props.data[1].shift_department.toString(),
        shift_role: props.data[1].shift_role.toString(),
        people: props.data[1].people,
        wage: props.data[1].wage,
        shift_start: props.data[1].shift_start,
        shift_end: props.data[1].shift_end,
        shift_day: props.data[1].shift_day,
      });
    }
    setRoles(props.data[0]);
  }, [props.data, props.id]);

  const handleChange = (e) => {
    validate(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeWage = (e) => {
    if (/^[0-9,.]*$/.test(e.target.value)) {
      validate(e);
      setFormData({ ...formData, wage: e.target.value });
    }
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
    validate(e);
    return e.target.value !== "" && formError.wage === ""
      ? setFormData({ ...formData, wage: FormatNumToDollars(e.target.value) })
      : null;
  };

  const validate = (e) => {
    let errorMessage = GET_ERROR_MESSAGE(e.target.name, e.target.value);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const validateDays = (days) => {
    let errorMessage = GET_ERROR_MESSAGE("shift_day", days);
    console.log(errorMessage);
    setFormError({ ...formError, shift_day: errorMessage });
  };

  const getDepartments = () => {
    const departments = {};
    if (roles.length === 0) {
      return departments;
    } else {
      roles.forEach((role) => {
        if (!departments[role.department_name])
          departments[role.department_name] = role.department_id;
      });
    }
    return departments;
  };

  const renderDeleteButton = () => {
    return (
      <FormDeleteButton
        endpointSuffix="shifts"
        id={props.id}
        redirectSuffix="schedule"
      />
    );
  };

  return (
    <main className="main">
      <form className="form">
        <fieldset className="fieldset_form">
          {props.id !== "new" ? renderDeleteButton() : null}
          <ShiftFormDepartment
            handleChange={(e) => handleChange(e)}
            value={formData.shift_department}
            departments={getDepartments()}
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

          <ShiftFormTime
            handleChange={(e) => handleChange(e)}
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
            formData={formData}
            formName="shift"
            endpointSuffix="shifts"
            redirectSuffix="schedule"
            id={props.id}
            setFormError={setFormError}
          />
        </fieldset>
      </form>
    </main>
  );
}

export default ShiftForm;
