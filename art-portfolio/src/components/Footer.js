import React from "react";
import "./Footer.css";


const footer={
display:"flex",
flexDirection:"column",
justifyContent:"center",
maxWidth:"1440px",
height:"150px",
background:"linear-gradient( #3F3356,  #1A051D)",
marginTop: "0px",
}

const upper={
display:"flex",
flexDirection:"row",
justifyContent:"center",
marginTop: "40px",
fontSize: "17px",
color: "#ffffff",
}
const lower={
display:"flex",
flexDirection:"row",
justifyContent:"space-evenly",
marginTop: "auto",
color:"#ffffff"
}

export default function Footer() {



return(
    <div style={footer} className="background">

     <ul style={upper}>
       <li>Browse</li>
       <li>Support</li>
       <li>Contact US</li>
     </ul>

     <ul style={lower}>

         <li>@2019, Art Station</li>
         <li>|</li>
         <li>Term of Service</li>
         <li>|</li>
         <li>Privacy Policy</li> 

     </ul>
    </div>
)


}

