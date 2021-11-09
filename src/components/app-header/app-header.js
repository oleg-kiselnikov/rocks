import React from "react";
import './app-header.css';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app-header row">
            <Link to="/">
                <div className="logo text-dark">Rocks</div>
            </Link>
        </header>
    );
}

export default AppHeader;