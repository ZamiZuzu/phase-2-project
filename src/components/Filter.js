import { useState } from 'react'

function Filter({ handleCategoryChange, handleFilterClick, resetItems, itemList }) {
    const [activeBtn, setActiveBtn] = useState("object")

    const itemElements = itemList?.map(item => {
        return <div className="column" key={item.id} style={{ cursor: "pointer" }} onClick={() => handleCategoryChange(item.parentCategory, item.id, item.name)}>{item?.name}</div>
    })

    function onFilterClick(e) {
        const selection = e.target.name;
        setActiveBtn(selection)
        if (selection === "object") resetItems()
        else if (selection === "favorites") console.log("FAVORITES - NOT IMPLEMENTED")
        else handleFilterClick(selection)
    }

    return (
        <>
            <div className="ui buttons">
                <button className={activeBtn === "object" ? "ui positive button" : "ui button"} onClick={e => onFilterClick(e)} name="object">All Objects</button>
                <button className={activeBtn === "classification" ? "ui positive button" : "ui button"} onClick={e => onFilterClick(e)} name="classification">Classification</button>
                <button className={activeBtn === "century" ? "ui positive button" : "ui button"} onClick={e => onFilterClick(e)} name="century">Century</button>
                <button className={activeBtn === "gallery" ? "ui positive button" : "ui button"} onClick={e => onFilterClick(e)} name="gallery">Gallery</button>
                <button className={activeBtn === "favorites" ? "ui positive button" : "ui button"} onClick={e => onFilterClick(e)} name="favorites">Favorites</button>
            </div><br /><br />
            <div className="ui four column grid">
                {itemElements ? itemElements : null}
            </div>
        </>

    )
}

export default Filter
