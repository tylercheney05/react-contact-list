import Contact from './Contact';
// const ContactList = () => (
//   <>
//   </>
// )
// const ContactList = (props) => {
//   props.contacts
const ContactList = ({ contacts, removeContact, updateContact }) => {
  return (
    <>
      {
        contacts.map( c => (
          // <div>
          //   <h1>{c.firstName}</h1>
          //   <h3>{c.phone}</h3>
          //   <button>Delete</button>
          // </div>
          <Contact 
            {...c} 
            removeContact={removeContact} 
            updateContact={updateContact}
        
          />
          // <Contact id={c.id} firstName={c.firstName} phone={c.phone} age={c.age} />
        ))
      }
    </>
  )
}
export default ContactList;