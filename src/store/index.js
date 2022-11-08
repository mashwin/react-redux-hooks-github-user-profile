import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './user/rootReducer';
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true
})

export const store = createStore(
    reducer,
    undefined,
    applyMiddleware(thunk, logger)
);
