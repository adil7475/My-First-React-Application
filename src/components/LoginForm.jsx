import React, { Component } from 'react';
import Input from '../common/Input';
import Joi from 'joi';
import Form from '../common/Form';

class LoginForm extends Form {
    state = { 
        data: {
            username: '',
            password: ''
        },
        errors: {}
     }

    //declaring schema for validation
    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    }

    doSubmit = () => {
        console.log('Form Submitted');
    }

    handleChange = (e) => {
        let data = {...this.state.data}

        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            data: data
        })
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <Input label='Username' id='username' name='username' onChange={ this.handleChange } value={ this.state.data.username } error={ this.state.errors.username} />

                        <Input label="Password" id="password" type="password" name="password" onChange={ this.handleChange } value={ this.state.data.password } error={ this.state.errors.password} />

                        <button className="btn btn-primary btn-block" style={{ marginTop: 10}}>Login</button>
                    </form>
                </div> 
            </div>
         );
    }
}
 
export default LoginForm;