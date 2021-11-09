import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { fetchRoutes } from '../../actions';
import { compose } from '../../utils';
import './route-table.css';

const RouteTable = ({ routes }) => {

    const renderRow = (route, idx) => {
        const { 
            routeId, 
            routeName, 
            routeGrade, 
            sectorName 
        } = route;
        return (                                                
            <tr key={routeId}>
                <td>{routeName}</td>
                <td>{routeGrade}</td>
                <td>{sectorName}</td>
            </tr>
        );
    }

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
                    { routes.map(renderRow) }
                </tbody>
            </table>
        </div>
    );
}

class RouteTableContainer extends Component {

    componentDidMount() {
        this.props.fetchRoutes();
    }

    render() {
        const { routes, loading, error } = this.props;
        
        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <RouteTable routes={routes} />;
    }
}

const mapStateToProps = ( { routeTable: { routes, loading, error } }) => {
    return { routes, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {
    return bindActionCreators({
        fetchRoutes: fetchRoutes(service)
    }, dispatch);
};

export default compose(
    withService(), 
    connect(mapStateToProps, mapDispatchToProps)
)(RouteTableContainer);
