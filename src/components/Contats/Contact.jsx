

export const Contact=function({contacts, onDeleteContact}){



return(<ul>{contacts.map(({id,name,number})=>
    
    <li key={id}>
        <span>{name}</span> 
        <span>{number}</span>
        <button type="button" onClick={()=>{onDeleteContact(id)}}>Delete</button>
    </li>
    )
    }
 
</ul>)
} 







