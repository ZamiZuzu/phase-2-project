function DetailDisplay({record}) {
    return (
        <div className="ui card" id="detailDisplay">
            <div className="image">
                <img src={record.primaryimageurl} alt={record.title + " image"} />
            </div>
            <div className="content">
                <h3 className="header">{record.title}</h3>
                <div className="description">{record.description}</div>
                <div className="classification"><strong>Classification:</strong> {record.classification}</div>
                <div className="date"><strong>Date:</strong> {record.date}</div>
                <div className="objectnumber"><strong>Object Number:</strong> {record.objectnumber}</div>
            </div>
        </div>
    )
}

export default DetailDisplay

// image
// title 
// description
// classification 
// date 
// object number 
