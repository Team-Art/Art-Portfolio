import React from 'react';
import { withFormik, Form, Field } from "formik";
import "./Form.css"

function SignInForm() {

    return(
        <div class="container">
            

            <Form className="form signInForm">
            <p>Sign In</p>
                <lable> Email </lable>
                    <Field className="input"
                        type="email"
                        name="email"
                        placeholder="email@example.com" />

                <lable> Password </lable>
                    <Field className="input"
                        type="password"
                        name="password" 
                        placeholder="Must have 8 characters" />

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