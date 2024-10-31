import { createSlice } from "@reduxjs/toolkit";


const displayCartSlice = createSlice({
    // old name was toggle 
    // but can be renamed with cartUI, 
    // notification functionality added later 
    name: 'toggleCart', 
    initialState: {isShown: true, notification: null}, 
    reducers: {
        toggle(state){state.isShown = !state.isShown},
        showNotification(state, action){
            state.notification = {
                status: action.payload.status, 
                title: action.payload.title, 
                message: action.payload.message, 
            }
        }
    }
})

export default displayCartSlice.reducer
export const cartToggleActions = displayCartSlice.actions; 