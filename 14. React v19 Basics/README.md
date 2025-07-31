# React v19 Basics - Signup Form

## React v19 Form Handling

**useActionState Hook:**
```javascript
// This state manages form actions 
// Takes a function and initial state as input like reducer
// Wraps the submitAction function internally to manage states and listen to state changes 
// Returns a function as second argument to pass it to the form that needed to be managed 
const [fromState, formAction] = useActionState(submitAction, {errors: null})
```

**Form Action Function:**
```javascript
// If action={submitAction}, then we will get formdata as arg
// If action={formAction} we will get 2 args
const submitAction = (prevState, formData) => {
  // Names attributes are necessary to identify these in formdata 
  // No need to e.preventDefault();, it will be handled by react 
  // React will also reset the form after function calls executed completely 
}
```

**Form Setup:**
```javascript
// In react < v19: onSubmit={handleSubmit}
// We can pass a function as action in react 19+
// But to make use of useActionState and making react aware of the state, we need to use the react returned function
<form action={formAction}>
```

**Form Data Access:**
- `formData.get('fieldName')` for single values
- `formData.getAll('fieldName')` for multiple values (checkboxes)

**State Preservation:**
```javascript
// Save values in enteredValues and then use them in the defaultValue props to preserve form state in case of errors
return {errors, enteredValues: { email, password, confirmPassword, fname, lname, role, terms, acquisitionChannels}};

// Usage: defaultValue={fromState.enteredValues?.email}
// For checkboxes: defaultChecked={fromState.enteredValues?.terms}
```