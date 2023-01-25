import { useState } from 'react';
//import PropTypes from 'prop-types';
import '../Forms/Forms';

function Form() {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');

  const handleChange = e => {
    const {name, value} = e.target
    //console.log(e.target.name);
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'tag':
        setTag(value);
        break;

        default: 
        return;
    }
  };
  //console.log(name)
  // console.log(setName)
  /*const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleTagChange = e => {
    setTag(e.target.value)
  }*/

  return (
    <form className="Form">
      <label /*htmlFor="id"*/ className="Label">
        Ім'я
        <input
          type="text"
          name="name" //target
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label /*htmlFor="id"*/ className="Label">
        Прізвище
        <input
          type="text"
          name="tag"
          value={tag}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
// class OldForm extends Component {
//   state = {
// name: '',
// tag: '',
//   };

//   hendleChange = event => {
// const { name, tag } = event.currentTarget;
// this.setState({ [name]: tag });
//   };
//   .hendleSubmit = event => {
// event.preventDefault();
// console.log(this.state);
//   };

//   render() {
// return (
//   <form onSubmit={this.hendleSubmit} className="Form">
// <label /*htmlFor="id"*/ className="Label">
//   Ім'я
//   <input
// type="text"
// name="name"
// value={this.state.name}
// onChange={this.hendleChange}
// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// required
//   />
// </label>

// <label /*htmlFor="id"*/ className="Label">
//   Прізвище
//   <input
// type="text"
// name="tag"
// value={this.state.tag}
// onChange={this.hendleChange}
// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// required
//   />
// </label>
// <button type="submit">Submit</button>
//   </form>
// );
//   }
// }

export default Form;
