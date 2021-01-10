import { useState, useCallback } from "react";
import config from "../config";

const headers = new Headers(config.HEADERS);

export const API_DELETE = (endpoint, id) => {
  const [resDelete, setRes] = useState({
    isDeleting: false,
    deletingError: null,
  });

  const deleteData = useCallback(async () => {
    setRes((prevState) => ({ ...prevState, isDeleting: true }));
    try {
      const result = await fetch(`${config.API_ENDPOINT}/${endpoint}/${id}`, {
        method: "DELETE",
        headers,
      });
      if (result.ok)
        setRes((prevState) => ({
          ...prevState,
          isDeleting: false,
          deletingError: null,
        }));
    } catch (error) {
      setRes({ isDeleting: false, deletingError: error });
    }
  }, [endpoint, id]);
  return [resDelete, deleteData];
};
