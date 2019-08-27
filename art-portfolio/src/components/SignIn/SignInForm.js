import React from 'react';
import { withFormik, Form, Field } from "formik";
import "./Form.css"

function SignInForm() {

    return(
        <div class="container">
            <p>Sign In</p>

            <Form className="form">
                <lable> Email </lable>
                    <Field className="input"
                        type="email"
                        name="email" />

                <lable> Password </lable>
                    <Field className="input"
                        type="password"
                        name="password" />

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