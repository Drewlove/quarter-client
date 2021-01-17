import React from "react";
import { API_GET } from "../../../Utilities/API_Methods/API_GET";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../../LoadingIndicator/LoadingIndicator";
import Error from "../../../Error/Error";
import RoleForm from "../RoleForm/RoleForm";

function RoleFormContainer() {
  const { id } = useParams();
  let endpointStr = id === `new` ? `departments` : `departments, roles/${id}`;
  const [{ data, isLoading, isLoaded, isError }] = API_GET(endpointStr);
  const renderLoading = () => {
    return <LoadingIndicator />;
  };

  const renderError = () => {
    return <Error />;
  };

  const renderForm = () => {
    return <RoleForm data={data} id={id} />;
  };

  return (
    <main className="main">
      {isLoading ? renderLoading() : null}
      {isError ? renderError() : null}
      {isLoaded ? renderForm() : null}
    </main>
  );
}

export default RoleFormContainer;
