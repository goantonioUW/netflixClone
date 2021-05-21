import React, {useEffect, useState} from 'react';
import '../css/nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    // This allows the navbar to have a scroll effect after scrolling down 45px the nav will use the scroll effect
    useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 450 ) {
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img 
                className="nav_avitar"
                src="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg" 
                alt="Netflix Avitar" />
        </div>
    )
}

export default Nav
