
import { useState, useEffect } from 'react';
import Collection from './Collection';
import Filter from './Filter';

function App() {
  const [artData, setArtData] = useState([]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Harvard Art Museums</h1>
      <Filter />
      {/* <Collection artData={artData} setArtData={setArtData} /> */}
    </div>
  )
}

export default App;