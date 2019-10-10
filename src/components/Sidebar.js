import React from 'react';

class Sidebar extends React.Component {
    render(){
        return(
            <div className="side-bar">
                <h3>Filter</h3>
                <p>Insert searchbar here</p>
                <label>Alphabetical</label>
                <input type="checkbox" name={"alpha"} value={"alphabetical"}/>
                <label>Classification</label>
                <input type="checkbox" name={"classific"} value={"classification"}/>
                <br/>
                <label>Year</label>
                <input type="checkbox" name={"year"} value={"year"}/>
                
            </div>
        )
    }
}

export default Sidebar;