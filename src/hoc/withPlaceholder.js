import React from "react";

const withPlaceholder = (WrappedComponent) => (props) => (
  <WrappedComponent placeholder="Nom du chef" {...props} />
);

export default withPlaceholder;
