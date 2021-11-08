import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';
import './app.css';

const App = () => {
    return (
        <Routes>
            <Route 
                path="/"
                element={<HomePage />} 
                exact/>
        </Routes>
    );
};

export default App;