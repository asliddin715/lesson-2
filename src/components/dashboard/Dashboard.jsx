
import { useRef } from "react";

export default function Dashboard() {
  const inputRef = useRef();

  return (
    <form className='addForm'>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
      />
      <button type='submit' aria-label='Add Item'>
      Add Todo
      </button>
    </form>
  );
};


