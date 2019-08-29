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
                {touched.firstName && errors.firstName && <p class="error">{errors.firstName}</p>} 
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
                {touched.email && errors.email && <p class="error">{errors.email}</p>}
                <lable>Email</lable>
                    <Field className="input signUpEmailField"
                        type="email"
                        name="email" 
                        placeholder="email@example.com"/>
                </div>
                <div class="card">
                {touched.password && errors.password && <p class="error">{errors.password}</p>}
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

    validationSchema: Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .min(8)
          .required(),
        firstName: Yup.string()
            .required("Your first name is required"),
      }),
  
    handleSubmit(values) {
        console.log(values);
        axios   
            .post("server goes here", values)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    }
})(SignUpForm);

export default FormikSignUpForm




//**************************************************************** */


// axios.post("https://artportfoliobw.herokuapp.com/signup", creds)
//       .then(res => {
//         localStorage.setItem(
//           "token",
//           res.data.token
//         );
        
//       })
//       .catch(err => {
//         console.log(err)
       
//       });

    
 //********************************************************************** */