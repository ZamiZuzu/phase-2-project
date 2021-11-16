import React, { useEffect, useState } from "react";
import {API_KEY, BASE_URL} from "./API.js";

function App() {
  const [artObjects, setArtObjects] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/object?period=5135&size=483&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setArtObjects(data);
      });
  }, []);

  console.log(artObjects);

  return (
    <div>
      <h1>Harvard Art</h1>
      <h2></h2>
      <img src={artObjects.primaryimageurl}/>
    </div>
  )
}

export default App;
