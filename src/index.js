import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import Service from './services/service';
import { ServiceProvider } from './components/service-context';

import store from './store';

const service = new Service();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ServiceProvider value={service}>
                <Router>
                    <App />
                </Router>
            </ServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

