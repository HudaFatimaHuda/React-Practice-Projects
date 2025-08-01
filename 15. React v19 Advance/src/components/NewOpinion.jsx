import { use } from "react"
import { useActionState } from "react"
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const {addOpinion} = use(OpinionsContext); 

  const submitHandler = async (prev, formData) => {
    const userName = formData.get('userName')
    const title = formData.get('title')
    const body = formData.get('body')
    let errors = []
    if(!userName || userName.trim().length === 0){
      errors.push('User name is required')
    }
    if(!title || title.trim().length === 0){
      errors.push('Title is required')
    }
    if(!body || body.trim().length === 0){
      errors.push('Description is required')
    }

    if(errors.length > 0){
      return {
        errors, 
        enteredValues: {userName, title, body}
      }
    }
    await addOpinion({title, userName, body}); 
    return {errors : null}
  }
  
  const [formState, formAction, isPending] = useActionState(submitHandler, {errors : null})
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>
        {formState.errors && formState.errors.length > 0 && 
        <ul className="errors">
          {formState.errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        }

        {/* <p className="actions">
          <button type="submit" >{isPending ? 'Submitting...' : 'Submit'}</button>
        </p> */}
        <Submit/> {/* alternative to above */}
      </form>
    </div>
  );
}
