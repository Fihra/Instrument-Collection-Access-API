import React from 'react';

class NavBar extends React.Component {
    render(){
        return(
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Instruments</li>
                    <li>Add Instrument</li>
                </ul>
               
            </div>
        )
    }
}

export default NavBar;