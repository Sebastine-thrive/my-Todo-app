import React, { Component } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti'


export default class Todoitem extends Component {
  render() {
    const {title, handleDelete, handleEdit} = this.props
    return (
    
      <li className="list-group-item text-capitalize d-flex justify-content-between ">
        <h6> {title}</h6>
        <div className="todo-icon">
          <span className="mx-2 " onClick={handleEdit}>
            <TiEdit className='edit-icon'/>

          </span>
          <span className="mx-2" onClick={handleDelete }>
            <RiCloseCircleLine className='delete-icon'/>
          </span>
        </div>
      </li>
  
    );
  }
}
