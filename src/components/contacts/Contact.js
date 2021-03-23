import { Component } from 'react';
import ContactForm from './ContactForm';
// import React from 'react'
class Contact extends Component {
  state = { editing: false }
  toggleEdit = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }
  render() {
    const { editing } = this.state
    const { firstName, phone, id, removeContact, updateContact } = this.props
    return(
      <div>
        <h1>{firstName}</h1>
        <h3>{phone}</h3>
        <button onClick={() => removeContact(id)}>
            Delete
        </button>
        { 
         editing ?
          <ContactForm {...this.props} toggleEdit={this.toggleEdit} />
          :
          <button onClick={() => this.toggleEdit()}>Edit</button>
        }
      </div>
    )
  }
}
export default Contact;