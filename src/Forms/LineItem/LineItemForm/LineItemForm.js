import React, { useState, useEffect } from "react";
import LineItemFormCategory from "../LineItemFormCategory/LineItemFormCategory";
import LineItemFormName from "../LineItemFormName/LineItemFormName";
import LineItemFormAmount from "../LineItemFormAmount/LineItemFormAmount";
import LineItemFormAmountType from "../LineItemFormAmountType/LineItemFormAmountType";
import LineItemFormPercentOf from "../LineItemFormPercentOf/LineItemFormPercentOf";
import FormSaveButton from "../../CommonFormComponents/FormSaveButton/FormSaveButton";
import FormDeleteButton from "../../CommonFormComponents/FormDeleteButton/FormDeleteButton";
import { GET_ERROR_MESSAGE } from "../../ValidateForm/GET_ERROR_MESSAGE";
import { FORMAT_NUM } from "../../../Utilities/UtilityFunctions";

function LineItemForm(props) {
  const [lineItems, setLineItems] = useState({
    sales: [],
    cogs: [],
    overhead: [],
  });

  const [formData, setFormData] = useState({
    line_item_category: "",
    line_item_name: "",
    amount: "",
    line_item_amount_type: "dollars",
    percent_of: null,
  });

  const [formError, setFormError] = useState({
    line_item_category: "",
    line_item_name: "",
    amount: "",
    percent_of: "",
  });

  useEffect(() => {
    const sortLineItems = () => {
      const lineItems = { sales: [], cogs: [], overhead: [] };
      props.data[0].forEach((key) => {
        if (
          key.line_item_amount_type === "dollars" &&
          key.line_item_id !== parseInt(props.id)
        )
          lineItems[key.line_item_category].push(key);
      });
      return lineItems;
    };

    setLineItems(sortLineItems());
  }, [props.data, props.id]);

  useEffect(() => {
    if (props.id !== "new")
      setFormData({
        line_item_category: props.data[1].line_item_category,
        line_item_name: props.data[1].line_item_name,
        amount: Number(props.data[1].amount).toLocaleString(undefined, {
          minimumFractionDigits: 2,
        }),
        line_item_amount_type: props.data[1].line_item_amount_type,
        percent_of: props.data[1].percent_of,
      });
  }, [props.data, props.id]);

  const handleChange = (e) => {
    validate(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeAmountType = (e) => {
    if (e.target.value === "dollars") {
      setFormData({
        ...formData,
        percent_of: null,
        line_item_amount_type: "dollars",
      });
    } else {
      setFormData({
        ...formData,
        percent_of: "",
        line_item_amount_type: "percent",
      });
    }
  };

  const handleChangeAmount = (e) => {
    if (formError.amount) validate(e);
    setFormData({ ...formData, amount: e.target.value });
  };

  const handleBlur = (e) => {
    e.target.name === "amount" && formError.amount === ""
      ? handleBlurAmount(e)
      : validate(e);
  };

  const handleBlurAmount = (e) => {
    const formattedAmount = FORMAT_NUM(e.target.value);
    setFormData({ ...formData, amount: formattedAmount });
    let errorMessage = GET_ERROR_MESSAGE("amount", formattedAmount);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const validate = (e) => {
    let errorMessage = GET_ERROR_MESSAGE(e.target.name, e.target.value);
    setFormError({ ...formError, [e.target.name]: errorMessage });
  };

  const renderDeleteButton = () => {
    return (
      <FormDeleteButton
        endpointSuffix="line_items"
        id={props.id}
        redirectSuffix="pnl"
      />
    );
  };

  const getFormData = () => {
    return {
      ...formData,
      amount: parseFloat(formData.amount.replace(/,/g, "")),
    };
  };

  const categories = ["sales", "cogs", "overhead"];

  return (
    <main className="main">
      <form className="form">
        <fieldset className="fieldset_form">
          {props.id !== "new" ? renderDeleteButton() : null}
          <LineItemFormCategory
            value={formData.line_item_category}
            error={formError.line_item_category}
            handleChange={handleChange}
            categories={categories}
            name="category"
          />
          <LineItemFormName
            value={formData.line_item_name}
            error={formError.line_item_name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            validate={validate}
          />
          <LineItemFormAmountType
            value={formData.line_item_amount_type}
            handleChangeAmountType={handleChangeAmountType}
            error={formError.line_item_amount_type}
          />
          <LineItemFormAmount
            value={formData.amount}
            error={formError.amount}
            handleChangeAmount={handleChangeAmount}
            validate={validate}
            handleBlurAmount={handleBlurAmount}
            line_item_amount_type={formData.line_item_amount_type}
          />

          {formData.line_item_amount_type === "percent" ? (
            <LineItemFormPercentOf
              lineItems={lineItems}
              value={formData.percent_of}
              onChange={handleChange}
              error={formError.percent_of}
            />
          ) : null}
          <FormSaveButton
            formData={getFormData()}
            formName="lineItem"
            endpointSuffix="line_items"
            redirectSuffix="pnl"
            id={props.id}
            setFormError={setFormError}
          />
        </fieldset>
      </form>
    </main>
  );
}

export default LineItemForm;
