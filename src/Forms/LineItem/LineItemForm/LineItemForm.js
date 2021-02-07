import React, { useState, useEffect } from "react";
import LineItemFormCategory from "../LineItemFormCategory/LineItemFormCategory";
import LineItemFormName from "../LineItemFormName/LineItemFormName";
import LineItemFormAmount from "../LineItemFormAmount/LineItemFormAmount";
import LineItemFormAmountType from "../LineItemFormAmountType/LineItemFormAmountType";
import LineItemFormPercentOf from "../LineItemFormPercentOf/LineItemFormPercentOf";
import LineItemFormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import { GetErrorMessage } from "../../LineItemFormErrors";
import { FORMAT_NUM_TO_DOLLARS } from "../../../Utilities/UtilityFunctions";

function LineItemForm() {
  const [input, setInput] = useState({
    category: "",
    name: "",
    amount: "",
    amountType: "dollars",
    percentOf: "",
  });

  const [error, setError] = useState({
    category: "",
    name: "",
    amount: "",
    amountType: "",
    percentOf: "",
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    validate(e);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    e.target.name === "amount" && error.amount === ""
      ? handleBlurAmount(e)
      : validate(e);
  };

  const handleBlurAmount = (e) => {
    setInput({ ...input, amount: FORMAT_NUM_TO_DOLLARS(e.target.value) });
  };

  const validate = (e) => {
    let errorMessage = GetErrorMessage(e.target.name, e.target.value);
    setError({ ...error, [e.target.name]: errorMessage });
  };

  const handleSave = (e) => {
    e.preventDefault();
    validateAllInputs();
  };

  const validateAllInputs = () => {
    let errors = {};

    Object.keys(input).forEach((key) => {
      errors[key] = GetErrorMessage(key, input[key]);
    });
    if (input.amountType === "dollars") errors.percentOf = "";

    setError(errors);
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
          <LineItemFormCategory
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
            handleBlur={handleBlur}
            validate={validate}
          />
          <LineItemFormAmount
            value={input.amount}
            error={error.amount}
            handleChange={handleChange}
            validate={validate}
            handleBlur={handleBlur}
            amountType={input.amountType}
          />
          <LineItemFormAmountType
            value={input.amountType}
            onChange={handleChange}
            error={error.amountType}
          />

          {input.amountType === "percentage" ? (
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
