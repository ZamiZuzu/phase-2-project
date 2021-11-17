import { useState } from 'react'

function Filter({ handleCategoryChange, handleFilterClick, resetItems, itemList, setItemList, handleKeywordSearch, handleDisplayFavorites, databaseConnected }) {
    const [activeBtn, setActiveBtn] = useState("object")
    const [search, setSearch] = useState("")

    const itemElements = itemList?.map(item => {
        return <div
            className="column"
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => handleCategoryChange(item.parentCategory, item.id, item.name)}
        >{item?.name}</div>
    })

    function onFilterClick(e) {
        const selection = e.target.name;
        if (selection === activeBtn && itemList.length > 0) {
            setItemList([])
        }
        else if (selection === "object") resetItems()
        else if (selection === "search") return handleKeywordSearch(search)
        else if (selection === "favorites") return handleDisplayFavorites()
        else handleFilterClick(selection)
        setActiveBtn(() => selection)
        setSearch(() => "")
    }

    return (
        <>
            <div className="ui icon input" style={{ width: "300px" }}>
                <input type="text"
                    placeholder="Search..."
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    onKeyUp={e => {
                        if (e.key === 'Enter') handleKeywordSearch(search)
                    }}
                />
                <i className="search icon"></i>
            </div>
            <button
                className="ui button"
                name="search"
                onClick={e => onFilterClick(e)}
            >Search</button>
            <br /><br />
            <div className="ui buttons">
                <button
                    className={activeBtn === "object"
                        ? "ui positive button"
                        : "ui button"}

                    onClick={e => onFilterClick(e)}
                    name="object"
                >All Objects</button>
                <button
                    className={activeBtn === "classification"
                        ? "ui positive button"
                        : "ui button"}

                    onClick={e => onFilterClick(e)}
                    name="classification"
                >Classification</button>
                <button
                    className={activeBtn === "century"
                        ? "ui positive button"
                        : "ui button"}

                    onClick={e => onFilterClick(e)}
                    name="century"
                >Century</button>
                <button
                    className={activeBtn === "gallery"
                        ? "ui positive button"
                        : "ui button"}

                    onClick={e => onFilterClick(e)}
                    name="gallery"
                >Gallery</button>
                {databaseConnected ? <button
                    className={activeBtn === "favorites"
                        ? "ui positive button"
                        : "ui button"}

                    onClick={e => onFilterClick(e)}
                    name="favorites"
                >Favorites</button> : null}
            </div>
            <br /><br />
            <div className="ui four column grid">
                {itemElements ? itemElements : null}
            </div>
        </>

    )
}

export default Filter
