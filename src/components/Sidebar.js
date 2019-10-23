import React from 'react';

class Sidebar extends React.Component {


    handleClick = (event) => {
        //console.log(e.target.name);
        this.props.handleToggle(event);
    }
    render(){
        return(
            <div className="side-bar">
                <h3>Filter</h3>
                <p>Insert searchbar here</p>
                <label>Alphabetical</label>
                <input type="checkbox" name="isAlphabetical" onClick={this.handleClick}/>
                <label>Classification</label>
                <input type="checkbox" name="isClassification" value={false} onClick={this.handleClick}/>
                <br/>
                <label>Year</label>
                <input type="checkbox" name="isYear" value={false} onClick={this.handleClick}/>
                
            </div>
        )
    }
}

export default Sidebar;