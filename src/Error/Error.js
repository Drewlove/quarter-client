import React from "react";

//render different types of error based on props.status
//if 404 one type of error, etc.
//if 500, another type of error
//what are the common errors?
function Error(props) {
  return <section className="error">Error</section>;
}

export default Error;
