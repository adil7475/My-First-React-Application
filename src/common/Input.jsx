import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return ( 
        <div className="from-group">
            <label htmlFor={ props.id } className="label">{ props.label }</label>
            <input className="form-control" id={ props.id } type={ props.type } name={ props.name } onChange={ props.onChange } value={ props.value }/>
            <span className="text-danger">{ props.error }</span>
        </div>
     );
}

Input.defaultValue = {
    type: 'text'
}

Input.propType = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Input;