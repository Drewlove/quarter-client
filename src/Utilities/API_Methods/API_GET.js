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
      };
    default:
      throw new Error();
  }
};

const getUrls = (endpointArr) => {
  let urlArr = endpointArr.map((key) => {
    let url = `${config.API_ENDPOINT}/${key}`;
    return url;
  });
  return urlArr;
};

const allResponsesOk = (responseArr) => {
  for (let i = 0; i < responseArr.length; i++) {
    if (!responseArr[i].ok) return false;
  }
  return true;
};

export const API_GET = (endpointArr) => {
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: true,
    isError: false,
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
  }, [endpointArr, getAccessTokenSilently]);
  return [state, dispatch];
};
