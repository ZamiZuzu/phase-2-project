import React from 'react'
import ObjectCard from './ObjectCard';

function CardContainer({ artData, setArtData, artInfo, artRecords, setArtRecords }) {
    function handleNext(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setArtRecords(old => [...old, data.records])
                // console.log("artRecords:", artRecords)
                // console.log("New Data:", data.records)
            })
    }

    function handlePrevious(url) {
        const baseUrl = url.slice(0, url.indexOf("page=") + 5)
        const previousNumber = parseInt(url.slice(url.indexOf("page=") + 5)) - 2
        if (previousNumber < 1) return;
        fetch(baseUrl + (previousNumber > 0 ? previousNumber : 1))
            .then(res => res.json())
            .then(data => setArtData(data))
    }

<<<<<<< HEAD
    const artElements = artData?.records?.map(record => {
=======
    const artElements = artRecords?.map(record => {
        // console.log(record.title)
>>>>>>> b0927b2d839ee10a3bee0adf38e2f5d57928c74c
        return <ObjectCard key={record.id} record={record} />
    })

    return (
        <div>
            <br />
            <h2 className="ui header"><em>Showing {artRecords?.length} of {artInfo?.totalrecords} Works</em></h2>
            <div className="ui four cards">
                {artElements}
            </div>
            {/* <button className="ui primary button" onClick={() => handlePrevious(artData?.info?.next)}>Previous</button> */}
            <button className="ui primary button" onClick={() => handleNext(artInfo?.next)} style={{ marginTop: "15px" }}>Next</button>
        </div>
    )
}

export default CardContainer