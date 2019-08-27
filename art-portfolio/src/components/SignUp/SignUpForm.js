import React from 'react';
import { withFormik, Form, Field } from "formik";
import "../SignIn/Form.css"

function SignUpForm() {

    return(
        <div class="container">
            <p class="msg">A space where you can discover and connect with designers worldwide.</p>
            <p class="title">Create Account</p>
            <Form className="form signUpForm">
                <div class="card">
                <lable>First Name</lable>
                    <Field className="input firstNameField"
                        type="text"
                        name="firstName" />
                </div>
                <div class="card">
                <lable> Last Name</lable>
                    <Field className="input lastNameField"
                        type="text"
                        name="lastName" />
                </div>
                <div class="card">
                <lable>Email</lable>
                    <Field className="input signUpEmailField"
                        type="email"
                        name="email" 
                        placeholder="email@example.com"/>
                </div>
                <div class="card">
                <lable>Password</lable>
                    <Field className="input signUpPassField"
                        type="password"
                        name="password"
                        placeholder="Must have 8 characters" />
                </div>
                <button class="signUpButton" type="submit">Let's Go!</button>
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