import React from 'react';
import { withFormik, Form, Field } from "formik";
import "../SignIn/Form.css";
import axios from "axios";
import * as Yup from "yup";

function SignUpForm({errors, touched}) {

    return(
        <div class="container">
            <p class="msg">A space where you can discover and connect with designers worldwide.</p>
            <p class="title">Create Account</p>
            <Form className="form signUpForm">
                <div class="card">

                {touched.fname && errors.fname && <p class="error">{errors.fname}</p>} 

                <lable>First Name</lable>
                    <Field className="input firstNameField"
                        type="text"
                        name="fname" />
                </div>                        {/*  LastName is not accepted by the server form is working if we remove it */}
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
            {touched.firstName && errors.firstName && <p class="error">{errors.firstName}</p>} 
            {touched.email && errors.email && <p class="error">{errors.email}</p>}
            {touched.password && errors.password && <p class="error">{errors.password}</p>}
        </div>
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ fname, lastName, email, password }) {
        return {
            fname: fname || "",
            lastName: lastName || "", //have to be removed too 
            email: email || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Not a valid email")
          .required("Please enter your email"),
        password: Yup.string()

          .min(8)
          .required(),
        fname: Yup.string()

          .min(8, "Password needs to be atleast 8 characters long")
          .required("Please enter a password"),
        firstName: Yup.string()

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




