import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from "../reducers"
import thunk from 'redux-thunk'
const store = createStore(rootreducer,composeWithDevTools(
    applyMiddleware(thunk)
    ));
window.store=store;
export default store