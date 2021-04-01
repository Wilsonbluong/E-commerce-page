import React from "react";
import { useFormik } from "formik";

import {
  FooterLinkTitle,
  Form,
  FormInput,
  FooterSignUp,
  FooterSubtext,
  FormButton,
  FormErrors,
  Errors,
} from "./styles/FooterSignUpForm";

const initialValues = {
  email: "",
  mobile: "",
};

const onSubmit = (values, submitProps) => {
  console.log(values);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validate = (values) => {
  const errors = {};
  console.log(values.errors);
  if (!values.email) {
    errors.email = "Enter a valid email address.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format";
  }

  if (!values.mobile) {
    errors.mobile = "Enter a valid phone number.";
  }

  return errors;
};

const FooterSignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <FooterSignUp>
      <FooterLinkTitle>Sign up for email</FooterLinkTitle>
      <FooterSubtext>
        Get access to exclusive offers and promotions, new arrivals & more!
      </FooterSubtext>
      <Form onSubmit={formik.handleSubmit}>
        <FormInput
          name="email"
          id="email"
          type="email"
          placeholder="Email Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <FormInput
          name="mobile"
          id="mobile"
          type="text"
          placeholder="Mobile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        <FooterSubtext>
          California Residents: I agree to opt-in to financial incentives
          offered by PacSun. For more information about this including material
          terms please visit our Privacy Policy.
        </FooterSubtext>
        <FormButton type="submit">sign up</FormButton>
        <FormErrors>
          {formik.touched.email && formik.errors.email ? (
            <Errors>{formik.errors.email}</Errors>
          ) : null}
          {formik.touched.mobile && formik.errors.mobile ? (
            <Errors>{formik.errors.mobile}</Errors>
          ) : null}
        </FormErrors>
      </Form>
    </FooterSignUp>
  );
};

export default FooterSignUpForm;
