import { combineReducers } from 'redux'

import productReducer from './product'
import authReducer from './auth'
import cartReducer from './cart'

export const reducers = combineReducers({ productReducer, cartReducer, authReducer })
