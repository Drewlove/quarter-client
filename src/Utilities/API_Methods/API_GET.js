import { useEffect, useReducer } from "react";
import config from "../../config";

const headers = new Headers(config.HEADERS);

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "UPDATE_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
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
      // console.log(headers);

      try {
        if (!didCancel) {
          const response = await fetch(`${config.API_ENDPOINT}/${url}`, {
            method: "GET",
            headers,
          });
          if (response.ok) {
            const data = await response.json();
            dispatch({ type: "FETCH_SUCCESS", payload: data });
          } else {
            dispatch({ type: "FETCH_FAILURE" });
          }
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
