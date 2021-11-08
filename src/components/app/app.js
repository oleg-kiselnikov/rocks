import React from 'react';
import './app.css';
import { withService } from '../hoc';

const App = ({ service }) => {
    console.log(service.getCrags());
    return <div>Hello!</div>
};

export default withService()(App);