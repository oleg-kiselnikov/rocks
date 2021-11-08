import React, { Component } from 'react';
import CragListItem from '../crag-list-item';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { cragsLoaded } from '../../actions';
import { compose } from '../../utils';
import './crag-list.css';

class CragList extends Component {

    componentDidMount() {
        const { service } = this.props;
        const data = service.getCrags();
        this.props.cragsLoaded(data);
    }

    render() {
        const { crags } = this.props;

        return (
            <ul>
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

const mapStateToProps = ({ crags }) => {
    return { crags };
};

const mapDispatchToProps = { cragsLoaded  };

export default compose(
    withService(), 
    connect(mapStateToProps, mapDispatchToProps)
)(CragList);