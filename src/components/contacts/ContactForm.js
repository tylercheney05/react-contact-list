import { Component } from 'react';
class ContactForm extends Component {
  state = { firstName: "", phone: "" }
  componentDidMount() {
    if (this.props.id) {
      const { id, firstName, phone } = this.props 
      // this.setState({ id: id, firstName: firstName, phone: phone })
      this.setState({ id, firstName, phone })
    }
  }
  // change the state to be what the user types
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    // this.setState({ firstName: "bob" })
    // this.setState({ phone: "123-123-123" })
  }
  // what happens when the form is submitted
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      // update 
      const { updateContact, toggleEdit } = this.props 
      updateContact(this.state)
      toggleEdit()
    } else {
      // add 
      // add the contact into the array of objs in app.js via props
      // this.props.addContact({ firstName: "bob", phone: '123123123'})
      this.props.addContact(this.state)
    }
    // clear out the form
    this.setState({ firstName: "", phone: "" })
  }
  render() {
    const { firstName, phone } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          // you need these three items for this to work
          name="firstName" 
          value={firstName} 
          onChange={this.handleChange}
          // optional
          required
          placeholder='First Name'
        />
        <input
          // you need these three items for this to work
          name="phone" 
          value={phone}
          onChange={this.handleChange}
          // optional
          placeholder='phone'
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default ContactForm;