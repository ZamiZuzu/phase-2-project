import { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import Filter from './Filter';
import { API_KEY, BASE_URL } from './API';

function App() {
  const [artInfo, setArtInfo] = useState([]);
  const [artRecords, setArtRecords] = useState([]);
  const [visible, setVisible] = useState(8)

  useEffect(() => {
    fetch(`${BASE_URL}/object?hasimage=1&size=100&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setArtInfo(information => data.info)
        const workingRecords = data.records.filter(record => record.primaryimageurl !== null && record.primaryimageurl !== undefined)
        // console.log("workingrecslength", workingRecords.length)
        // console.log(workingRecords)
        setArtRecords(records => [...workingRecords])
      });
  }, [])

  function handleCategoryChange(category, id, name, size = 100) {
    console.log(category, id)
    fetch(`${BASE_URL}/object?${category}=${category === 'century' ? name : id}&size=${size}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setArtRecords(data.records);
        setArtInfo(data.info)
      })
  }

  function handleNext() {
    // console.log(artInfo.next)
    // console.log("artrecords.length", artRecords.length)
    // console.log("visible", visible)
    setVisible(visible => visible + 8)
    if (visible >= parseInt(artInfo.totalrecords)) return true;
    if (visible >= artRecords.length) {
      fetch(artInfo.next)
        .then(res => res.json())
        .then(data => {
          const workingRecords = data.records.filter(record => record.primaryimageurl !== null && record.primaryimageurl !== undefined)
          // if (workingRecords.length === 0)
          // console.log("workingrecslength", workingRecords.length)
          // console.log(workingRecords)
          const newData = [...artRecords, ...workingRecords]
          setArtRecords(() => newData)
          setArtInfo(() => data.info)
        })
    }
  }

  const visibleRecords = artRecords.slice(0, visible)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Harvard Art Museums</h1>
      <Filter handleCategoryChange={handleCategoryChange} />
      <CardContainer artInfo={artInfo} artRecords={visibleRecords} setArtRecords={setArtRecords} handleNext={handleNext} visible={visible} />
    </div>
  )
}

export default App;