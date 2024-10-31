import useInput from '../hooks/use-input'; 


const BasicForm = (props) => {

  const {value: enteredFirstName,  enteredInputIsValid: firstNameIsValid, hasError: firstNameIsInvalid, onChangeHandler: onFirstNameChangeHandler, onBlurHandler: onFirstNameBlurHandler, reset: firstNameReset} =useInput(name => name.trim() !== '')
  const {value: enteredLastName,  enteredInputIsValid: lastNameIsValid, hasError: lastNameIsInvalid, onChangeHandler: onLastNameChangeHandler, onBlurHandler: onLastNameBlurHandler, reset: lastNameReset} =useInput(name => name.trim() !== '')
  const {value: enteredEmail,  enteredInputIsValid: EmailIsValid, hasError: emailIsInvalid, onChangeHandler: onEmailChangeHandler, onBlurHandler: onEmailBlurHandler, reset: emailReset} =useInput(email => email.includes('@'))
  
  let formIsValid = false; 

  if(firstNameIsValid && lastNameIsValid && EmailIsValid){
    formIsValid = true; 
  }  

  const formSubmitHandler = event => {
    event.preventDefault(); 
    if(!formIsValid){
      return
    }

    console.log(enteredFirstName);
    firstNameReset();
    lastNameReset(); 
    emailReset()    
  }

  const firstNameClasses = firstNameIsInvalid ? 'invalid form-control': 'form-control';
  const lastNameClasses = lastNameIsInvalid ? 'invalid form-control': 'form-control';
  const emailClasses = emailIsInvalid ? 'invalid form-control': 'form-control';


  return (
    <form onSubmit={formSubmitHandler}>

      <div className='control-group'>

        <div className = {firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value= {enteredFirstName} onChange = {onFirstNameChangeHandler} onBlur = {onFirstNameBlurHandler} />
          {firstNameIsInvalid && <p className='error-text'>First name is invalid.</p>}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange = {onLastNameChangeHandler} onBlur = {onLastNameBlurHandler}/>
          {lastNameIsInvalid && <p className='error-text'>Last name is invalid.</p>}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange = {onEmailChangeHandler} onBlur = {onEmailBlurHandler}/>
        {emailIsInvalid && <p className='error-text'>Email is invalid.</p>}
      </div>

      <div className='form-actions'>
        <button disabled = {!formIsValid}>Submit</button>
      </div>

    </form>
  );
};

export default BasicForm;
