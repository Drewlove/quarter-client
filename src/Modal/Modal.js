import React from "react";

function Modal(props) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Modal;
