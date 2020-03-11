import React from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import  Joi  from 'joi';

class Register extends Form {
    state = { 
        data: {
            username: "",
            email: "",
            password: ""
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().min(3),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(3)
    }

    handleChange = (e) => {
        let data = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            data: data
        });
    }

    doSubmit = () => {
        //if form has no errors
        console.log("User Registered");
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={ this.handleSubmit }>
                        <h3>Register</h3>
                        <Input id="username" label="Username" name="username" onChange={ this.handleChange } value={ this.state.data.username } error={ this.state.errors.username }/>
                        <Input id="email" label="Email" name="email" type="email" onChange={ this.handleChange } value={ this.state.data.email } error={ this.state.errors.email }/>
                        <Input id="password" label="Password" name="password" type="password" onChange={ this.handleChange } value={ this.state.data.password } error={ this.state.errors.password }/>
                        <button className="btn btn-primary btn-block" type="submit">Register</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Register;