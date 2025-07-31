import React from 'react'
import { useFormStatus } from 'react-dom'

function Submit() {
    const {pending} = useFormStatus(); 
    // this will return the data of surrounding form 
    // must me the child component of form where we are using formAction hook
  return (
    <p className="actions">
        <button type="submit" >{pending ? 'Submitting...' : 'Submit'}</button>
    </p>
  )
}

export default Submit
