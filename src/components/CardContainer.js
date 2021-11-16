import React from 'react'
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
        return <ObjectCard key={record.id} record={record} />
    })

    return (
        <div>
            <br />
            <h2 className="ui header"><em>Showing {artData?.info?.totalrecords} Works</em></h2>
            <div className="ui four cards">
                {artElements}
            </div>
            <button className="ui primary button" onClick={() => handlePrevious(artData?.info?.next)}>Previous</button>
            <button className="ui primary button" onClick={() => handleNext(artData?.info?.next)} style={{ marginTop: "15px" }}>Next</button>
        </div>
    )
}

export default CardContainer