import React, { useState, useEffect } from 'react'
import { API_KEY, BASE_URL } from './API';
// import CardContainer from './CardContainer';
import ObjectCard from './ObjectCard';

function CardContainer({ artData, setArtData }) {

    function handleNext(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => setArtData(data))
    }

    function handlePrevious(url) {
        const baseUrl = url.slice(0, url.indexOf("page=") + 5)
        const previousNumber = parseInt(url.slice(url.indexOf("page=") + 5)) - 2
        if (previousNumber < 1) return;
        fetch(baseUrl + (previousNumber > 0 ? previousNumber : 1))
            .then(res => res.json())
            .then(data => setArtData(data))
    }

    const artElements = artData?.records?.map(record => {
        // return <p key={record.objectid}>{record?.primaryimageurl ? <img alt="image" src={record?.primaryimageurl} width={"300px"}></img> : null}</p>
        return <ObjectCard key={record.id} record={record} />
    })
    // console.log(artData)


    return (
        <div>
            <br />
            <h2 className="ui header"><em>Showing {artData?.info?.totalrecords} Works</em></h2>
            <button className="ui primary button" onClick={() => handlePrevious(artData?.info?.next)}>Previous</button>
            <button className="ui primary button" onClick={() => handleNext(artData?.info?.next)}>Next</button>

            {/* <h2>{JSON.stringify(artData.info)}</h2> */}
            <div className="ui four cards">
                {artElements}
            </div>
            {/* <CardContainer /> */}
        </div>
    )
}

export default CardContainer
