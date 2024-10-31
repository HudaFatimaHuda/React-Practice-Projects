import React, {useState} from 'react';

const SimpleInputFroNameOnly = (props) => {

  // value of ref and state are changing on every key stroke 
  // const nameInput = useRef();
  const [enteredName, setEnteredName] = useState('')
  // now working with validation
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false); 
  // now check if the name input is touched or not
  // we want to avoid set validation to true or false before touching
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''; 
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; 

  let formIsValid = false; 

  if(enteredNameIsValid){
    formIsValid = true; 
  }

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)
    // value will be changed on every keystroke
    // console.log(enteredName);

    // since the input is changing on every key stroke 
    // we can validate it as soon as user start typing 

    // if(enteredName.trim() !== ''){ not using this because we are updating the sate in the previous line and if use the state in the next line we might be referring to old state because of scheduling 
    // good way is to use event.target.value

      // if(event.target.value.trim() !== ''){
      // condition is changed because we want to 
      // change the state if the value is valid 
      // and output it with true
      // doing it just to keep the the condition clean 
      // setEnteredNameIsValid(true) 
    // }
  }

  const onBlurHandler = event => {
    setEnteredNameTouched(true); 
  }

  const formSubmitHandler = (event) => {
      event.preventDefault(); 

      setEnteredNameTouched(true); 

      if(!enteredNameIsValid){
        return; 
      }

      console.log(enteredName);
      setEnteredName('')
      setEnteredNameTouched(false)
  }


  const nameInputClasses = !nameInputIsInvalid ? 'form-control': 'invalid form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  value = {enteredName} onChange = {inputChangeHandler} onBlur = {onBlurHandler}/>
      {nameInputIsInvalid && <p className='error-text'>Name is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled = {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputFroNameOnly;
