import {combineReducers} from 'redux'
import clientReducer from './client.reducer'
import karigarReducer from './karigar.reducer'
import orderReducer from './order.reducer'
import userReducer from './user.reducer'
const rootreducer=combineReducers({
    order:orderReducer,
    client:clientReducer,
    karigar:karigarReducer,
    user:userReducer
})

export default rootreducer