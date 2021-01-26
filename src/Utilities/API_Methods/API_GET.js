import { useEffect, useReducer } from "react";
import config from "../../config";

const headers = new Headers(config.HEADERS);

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
      };
    default:
      throw new Error();
  }
};

const getUrls = (endpointStr) => {
  let urlArr = [];
  let endpoint = "";
  for (let i = 0; i <= endpointStr.length; i++) {
    let char = endpointStr[i];
    if (char === "," || i === endpointStr.length) {
      urlArr.push(`${config.API_ENDPOINT}/${endpoint}`);
      endpoint = "";
    } else if (char !== " ") {
      endpoint += char;
    }
  }
  return urlArr;
};

const allResponsesOk = (responseArr) => {
  for (let i = 0; i < responseArr.length; i++) {
    if (!responseArr[i].ok) return false;
  }
  return true;
};

export const API_GET = (endpointStr) => {
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: true,
    isError: false,
    data: [],
  });

  useEffect(() => {
    let didCancel = false;

    const getData = async () => {
      if (endpointStr === "")
        return dispatch({ type: "FETCH_SUCCESS", payload: {} });

      dispatch({ type: "FETCH_INIT" });
      const urls = getUrls(endpointStr);
      console.log(urls);
      try {
        if (!didCancel) {
          const responseArr = await Promise.all(
            urls.map((url) => {
              return fetch(url, {
                method: "GET",
                headers,
              });
            })
          );
          if (allResponsesOk(responseArr)) {
            const data = await Promise.all(
              responseArr.map((res) => res.json())
            );
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
  }, [endpointStr]);
  return [state, dispatch];
};
