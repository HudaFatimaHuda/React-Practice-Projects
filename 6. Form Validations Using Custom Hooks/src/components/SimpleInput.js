import useInput from '../hooks/input-hook'

const SimpleInput = (props) => {

  const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputIsInvalid, onChangeHandler: nameChangeHandler, onBlurHandler: onInputBlurHandler, reset: nameReset} = useInput((name) => name.trim() !== ''); 
  const {value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputIsInvalid, onChangeHandler: emailChangeHandler, onBlurHandler: onEmailBlurHandler, reset: emailReset} = useInput((email) => email.includes('@')); 



  let formIsValid = false; 

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true; 
  }



  const formSubmitHandler = (event) => {
      event.preventDefault(); 

      if(!formIsValid){
        return; 
      }

      nameReset();
      emailReset();
  }


  const nameInputClasses = !nameInputIsInvalid ? 'form-control': 'invalid form-control'
  const emailInputClass = !emailInputIsInvalid ? 'form-control': 'invalid form-control'


  return (
    <form onSubmit={formSubmitHandler}>

      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  value = {enteredName} onChange = {nameChangeHandler} onBlur = {onInputBlurHandler}/>
      {nameInputIsInvalid && <p className='error-text'>Name is invalid</p>}
      </div>
      
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email'  value = {enteredEmail} onChange = {emailChangeHandler} onBlur = {onEmailBlurHandler}/>
        {emailInputIsInvalid && <p className='error-text'>Email is invalid</p>}
      </div>

      <div className="form-actions">
        <button disabled = {!formIsValid}>Submit</button>
      </div>

    </form>
  );
};

export default SimpleInput;
