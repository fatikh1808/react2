import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from "./reduxComp/store/configureStore";
import { Provider } from "react-redux"
import 'typeface-roboto';

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
