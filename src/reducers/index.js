import {combineReducers} from 'redux';
import contactReducer from "./contactReducer"
import {reducer as formReducer } from 'redux-form'


export default combineReducers({
    form:formReducer,
    contacts:contactReducer
})