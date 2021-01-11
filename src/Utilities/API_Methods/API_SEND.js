import { useState, useCallback } from "react";
import config from "../../config";

const headers = new Headers(config.HEADERS);

export const API_SEND = (data, table, id) => {
  const [resSend, setRes] = useState({
    data: null,
    isSending: false,
    sendingError: null,
  });

  let saveMethod;
  let url;
  if (id === "new") {
    saveMethod = "POST";
    url = `${table}`;
  } else if (id >= 1) {
    saveMethod = "PATCH";
    url = `${table}/${id}`;
  }

  const saveData = useCallback(async () => {
    setRes((prevState) => ({ ...prevState, isSending: true }));
    try {
      const result = await fetch(`${config.API_ENDPOINT}/${url}`, {
        method: saveMethod,
        body: JSON.stringify(data),
        headers,
      });
      if (result.ok)
        setRes((prevState) => ({
          ...prevState,
          isSending: false,
          sendingError: null,
        }));
    } catch (error) {
      setRes({ data: null, isSending: false, sendingError: error });
    }
  }, [data, saveMethod, url]);
  return [resSend, saveData];
};
