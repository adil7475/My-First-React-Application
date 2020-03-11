import React, { Component } from 'react';

class SearchBox extends Component {
    state = {  }
    render() { 
        return (
            <input type="text" name="query" value={ this.props.value } onChange={ (e) => this.props.onChange(e.currentTarget.value) } placeholder="search..." className="form-control my-3"/>
        );
    }
}
 
export default SearchBox;