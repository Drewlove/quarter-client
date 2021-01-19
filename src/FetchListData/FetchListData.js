import React from "react";
import { API_GET } from "../Utilities/API_Methods/API_GET";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Error from "../Error/Error";

function FetchListData(props) {
  const [{ data, isLoading, isError }] = API_GET(props.endpointStr);

  const renderLoading = () => {
    return <LoadingIndicator />;
  };

  const renderResults = () => {
    return isError ? renderError() : renderContainer();
  };

  const renderError = () => {
    return <Error />;
  };

  const renderContainer = () => {
    return (
      <section className="fetch-list-data">
        {React.cloneElement(props.children, {
          data: data,
        })}
      </section>
    );
  };

  return <>{isLoading ? renderLoading() : renderResults()}</>;
}

export default FetchListData;
