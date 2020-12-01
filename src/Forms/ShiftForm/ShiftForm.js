import React, { useState, useEffect } from "react";
import FormDeleteButton from "../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import FormSaveButton from "../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormSelect from "../CommonFormComponents/FormSelect/FormSelect";
import ShiftFormTime from "./ShiftFormTime";
import ShiftFormPeople from "./ShiftFormPeople";
import ShiftFormDays from './ShiftFormDays'; 

function ShiftForm() {
  const [input, setInput] = useState({
    people: "",
    startTime: "12:00",
    endTime: "12:00",
    department: "",
    role: "",
    monday: false, 
    tuesday: false, 
    wednesday: false, 
    thursday: false, 
    friday: false, 
    saturday: false, 
    sunday: false,
  });

  const [error, setError] = useState({
    people: false,
    department: false,
    role: false,
  });

  //should be useState({} ? )
  const [roles, setRoles] = useState([]);


  const departments = ["kitchen", "service", "bake off"];
  const departmentRoles = {
    kitchen: ["chef", "sous chef"],
    service: ["cashier", "line", "expo"],
    bagels: ["starters", "dough", "production"],
  };

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

  const handleChangeDay = (e) => {
    validate(e);
    const currentState = input[e.target.name]; 
    const updatedInput = { ...input, [e.target.name]: !currentState };
    setInput(updatedInput);
  }

  const validate = (e) => {
    e.target.value.length
      ? setError({ ...error, [e.target.name]: false })
      : setError({ ...error, [e.target.name]: true });
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
      if (input[key].length < 1) {
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
            optionalClass={'input-section_shift'}
          />
          <FormSelect
            handleChange={(e) => handleChange(e)}
            value={input.role}
            name="role"
            options={roles}
            error={error.role}
            optionalClass={'input-section_shift'}
          />
          <ShiftFormTime
            handleChange={(e) => handleChange(e)}
            startTime={input.startTime}
            endTime={input.endTime}
            errorStart={error.startTime}
            errorEnd={error.endTime}
          />
          <ShiftFormDays 
          monday={input.monday} 
          tuesday={input.tuesday} 
          wednesday={input.wednesday} 
          thursday={input.thursday} 
          friday={input.friday} 
          saturday={input.saturday} 
          sunday={input.sunday} 
          handleChangeDay={(e) => handleChangeDay(e)}/>
          
          <FormSaveButton 
          handleSave={handleSave}/>
        </fieldset>
      </form>
    </main>
  );
}

export default ShiftForm;
