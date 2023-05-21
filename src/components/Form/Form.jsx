import React from 'react';
import { useState } from 'react';
// import { nanoid } from 'nanoid';
// ==================Hooks===================
const Form = props => {
  console.log(props);
  const { onSubmit } = props;
  //useState*
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  //useState*

  const handleInputChange = evt => {
    const {
      target: { name, number, value },
    } = evt;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleFormSubmitAddContact = evt => {
    evt.preventDefault();
    onSubmit({
      name,
      number,
    });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmitAddContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>

      <input type="submit" />
    </form>
  );
};

// ==================CLASS==================
// class Form extends React.Component{
// state={
//     name: '',
//     number: '',
// }

// handleInputChange=evt=>{

//     const {target:{name,value,number}}=evt
//     this.setState({
//         [name]:value,
//         [number]:value,
//     })
// }

// handleFormSubmitAddContact=evt=>{
//     evt.preventDefault()

//     this.props.onSubmit(this.state)
//     this.reset()
//     }

//     reset=()=>{
//         this.setState({

//             name: '',
//             number: '',
//             })
//         }

// render(){

//     return(
//         <form onSubmit={this.handleFormSubmitAddContact}>
//         <label>
//             Name<input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             />
//         </label>

//         <label>
//         Number<input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={this.state.number}
//         onChange={this.handleInputChange}
//         />

//     </label>

//     <input type="submit"/>

//     </form>
//     )

// }
// }

export default Form;
