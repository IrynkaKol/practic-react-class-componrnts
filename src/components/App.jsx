import React, { Component } from 'react';
import Counter from './Counter';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import Form from './Forms/Forms';
import Clock from './Clock/Clock';
import TodoList from './TodoList';
import initialsTodos from './todos.json';
import Friends from './Friends/Fiends';
import News from './News/News'
import UserMenu from './UserMenu/UserMenu'

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialsTodos,
    name: '',
    tag: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  /*hendelNameChange = event => {
    //console.log(event.currentTarget.value)
    this.setState({name: event.currentTarget.value})
  }
  hendleTagChange = event => {
    this.setState({tag: event.currentTarget.value})
  }*/

  render() {
    const { todos } = this.state;

    const totalTodosCount = todos.length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        

        <h1>Counter</h1>
        <Counter initialValue={0} />

        <h1>Меню</h1>
        <Dropdown />

        <h1>Color Picker</h1>
        <ColorPicker options={colorPickerOptions} />
        <h1>Clock</h1>
        <Clock />

        <h1>Form</h1>
        <Form />

        <h1>Todo</h1>
        <div>
          <p>Загальна кіль-ть: {totalTodosCount} </p>
          <p>Кіль-ть виконаних todo: {completedTodosCount}</p>
          <p></p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <h1>Friends</h1>
        <Friends />

        <h1>News</h1>
        <News />

        <h1>UserMenu</h1>
        <UserMenu />
      </>
    );
  }
}
export default App;
//export const App = () => {
// return (
//   <div>
//     <h1>Стан компонента</h1>

/* <Counter initialValue={0} /> */

/* <h1>Меню</h1>
      <Dropdown /> */

/* <h1>Color Picker</h1>
      <ColorPicker options={colorPickerOptions}/> */

//    <TodoList />
// </div>

//);
//};
