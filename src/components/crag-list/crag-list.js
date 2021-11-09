import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import CragListItem from "../crag-list-item";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { fetchCrags } from '../../actions';
import { compose } from '../../utils';
import './crag-list.css';

const CragList = ({ crags }) => {
    return (
        <ul className="crag-list">
            {
                crags.map((crag) => {
                    return (
                        <li key={crag.id}><CragListItem crag={crag}/></li>
                    )
                })
            }
        </ul>
    );
}

class CragListContainer extends Component {

    componentDidMount() {
        this.props.fetchCrags();
    }

    render() {
        const { crags, loading, error } = this.props;
        
        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <CragList crags={crags} />;
    }
}

const mapStateToProps = ({ cragList: { crags, loading, error } }) => {
    return { crags, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {
    return bindActionCreators({
        fetchCrags: fetchCrags(service)
    }, dispatch);
};

export default compose(
    withService(), 
    connect(mapStateToProps, mapDispatchToProps)
)(CragListContainer);