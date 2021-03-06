import React from "react";
import { API_GET } from "../../Utilities/API_Methods/API_GET";
import SkeletonLoader from "../../SkeletonLoader/SkeletonLoader";
import Error from "../../Error/Error";

function FetchFormData(props) {
  const [{ data, isLoading, isLoaded, isError }] = API_GET(props.endpointStr);
  const renderLoading = () => {
    return <SkeletonLoader />;
  };

  const renderError = () => {
    return <Error />;
  };

  const renderForm = () => {
    return (
      <>
        {React.cloneElement(props.children, {
          data: data,
        })}
      </>
    );
  };

  return (
    <>
      {isLoading ? renderLoading() : null}
      {isError ? renderError() : null}
      {isLoaded ? renderForm() : null}
    </>
  );
}

export default FetchFormData;
