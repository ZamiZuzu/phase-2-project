import { useEffect, useState } from "react";

function TopReturn() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () =>{
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    const buttonVisible = isVisible ? {opacity: 100} : {opacity: 0}

   
    return(
        <button className="ui icon button" onClick={scrollToTop} onScroll={toggleVisibility} style={buttonVisible}>
            <i className="up arrow icon"></i>
            Top of Page
        </button>
    )
}

export default TopReturn;