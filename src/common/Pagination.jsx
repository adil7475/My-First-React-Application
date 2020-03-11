import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';

class Pagination extends Component {
    state = {  }
    render() { 
        const {itemsCount, pageSize, currentPage} = this.props;
        const pagesCount = Math.ceil(itemsCount/pageSize);
        if(pagesCount <= 1) return null;
        //if result is greater then 1
        const pages = _.range(1, pagesCount+1)

        return ( 
           <ul className="pagination">
               { pages.map( page => <li key={ page } className={ (pageSize === currentPage) ? "page-item active" : "page-item" }><a className="page-link" href="#" onClick={ () => this.props.onPageChange(page) }>{page}</a></li> )}
           </ul>
         );
    }
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
 
export default Pagination;