import React from 'react';
import Input from '../common/Input';
import SelectInput from '../common/SelectInput';
import Form from '../common/Form';
import Joi from 'joi';
import { getGenres } from '../services/fakeGenreService';

class MovieForm extends Form
 {
    state = {
        data: {
            title: '',
            genre: '',
            numberInStock: '',
            rate: ''
        },
        genres: [],
        errors: {}
    }

    schema = {
        title: Joi.string().required(),
        genre: Joi.string().required(),
        numberInStock: Joi.number().required(),
        rate: Joi.number().required()
    }

    componentDidMount = () => {
        this.setState({
            genres: getGenres()
        })
    }

    handleChange = (e) => {
        const data = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({
            data: data
        });
    }

    doSubmit = () => {
        console.log('Movie Submitted');
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={ this.handleSubmit}>
                        <h3>Movie Form</h3>
                        <Input id="title" label="Title" name="title" onChange={ this.handleChange } value={ this.state.data.title} error={ this.state.errors.title }/>
                        <SelectInput id="genre" label="Genre" name="genre" options={ this.state.genres } onChange={ this.handleChange } value={ this.state.data.genre} error={ this.state.errors.genre }/>
                        <Input id="numberInStock" label="Number In Stock" name="numberInStock" onChange={ this.handleChange } value={ this.state.data.numberInStock} error={ this.state.errors.numberInStock }/>
                        <Input id="rate" label="Rating" name="rate" onChange={ this.handleChange } value={ this.state.data.rate } error={ this.state.errors.rate }/>
                        <button className="btn btn-primary btn-block" style={{ marginTop: 10}}>Create</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default MovieForm;