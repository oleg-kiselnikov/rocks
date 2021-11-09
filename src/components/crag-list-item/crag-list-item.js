import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/detail">                    
                    <button className="btn btn-info show-details">Details...</button>
                </Link>
            </div>
        </div>
    );
};

export default CragListItem;