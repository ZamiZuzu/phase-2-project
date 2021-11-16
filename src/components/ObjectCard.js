import React from 'react'
import * as image from '../images/placeholder.png'

function ObjectCard({ record }) {
    console.log(record.primaryimageurl)
    console.log(typeof record.primaryimageurl)
    return (
        <div class="ui card">
            <div class="image">
                <img src={record.primaryimageurl !== undefined ? record.primaryimageurl : image.default} alt="image" />
            </div>
            <div class="content">
                <div class="header">{record.name}</div>
                <div class="objectnumber">{record.objectnumber}</div>
                <div class="description">{record.description}</div>
            </div>
            <div class="ui bottom attached button">
                <i class="add icon"></i>
                Add Favorite
            </div>
        </div>

    )
}

export default ObjectCard
