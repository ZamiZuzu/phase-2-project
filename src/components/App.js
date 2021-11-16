import { API_KEY, BASE_URL } from './API';
import { useState, useEffect } from 'react';

function App() {
  const [artObjects, setArtObjects] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/object?size=1&yearmade=2002&hasimage=1&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setArtObjects(data.records);
      });
  }, []);

  console.log(artObjects);

  return (
    <div>
      <h1>Harvard Art Museums</h1>
    </div>
  )
}

export default App;
