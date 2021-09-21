import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchByName } from "../../Redux/Actions/actions";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Search = () => {
//   const search = useSelector((state) => state.heroes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-white  ml-4">Search your Hero</h2>
      <Formik
        initialValues={{
          heroName: "",
        }}
        validate={(value) => {
          const errors = {};
          if (value.heroName === "") errors.heroName = "empty";
          return errors;
        }}
        onSubmit={(name) => {
          console.log(name);
          dispatch(searchByName(name));
        }}
      >
        <Form className="form-inline mb-5">
          <div className="form-group  mx-3 ">
            <Field
              className="form-control mb-2 ml-2 "
              id="heroName"
              name="heroName"
              placeholder="Batman"
            />

            <button className="btn btn-primary ml-2 mb-2" type="submit">
              Search
            </button>
          </div>
          <div className="block">
            <ErrorMessage
              name="heroName"
              component="div"
              className="text-danger"
            />
          </div>
        </Form>
      </Formik>

    </div>
  );
};

export default Search;
