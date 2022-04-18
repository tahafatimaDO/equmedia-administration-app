import React from "react";

export const withProperties = (props = {}) => (Component: React.ReactNode) => {
  if (React.isValidElement(Component)) {
    return React.cloneElement(Component, props);
  }
  return Component;
};