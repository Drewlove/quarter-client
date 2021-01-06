import { useState, useCallback, seReducer, useEffect } from "react";
import config from "../config";

const headers = new Headers(config.HEADERS);

//Redirect on successful save
//PATCH

export const API_SEND = (data) => {
  const [res, setRes] = useState({
    data: null,
    isSending: false,
    sendingError: null,
  });
  const callAPI = useCallback(async () => {
    setRes((prevState) => ({ ...prevState, isSending: true }));
    try {
      const result = await fetch(`${config.API_ENDPOINT}/departments`, {
        method: "POST",
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
  }, [data]);
  return [res, callAPI];
};
