import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Todos from './components/Todos';


class App extends React.Component {

  state = {
    todos: [
      {
        id:1,
        title:"Meet Holmes",
        completed: false
      },
       {
        id:2,
        title:"Meet Sara",
        completed: true
      },
      {
        id:3,
        title:"Meet Harry",
        completed: false
      }
    ]
  }

  markComplete = (id)=>{
    console.log(id);
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
