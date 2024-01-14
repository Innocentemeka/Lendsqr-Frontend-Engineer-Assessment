import React from 'react'

const SelectLimit = () => {
  return (
    <div className='select-limit'>
      <p>Showing</p>
      <select>
        <option value='10'>10</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
      <p>out of 100</p>
    </div>
  )
}

export default SelectLimit
