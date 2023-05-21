import './App.css';
import React from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import {Section} from './components/Section/Section';
import {Contact} from './components/Contats/Contact';

import {Filter} from './components/FilterContact/FilterContact'

import Form from './components/Form/Form';

class App extends React.Component{

    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
      }



formSubmitHendler=(data)=>{
    const state=this.state.contacts.find(el=>el.name===data.name)
            if(state){
        return Notify.failure("Sorry, this contact already in your list.");
    } 
    this.addNewContact(data)
}

addNewContact=(data)=>{
    const{name,number}=data
    const contact={
        id: nanoid(), 
        name, 
        number,
    }
   this.setState((prevState)=>(
    {
    contacts:[contact, ...prevState.contacts]
    })) 
}

deleteContact=ContactId=>{   
    this.setState(prevState=>({
    contacts:prevState.contacts.filter(el=>ContactId!==el.id)

    }))
    }

handleSearchInput=evt=>{
        
        this.setState({
        filter:evt.target.value,
        })
     
            }
componentDidUpdate(prevProps, prevState){
    if(prevState.contacts.length!==this.state.contacts.length)
    // const{contacts}=this.state
        console.log("contacts");
    
}

render(){
    const {filter="",contacts}=this.state;

    const visibleContacts=contacts.filter(el=>el.name.toLowerCase().includes(filter.toLowerCase()))

        return(

         <>
          
    <Section>
    <h1>Phonebook</h1>
    <Form onSubmit={this.formSubmitHendler}
    />
    </Section>



    <Section>
    <h2>Contacts</h2>
    <Filter value={filter} onChange={this.handleSearchInput}/>    
    <Contact  
    contacts={visibleContacts} 
    onDeleteContact={this.deleteContact}/>
    </Section>

   
         </>
        )
    }
}



export default App;











