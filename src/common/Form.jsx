import React, { Component } from 'react';
import  Joi  from 'joi';

class Form extends Component {
    validate = () => {
        const {error} = Joi.validate(this.state.data, this.schema, { abortEarly: false });
        //check if no error exists then return null
        if(!error) return null; 

        //create a new errors object for storing errors
        const errors = {};
        error.details.map( detail => {
            errors[detail.path[0]] = detail.message;
        });
        
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validate();
        this.setState({
            errors: errors || {}
        })
        
        //if has error return
        if(errors) return; 
        //Logic if has no errors
        this.doSubmit();
    }
    
}
 
export default Form;