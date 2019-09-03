import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import axiosWithAuth from "./axiosAuth";


const description ={
    margin:"0px",  
    width: "410px", 
    height: "128px"
}
const formStyle={
    display:"flex",
    flexDirection:"column",
   
}
const formLable ={
    fontSize: "25px",
    margin: "0 auto",
}


function DescriptionForm({errors, touched}) {

    return(
        <div className="container-description">
            

            <Form  style={formStyle}>
            
                <lable style={formLable}>Description</lable>
                    <Field className="description"
                        component="textarea"
                        type="text"
                        name="description" 
                        placeholder="Please Type your new desecription"  style={description}/>

                <button type="submit">Let's Go!</button>
                {touched.description && errors.description && <p class="error">{errors.description}</p>}
               
                
            </Form>
        </div>
    )
}

const FormikDescriptionForm = withFormik({
    mapPropsToValues({ description }) {
        return {
           
            description: description || ""
        };
    },

    validationSchema: Yup.object().shape({
        // email: Yup.string()
        //   .email("Not a valid email")
        //   .required("Please enter your email"),
       
      }),
  
    handleSubmit(values) {
        console.log(values);
        console.log('test');
        const testtoken = localStorage;
        const URL = "https://artportfoliobw.herokuapp.com/photid";
         

        axiosWithAuth().put(URL, values)

            .then(res => {
                
                
                console.log(res)
            })
            .catch(err => {
                console.log(err.response.data)
            });
    }
})(DescriptionForm);

export default FormikDescriptionForm