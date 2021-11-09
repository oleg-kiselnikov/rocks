import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppHeader from '../app-header';
import { HomePage, DetailPage } from '../pages';
import './app.css';

const App = () => {
    return (
        <main role="main" className="container">
            <AppHeader />
            <Routes>
                <Route 
                    path="/"
                    element={<HomePage />} 
                    exact/>
                <Route 
                    path="/detail"
                    element={<DetailPage />} 
                    exact/>
            </Routes>
        </main>
    );
};

export default App;