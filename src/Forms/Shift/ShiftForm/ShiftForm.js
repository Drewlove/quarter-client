import React, { useState, useEffect } from "react";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import ShiftFormDepartment from "../ShiftFormDepartment/ShiftFormDepartment";
import ShiftFormRole from "../ShiftFormRole/ShiftFormRole";
import ShiftFormTime from "../ShiftFormTime/ShiftFormTime";
import ShiftFormPeople from "../ShiftFormPeople/ShiftFormPeople";
import ShiftFormDays from "../ShiftFormDays/ShiftFormDays";
import ShiftFormWage from "../ShiftFormWage/ShiftFormWage";
import { FORMAT_NUM_TO_DOLLARS } from "../../../Utilities/UtilityFunctions";
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
    shift_day: [],
  });

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
    shift_day: "",
  });

  useEffect(() => {
    if (props.id !== "new") {
      setFormData({
        shift_id: props.data[2].shift_id,
        shift_department: props.data[2].shift_department.toString(),
        shift_role: props.data[2].shift_role.toString(),
        people: props.data[2].people,
        wage: props.data[2].wage,
        shift_start: props.data[2].shift_start,
        shift_end: props.data[2].shift_end,
        shift_day: props.data[2].shift_day,
      });
    }
    setDepartments(props.data[0]);
    setRoles(props.data[1]);
  }, [props.data, props.id]);

  const handleChange = (e) => {
    validate(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeWage = (e) => {
    if (formError.wage) validate(e);
    setFormData({ ...formData, wage: e.target.value });
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

  //here
  const handleBlurWage = (e) => {
    const formattedWage = FORMAT_NUM_TO_DOLLARS(e.target.value);
    setFormData({ ...formData, wage: formattedWage });
    let errorMessage = GET_ERROR_MESSAGE("wage", formattedWage);
    setFormError({ ...formError, [e.target.name]: errorMessage });

    // validate(e);
    // return e.target.value !== "" && formError.wage === ""
    //   ? setFormData({
    //       ...formData,
    //       wage: FORMAT_NUM_TO_DOLLARS(e.target.value),
    //     })
    //   : null;
  };

  const validate = (e) => {
    let errorMessage = GET_ERROR_MESSAGE(e.target.name, e.target.value);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const validateDays = (days) => {
    let errorMessage = GET_ERROR_MESSAGE("shift_day", days);
    setFormError({ ...formError, shift_day: errorMessage });
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
      <form className="form form_shift">
        <fieldset className="fieldset_form">
          {props.id !== "new" ? renderDeleteButton() : null}
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
            formData={{ ...formData, wage: formData.wage.replace(",", "") }}
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
