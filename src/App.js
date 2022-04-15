import React, { Component } from 'react';
import Todolist from './components/Todolist';
import Todoinput from './components/Todoinput';

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 } from 'uuid';


import './App.css';

class App extends Component {
  state = {
    items: [],
    id: v4(),
    item: '',
    editItem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: v4(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    });
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id

    });
  };



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" todo-body col-10 col-lg-6 mx-auto col-md-8 mt-4">
            <h3 className=" title text-capitalize text-center">
              What would you love to do?
            </h3>
            <Todoinput
              className='todo-input text-center'
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}

            />

            {this.state.items.length > 0 && (
              <Todolist
                className='todo-list'
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App
