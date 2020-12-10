import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { GetErrorMessage } from "./Utilities";
import FormDeleteButton from "../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import FormSaveButton from "../CommonFormComponents/FormSaveButton/FormSaveButton";
// import FormSelect from "../CommonFormComponents/FormSelect/FormSelect";
import ShiftFormDepartment from "./ShiftFormDepartment";
import ShiftFormRole from "./ShiftFormRole";
import ShiftFormTime from "./ShiftFormTime";
import ShiftFormPeople from "./ShiftFormPeople";
import ShiftFormDays from "./ShiftFormDays";
import ShiftFormPay from "./ShiftFormPay";

function ShiftForm() {
  const [input, setInput] = useState({
    people: "",
    pay: "",
    startTime: "",
    endTime: "",
    department: "",
    role: "",
    // daysChecked: [],
  });

  const [days, setDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const [error, setError] = useState({
    department: "",
    role: "",
    people: "",
    pay: "",
    errorStart: "",
    errorEnd: "",
    days: "",
  });

  // //should be useState({} ? )
  const [roles, setRoles] = useState([]);

  const departments = ["kitchen", "service", "bake off"];
  const departmentRoles = {
    kitchen: ["chef", "sous chef"],
    service: ["cashier", "line", "expo"],
    bagels: ["starters", "dough", "production"],
  };

  const updateRoles = () => {
    let updatedRoles = departmentRoles[input.department];
    setRoles(updatedRoles);
    setInput({ ...input, role: "" });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    validateInput(e);
  };

  const handleChangeDay = (e) => {
    const dayStatus = days[e.target.name];
    setDays({ ...days, [e.target.name]: !dayStatus });
    validateDaysInput(e);
  };

  useEffect(() => {
    updateRoles();
  }, [input.department]);

  const handleBlur = (e) => {
    validateInput(e);
  };

  const validateInput = (e) => {
    let errorMessage = GetErrorMessage(e.target.name, e.target.value);
    setError({ ...error, [e.target.name]: errorMessage });
  };

  const validateDaysInput = (e) => {
    let numDaysChecked = getNumDaysChecked();
    if (e.target.checked === true || numDaysChecked > 1) {
      setError({ ...error, days: "" });
    } else if (numDaysChecked === 1 && e.target.checked === false) {
      setError({
        ...error,
        days: "Select at least one day.",
      });
    }
  };

  const getNumDaysChecked = () => {
    let numDaysChecked = 0;
    for (let [day, boolean] of Object.entries(days)) {
      if (boolean === true) numDaysChecked++;
    }
    return numDaysChecked;
  };

  const handleDelete = () => {};

  const handleSave = (e) => {
    e.preventDefault();
    validateAllInputs();
  };

  const validateAllInputs = () => {
    let errors = {
      days: GetErrorMessage("days", days),
    };

    Object.keys(input).forEach((key) => {
      errors[key] = GetErrorMessage(key, input[key]);
    });

    setError(errors);
  };

  return (
    <main className="main">
      <form className="form">
        <fieldset className="fieldset_form">
          <FormDeleteButton handleDelete={handleDelete} />
          <ShiftFormDepartment
            handleChange={(e) => handleChange(e)}
            value={input.department}
            options={departments}
            error={error.department}
            optionalClass={"input-section_shift"}
          />
          <ShiftFormRole
            handleChange={(e) => handleChange(e)}
            value={input.role}
            options={roles}
            error={error.role}
            optionalClass={"input-section_shift"}
          />
          <ShiftFormPeople
            handleChange={(e) => handleChange(e)}
            value={input.people}
            error={error.people}
            handleBlur={handleBlur}
          />
          <ShiftFormPay
            handleChange={(e) => handleChange(e)}
            value={input.pay}
            error={error.pay}
            handleBlur={handleBlur}
          />
          <ShiftFormTime
            handleChange={(e) => handleChange(e)}
            startTime={input.startTime}
            endTime={input.endTime}
            errorStart={error.startTime}
            errorEnd={error.endTime}
          />
          <ShiftFormDays
            days={days}
            handleChangeDay={(e) => handleChangeDay(e)}
            error={error.days}
          />

          <FormSaveButton handleSave={handleSave} />
        </fieldset>
      </form>
    </main>
  );
}

export default ShiftForm;
