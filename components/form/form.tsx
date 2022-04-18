import { FormikProps } from "formik";
import React from "react";
import { withProperties } from "../../utils/componentUtils";

type FormProps = {
  children: React.ReactNode
  formik: FormikProps<any>,
}

const Form = ({ children, formik }: FormProps) => {
  const sections = React.Children.map(children, withProperties({ formik }));

  return (
    <form onSubmit={formik.handleSubmit}>
      {sections}
    </form>
  )
};

export default Form;
