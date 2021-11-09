import React, { Component } from 'react';
import Spinner from '../spinner';
import CragListItem from '../crag-list-item';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { cragsLoaded, cragsRequested } from '../../actions';
import { compose } from '../../utils';
import './crag-list.css';

class CragList extends Component {

    componentDidMount() {
        const { service, cragsLoaded, cragsRequested } = this.props;
        cragsRequested();
        service.getCrags()
            .then((data) => cragsLoaded(data));
    }

    render() {
        const { crags, loading } = this.props;
        
        if (loading) {
            return <Spinner />;
        }

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
}

const mapStateToProps = ({ crags, loading }) => {
    return { crags, loading };
};

const mapDispatchToProps = { 
    cragsLoaded,
    cragsRequested  
};

export default compose(
    withService(), 
    connect(mapStateToProps, mapDispatchToProps)
)(CragList);