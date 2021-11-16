import React from 'react'
import * as image from '../images/placeholder.png'

function ObjectCard({ record }) {
    console.log(record.primaryimageurl)
    console.log(typeof record.primaryimageurl)
    if (record.primaryimageurl === undefined || record.primaryimageurl === null) record.primaryimageurl = image.default;

    return (
        <div class="ui card">
            <div class="image">
                <img src={record.primaryimageurl} alt="image" />
            </div>
            <div class="content">
                <h3 class="header">{record.title}</h3>
                <div class="objectnumber"><strong>Object Number:</strong> {record.objectnumber}</div>
                <div class="description">{record.classification}</div>
            </div>
            <div class="ui bottom attached button">
                <i class="add icon"></i>
                Add Favorite
            </div>
        </div>

    )
}

export default ObjectCard
