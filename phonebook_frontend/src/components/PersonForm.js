import React from 'react'

const PersonForm = ({ addPerson, name, nameOnChange, number, numberOnChange  }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input
          value={name}
          onChange={nameOnChange}
        />
      </div>
      <div>
        number:
        <input
          value={number}
          onChange={numberOnChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>

  )
}

export default PersonForm