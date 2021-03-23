import { Component } from 'react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';
class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: "Tom", phone: "123-123-2332" },
      { id: 2, firstName: "Jerry", phone: "321-123-2332" },
      { id: 3, firstName: "Lucky", phone: "777-777-0000" },
      // { id: 4, firstName: "bob", phone: '123123123'}
    ]
  }
  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
     // { firstName: "bob", phone: '123123123'}
  addContact = (incommingContact) => {
    const { contacts } = this.state 
    // let newContact = { id: this.getId(), firstName: "bob", phone: "123-123-123"}
    let newContact = { id: this.getId(), ...incommingContact }
    this.setState({ contacts: [...contacts, newContact ]})
  }
                 // 3
  removeContact = (id) => {
    const contacts = this.state.contacts.filter( c => {
      if (c.id !== id) {
        return c
      }
    })
    this.setState({ contacts: [...contacts] })
  } 
  updateContact = (incommingContact) => {
    const { contacts } = this.state
    const { id } = incommingContact
    this.setState({
      contacts: contacts.map( c => {
        if (c.id === id) {
          return { ...incommingContact }
          // return incommingContact
        }
        return c
      })
    })
  }
  render() {
    const { contacts, age } = this.state 
    // const contacts = this.state.contacts
    // const age = this.state.age
    // this.props.contacts
    return (
      <>
        <h1>React Contact List</h1>
        <ContactForm addContact={this.addContact} />
        <ContactList 
          contacts={contacts} 
          removeContact={this.removeContact}
          updateContact={this.updateContact}
        />
      </>
    )
  }
}
export default App;