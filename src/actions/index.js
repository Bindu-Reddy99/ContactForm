import {ADD_CONTACT,FETCH_CONTACT,FETCH_CONTACTS,EDIT_CONTACT,DELETE_CONTACT}  from "./types"

import contacts from "../api/contacts"
import history from "../history"

export const addContact =(formValues)=> async(dispatch)=>{
    const response=await contacts.post("/contacts",{...formValues})
    dispatch({type:ADD_CONTACT,payload:response.data})
    history.push("/")
};
export const fetchContacts=()=>async dispatch=>{
    const response = await contacts.get("/contacts")
  dispatch({type:FETCH_CONTACTS,payload:response.data})
  }
  
  export const  fetchContact=(id)=>async dispatch=>{
  const response=await contacts.get(`/contacts/${id}`)
  dispatch({type:FETCH_CONTACT,payload:response.data})
  }
  export const  editContact=(formValues)=>async dispatch=>{
    const response=await contacts.patch(formValues)
    dispatch({type:EDIT_CONTACT,payload:response.data})
    history.push('/')
    }
    export const  deleteContact=(id)=>async dispatch=>{
     await contacts.delete(`/contacts/${id}`)
      dispatch({type:DELETE_CONTACT,payload:id})
      history.push('/')
      }