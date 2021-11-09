import React from 'react';
import './route-table.css';

const RouteTable = () => {
    return (
        <div className="route-table">
            <h2>Routes</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Sector</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Crazy Girls</td>
                        <td>+6a</td>
                        <td>Sector A</td>
                        <td>
                            <button className="btn btn-outline-danger btn-small">
                                <i className="fa fa-trash-o" />
                            </button>
                            <button className="btn btn-outline-success btn-small">
                                <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-outline-warning btn-small">
                                <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RouteTable;
