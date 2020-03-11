import React, { Component } from 'react';
import TableHeader from '../common/TableHeader';
import TableBody from '../common/TableBody';

class Table extends Component {
    state = {  }
    render() { 
        let { columns, data, onSort, sortColumn } = this.props;
        return ( 
        <table className="table">
            <TableHeader 
                columns={ columns } 
                onSort={ onSort } 
                sortColumn={ sortColumn }
            />

            <TableBody
                columns={ columns }
                data={ data }
            />
        </table> );
    }
}
 
export default Table;