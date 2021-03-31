import { useEffect, useReducer } from "react";
import config from "../../config";
import { useAuth0 } from "@auth0/auth0-react";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isError: true,
        error: action.error,
      };
    default:
      throw new Error();
  }
};

export const API_GET = (endpointArr) => {
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: true,
    isError: false,
    error: {},
    data: [],
  });
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    let didCancel = false;

    const getData = async () => {
      if (endpointArr.length === 0)
        return dispatch({ type: "FETCH_SUCCESS", payload: {} });

      dispatch({ type: "FETCH_INIT" });
      const urls = getUrls(endpointArr);
      try {
        if (!didCancel) {
          const token = await getAccessTokenSilently();
          const responseArr = await fetchResponseArr(urls, token);
          const dispatchObj = await getDispatchObj(responseArr);
          dispatch(dispatchObj);
        }
      } catch (error) {
        if (!didCancel)
          dispatch({
            type: "FETCH_FAILURE",
            error: { status: 0, statusText: "non-specified error" },
          });
      }
    };
    getData();
    return () => {
      didCancel = true;
    };
  }, [endpointArr, getAccessTokenSilently]);
  return [state, dispatch];
};

const getUrls = (endpointArr) => {
  let urlArr = endpointArr.map((key) => {
    let url = `${config.API_ENDPOINT}/${key}`;
    return url;
  });
  return urlArr;
};

const fetchResponseArr = async (urls, token) => {
  const responseArr = await Promise.all(
    urls.map((url) => {
      return fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    })
  );
  return responseArr;
};

const getDispatchObj = async (responseArr) => {
  let error = validateResponses(responseArr);
  if (error.status) {
    return { type: "FETCH_FAILURE", error: error };
  } else {
    const data = await Promise.all(responseArr.map((res) => res.json()));
    return { type: "FETCH_SUCCESS", payload: data };
  }
};

const validateResponses = (responseArr) => {
  let error = {};
  responseArr.forEach((key) => {
    if (!key.ok) {
      error = {
        status: key.status,
        statusText: key.statusText,
      };
    }
  });
  return error;
};
