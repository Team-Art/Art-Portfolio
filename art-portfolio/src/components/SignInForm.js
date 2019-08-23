import React, {useState} from 'react';
import { withFormik, Form, Field } from "formik";

function SignInForm() {

    return(
        <div>
            <Form>
                <lable>
                    Email
                    <Field
                        type="email"
                        name="email" />
                </lable>
                <lable>
                    Password
                    <Field
                        type="password"
                        name="password" />
                </lable>
                <button>Let's Go!</button>
            </Form>
        </div>
    )
}

const FormikSignInForm = withFormik({
    mapPropsToValues({ email, password }) {
      return {
        email: email || "",
        password: password || ""
      };
    },
  
    handleSubmit(values) {
      console.log(values);
    }
  })(SignInForm);

export default FormikSignInForm