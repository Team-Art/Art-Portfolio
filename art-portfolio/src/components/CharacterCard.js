import React from "react";
import { Link } from 'react-router-dom';

//*************************(STYLE)********************************* */

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

//********************************************************** */
 

export default function CharacterCard (props) {
  const { character } = props;

return (     
    <div style={style}>
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
