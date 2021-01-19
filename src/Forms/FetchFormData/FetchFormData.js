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
      <section className="fetch-form-data">
        {React.cloneElement(props.children, {
          data: data,
        })}
      </section>
    );
  };

  return (
    <main className="main">
      {isLoading ? renderLoading() : null}
      {isError ? renderError() : null}
      {isLoaded ? renderForm() : null}
    </main>
  );
}

export default FetchFormData;
