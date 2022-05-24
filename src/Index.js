import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import ErrorBoundary from './components/errorHandling/ErrorBoundary';


ReactDOM.render( 
<React.StrictMode>
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
</React.StrictMode>,   
document.getElementById('root'));