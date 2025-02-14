import { createSlice } from "@reduxjs/toolkit";

const initialState = [] 
let idCounter = 1;
   

console.log("initial state",initialState)


const crudItem = createSlice({
    name:"crud",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.push({
                id: idCounter++,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                email:action.payload.email,
                address:action.payload.address,
                city:action.payload.city,
                state:action.payload.state,
                pincode:action.payload.pincode

            })
        },

        deleteItem:(state,action)=>{
          return state.filter((item)=> item.id !== action.payload)
        },
        updateItem: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        },
        
    }
})

export const {addItem , deleteItem, updateItem} = crudItem.actions;
export default crudItem.reducer