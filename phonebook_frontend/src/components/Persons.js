import React from 'react'

const Persons = ({ filterName, persons, deletePerson }) =>  {
  return (
    <div>
      {persons.filter(person =>
        person.name.toLowerCase().includes(filterName.toLowerCase()))
        .map(dude =>
        <span key={dude.id}>
          {dude.name} {dude.number}
          <button onClick={() => deletePerson(dude.id, dude.name)}>Delete</button>
          <br/>
        </span>
      )}
    </div>
  )
}

export default Persons