import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input autoFocus ref={inputRef} type="text" id='addItem' placeholder='add item' value={newItem} onChange={(e) => setNewItem(e.target.value)} required />
      <button type='submit' aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default AddItem