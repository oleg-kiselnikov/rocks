import React from 'react';
import { Link } from 'react-router-dom';

import './crag-list-item.css';

const CragListItem = ({ crag }) => {
    const { cragName, cragDescription, cragPhoto } = crag;

    return (
        <div className="crag-list-item">
            <div className="crag-view">
                <img src={cragPhoto} alt="Photo"/>
            </div>
            <div className="crag-details">
                <span href="#" className="crag-name">{cragName}</span>
                <div className="crag-description">{cragDescription}</div>
                <Link to="/detail">Details...</Link>
            </div>
        </div>
    );
};

export default CragListItem;