import React, { useState } from "react";
import Modal from "../../../Modal/Modal";
import { API_SEND } from "../../../Utilities/API_Methods/API_SEND";
import { useHistory } from "react-router-dom";
import { GET_FORM_ERRORS } from "../../ValidateForm/GetFormErrors";

function FormSaveButton(props) {
  const history = useHistory();
  const [resSend, saveData] = API_SEND(props.data, props.formName, props.id);
  const [modal, setModal] = useState({
    display: false,
    text: "",
    type: "",
    redirect: false,
  });

  const handleModalClose = () => {
    setModal({ ...modal, display: false });
    return modal.redirect === true ? history.push(`/${props.formName}`) : null;
  };

  const renderModalNotification = () => {
    return (
      <Modal text={modal.text} handleModalClose={() => handleModalClose()} />
    );
  };

  const handleSave = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const formErrorsObj = GET_FORM_ERRORS(props.formName, props.data);
    props.setFormError(formErrorsObj);
    for (const property in formErrorsObj) {
      let formErrorMessage = formErrorsObj[property];
      if (formErrorMessage.length > 0) return;
    }
    sendSavedData();
  };

  const sendSavedData = () => {
    saveData(props.data, props.id);
    if (resSend.isSending === false && resSend.sendingError === null) {
      setModal({
        ...props.modal,
        display: true,
        type: "notification",
        redirect: true,
        text: "Save successful.",
      });
    }
  };

  return (
    <section className="save-button-section">
      {modal.display === true ? renderModalNotification() : null}
      <button
        id="button-save"
        className="button save-button-section__button"
        type="submit"
        value="Save"
        onClick={handleSave}
      >
        Save
      </button>
    </section>
  );
}

export default FormSaveButton;
