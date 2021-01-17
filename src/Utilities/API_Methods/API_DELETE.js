import { useState, useCallback } from "react";
import config from "../../config";

const headers = new Headers(config.HEADERS);

export const API_DELETE = (endpointSuffix, id) => {
  const [resDelete, setResDelete] = useState({
    isDeleting: false,
    isDeleteError: false,
    deleteErrorMessage: "",
    recordDeleted: false,
  });

  const deleteData = useCallback(async () => {
    console.log(endpointSuffix);
    setResDelete((prevState) => ({ ...prevState, isDeleting: true }));
    try {
      const result = await fetch(
        `${config.API_ENDPOINT}/${endpointSuffix}/${id}`,
        {
          method: "DELETE",
          headers,
        }
      );
      if (result.ok) {
        setResDelete((prevState) => ({
          ...prevState,
          isDeleting: false,
          isDeleteError: false,
          deleteErrorMessage: "",
          recordDeleted: true,
        }));
      } else {
        setResDelete((prevState) => ({
          ...prevState,
          isDeleting: false,
          isDeleteError: true,
          deleteErrorMessage: "Failed to delete record.",
          recordDeleted: false,
        }));
      }
    } catch (error) {
      setResDelete((prevState) => ({
        ...prevState,
        isDeleting: false,
        isDeleteError: true,
        deleteErrorMessage: "Unable to delete record.",
        recordDeleted: false,
      }));
    }
  }, [endpointSuffix, id]);
  return [resDelete, deleteData];
};
