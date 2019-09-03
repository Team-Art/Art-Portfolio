import React from 'react'
import { Image, Modal } from 'semantic-ui-react'
import EditIcon from "./EditIcon.svg";

import DescriptionForm from './DescriptionForm';



 
const editIcon={
  zIndex: "2",
  position: "absolute",
  cursor:"pointer",
  marginLeft: "auto",
}
const styleHeader={
  textAlign: "center",
  fontSize: "25px",
}

 const ModalModalExample = (props) => (

  
  <Modal trigger={<img  src={EditIcon} style={editIcon}  alt="Edit Icon"/>}>
    <Modal.Header style={styleHeader}>{props.as.fname} {props.as.fname}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.as.src} />
      <Modal.Description>
        {/* <Header>Default Profile Image</Header> */}
        <DescriptionForm trigger={<button/>}/>
        {/* <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p> */}
      </Modal.Description>
     
    </Modal.Content>
    
  </Modal>
  


  
)


  


 
export default ModalModalExample