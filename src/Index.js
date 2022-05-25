import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import ErrorBoundary from './components/errorHandling/ErrorBoundary';

import { configureStore } from '@reduxjs/toolkit';
import { ClubReducers } from '../src/components/clubs/reducers/index';
import { Provider } from 'react-redux';

const store = configureStore({reducer: ClubReducers});

ReactDOM.render( 

<React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
    </Provider>  
</React.StrictMode>, 
document.getElementById('root'));