import React from 'react';

import './crag-list-item.css';

const CragListItem = ({ crag }) => {
    const { name, description, photo } = crag;

    return (
        <div className="crag-list-item">
            <div className="crag-view">
                <img src={photo} alt="Photo"/>
            </div>
            <div className="crag-details">
                <span href="#" className="crag-name">{name}</span>
                <div className="crag-description">{description}</div>
                <button className="btn btn-info show-details">Details...</button>
            </div>
        </div>
    );
};

export default CragListItem;