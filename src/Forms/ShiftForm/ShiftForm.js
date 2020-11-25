import React, { useState, useEffect } from "react";
import FormDeleteButton from "../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import FormSaveButton from "../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormSelect from "../CommonFormComponents/FormSelect/FormSelect";
import ShiftFormTime from "./ShiftFormTime";
import ShiftFormPeople from "./ShiftFormPeople";

function ShiftForm() {
  const [input, setInput] = useState({
    people: "",
    startTime: "12:00",
    endTime: "12:00",
    department: "",
    role: "",
  });

  const [roles, setRoles] = useState([]);

  const [error, setError] = useState({
    startTime: false,
    endTime: false,
    people: false,
    department: false,
    role: false,
  });

  useEffect(() => {
    updateRoles();
  }, [input.department]);

  const updateRoles = () => {
    let updatedRoles = departmentRoles[input.department];
    setRoles(updatedRoles);
  };

  const handleChange = (e) => {
    validate(e);
    const updatedInput = { ...input, [e.target.name]: e.target.value };
    setInput(updatedInput);
  };

  const validate = (e) => {
    e.target.value.length
      ? setError({ ...error, [e.target.name]: false })
      : setError({ ...error, [e.target.name]: true });
  };

  const departments = ["kitchen", "service", "bake off"];
  const departmentRoles = {
    kitchen: ["chef", "sous chef"],
    service: ["cashier", "line", "expo"],
    bagels: ["starters", "dough", "production"],
  };

  const handleBlur = (e) => {
    validate(e);
  };

  const handleDelete = () => {};

  const handleSave = (e) => {
    e.preventDefault();
    validateAllInputs();
  };

  const validateAllInputs = () => {
    let invalidInputs = {};
    Object.keys(input).forEach((key) => {
      if ((key === "startTime" || key === "endTime") && input.startTime > input.endTime) {
        invalidInputs.startTime = true;
        invalidInputs.endTime = true;
      } else if (input[key].length < 1) {
        invalidInputs[key] = true;
      } else {
        invalidInputs[key] = false;
      }
    });
    setError(invalidInputs);
  };

  return (
    <main className="main">
      <form className="form">
        <fieldset className="fieldset_form">
          <FormDeleteButton handleDelete={handleDelete} />
          <ShiftFormPeople
            handleChange={(e) => handleChange(e)}
            value={input.people}
            error={error.people}
            handleBlur={handleBlur}
          />
          <FormSelect
            handleChange={(e) => handleChange(e)}
            value={input.department}
            name="department"
            options={departments}
            error={error.department}
          />
          <FormSelect
            handleChange={(e) => handleChange(e)}
            value={input.role}
            name="role"
            options={roles}
            error={error.role}
          />
          <ShiftFormTime
            handleChange={(e) => handleChange(e)}
            startTime={input.startTime}
            endTime={input.endTime}
            errorStart={error.startTime}
            errorEnd={error.endTime}
          />
          <FormSaveButton handleSave={handleSave} />
        </fieldset>
      </form>
    </main>
  );
}

export default ShiftForm;
