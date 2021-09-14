import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Login = () => {
  const [successForm, setSuccesForm] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};

          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errors.email = "Email is invalid";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          //   else if (
          //     !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(values.password)
          //   ) {
          //     errors.password =
          //       "Password requires 8-16 digits, at least one number and one upper case";
          //   }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const { ...data } = values; //Averiguar porqué necesita destructurar??
          const res = await axios.post(
            "http://challenge-react.alkemy.org/",
            data
          );
          resetForm();
          setSuccesForm(true);
          setTimeout(() => setSuccesForm(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <label htmlFor="email" placeholder="Type your email">
                Email
              </label>
              <Field id="email" name="email" />
              <ErrorMessage
                name="email"
                component={() => <div>{errors.email}</div>}
              />
            </div>
            <div>
              <label htmlFor="password" placeholder="Type your password">
                Password
              </label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component={() => <div>{errors.password}</div>}
              />
            </div>
            <button type="submit">Submit</button>
            {successForm && <p>Success submit!</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
