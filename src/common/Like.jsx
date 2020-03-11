import React, { Component } from 'react';
class Like extends Component {
    state = {  }
    render() { 
        let heart = "fa fa-heart";
        if(!this.props.movie.like) heart += '-o';
        return ( <i className={ heart } onClick={() => this.props.movieLiked(this.props.movie)}></i> );
    }
}
 
export default Like;