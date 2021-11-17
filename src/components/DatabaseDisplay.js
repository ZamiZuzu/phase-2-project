import React, { useState } from 'react'

function DatabaseDisplay({ databaseConnected }) {
    const [hover, setHover] = useState(false)

    return (
        <div
            class="ui label"
            style={{
                position: 'fixed',
                top: '0',
                left: '0'
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>

            <i class="database icon"></i> {databaseConnected ? "Connected!" : "No connection to server!"}
            {!databaseConnected && hover && <div class="ui red message">
                For full functionality, you must connect to the database.
            </div>}
            {databaseConnected && hover && <div class="ui blue message">
                Connection established successfully with json-server!
            </div>}
        </div>
    )
}

export default DatabaseDisplay
