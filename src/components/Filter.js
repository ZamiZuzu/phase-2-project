// import FilterSearch from "./FilterSearch";
import { useState } from "react";
import { API_KEY, BASE_URL } from "./API";

function Filter({ handleCategoryChange }) {
    const [itemList, setItemList] = useState([]);

    function handleFilterClick(category) {
        fetch(`${BASE_URL}/${category}?&size=1000&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const unsortedList = data.records;
                unsortedList.forEach(item => {
                    item.parentCategory = category;
                })
                const sortedList = unsortedList.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
                setItemList(sortedList);
            });
    }

    function resetItems() {
        fetch(`${BASE_URL}/object?hasimage=1&size=16&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                // setArtData(data);
                setItemList([])
            });
    }

    const itemElements = itemList?.map(item => {
        // console.log(item)
        return <div className="column" key={item.id} style={{ cursor: "pointer" }} onClick={() => handleCategoryChange(item.parentCategory, item.id, item.name)}>{item?.name}</div>
    })


    return (
        <>
            <div className="ui buttons">
                <button className="ui button" onClick={resetItems} name="object">All Objects</button>
                <button className="ui button" onClick={e => handleFilterClick(e.target.name)} name="classification">Classification</button>
                <button className="ui button" onClick={e => handleFilterClick(e.target.name)} name="century">Century</button>
                <button className="ui button" onClick={e => handleFilterClick(e.target.name)} name="gallery">Gallery</button>
                <button className="ui button" name="">Favorites</button>
            </div>
            <div className="ui four column grid">
                {itemElements ? itemElements : null}
            </div>
        </>

    )
}

export default Filter
