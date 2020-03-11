import React, { Component } from 'react';
class TableHeader extends Component {
    sortMovies = (path) => {
        //for handling reverse of the ordering first duplicate the object
        //check what the previous path is
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        }else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }

        this.props.onSort(sortColumn);
    }

    renderIcon = (column) => {
        const { sortColumn } = this.props;
        if(column.path !== sortColumn.path) return null;

        if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>
    }

    render() { 
        return ( <thead>
            <tr>
                { this.props.columns.map( column => <th key={ column.path || column.key } onClick={ () => this.sortMovies(column.path)}>
                                                        { column.label }
                                                        { this.renderIcon(column)}
                                                    </th>)}
            </tr>
        </thead> );
    }
}
 
export default TableHeader;