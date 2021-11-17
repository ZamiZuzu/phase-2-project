import { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from './API';
import CardContainer from './CardContainer';
import Filter from './Filter';

import TopReturn from './TopReturn' ;
import Header from './Header';

function App() {
  const incrementVisible = 16;
  const [artInfo, setArtInfo] = useState([]);
  const [artRecords, setArtRecords] = useState([]);
  const [visible, setVisible] = useState(incrementVisible)
  const [itemList, setItemList] = useState([]);
  const [databaseConnected, setDatabaseConnected] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/object?hasimage=1&size=100&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setArtInfo(information => data.info)
        const workingRecords =
          data.records.filter(
            record => record.primaryimageurl !== null && record.primaryimageurl !== undefined
          );
        setArtRecords(records => [...workingRecords]);
      });
  }, [])

  function handleCategoryChange(category, id, name, size = 100) {
    console.log(category, id)
    fetch(`${BASE_URL}/object?${category}=${category === 'century' ? name : id}&hasimage=1&size=${size}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setArtRecords(data.records);
        setArtInfo(data.info)
      })
  }

  function handleNext() {
    setVisible(visible => visible + incrementVisible)
    if (visible >= parseInt(artInfo.totalrecords)) return true;
    if (visible >= artRecords.length) {
      fetch(artInfo.next)
        .then(response => response.json())
        .then(data => {
          const workingRecords =
            data.records.filter(
              record => record.primaryimageurl !== null && record.primaryimageurl !== undefined
            );
          const newData = [...artRecords, ...workingRecords]
          setArtRecords(() => newData)
          setArtInfo(() => data.info)
        })
    }
  }

  function handleFilterClick(category) {
    fetch(`${BASE_URL}/${category}?&size=1000&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const unsortedList = data.records;
        unsortedList.forEach(item => {
          item.parentCategory = category;
        })
        const sortedList = unsortedList.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setItemList(sortedList);
        setVisible(() => incrementVisible)
      });
  }

  function handleKeywordSearch(keyword) {
    fetch(`${BASE_URL}/object?keyword=${keyword}&hasimage=1&size=100&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const workingRecords =
          data.records.filter(
            record => record.primaryimageurl !== null && record.primaryimageurl !== undefined
          );
        const newData = [...artRecords, ...workingRecords]
        setArtRecords(data.records);
        setArtInfo(data.info)
        setVisible(() => incrementVisible)
      })
  }

  function resetItems() {
    fetch(`${BASE_URL}/object?hasimage=1&size=incrementVisible&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setItemList([])
        setVisible(incrementVisible)
      });
  }

  const visibleRecords = artRecords.slice(0, visible)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Harvard Art Museums</h1>
      <Header databaseConnected={databaseConnected} />
      <Filter
        handleCategoryChange={handleCategoryChange}
        handleFilterClick={handleFilterClick}
        resetItems={resetItems}
        itemList={itemList}
        handleKeywordSearch={handleKeywordSearch}
        />
      <CardContainer
        artInfo={artInfo}
        artRecords={visibleRecords}
        handleNext={handleNext}
        databaseConnected={databaseConnected}
        />
      <TopReturn/>
    </div>
  )
}

export default App;

//`${BASE_URL}/object?hasimage=1&keyword=${SEARCH_STRING}&size=100&apikey=${API_KEY}`