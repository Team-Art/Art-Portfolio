import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

 
export default function CharacterList() {
  
  const[characters, setCharacters]=useState([])
   console.log('usestate', characters);
   

  useEffect(() => {
    
    axios
    .get(`https://artportfoliobw.herokuapp.com/`)
        .then(response => {setCharacters(response.data)})
       
        .catch(error => console.log('Unexpected Error: ',error))
  }, []);


  return (
    <section className="character-list grid-view" style={{marginBottom: 200}}>

      {characters.filter( post => post.likes > 2500 ).map((character,index) => <CharacterCard key={index} character={character}/>)}
      
    </section>
  );
};