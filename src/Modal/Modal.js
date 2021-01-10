import React from "react";

function Modal(props) {
  const renderButtons = () => {
    return (
      <>
        <button onClick={() => props.handleModalConfirm()}>
          {props.confirmAction}
        </button>
        <button onClick={() => props.handleModalClose()}>Cancel</button>
      </>
    );
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__close">
          <button
            onClick={() => props.handleModalClose()}
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
