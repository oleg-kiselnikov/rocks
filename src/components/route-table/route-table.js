import React from 'react';
import './route-table.css';

const RouteTable = ({ items }) => {
    return (
        <div className="route-table">
            <h2>Routes</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Sector</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, idx) => {
                            const { routeName, routeGrade, sectorName } = item;
                            return (                                                
                                <tr>
                                    <td>{routeName}</td>
                                    <td>{routeGrade}</td>
                                    <td>{sectorName}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default RouteTable;
