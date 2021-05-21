import React from 'react';
import '../css/nav.css';

function Nav() {
    return (
        <div className="nav">
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
