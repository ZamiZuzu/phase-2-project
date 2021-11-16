import React from 'react'
import * as image from '../images/placeholder.png'

function ObjectCard({ record }) {
    // console.log(record.primaryimageurl)
    // console.log(typeof record.primaryimageurl)
    if (record.primaryimageurl === undefined || record.primaryimageurl === null) record.primaryimageurl = image.default;
    // if (record.primaryimageurl === undefined || record.primaryimageurl === null) return null;

    return (
        <div className="ui card">
            <div className="image">
                <img src={record.primaryimageurl} alt={record.title + " image"} />
            </div>
            <div className="content">
                <h3 className="header">{record.title}</h3>
                <div className="objectnumber"><strong>Object Number:</strong> {record.objectnumber}</div>
                <div className="description">{record.classification}</div>
            </div>
            <div className="ui bottom attached button">
                <i className="add icon"></i>
                Add Favorite
            </div>
        </div>

    )
}

export default ObjectCard
