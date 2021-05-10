import React from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {fetchContact,editContact} from "../../actions"
import ContactForm from "./ContactForm"

class EditContact extends React.Component{
   componentDidMount(){
       this.props.fetchContact(this.props.match.params.id)
   }
   onSubmit=(formValues)=>{
       console.log(formValues)
       this.props.editContact(formValues)
   }
    render(){
        if(!this.props.fullName){
            return<div>Loading</div>
        }
        return(<div>
            <h3>
                Edit Stream
            </h3>
            <ContactForm
            initialValues={_.pick(this.props.contact,"fullName","emailAddress","contactNumber")}
            />
            </div>
        )
    }
   
}

const mapStateToProps=(state)=>{
    return{contact:state.contacts}
}
export default connect(mapStateToProps,{fetchContact,editContact})(EditContact)