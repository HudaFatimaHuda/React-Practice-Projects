import {useState} from 'react'; 

const useInput = (validation) => {
    const [enteredInput, setEnteredInput] = useState(''); 
    const [isTouched, setIsTouched] = useState(false);

    const enteredInputIsValid = validation(enteredInput); 
    const hasError = !enteredInputIsValid && isTouched; 

    const onChangeHandler = event => {
        setEnteredInput(event.target.value)
    }

    const onBlurHandler = e => {
        setIsTouched(true); 
    }

    const reset = () => {
        setEnteredInput(''); 
        setIsTouched(false); 
    }

    return {
        value: enteredInput, 
        enteredInputIsValid,
        hasError, 
        onChangeHandler,
        onBlurHandler,
        reset,
    }
}

export default useInput; 