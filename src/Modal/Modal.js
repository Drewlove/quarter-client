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

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__close">
          <button
            onClick={(e) => props.handleModalClose(e)}
            className="modal__close-button"
          >
            &times;
          </button>
        </div>
        <p className="modal__text">{props.text}</p>
        {props.type === "confirmation" ? renderButtons() : null}
      </div>
    </div>
  );
}

export default Modal;
