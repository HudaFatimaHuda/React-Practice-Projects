import {createStore}  from 'redux'; 


const counterReducer = (state = {counter: 0, isShown: true}, action) => {

 if(action.type === 'increment'){ 
    return {
      counter: state.counter + 1,
      isShown:state.isShown
   }
 }

 if(action.type === 'increase'){ 
    return {
      counter: state.counter + action.value,
      isShown:state.isShown
   }
 }

 if(action.type === 'decrement'){ 
    return {
      counter: state.counter - 1,
      isShown:state.isShown
   }
 }

 if(action.type === 'toggle'){
   return {
      counter: state.counter,
      isShown: !state.isShown
   }
 }
 

 return state
}

const store = createStore(counterReducer) 

export default store; 