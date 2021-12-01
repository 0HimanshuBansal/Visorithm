import { combineReducers } from "redux";
import arrayReducer from './arrayReducer';

const reducers = combineReducers({
    alert: arrayReducer
})

export default reducers;