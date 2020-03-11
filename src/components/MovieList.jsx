import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from '../services/fakeGenreService';
import Pagination from "../common/Pagination";
import {Paginate} from '../helpers/Paginate';
import ListGroup from '../common/ListGroup';
import MoviesTable from '../common/MoviesTable';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import SearchBox from '../common/SearchBox';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize: 4,
        sortColumn: {path: 'title', order: 'asc'},
        selectedGenre: '',
        querySearch: '',
        currentPage: 1
     }

    componentDidMount(){
        const genres = [ {_id: '', name: 'All Genre'}, ...getGenres()]
        this.setState({
            movies: getMovies(),
            genres: genres,
        });
    } 

    handleDelete = (id) => {
        let movies = this.state.movies.filter( movie => movie._id !== id)
        this.setState({
            movies: movies
        });
    }

    handleLikeMovie = (movie) => {
        let movies = [...this.state.movies];
        let new_movie = {...movie};
        const index = movies.indexOf(movie);
        movies[index] = new_movie;
        movies[index].like = !(movies[index].like);
        this.setState({
            movies: movies
        })
    }

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

    handleGenreChange = (genre) => {
        this.setState({
            selectedGenre: genre,
            querySearch: '',
            currentPage: 1
        })
    }

    handleSort = (sortColumn) => {
        this.setState({
            sortColumn
        });
    }

    handleSearch = (query) => {
        this.setState({
            querySearch: query,
            currentPage: 1,
            selectGenre: ''
        });
    }

    pageData() {
        const {pageSize, currentPage, movies:allMovies, selectedGenre, sortColumn, querySearch} = this.state
        let filtered = allMovies;

        if(querySearch){
            filtered = allMovies.filter( movie => movie.title.toLowerCase().startsWith(querySearch.toLowerCase()))
        }else if(selectedGenre && selectedGenre._id){
             filtered = allMovies.filter( m => m.genre._id === selectedGenre._id )
        }
        
        //after filter sort the movies
        const sortedMovies = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = Paginate(sortedMovies, currentPage, pageSize);

        return {
            data: movies,
            totalCount: filtered.length
        }
    }

    render() { 
        //some object destructuring
        let {length: count} = this.state.movies
        let {pageSize, currentPage, sortColumn, querySearch } = this.state
        
        let {totalCount, data: movies} = this.pageData();

        if(count === 0)
            return <p style={{fontWeight: 'bold', textAlign: 'center'}}>No movie found</p>    
        return (     
        <main role="main" className="container" style={{padding: 23}}>
            <div className="row">
                <div className="col-2">
                    <ListGroup 
                        genres={ this.state.genres } 
                        selectedGenre={ this.state.selectedGenre } 
                        onGenreChange={ this.handleGenreChange }
                    />
                </div>

                <div className="col">
                    <p style={{fontWeight: 'bold', textAlign: 'center'}}>{ totalCount } movies found </p>
                    <div className="row">
                        <div className="col-md-10">
                            <SearchBox 
                                value={ querySearch } 
                                onChange={ this.handleSearch } 
                            />
                        </div>
                        <div className="col-md-2">
                            <Link 
                                to="/movies/create" 
                                className="btn btn-success btn-sm pull-right" 
                                style={{ marginBottom: 10}}>
                                    Create
                            </Link>
                        </div>
                    </div>

                    <MoviesTable 
                        movies={ movies } 
                        sortColumn={ sortColumn }
                        onLike={ this.handleLikeMovie } 
                        onDelete={ this.handleDelete }
                        onSort={ this.handleSort}
                    />

                    <Pagination 
                        itemsCount={ totalCount } 
                        pageSize={ pageSize } 
                        currentPage={ currentPage } 
                        onPageChange={ this.handlePageChange }
                    />
                </div>
            </div>
           
        </main>
      );
    }
}
 
export default Movies;