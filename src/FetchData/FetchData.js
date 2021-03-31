import React from "react";
import { API_GET } from "../Utilities/API_Methods/API_GET";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import Error from "../Error/Error";

function FetchData(props) {
  const [{ data, isLoading, isError, error }] = API_GET(props.endpointArr);

  const renderSkeleton = () => {
    return <SkeletonLoader skeletonNumber={props.skeletonNumber} />;
  };

  const renderResults = () => {
    return isError ? renderError() : renderContainer();
  };

  const renderError = () => {
    return <Error error={error} />;
  };

  const renderContainer = () => {
    return (
      <>
        {React.cloneElement(props.children, {
          data: data,
        })}
      </>
    );
  };

  return <>{isLoading ? renderSkeleton() : renderResults()}</>;
}

export default FetchData;
