import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";



function DogList({dogPics}) {
  const { name } = useParams();
  // const [src, setSrc] = useState(null);

  // useEffect(function loadGiphyImgToSrc() {
  //   async function fetchGif(searchTerm) {
  //     let res = await axios.get(`${GIPHY_URL}/gifs/search`, {
  //       params: { q: searchTerm, api_key: "dc6zaTOxFJmzC" }
  //     });
  //     setSrc(res.data.data[0].images.original.url);
  //   }
  //   fetchGif(name);
  // }, [name]);
  
  console.log(dogPics)
let img = dogPics.map(dog =>  <h3> <Link to={dog}> {dog.name}</Link></h3> );
  return (
    <div>
      <h1>Here's a pic of {name}</h1>
      {img}
    </div>
  );
}

export default DogList;