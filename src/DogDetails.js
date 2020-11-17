import React from 'react';
import { useParams } from "react-router-dom";
import "./DogDetails.css"

function DogDetails({dogs}) {
  const { name } = useParams();
  // const [src, setSrc] = useState(null);

  

  let specificDog = dogs.find(dog => dog.name === name)
  let facts = specificDog.facts.map((fact, idx) => <li key={idx}><b>{fact}</b></li>);

  return (
    <div>
    <h2>Here's {specificDog.name}</h2>
    <img src={specificDog.src} alt={specificDog.name} />
    <p>Age is: {specificDog.age}</p>
      <ul>
        {facts}
      </ul>
    </div>
  );
}

{/* <h2>Here's is {dog[0].name}</h2>
<img src={dog[0].src} alt={dog[0].name} />
<p>Age is: {dog[0].age}</p> */}


export default DogDetails;