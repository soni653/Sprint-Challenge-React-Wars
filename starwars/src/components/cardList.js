import React, { useState, useEffect } from "react";
import axios from "axios";
import SwCard from "./card";

function StarwarList() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
      axios.get("https://swapi.co/api/people/").then(response => {
        console.log(response);
        setCharacters(response.data.results);
        console.log(response.data.results);
      });
    }, []);
  
    return (
      <div>
        {characters.map(character => {
          return (
            <SwCard
            name={character.name}
            birth_year={character.birth_year}
            eye_color={character.eye_color}
            />
          );
        })};
      </div>
    );
  }
  
  export default StarwarList;