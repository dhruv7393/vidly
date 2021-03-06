import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers'

const initialState={}

const middlewear = [thunk]

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewear), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store