import React from "react";

function Modal(props) {
  const renderButtons = () => {
    return (
      <div className="modal__button-container">
        <button
          className="modal__button modal__button_confirm"
          onClick={(e) => props.handleModalConfirm(e)}
        >
          {props.confirmAction}
        </button>
        <button
          className="modal__button modal__button_cancel"
          onClick={(e) => props.handleModalClose(e)}
        >
          Cancel
        </button>
      </div>
    );
  };

  const renderOtherButtons = () => {
    return (
      <div className="modal__button-container">
        <button
          className="modal__button modal__button_acknowledge"
          onClick={(e) => props.handleModalClose(e)}
        >
          OK
        </button>
      </div>
    );
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <p className="modal__text">{props.text}</p>
        {props.type === "confirmation" ? renderButtons() : renderOtherButtons()}
      </div>
    </div>
  );
}

export default Modal;
