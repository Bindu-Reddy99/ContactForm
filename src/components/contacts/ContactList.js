import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchContacts } from "../../actions";
class ContactList extends React.Component {
  componentDidMount() {
    this.props.fetchContacts(this.props.match.params.id);
  }
  renderList(){
      return this.props.contacts.map((contact)=>{
          return(
              <div className="item" key={contact.id}>
                  <div className="right floated content">
            <Link to={`/contacts/edit/${contact.id}`} className="ui button primary">
                Edit
            </Link>
            <Link to={`/contacts/delete/${contact.id}`} className="ui button negative">
                Delete
            </Link>
        </div>
                  <div className="content">
                    <div className="header">{contact.fullName}</div>
                    <div>{contact.emailAddress}</div>
                    <div>{contact.contactNumber}</div>
                  </div>

              </div>
          )
      })
    }
  render() {
    console.log(this.props.contacts);
    return (
      <div className="main">
        <h2>Contact List</h2>
          <div className="ui celled list">{this.renderList()}</div>
          <div style={{textAlign:"right"}}>
    <Link to="/contacts/new" className="ui button primary">
    Add Contact
    </Link>
  </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: Object.values(state.contacts)
  };
};
export default connect(mapStateToProps, { fetchContacts })(ContactList);
