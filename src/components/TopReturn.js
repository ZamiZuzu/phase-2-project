
function TopReturn() {
    if(window.scrollY > 100){
    return(
    <button className="ui icon button" onClick={() => {
            window.scroll({top: 0, left: 0, behavior: 'smooth'})
            console.log(window.pageYOffset)
        }}>
        <i className="up arrow icon"></i>
        Top of Page
    </button>
    )}
    else{return null;}
}

export default TopReturn;