import React from 'react';
import { withFormik, Form, Field } from "formik";

function SignUpForm() {

    return(
        <div>
            <Form>
            <lable>
                    First Name
                    <Field
                        type="text"
                        name="firstName" />
                </lable>
                <lable>
                    Last Name
                    <Field
                        type="text"
                        name="lastName" />
                </lable>
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

const FormikSignUpForm = withFormik({
    mapPropsToValues({ firstName, lastName, email, password }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            password: password || ""
        };
    },
  
    handleSubmit(values) {
        console.log(values);
    }
})(SignUpForm);

export default FormikSignUpForm