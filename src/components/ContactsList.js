import { useDispatch, useSelector } from "react-redux";
import {StyledContacts} from "./ContactsStyleed"
import { removeContact } from "redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { getContacts } from "redux/selectors";


  

export const ContactsList  = ()=>{
   const dispatch = useDispatch()
   const contacts = useSelector(getContacts)
   const contactsListItems = contacts.map(contact=>(
      <li key={nanoid()} >{contact.name}:{contact.number}<button type="button" onClick={()=>dispatch(removeContact(contact.id))}>Delete</button></li>
   ))
   return(
      <StyledContacts>
   {contactsListItems}
    </StyledContacts>
   ) 
}
