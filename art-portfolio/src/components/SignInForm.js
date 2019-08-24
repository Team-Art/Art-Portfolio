import React from 'react';
import { withFormik, Form, Field } from "formik";
import "./SignInForm.css"

function SignInForm() {

    return(
        <div class="container">
            <Form className="form">
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
                <button type="submit">Let's Go!</button>
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