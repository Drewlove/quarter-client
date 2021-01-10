import { useEffect, useReducer } from "react";
import config from "../config";

const headers = new Headers(config.HEADERS);

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false, isSending: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true, isSending: false };
    case "UPDATE_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSending: false,
        data: action.payload,
      };
    default:
      throw new Error();
  }
};

export const API_GET = (table, params) => {
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: true,
    isError: false,
    data: [],
  });

  useEffect(() => {
    let didCancel = false;

    const getData = async () => {
      dispatch({ type: "FETCH_INIT" });
      let url;
      if (params === "new")
        return dispatch({ type: "FETCH_SUCCESS", payload: [] });
      params ? (url = `${table}/${params}`) : (url = `${table}`);

      try {
        if (!didCancel) {
          const response = await fetch(`${config.API_ENDPOINT}/${url}`, {
            method: "GET",
            headers,
          });
          const data = await response.json();
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      } catch (error) {
        if (!didCancel) dispatch({ type: "FETCH_FAILURE" });
      }
    };
    getData();
    return () => {
      didCancel = true;
    };
  }, [table, params]);
  return [state, dispatch];
};
