import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'
import EditIcon from "./EditIcon.svg";



 
const editIcon={
  zIndex: "2",
  position: "absolute",
  cursor:"pointer",
  marginLeft: "auto",
}

 const ModalModalExample = (props) => (

  
  <Modal trigger={<img  src={EditIcon} style={editIcon}  alt="Edit Icon"/>}>
    <Modal.Header>{props.as.fname} {props.as.fname}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  


  
)


  


 
export default ModalModalExample