import React from "react";
import { Fragment } from "react";
import Modal from "../Modal";
import {Link} from 'react-router-dom';
import history from "../../history";
import { connect } from "react-redux";
import { Component } from "react";
import {fetchContacts,deleteContact} from "../../actions"


class DeleteContact extends Component{
    componentDidMount(){
        this.props.fetchContacts(this.props.match.params.id)

    }
    renderActions() {
        const {id}=this.props.match.props.id
        return (
          <Fragment>
            <button onClick={()=>this.props.deleteContact(id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
          </Fragment>
        );
      }
      renderContent(){
        if(!this.props.contact){
          return `Are you sure`
        }
        return `Are you sure you want to delete the stream with title:${this.props.stream.id}`
      }
      render() {
    
        return (
          <div>
            StreamDelete
            <Modal
              title="Delete Stream"
              content="Are you sure you want to delete?"
              actions={this.renderActions()}
              onDismiss={() => history.push("/")}
            />
          </div>
        );
      }
    }
      const mapStateToProps=(state)=>({
          contact:state.contacts
      })
export default connect(mapStateToProps,{fetchContacts,deleteContact})(DeleteContact)