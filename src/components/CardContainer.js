import React from 'react'
import ObjectCard from './ObjectCard';
import { nanoid } from 'nanoid'

function CardContainer({ artInfo, artRecords, handleNext }) {
    const artElements = artRecords?.map(record => {
        return <ObjectCard key={nanoid()} record={record} />
    })

    return (
        <div>
            <br />
            <h2 className="ui header"><em>Showing {artRecords?.length} of {artInfo?.totalrecords} Works</em></h2>
            <div className="ui four cards">
                {artElements}
            </div>
            <button className="ui primary button" onClick={() => handleNext()} style={{ marginTop: "15px" }}>Load More...</button>
        </div>
    )
}

export default CardContainer