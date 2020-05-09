import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "../reducers";
import thunk from "redux-thunk";
import loggerMiddleware from "redux-logger";

export default function configureStore() {
    if (process.env.NODE_ENV === 'production') {
        return createStore(
            rootReducer,
            applyMiddleware(thunk)
        )
    } else {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize : true })
            : compose;

        const store = createStore(
            rootReducer,
            composeEnhancers(
                applyMiddleware(
                    thunk,
                    loggerMiddleware,
                )
            )
        );

       if(module.hot) {
           module.hot.accept('../reducers', () => {
               store.replaceReducer(rootReducer)
           })
       }

       return store;
    }
}
