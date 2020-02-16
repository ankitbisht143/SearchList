import {combineReducers} from 'redux';

import SearchReducer from './searchReducer';

export const reducers = combineReducers({
    photos: SearchReducer
})