import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-react-dropdowns/styles/material.css";

// Redux
import { Provider } from 'react-redux';
import store from './Redux/store';
import { loadUser } from './Redux/actions/auth';
import setAuthToken from './Redux/utils/setAuthToken';

import Routes from './routes';

require('./bootstrap');

if (localStorage.getItem('token')) {
    // setAuthToken set the x-auth-token to the header with axios, like we do in postman
    setAuthToken(localStorage.getItem('token'));
}
  

export default function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('app')
    );
}