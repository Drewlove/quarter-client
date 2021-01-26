import React, { useState, useEffect } from "react";
import { GetErrorMessage } from "../../ShiftFormErrors";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import ShiftFormDepartment from "../ShiftFormDepartment/ShiftFormDepartment";
import ShiftFormRole from "../ShiftFormRole/ShiftFormRole";
import ShiftFormTime from "../ShiftFormTime/ShiftFormTime";
import ShiftFormPeople from "../ShiftFormPeople/ShiftFormPeople";
import ShiftFormDays from "../ShiftFormDays/ShiftFormDays";
import ShiftFormPay from "../ShiftFormPay/ShiftFormPay";
import { FormatNumToDollars } from "../../../Utilities/UtilityFunctions";

function ShiftForm(props) {
  const [input, setInput] = useState({
    people: "",
    pay: "",
    startTime: "",
    endTime: "",
    department: "",
    role: "",
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

  useEffect(() => {
    console.log(props.data);
  }, []);

  // const departments = ["kitchen", "service", "bagels"];
  // const roles = [
  //   { role: "chef", department: "kitchen" },
  //   { role: "sous chef", department: "kitchen" },
  //   { role: "cashier", department: "service" },
  //   { role: "line", department: "service" },
  //   { role: "expo", department: "service" },
  //   { role: "starters", department: "bagels" },
  //   { role: "dough", department: "bagels" },
  //   { role: "production", department: "bagels" },
  // ];

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    validateInput(e);
  };

  const handleChangeDay = (e) => {
    const dayStatus = days[e.target.name];
    setDays({ ...days, [e.target.name]: !dayStatus });
    validateDaysInput(e);
  };

  const handleBlur = (e) => {
    e.target.name === "pay" && error.pay === ""
      ? handleBlurPay(e)
      : validateInput(e);
  };

  const handleBlurPay = (e) => {
    setInput({ ...input, pay: FormatNumToDollars(e.target.value) });
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
    Object.entries(days).forEach((day) => {
      let dayBoolean = day[1];
      if (dayBoolean === true) numDaysChecked++;
    });
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
      {/* <form className="form">
        <fieldset className="fieldset_form">
          <FormDeleteButton handleDelete={handleDelete} />
          <ShiftFormDepartment
            handleChange={(e) => handleChange(e)}
            value={input.department}
            options={departments}
            error={error.department}
          />
          <ShiftFormRole
            handleChange={(e) => handleChange(e)}
            value={input.role}
            department={input.department}
            options={roles}
            error={error.role}
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
      </form> */}
    </main>
  );
}

export default ShiftForm;
