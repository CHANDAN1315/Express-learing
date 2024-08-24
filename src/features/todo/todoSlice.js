    // in reducer we write properties and functions
import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todo',
    initialState: [{id: 1, text: "hello"}],
    reducers: {

        addTodo: (state, action) =>{
            // console.log(state)
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            //now we have to make it global and publish in store.

            state.push(todo)

        },
        removeTodo : (state, action) => {

            state = state.filter((todo) => todo.id !== action.payload)
          
        }
    }

})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer    