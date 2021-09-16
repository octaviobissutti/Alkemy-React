import React, { useState } from "react";
import { useHistory } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const [successForm, setSuccesForm] = useState(false);
  const history = useHistory();

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
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) { 
            errors.email = "Email is invalid";
          }  
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const { ...data } = values; //Averiguar porqué necesita destructurar??
          try {
            const response = await axios.post("http://challenge-react.alkemy.org/", data);
            if(response && response.data) {
            const token = response.data;
            window.localStorage.setItem('user', JSON.stringify(token));
            resetForm();
            setSuccesForm(true);
            setTimeout(() => setSuccesForm(false), 5000);
            // history.push('/');
            }

          } catch(err) {
             alert('Invalid credentials')
             resetForm();
          }
        }}
      >
        {({ errors }) => (
          <div className="modal-dialog text-center">
            <div className="col-sm 8 main-section">
          <Form className="col-12">
            <div className="form-group">
              <label htmlFor="email" placeholder="Type your email">
                Email
              </label>
              <Field className="form-control" id="email" name="email"/>
              <ErrorMessage name="email" component={() => <div>{errors.email}</div>}/>
            </div>
            <div className="form-group">
              <label htmlFor="password" placeholder="Type your password">
                Password
              </label>
              <Field className="form-control" type="password" id="password" name="password" />
              <ErrorMessage name="password" component={() => <div>{errors.password}</div>}/>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
            {successForm && <img src="https://fondosmil.com/fondo/14644.jpg" alt="superman" width="100%" height="100%"/>}
          </Form>
          </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;

