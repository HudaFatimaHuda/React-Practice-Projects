const redux = require('redux'); 

// reducer function that will be executed at the time of initialization 
// it will update data when an action function is called 
// it accepts 2 parameters, same as a UseReducer hook 
// in standard programming reducer is a function 
// this should be a pure function 
// pure function is one that returns same output for same set of inputs 
// and it does not have any http request or useEffects/ side effects 
// return will be a state object 
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return {counter: state.counter + 1}
    }
    if(action.type === 'decrement'){
        return {counter: state.counter - 1}
    }
 }


//  store to mng data 
const store = redux.createStore(counterReducer); 

const subscriberComponent = () => {
// getState is a function that is available on the object that is created with createStore()
// and it always returns a latest snap short of the state 
    const lastState = store.getState(); 
    console.log(lastState);
}

// now we have to make redux aware of this subscriber function 
// so that it knows that this function needs to be updated or informed when 
// we have ant change in the store 
// subscribe() methods requires a function that executed when the store is updated 
store.subscribe(subscriberComponent); 


// need these methods to execute the code 
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})
