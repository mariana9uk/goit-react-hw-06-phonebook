import {createSlice, nanoid } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: "",
  reducers:{
  filterByname:{reducer(state, action){
    if (!state) {
      return state
    }
    const { filter } = action.payload;
    const normalizedFilter = filter.toLowerCase();
    return (
      state.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    );
  }
    }
  }}
)

export const { filterByname } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer
  