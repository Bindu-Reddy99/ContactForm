import React from "react";
import Header from "./Header";
import history from "../history";
import AddContact from "./contacts/AddContact";
import ContactList from "./contacts/ContactList";

import EditContact from "./contacts/EditContact";

import ShowContact from "./contacts/ShowContact";

import DeleteContact from "./contacts/DeleteContact";

import { Router, Route } from "react-router-dom";
export class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={ContactList} />
            <Route path="/contacts/new" exact component={AddContact} />
            <Route path="/contacts/edit/:id" exact component={EditContact} />
            <Route
              path="/contacts/delete/:id"
              exact
              component={DeleteContact}
            />
            <Route path="/contacts/show" exact component={ShowContact} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
