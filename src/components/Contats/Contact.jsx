import PropTypes from 'prop-types';
import { ContactList } from './Contacts.stayld';


export const Contact=function({contacts, onDeleteContact}){

return(<ul>
    {contacts.map(({id,name,number})=>
    
    <ContactList key={id}>
        <p>{name}</p> 
        <p>{number}</p>
        <button type="button" onClick={()=>{onDeleteContact(id)}}>Delete</button>
    </ContactList>
    )
    }
 
</ul>)
} 

Contact.propTypes={
    
    contacts: PropTypes.array.isRequired,

}


 




