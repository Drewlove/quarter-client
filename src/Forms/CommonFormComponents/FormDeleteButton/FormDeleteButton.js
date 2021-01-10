import React, { useState } from "react";
import { API_DELETE } from "../../../API_Methods/API_DELETE";
import Modal from "../../../Modal/Modal";
import { useHistory } from "react-router-dom";

function FormDeleteButton(props) {
  const history = useHistory();

  const [resDelete, deleteData] = API_DELETE(props.formName, props.id);
  const [modal, setModal] = useState({
    display: false,
    text: "",
    type: "",
    redirect: false,
  });

  const renderModal = () => {
    return modal.type === "notification"
      ? renderModalNotification()
      : renderModalConfirmation();
  };

  const renderModalNotification = () => {
    return (
      <Modal text={modal.text} handleModalClose={() => handleModalClose()} />
    );
  };
  const handleModalClose = () => {
    setModal({ ...modal, display: false });
    return modal.redirect === true ? history.push(`/${props.formName}`) : null;
  };

  const renderModalConfirmation = () => {
    return (
      <Modal
        text={modal.text}
        type={modal.type}
        handleModalClose={() => handleModalClose()}
        handleModalConfirm={() => deleteItem()}
        confirmAction="Delete"
      />
    );
  };

  const deleteItem = () => {
    deleteData(props.formName, props.id);
    if (resDelete.isDeleting === false && resDelete.deletingError === null) {
      setModal({
        ...modal,
        display: true,
        type: "notification",
        redirect: true,
        text: "Record deleted",
      });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setModal({
      ...modal,
      display: true,
      type: "confirmation",
      text: "Delete this record?",
    });
  };

  return (
    <section className="delete-button-section">
      {modal.display === true ? renderModal() : null}
      <button
        id="button-delete"
        className="button delete-button-section__button"
        value="delete"
        onClick={handleDelete}
      >
        Delete
      </button>
    </section>
  );
}

export default FormDeleteButton;
