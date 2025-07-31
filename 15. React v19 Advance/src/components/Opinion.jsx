import { use } from "react";
import { useActionState,  } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { useOptimistic } from "react";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  // concept is we can use multiple action for multiple buttons inside the form. 
  // with formAction props on each button
  const [upvoteState, upvoteFormAction, isUpvotePending] = useActionState(upvoteAction); 
  const [downvoteState, downvoteFormAction, isDownvotePending] = useActionState(downvoteAction); 

  // optimistically updating the ui 
  // useOptimistic(dataItem that needs to be optimistically updated, 
  // function defined by us but use by react -> it will get the prev state as first arg and the rest can be defined by us )
  // returns [state, function to called when state update is required]
  const [optimisticVotes, setVotesOptimistically] = useOptimistic(votes, (prev, mode) => (mode === 'up' ? prev + 1 : prev - 1))
  // mode or any other agr will be send through setVotesOptimistically function 
  // optimisticVotes will be used only when the form is in submitting state
  // after that this state snap short will be thrown by react and actual updated value will be used
  // setVotesOptimistically these functions can only be invoked inside a for action 
  
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);
  async function upvoteAction(){
    setVotesOptimistically('up')
    await upvoteOpinion(id); 
  }
  async function downvoteAction(){
    setVotesOptimistically('down')
    await downvoteOpinion(id); 
  }

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upvoteFormAction} disabled={isUpvotePending || isDownvotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        {/* <span>{votes}</span> */}
        <span>{optimisticVotes}</span>

        <button formAction={downvoteFormAction} disabled={isUpvotePending || isDownvotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
