import { isEmpty } from 'react-admin';
import {isEmail, isNotEmpty, hasMinLength, isEqualToOtherValue} from '../util/validation'; 
import { useActionState } from 'react';

function Signup() {

  // const handleSubmit = (e) => {
  //   e.preventDefault(); //we have to do this to override the default browser function 
  // }
  
  // const submitAction = (formData) => { // if action={submitAction}, then we will get formdata as arg
  const submitAction = (prevState ,formData) => { // if action={formAction} we will get 2 args
    const email = formData.get('email'); 
    const password = formData.get('password'); 
    const confirmPassword = formData.get('confirm-password'); 
    const fname = formData.get('first-name'); 
    const lname = formData.get('last-name'); 
    const role = formData.get('role'); 
    const terms = formData.get('terms'); 
    const acquisitionChannels = formData.getAll('acquisition'); 
    // names attributes are necessary to identify these in formdata 
    // no need to e.preventDefault();, it will be handled by react 
    // react will also reset the form after function calls executed completely 
    let errors = []
    // Email validation
    if (!isEmail(email)) {
      errors.push('Invalid email address.');
    }

    // Password validation
    if (isEmpty(password) || !hasMinLength(password, 6)) {
      errors.push('Password must be at least 6 characters long.');
    }

    // Confirm password validation
    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push('Passwords do not match.');
    }

    // First and last name validation
    if (!isNotEmpty(fname)) {
      errors.push('First name is required.');
    }
    if (!isNotEmpty(lname)) {
      errors.push('Last name is required.');
    }

    // Role validation
    if (!isNotEmpty(role)) {
      errors.push('Please select a role.');
    }

    // Terms and Conditions validation
    if (!terms) {
      errors.push('You must agree to the terms and conditions.');
    }

    // Acquisition channels validation
    if (acquisitionChannels.length === 0) {
      errors.push('Please select at least one acquisition channel.');
    }

    if (errors.length > 0) {
      return {errors, enteredValues:{ email, password, confirmPassword, fname, lname, role, terms, acquisitionChannels} 
      // save values in enteredValues and then use them in the default value props to preserve the form state in case of errors. 
      // value={fromState.enteredValues?.role || ''} onChange={() => {}}>
      };
    }

    return {errors : null}
  };

  // const [fromState, functionToPassInFormAction, pendingState] = useActionState(submitAction, initialState: {errors: null})
  // this state manages form actions 
  // takes a function and initial state as input like reducer
  // wrap the submitAction function internally to manage states and listen to state changes 
  // returns a function as second argument of array to pass it to the form that needed to be managed 

  const [fromState, formAction] = useActionState(submitAction, {errors: null})
  // console.log(fromState); 

  return (
    <form 
    //  onSubmit={handleSubmit} in react < v19
    // action={submitAction} we can pass a function as action in react 19+
    // but to make use of useActionState and making react aware of the state, we need to use the react returned function
    action={formAction}
    >
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={fromState.enteredValues?.email}/>
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" defaultValue={fromState.enteredValues?.password} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={fromState.enteredValues?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" defaultValue={fromState.enteredValues?.fname}/>
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" defaultValue={fromState.enteredValues?.lname}/>
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" defaultValue={fromState.enteredValues?.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={fromState.enteredValues?.acquisitionChannels.includes('google')}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={fromState.enteredValues?.acquisitionChannels.includes('friend')}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" 
            defaultChecked={fromState.enteredValues?.acquisitionChannels.includes('other')}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" 
             defaultChecked={fromState.enteredValues?.terms}
          />I
          agree to the terms and conditions
        </label>
      </div>

      {fromState.errors && <ul className='error'>
        {fromState.errors.map(error => <li key={error}>{error}</li>)}
      </ul>}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}

export default Signup; 