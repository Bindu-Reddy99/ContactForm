import {ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT,FETCH_CONTACTS,FETCH_CONTACT}  from '.././actions/types'
import _ from "lodash"
export default (state={},action)=>{
switch(action.type){
    case FETCH_CONTACT:
        return{...state,[action.payload.id]:action.payload}
    case ADD_CONTACT:
        return{...state,[action.payload.id]:action.payload}
    case EDIT_CONTACT:
        return{...state,[action.payload.id]:action.payload}
    case FETCH_CONTACTS:
        return{...state,..._.mapKeys(action.payload,"id")}
    case DELETE_CONTACT:
        return _.omit(state.action.payload)
    default:
        return state;
}
}