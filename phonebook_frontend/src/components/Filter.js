import React from 'react'

const Filter = ({ text, filter, onChange }) => {
  return (
   <div>
     {text}
     <input
       value={filter}
       onChange={onChange}
     />
   </div>
  )
}

export default Filter