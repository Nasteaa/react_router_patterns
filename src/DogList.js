import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";



function DogList({dogs}) {
  const { name } = useParams();
  // const [src, setSrc] = useState(null);

  
  console.log(dogs);
let img = dogs.map(dog => <h3><Link to={`/dogs/${dog.name}`}> {dog.name}</Link></h3> );
  return (
    <div>
      <h1>Here's a pic of {name}</h1>
      {img}
    </div>
  );
}

export default DogList;