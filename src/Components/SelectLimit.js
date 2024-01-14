import React, { useState } from 'react'

const SelectLimit = () => {
  const [page, setPage] = useState(0);
  return (
    <div className='select-limit'>
      <p>Showing</p>
      <select onChange={(e) => setPage(e.target.value)}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
      </select>
      <p>out of 100</p>
    </div>
  )
}

export default SelectLimit
