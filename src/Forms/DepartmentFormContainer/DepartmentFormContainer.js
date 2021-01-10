import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DepartmentForm from "../DepartmentForm/DepartmentForm";
import { API_GET } from "../../API_Methods/API_GET";

function DepartmentFormContainer() {
  const { id } = useParams();

  const [{ data, isLoading, isError }, dispatch] = API_GET("departments", id);
  const [formError, setFormError] = useState({
    department_name: "",
  });

  useEffect(() => {
    if (id === "new") {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: { department_name: "", department_id: 0 },
      });
    }
  }, [id, dispatch]);

  const handleChange = (e) => {
    validateField(e.target.value);
    let updatedData = { ...data, [e.target.name]: e.target.value };
    dispatch({ type: "UPDATE_DATA", payload: updatedData });
  };

  const handleBlur = (e) => {
    validateField(e.target.value);
  };

  const validateField = (value) => {
    const error = getError(value);
    setFormError({ ...formError, department_name: error });
  };

  const getError = (value) => {
    if (value.length === 0) {
      return "Enter a department.";
    } else {
      return "";
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
        data={data}
        getError={getError}
        formError={formError}
        setFormError={setFormError}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    );
  };

  return (
    <main className="main">
      {isLoading ? renderLoading() : renderResults()}
    </main>
  );
}

export default DepartmentFormContainer;
