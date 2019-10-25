import { applyMiddleware, compose, createStore } from 'redux';
import combineReducers from 'redux/src/combineReducers';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import UserPageReducer from '../reducer/UserPageReducer';
import ProfilePageReducer from '../reducer/ProfilePageReducer';
import { reducer as formReducer } from 'redux-form';
import AddNewUserPageReducer from '../reducer/AddNewUserPageReducer';

let reducers = combineReducers({
	UserPage: UserPageReducer,
	ProfilePage: ProfilePageReducer,
	form: formReducer,
	AddNewUserPage: AddNewUserPageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;
