import { useState, useCallback } from "react";
import config from "../../config";

const headers = new Headers(config.HEADERS);

export const API_SAVE = (formData, endpointSuffix, id) => {
  const [resSave, setRes] = useState({
    formData: null,
    isSaving: false,
    saveSuccessful: false,
    saveError: "",
  });

  let saveMethod;
  let url = `${config.API_ENDPOINT}/${endpointSuffix}`;
  if (id === "new") {
    saveMethod = "POST";
  } else if (id >= 1) {
    saveMethod = "PATCH";
    url = `${config.API_ENDPOINT}/${endpointSuffix}/${id}`;
  }

  const saveData = useCallback(async () => {
    setRes((prevState) => ({ ...prevState, isSaving: true }));
    try {
      const result = await fetch(url, {
        method: saveMethod,
        body: JSON.stringify(formData),
        headers,
      });
      if (result.ok)
        setRes((prevState) => ({
          ...prevState,
          isSaving: false,
          saveSuccessful: true,
          saveError: "",
        }));
      else if (!result.ok) {
        setRes((prevState) => ({
          ...prevState,
          isSaving: false,
          saveSuccessful: false,
          saveError: "Failed to save.",
        }));
      }
    } catch (error) {
      setRes((prevState) => ({
        ...prevState,
        isSaving: false,
        saveSuccessful: false,
        saveError: "Failed to save.",
      }));
    }
  }, [formData, saveMethod, url]);
  return [resSave, saveData];
};
