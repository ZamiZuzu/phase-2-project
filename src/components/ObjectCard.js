import React from 'react'
import * as image from '../images/placeholder.png'

function ObjectCard({ record }) {
    return (
        <div class="ui card">
            <div class="image">
                <img src={record.primaryimageurl !== undefined ? record.primaryimageurl : image.default} alt="image" />
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
