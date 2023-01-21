import { combineReducers } from 'redux';
import appReducer from './appReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    app: appReducer,
    routing: routerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;