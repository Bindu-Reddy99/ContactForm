import React from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import {addContact} from "../../actions"
class AddContact extends React.Component {
  render() {
    return (
      <div>
        <h2>Add The Contact</h2>
        <ContactForm onSubmit={this.onSubmit} />
      </div>
    );
  }
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.addContact(formValues)
  };
}
export default connect(null,{addContact})(AddContact);
