import { createReducer, nanoid } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./actions";


  const savedContacts = window.localStorage.getItem('contact');
  const getSavedContacts = () => {
      if (savedContacts) {
      return JSON.parse(savedContacts);
    }
  };
  const contactsLS = getSavedContacts()
  const initialState = {
    contacts: [...contactsLS],
    filter: {},
  };
export const contactsReduser =createReducer(initialState.contacts, {
  [addContact]:(state, action)=>[...state, action.payload],
  [removeContact]:(state, action)=>[...state, state.filter(contact=>contact.id!==action.payload)]
})


//   export const contactsRedusers=(state=initialState, action)=>{
// switch (action.type) {
//     case "contacts/addContact":
        
// return [...state,{
// id: nanoid(),
// text: action.payload,
// },
// ]
// case "contacts/removeContact":
        
// return [...state,{

// text: action.payload,
// },
// ]
//     default:
//         return state;
// }

//   }
  export const filtersReducer =(state=initialState, action)=>{
switch (action.type) {
    case "contacts/removeContact":
        
        break;

    default:
        return state;
}
  }
