import React, { useState, useEffect } from 'react'
import { API_KEY, BASE_URL } from './API';
import CardContainer from './CardContainer';

function Collection({ artData, setArtData }) {
    useEffect(() => {
        fetch(`${BASE_URL}/object?hasimage=1&size=100&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setArtData(data);
            });
    }, []);

    try {
        console.log(artData.info);
        console.log(artData.records);
    } catch { }

    function handleNext(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => setArtData(data))
    }

    const artElements = artData?.records?.map(record => {
        return <p key={record.objectid}>{record?.primaryimageurl ? <img alt="image" src={record?.primaryimageurl} width={"300px"}></img> : null}</p>
    })
    console.log(artData)
    return (
        <div>
            <h2><em>Showing {artData?.info?.totalrecords} Works</em></h2>
            <button onClick={() => handleNext(artData?.info?.next)}>Next</button>
            <h2>{JSON.stringify(artData.info)}</h2>
            <CardContainer />
        </div>
    )
}

export default Collection
