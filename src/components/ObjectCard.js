import React from 'react'

function ObjectCard({ record, databaseConnected, databaseRecords, handleAddFavorite, handleRemoveFavorite, handleSetCurrentSelection }) {
    if (record.primaryimageurl === undefined || record.primaryimageurl === null) return null;

    function FavoriteButton() {
        if (databaseConnected) {
            if (databaseRecords.includes(record.id)) {
                return (
                    <div
                        className="ui buttom attached button" onClick={() => handleRemoveFavorite(record.id)}>
                        <i className="remove icon"></i>
                        Remove from Favorites
                    </div>)
            } else {
                return (
                    <div className="ui bottom attached button" onClick={() => handleAddFavorite(record)}>
                        <i className="add icon"></i>
                        Add Favorite
                    </div>
                )
            }
        }
        return null;
    }

    return (
        <div className="ui card">
            <div className="image" onClick={() => handleSetCurrentSelection(record)}>
                <img src={record.primaryimageurl} alt={record.title + " image"} />
            </div>
            <div className="content">
                <h3 className="header">{record.title}</h3>
                <div className="objectnumber"><strong>Object Number:</strong> {record.objectnumber}</div>
                <div className="description">{record.classification}</div>
            </div>
            <FavoriteButton />
        </div>

    )
}

export default ObjectCard