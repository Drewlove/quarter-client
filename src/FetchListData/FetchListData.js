import React from "react";
import { API_GET } from "../Utilities/API_Methods/API_GET";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import Error from "../Error/Error";

function FetchListData(props) {
  const [{ data, isLoading, isError }] = API_GET(props.endpointStr);

  const renderSkeleton = () => {
    return <SkeletonLoader />;
  };

  const renderResults = () => {
    return isError ? renderError() : renderContainer();
  };

  const renderError = () => {
    return <Error />;
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

export default FetchListData;
