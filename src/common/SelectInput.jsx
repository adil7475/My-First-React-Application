import React from 'react';
const SelectInput = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={ props.id } className="label">{ props.label }</label>
            <select name={ props.name } id={ props.id } className="form-control" onChange={ props.onChange }>
                    <option value="">--Select--</option>
                    { props.options.map( option => <option value={option._id} key={option._id}>{option.name}</option>)}
            </select>
        <span className="text-danger">{ props.error }</span>
        </div>
    );
}

export default SelectInput;