import React, { Fragment } from 'react';

import './crag-list-item.css';

const CragListItem = ({ crag }) => {
    const { name } = crag;

    return (
        <Fragment>
            <span>{name}</span>
        </Fragment>
    );
};

export default CragListItem;