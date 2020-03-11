import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListGroup extends Component {
    render() { 
        let { genres:lists, valueProperty, textProperty, selectedGenre, onGenreChange } = this.props;
        return ( 
            <ul className="list-group">
                { lists.map( list => <li className={ ( list === selectedGenre ) ? 'list-group-item active' : 'list-group-item'} key={ list[valueProperty] } onClick={ () => onGenreChange(list) } >{ list[textProperty] }</li>)}
            </ul> 
        );
    }
}

//Assigning default value to props
ListGroup.defaultProps = {
    valueProperty: '_id',
    textProperty: 'name'
}

//validating the props
ListGroup.propTypes = {
    genres: PropTypes.array.isRequired,
    onGenreChange: PropTypes.func.isRequired
}
 
export default ListGroup;