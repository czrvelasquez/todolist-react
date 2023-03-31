import React from 'react'

function Todo() {
  return (
    <form className='todoForm'>
        <input type="text" className='todo-input' placeholder='What is the task today?' />
        <button type='submit' className='todo-btn'></button>
    </form>
  )
export default Todo
