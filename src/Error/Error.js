import React from "react";

function Error(props) {
  const { status, statusText } = props.error;
  return (
    <section className="error">
      <p>Error: {status}</p>
      <p>{statusText}</p>
    </section>
  );
}

export default Error;
