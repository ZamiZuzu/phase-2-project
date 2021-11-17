import React from 'react'
import ObjectCard from './ObjectCard';
import { nanoid } from 'nanoid'

function CardContainer({ artInfo, artRecords, handleNext, databaseConnected }) {
    const artElements = artRecords?.map(record => {
        return <ObjectCard
            key={nanoid()}
            record={record}
            databaseConnected={databaseConnected}
        />
    })

    return (
        <div>
            <br />
            <h2
                className="ui header">
                <em>Showing {artRecords?.length} of {artInfo?.totalrecords} Works</em>
            </h2>
            <div className="ui four cards">
                {artElements}
            </div>
            {artRecords?.length >= artInfo?.totalrecords
                ? null
                : <button
                    className="ui primary button"
                    onClick={() => handleNext()}
                    style={{ marginTop: "15px" }}
                >Load More...</button>}
        </div>
    )
}

export default CardContainer

