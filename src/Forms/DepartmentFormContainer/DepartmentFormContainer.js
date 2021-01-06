import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import DepartmentForm from "../DepartmentForm/DepartmentForm";
import Modal from "../../Modal/Modal";

import { API_GET } from "../../Utilities/API_GET";
import { API_SEND } from "../../Utilities/API_SEND";

function DepartmentFormContainer() {
  const history = useHistory();
  let { id } = useParams();

  const [{ data, isLoading, isError }, dispatch] = API_GET("departments", id);
  const [res, apiMethod] = API_SEND(data);
  const [formError, setFormError] = useState("");
  const [modal, setModal] = useState({ display: false, text: "" });

  useEffect(() => {
    if (id === "new") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: { department_name: "", department_id: 0 },
      });
    }
  }, [id]);

  const handleChange = (e) => {
    validate(e.target.value);
    let updatedData = { ...data, [e.target.name]: e.target.value };
    dispatch({ type: "UPDATE_DATA", payload: updatedData });
  };

  const handleBlur = (e) => {
    validate(data);
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const handleSave = (e) => {
    e.preventDefault();
    apiMethod(data);
    if (res.isSending === false && res.sendingError === null) {
      setModal({ ...modal, display: true, text: "Item saved" });
    }
  };

  const validate = (value) => {
    if (value.length === 0) {
      setFormError("Enter a department.");
    } else {
      setFormError("");
    }
  };

  const renderLoading = () => {
    return <p className="loading-indicator">Loading...</p>;
  };

  const renderResults = () => {
    return isError ? renderError() : renderForm();
  };

  const renderError = () => {
    return <p>Error!</p>;
  };

  const renderForm = () => {
    return (
      <DepartmentForm
        id={id}
        isLoading={isLoading}
        isError={isError}
        data={data}
        formError={formError}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    );
  };

  return (
    <main className="main">
      {modal.display ? <Modal text={modal.text} /> : null}
      {isLoading ? renderLoading() : renderResults()}
    </main>
  );
}

export default DepartmentFormContainer;
