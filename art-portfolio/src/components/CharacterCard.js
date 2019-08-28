import React from "react";
import ModalEdit from "./Modal";
import EditIcon from "./EditIcon.svg";
import { Link } from 'react-router-dom';

const style = {
  
  textAlign: "center",
  width: "284px",
  height:"209px",
  margin:"60px 90px",
 
};

const image={
  position: "inherit",
  width:"284px",
  height:"209px",
  borderRadius:"10px",
  zIndex:"-1",
  marginTop: "48px",
  cursor:"pointer",
}

const editIcon={
    zIndex: "2",
    position: "absolute",
    marginLeft: "170px",
    cursor:"pointer",
}


 

export default function CharacterCard (props) {
  const { character } = props;

  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);
   

  return (     
    
    <div style={style}>
      

   
      {/* <img  src={EditIcon} style={editIcon}  className="EditIcon" alt="Edit Icon"/>
      {EditOnclick ? (<ModalEdit/>) : console.log('test')}
      <img onClick={()=> {handleClick(); forceUpdate() }} style={image} src={character.src}/> */}
      <Link  to={`/post/${props.character.photoId}`}>
            <img style={image}
            src={props.character.src} 
            key={props.character.artistId} 
            alt={props.character.fname} 
            className='recent-posts' 
            />
            </Link>

    <h2>{character.fname}</h2>
  </div>

  )
}
// let EditOnclick = false;

// function handleClick (){
//   EditOnclick?  EditOnclick= false: EditOnclick= true; 
//   setTimeout(()=>{
//     EditOnclick=false;
    
//   }, 1000)
//  console.log('HandleClick', EditOnclick);

// }
