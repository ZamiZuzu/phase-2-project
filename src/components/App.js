import { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import Filter from './Filter';
import { API_KEY, BASE_URL } from './API';
import TopReturn from './TopReturn' ;

function App() {
  const [artData, setArtData] = useState([]);
  const [artInfo, setArtInfo] = useState([]);
  const [artRecords, setArtRecords] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/object?hasimage=1&size=16&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setArtData(data);
        setArtInfo(data.info)
        setArtRecords(data.records)
      });
  }, []);

  function handleFilterSelection(category, id, name, setItemList) {
    fetch(`${BASE_URL}/object?${category}=${category === 'century' ? name : id}&size=16&apikey=${API_KEY}`)
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
<<<<<<< HEAD
      <CardContainer artData={artData} setArtData={setArtData} />
      <TopReturn/>
=======
      <CardContainer artData={artData} setArtData={setArtData} artInfo={artInfo} artRecords={artRecords} setArtRecords={setArtRecords} />
>>>>>>> b0927b2d839ee10a3bee0adf38e2f5d57928c74c
    </div>
  )
}

export default App;

//`${BASE_URL}/object?hasimage=1&keyword=${SEARCH_STRING}&size=100&apikey=${API_KEY}`