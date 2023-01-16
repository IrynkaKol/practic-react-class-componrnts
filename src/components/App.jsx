import React, { Component } from 'react';
import Counter from './Counter';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList';
import initialsTodos from './todos.json';

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

  hendleChange = event => {
    const { name, tag } = event.currentTarget;
    this.setState({ [name]: tag });
  };

  hendleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
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
        <h1>Стан компонента</h1>
        <Counter initialValue={0} />

        <h1>Меню</h1>
        <Dropdown />

        <h1>Color Picker</h1>
        <ColorPicker options={colorPickerOptions} />

        <form onSubmit={this.hendleSubmit}>
          <label /*htmlFor="id"*/>
            Ім'я
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.hendleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label /*htmlFor="id"*/>
            Прізвище
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.hendleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          <p>Загальна кіль-ть: {totalTodosCount} </p>
          <p>Кіль-ть виконаних todo: {completedTodosCount}</p>
          <p></p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
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
