import React, { Component } from 'react'
import Todoitem from './Todoitem';

export default class Todolist extends Component {

  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (

      <ul className='list-group mx-0 my-6'>
        <h4 className="title text-capitalize text-center"> Here's the plan</h4>
        {items.map((item) => {
          return (
            <Todoitem
              key={item.id}
              title={item.title}
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
            
        );
        })}

        <button
          type='button'
          className='clear-list text-capitalize mt-5'
          onClick={clearList}> <h4>Clear List</h4>
        </button>
      </ul >
    )
  }

}
