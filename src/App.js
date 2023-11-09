import "./styles.css";
import Character from "./Character";
import mvp from "mvp.css";
import axios from "axios";
import { useState, useEffect } from "react";
/*********
    
    Name: Zachery Jordan
    Date: 2023-10-30
    Description: Displaying JSON data from an Open Data dataset for starwars information specifaly character info using reactjs.

*********/

export default function App() {
  // variable to hold data and set the data
  const [characters, setCharacters] = useState([]);

  // using axion to fetch data from the API and set the data to setCharater
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((response) => {
      setCharacters(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div>
        {characters.map((people, index) => (
          <Character
            key={index}
            name={people.name}
            birth_year={people.birth_year}
            gender={people.gender}
          />
        ))}
      </div>
    </div>
  );
}
