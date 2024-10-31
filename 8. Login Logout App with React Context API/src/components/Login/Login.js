import React, {useState, useEffect, useReducer, useContext} from 'react';
import AuthContext from '../../store/auth-context'
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';


// Reducer function can be defined outside the main component funtion because we donot need anything that is insdie the
// component function, everything that is need inside reducer function in provided by react itself
//state is the previous state and the actio is basically the function triggers the ruducer i.e., dispatch function
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
      return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
      return {value: state.value, isValid: state.value.includes('@')}
  }

  return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
      return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === 'INPUT_BLUR'){
      return {value: state.value, isValid: state.value.trim().length > 6}
  }

  return {value: '', isValid: false}
}

const Login = () => {
  const ctx = useContext(AuthContext)

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null})

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;


  useEffect(() => {
    // console.log("useEffect Executed");
    const identifier = setTimeout(() => {
      // console.log("setTimeout Executed");
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500)

    return() => {
      // console.log("return Executed");
      clearTimeout(identifier);
    }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(emailState.value.includes('@') && passwordState.IsValid)
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6)
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (<Card className={classes.login}>
    <form onSubmit={submitHandler}>
      <Input isValid = {emailState.isValid} id = {'email'} type = {'email'} label = {'Email'} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}></Input>
      <Input isValid = {passwordState.isValid} id = {'password'} type = {'password'} label = {'Password'} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}></Input>
      <div className={classes.actions}>
        <Button type="submit" className={classes.btn} disabled={!formIsValid}>
          Login
        </Button>
      </div>
    </form>
  </Card>);
};

export default Login;
