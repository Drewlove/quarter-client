import React, { useState, useEffect } from "react";
import { IsStringValidNum } from "../../Utilities/UtilityFunctions";
import FormSelect from "../CommonFormComponents/FormSelect/FormSelect";
import LineItemFormName from "./LineItemFormName/LineItemFormName";
import LineItemFormAmount from "./LineItemFormAmount/LineItemFormAmount";
import LineItemFormAmountType from "./LineItemFormAmountType/LineItemFormAmountType";
import LineItemFormPercentOf from "./LineItemFormPercentOf/LineItemFormPercentOf";
import LineItemFormSaveButton from "../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormDeleteButton from "../CommonFormComponents/FormDeleteButton/FormDeleteButton";
//Below is resource for fetching data and working with state and hooks
//https://www.carlrippon.com/drop-down-data-binding-with-react-hooks/
//This one too, using useEffect, https://daveceddia.com/useeffect-hook-examples/#prevent-useeffect-from-running-every-render

function LineItemForm() {
  const [input, setInput] = useState({
    category: "",
    name: "",
    amount: "",
    amountType: "dollars",
    percentOf: "",
  });

  const [error, setError] = useState({
    category: false,
    name: false,
    amount: false,
    amountType: false,
    percentOf: false,
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    validate(e);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (e) => {
    e.target.value.length
      ? setError({ ...error, [e.target.name]: false })
      : setError({ ...error, [e.target.name]: true });
  };

  const handleChangeAmount = (e) => {
    validateChangeAmount(e);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validateChangeAmount = (e) => {
    IsStringValidNum(e.target.value)
      ? setError({ ...error, [e.target.name]: false })
      : setError({ ...error, [e.target.name]: true });
  };

  const handleBlurAmount = (e) => {
    if (!IsStringValidNum(e.target.value))
      return setError({ ...error, [e.target.name]: true });
    let stringWithoutCommas = e.target.value.replace(/,/g, "");
    setInput({
      ...input,
      [e.target.name]: Number(stringWithoutCommas).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    validateAllInputs();
  };

  const validateAllInputs = () => {
    let invalidInputs = {};
    Object.keys(input).forEach((key) => {
      input[key].length < 1
        ? (invalidInputs[key] = true)
        : (invalidInputs[key] = false);
    });
    if (input.category !== "cogs") {
      invalidInputs.amountType = false;
      invalidInputs.percentOf = false;
    } else {
      invalidInputs = validateCogsInputs(invalidInputs);
    }
    setError(invalidInputs);
  };

  const validateCogsInputs = (invalidInputs) => {
    if (
      input.category === "cogs" &&
      (input.amountType === "dollars" || input.amountType === "")
    ) {
      invalidInputs.percentOf = false;
    } else if (
      input.category === "cogs" &&
      input.amountType === "percent" &&
      input.percentOf === ""
    ) {
      invalidInputs.percentOf = true;
    }
    return invalidInputs;
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const options = ["sales", "cogs", "overhead"];

  return (
    <main className="main">
      <form className="form">
        <fieldset className="fieldset_form">
          <FormDeleteButton handleDelete={handleDelete} />
          <FormSelect
            value={input.category}
            error={error.category}
            handleChange={handleChange}
            options={options}
            name="category"
          />
          <LineItemFormName
            value={input.name}
            error={error.name}
            handleChange={handleChange}
            validate={validate}
          />
          <LineItemFormAmount
            value={input.amount}
            error={error.amount}
            handleChangeAmount={handleChangeAmount}
            validate={validate}
            handleBlurAmount={handleBlurAmount}
            amountType={input.amountType}
          />
          {input.category === "cogs" ? (
            <LineItemFormAmountType
              value={input.amountType}
              onChange={handleChange}
              error={error.amountType}
            />
          ) : null}

          {input.category === "cogs" && input.amountType === "percentage" ? (
            <LineItemFormPercentOf
              value={input.percentOf}
              onChange={handleChange}
              error={error.percentOf}
            />
          ) : null}

          <LineItemFormSaveButton handleSave={handleSave} />
        </fieldset>
      </form>
    </main>
  );
}

export default LineItemForm;
