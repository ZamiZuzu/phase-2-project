// import FilterSearch from "./FilterSearch";
import { useState } from "react";
import { API_KEY, BASE_URL } from "./API";

function Filter({ handleFilterSelection, setArtData }) {
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
        fetch(`${BASE_URL}/object?hasimage=1&size=15&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setArtData(data);
            });
    }

    const itemElements = itemList?.map(item => {
        // console.log(item)
        return <div className="column" key={item.id} onClick={() => handleFilterSelection(item.parentCategory, item.id, item.name, setItemList)}>{item?.name}</div>
    })


    return (
        <>
            <div class="ui buttons">
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