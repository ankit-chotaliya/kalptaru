import {combineReducers} from 'redux'
import categoryReducer from './category.reducer'
import clientReducer from './client.reducer'
import karigarReducer from './karigar.reducer'
import orderReducer from './order.reducer'
import orderConfirmReducer from './orderConfirm.reducer'
import userReducer from './user.reducer'
import toastReducer from './toast.reducer';
const rootreducer=combineReducers({
    order:orderReducer,
    client:clientReducer,
    karigar:karigarReducer,
    user:userReducer,
    category:categoryReducer,
    orderConfirm:orderConfirmReducer,
    toast:toastReducer
})

export default rootreducer