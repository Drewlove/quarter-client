import React, { useEffect, useState } from "react";
import Modal from "../../../Modal/Modal";
import { API_SAVE } from "../../../Utilities/API_Methods/API_SAVE";
import { useHistory } from "react-router-dom";
import { GET_ALL_ERROR_MESSAGES } from "../../ValidateForm/GET_ALL_ERROR_MESSAGES";

function FormSaveButton(props) {
  const history = useHistory();
  const [resSave, saveData] = API_SAVE(
    props.formData,
    props.endpointSuffix,
    props.id
  );
  const [modal, setModal] = useState({
    display: false,
  });

  useEffect(() => {
    if (resSave.saveSuccessful)
      return setModal({
        display: true,
        type: "notification",
        text: "Save successful.",
        redirect: true,
        redirectSuffix: props.redirectSuffix,
      });

    if (resSave.saveError.length > 0) {
      return setModal({
        display: true,
        type: "notification",
        text: "Failed to save.",
        redirect: false,
        redirectSuffix: "",
      });
    }
  }, [resSave, props.redirectSuffix]);

  const hideModal = (e) => {
    e.preventDefault();
    setModal({ ...modal, display: false });
    if (modal.redirect) history.push(`/${props.redirectSuffix}`);
  };

  const renderModal = () => {
    return (
      <Modal
        type={modal.type}
        text={modal.text}
        redirect={modal.redirect}
        handleModalClose={(e) => hideModal(e)}
      />
    );
  };

  const handleSave = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const formErrorsObj = GET_ALL_ERROR_MESSAGES(
      props.formName,
      props.formData
    );
    props.setFormError(formErrorsObj);
    for (const property in formErrorsObj) {
      let formErrorMessage = formErrorsObj[property];
      if (formErrorMessage.length > 0) return;
    }
    saveData();
  };

  return (
    <section className="save-button-section">
      {modal.display ? renderModal() : null}
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
