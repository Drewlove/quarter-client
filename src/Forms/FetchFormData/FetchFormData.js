import React from "react";
import { API_GET } from "../../Utilities/API_Methods/API_GET";
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator";
import Error from "../../Error/Error";

function FetchFormData(props) {
  const [{ data, isLoading, isLoaded, isError }] = API_GET(props.endpointStr);
  const renderLoading = () => {
    return <LoadingIndicator />;
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
