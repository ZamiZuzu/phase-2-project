function DetailDisplay({ record }) {
    if (!record) return null;
    const { primaryimageurl, title, description, classification, dated = "Unknown", objectnumber } = record;

    return (
        <div >
            <div className="ui centered card" id="detailDisplay">
                <div className="image">
                    <img src={primaryimageurl} alt={title + " image"} />
                </div>
                <div className="content">
                    <h3 className="header">{title}</h3>
                    <div className="description">{description}</div>
                    <div className="classification"><strong>Classification:</strong> {classification}</div>
                    <div className="date"><strong>Date:</strong> {dated}</div>
                    <div className="objectnumber"><strong>Object Number:</strong> {objectnumber}</div>
                </div>
            </div>
        </div>
    )
}

export default DetailDisplay