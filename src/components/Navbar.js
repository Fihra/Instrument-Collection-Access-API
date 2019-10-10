import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return(
            <div className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/newinstrument">Suggest an Instrument</Link></li>
                </ul>
               
            </div>
        )
    }
}

export default NavBar;