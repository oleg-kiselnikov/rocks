import React, { Component } from 'react';
import CragListItem from '../crag-list-item';

import './crag-list.css';

class CragList extends Component {
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

export default CragList;