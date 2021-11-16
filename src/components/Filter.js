// import FilterSearch from "./FilterSearch";
import { useState } from "react";
import { API_KEY, BASE_URL } from "./API";

function Filter() {
    const [itemList, setItemList] = useState([]);

    function handleFilterClick(category) {
        fetch(`${BASE_URL}/${category}?&size=1000&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const unsortedList = data.records;
                const sortedList = unsortedList.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
                setItemList(sortedList);
            });
    }

    const itemElements = itemList?.map(category => {
        return <div className="column" key={category.id}>{category?.name}</div>
    })


    return (
        <>
            <div class="ui buttons">
                <button class="ui button" name="object">All Objects</button>
                <button class="ui button" onClick={e => handleFilterClick(e.target.name)} name="classification">Classification</button>
                <button class="ui button" onClick={e => handleFilterClick(e.target.name)} name="worktype">Work Type</button>
                <button class="ui button" onClick={e => handleFilterClick(e.target.name)} name="technique">Technique / Medium</button>
                <button class="ui button" onClick={e => handleFilterClick(e.target.name)} name="period">Period</button>
                <button class="ui button" onClick={e => handleFilterClick(e.target.name)} name="place">Place</button>
                <button class="ui button" onClick={e => handleFilterClick(e.target.name)} name="century">Century</button>
                <button class="ui button" onClick={e => handleFilterClick(e.target.name)} name="culture">Culture</button>
                <button class="ui button" onClick={e => handleFilterClick(e.target.name)} name="gallery">Gallery</button>
            </div>
            <div className="ui four column grid">
                {itemElements ? itemElements : null}
            </div>
        </>

    )
}

export default Filter
