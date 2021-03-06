import React from 'react';
import { withFormik, Form, Field } from "formik";
import "../SignIn/Form.css";
import axios from "axios";
import * as Yup from "yup";

function SignUpForm({errors, touched}) {

    return(
        <div className="container">
            <p className="msg">A space where you can discover and connect with designers worldwide.</p>
            <p className="title">Create Account</p>
            <Form className="form">
                <div className="card">

                <label>First Name</label>
                    <Field className="input firstNameField"
                        type="text"
                        name="fname" />
                </div>
                <div className="card">
                    <label>Email</label>
                    <Field className="input signUpEmailField"
                        type="email"
                        name="email" 
                        placeholder="email@example.com"/>
                </div>
                <div className="card">
                    <label>Password</label>
                    <Field className="input signUpPassField"
                        type="password"
                        name="password"
                        placeholder="Must have 8 characters" />
                </div>

                <button className="signUpButton" type="submit">Let's Go!</button>
                
            </Form>
            {touched.fname && errors.fname && <p className="error">{errors.fname}</p>} 
            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            {touched.password && errors.password && <p className="error">{errors.password}</p>}
        </div>
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ fname, email, password }) {
        return {
            fname: fname || "",
            email: email || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Not a valid email")
          .required("Please enter your email"),

        password: Yup.string()
          .min(8, "Password needs to be atleast 8 characters long")
          .required("Please enter a password"),

        fname: Yup.string()
            .required("Your first name is required"),
      }),
  
    handleSubmit(values) {
        console.log(values);
        const SINGIN_URL= "https://artportfoliobw.herokuapp.com/signup"
        axios   

            .post(SINGIN_URL, values)

            .then(res => {
                localStorage.setItem(
                    "token", 
                    res.data.token
                )
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    }
})(SignUpForm);

export default FormikSignUpForm




