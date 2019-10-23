import React from 'react';

class Sidebar extends React.Component {


    handleChange = (event) => {
        //console.log(e.target.name);
        this.props.handleToggle(event);
    }
    render(){
        return(
            <div className="side-bar">
                <h3>Filter</h3>
                <p>Insert searchbar here</p>
                <label>Alphabetical</label>
                <input type="radio" name="FilterGroup" value="isAlphabetical" onChange={this.handleChange}/>
                <label>Classification</label>
                <input type="radio" name="FilterGroup" value="isClassification" onChange={this.handleChange}/>
                <br/>
                <label>Year</label>
                <input type="radio" name="FilterGroup" value="isYear" onChange={this.handleChange}/>
                
            </div>
        )
    }
}

export default Sidebar;