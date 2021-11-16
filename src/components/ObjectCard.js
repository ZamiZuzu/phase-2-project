import React from 'react'
import * as image from '../images/placeholder.png'

function ObjectCard({ record }) {
    if (record.primaryimageurl === undefined || record.primaryimageurl === null) record.primaryimageurl = image.default;

    return (
        <div className="ui card">
            <div className="image">
                <img src={record.primaryimageurl} alt={record.title} />
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
