import { useState, useCallback } from "react";
import config from "../../config";
import { useAuth0 } from "@auth0/auth0-react";

export const API_SAVE = (formData, endpointSuffix, rowId) => {
  const [resSave, setRes] = useState({
    formData: null,
    isSaving: false,
    saveSuccessful: false,
    saveError: "",
  });

  const { getAccessTokenSilently } = useAuth0();

  let saveMethod;
  const { user } = useAuth0();
  const userId = user.sub.split("|")[1];

  let url = `${config.API_ENDPOINT}/${endpointSuffix}/${userId}`;
  if (rowId === "new") {
    saveMethod = "POST";
  } else {
    saveMethod = "PATCH";
    url = `${url}/${rowId}`;
  }

  const saveData = useCallback(async () => {
    setRes((prevState) => ({ ...prevState, isSaving: true }));
    try {
      const token = await getAccessTokenSilently();

      const result = await fetch(url, {
        method: saveMethod,
        body: JSON.stringify(formData),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
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
  }, [formData, saveMethod, getAccessTokenSilently, url]);
  return [resSave, saveData];
};
