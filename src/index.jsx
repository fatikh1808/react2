import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./reduxComp/store/configureStore";
import { Provider } from "react-redux"
import 'typeface-roboto';

const store = configureStore();
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    , rootEl);

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(<App/>, rootEl);
    })
}

serviceWorker.unregister();
