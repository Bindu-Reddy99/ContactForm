import React from "react";
import { Field, formValues, reduxForm } from "redux-form";

class ContactForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
       
          <Field
            component={this.renderInput}
            name="fullName"
            label="Enter your Name"
          />
         
          <Field
            component={this.renderInput}
            name="emailAddress"
            label="Enter your Mail-ID"
          />
          <Field
            component={this.renderInput}
            name="contactNumber"
            label="Enter your Mobile Number"
          />
          <button onClick={(e)=>e.onSubmit(formValues)} className="ui button blue">Add</button>
        </form>
      </div>
    );
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.onSubmit(formValues);
  };
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.fullName) {
    errors.fullName = "You Must EnterYour Nmae";
  }
  if (!formValues.emailAddress) {
    errors.emailAddress = "You Must enter your mail Id";
  }
  if (!formValues.contactNumber) {
    errors.contactNumber = "You must enter your mobile number";
  }
  return errors;
};
export default reduxForm({
  form: "ContactForm",
  validate,
})(ContactForm);
