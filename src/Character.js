import React from "react";

/*********
    
    Name: Zachery Jordan
    Date: 2023-10-30
    Description: a function to return a div that will display the name, birth_year, and gender names from the api that is being fetched in the App.js file if the Character function is imported.

*********/

function Character({ name, birth_year, gender }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Date of Birth: {birth_year}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default Character;
