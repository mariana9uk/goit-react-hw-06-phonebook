import { useDispatch, useSelector } from "react-redux";
import {StyledContacts} from "./ContactsStyleed"
import { removeContact } from "redux/actions";

  

export const ContactsList  = ()=>{
   const dispatch = useDispatch()
   const contacts = useSelector(state=>state.contacts)
   const contactsListItems = contacts.map(contact=>(
      <li key={contact.id} >{contact.name}:{contact.number}<button type="button" onClick={()=>dispatch(removeContact(contact.id))}>Delete</button></li>
   ))
   return(
      <StyledContacts>
   {contactsListItems}
    </StyledContacts>
   ) 
}

// onClick={()=>{onDelete(contact.id)}