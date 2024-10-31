import {createSlice, configureStore}  from '@reduxjs/toolkit'; 

const counterInitialState = {counter: 0, isShown: true}
const counterSlice = createSlice({
    name: 'counter', //identifier for the slice 
    // initialState, //will become initialSate: initialState
    initialState: counterInitialState,
    reducers: { //here we will define functions to mutate state 
        // we do not need if else check because it will done by toolkit
        // if(action.type === 'increase'){} is same as increment(){}
        increment(state){state.counter++}, //redux tool will create a new snapshot instead of mutating the existing state
        decrement(state){state.counter--}, //we seems to allowed to mutate the state 
        increase(state, action){state.counter = state.counter + action.payload},
        toggle(state){state.isShown = !state.isShown},
    }
}); 

const authInitialState = {isAuthenticated: false}
const authSlice = createSlice({
    name: 'Auth', 
    initialState: authInitialState, 
    reducers: {
        login(state){state.isAuthenticated = true}, 
        logout(state){state.isAuthenticated = false}
    }
})

// const store = createStore(counterSlice);  // for one state 
// for multiple slices 
const store = configureStore({reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}}); 

export const counterActions = counterSlice.actions; 
export const authActions = authSlice.actions; 
export default store; 

// SUMMARY: 

// Create a Redux store with configureStore
// configureStore accepts a reducer function as a named argument
// configureStore automatically sets up the store with good default settings

// Provide the Redux store to the React application components
// Put a React Redux <Provider> component around your <App />
// Pass the Redux store as <Provider store={store}>

// Create a Redux "slice" reducer with createSlice
// Call createSlice with a string name, an initial state, and named reducer functions
// Reducer functions may "mutate" the state using Immer
// Export the generated slice reducer and action creators
// Use the React Redux useSelector/useDispatch hooks in React components
// Read data from the store with the useSelector hook
// Get the dispatch function with the useDispatch hook, and dispatch actions as needed