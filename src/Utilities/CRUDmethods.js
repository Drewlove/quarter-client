import { useState, useEffect } from "react";
import config from "../config";

const options = {
  method: "GET",
  headers: new Headers(config.HEADERS),
};
export const API_GET = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log(config.API_ENDPOINT, process.env.NODE_ENV);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `${config.API_ENDPOINT}/departments`,
          options
        );
        const resultJSON = await result.json();
        setData(resultJSON);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return [{ data, isLoading, isError }];
};
