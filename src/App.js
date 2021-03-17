import React, { useState } from 'react'
import AddPersonForm from './AddPersonForm.jsx'
import PeopleList from './PeopleList.jsx'



function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data)

  function addPerson(name) {
    setContacts([...contacts, name])
  }

  return (
    <div>
      <AddPersonForm handleSubmitParent={addPerson} />
      <PeopleList data={contacts} />
    </div>
  )
}

export default ContactManager
