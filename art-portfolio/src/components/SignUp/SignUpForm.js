import React from 'react';
import { withFormik, Form, Field } from "formik";
import "../SignIn/Form.css"

function SignUpForm() {

    return(
        <div class="container">
            <p class="msg">A space where you can discover and connect with designers worldwide.</p>
            <p class="title">Create Account</p>
            <Form className="form">
                <lable class="firstNameText">First Name</lable>
                    <Field className="input firstNameField"
                        type="text"
                        name="firstName" />
                
                <lable class="lastNameText"> Last Name</lable>
                    <Field className="input lastNameField"
                        type="text"
                        name="lastName" />
                
                <lable class="signUpEmailText">Email</lable>
                    <Field className="input signUpEmailField"
                        type="email"
                        name="email" 
                        placeholder="email@example.com"/>
                
                <lable class="signUpPassText">Password</lable>
                    <Field className="input signUpPassField"
                        type="password"
                        name="password"
                        placeholder="Must have 8 characters" />
                
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