import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Like from '../common/Like';
import Table from '../common/Table';

class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title', content: (movie) => <Link to={`/movies/${movie._id}`}>{ movie.title }</Link>},
        {path: 'genre.name', label:'Genre'},
        {path: 'numberInStock', label:"Number in stock"},
        {key: 'like', content: (movie) => <Like movie={movie} movieLiked={ () => this.props.onLike(movie)}/>},
        {key: 'action', content: (movie) => <button className="btn btn-xs btn-danger" onClick={ () => this.props.onDelete(movie._id)}>Delete</button>}
    ]
    render() { 
        let { movies, onSort, sortColumn } = this.props
        return ( 
            <Table columns={ this.columns } data={ movies } onSort={ onSort } sortColumn={ sortColumn }/>
         );
    }
}
 
export default MoviesTable;