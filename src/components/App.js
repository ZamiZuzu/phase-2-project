
import { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import Filter from './Filter';
import { API_KEY, BASE_URL } from './API';

function App() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/object?hasimage=1&size=15&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setArtData(data);
      });
  }, []);

  function handleFilterSelection(category, id, name, setItemList) {
    console.log(category, id)
    fetch(`${BASE_URL}/object?${category}=${category === 'century' ? name : id}&size=15&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setArtData(data);
        setItemList([])
      })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Harvard Art Museums</h1>
      <Filter handleFilterSelection={handleFilterSelection} setArtData={setArtData} />
      <CardContainer artData={artData} setArtData={setArtData} />
    </div>
  )
}

export default App;