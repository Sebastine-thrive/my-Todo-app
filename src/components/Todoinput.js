import React, { Component } from 'react'

export default class Todoinput extends Component {
  render() {

    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <form className='todo-form' onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text"
              maxLength={28}
              className='todo-input text-capitalize'
              placeholder='add a todo item'
              value={item}
              required
              onChange={handleChange} />
            <div className="input-group-append">
              <button type='submit' className='todo-button'> {editItem ? "Edit Item" : "Add item"} </button>
            </div>
          </div>
      
      </form >
    )
  }
}
