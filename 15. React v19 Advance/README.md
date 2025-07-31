# React v19 Advanced Concepts

## use() Hook for Context
```javascript
// New way to consume context in React v19
const {addOpinion} = use(OpinionsContext); 
```

## useActionState Hook (Advanced)
```javascript
// Third return value gives pending state
const [formState, formAction, isPending] = useActionState(submitHandler, {errors : null})
```

## useFormStatus Hook
```javascript
// This will return the data of surrounding form 
// Must be the child component of form where we are using formAction hook
const {pending} = useFormStatus(); 
```

## Multiple Form Actions
```javascript
// Concept is we can use multiple action for multiple buttons inside the form 
// With formAction props on each button
const [upvoteState, upvoteFormAction, isUpvotePending] = useActionState(upvoteAction); 
const [downvoteState, downvoteFormAction, isDownvotePending] = useActionState(downvoteAction); 

// Usage in form
<button formAction={upvoteFormAction}>Upvote</button>
<button formAction={downvoteFormAction}>Downvote</button>
```

## useOptimistic Hook
```javascript
// Optimistically updating the ui 
// useOptimistic(dataItem that needs to be optimistically updated, 
// function defined by us but used by react -> it will get the prev state as first arg and the rest can be defined by us)
// Returns [state, function to called when state update is required]
const [optimisticVotes, setVotesOptimistically] = useOptimistic(votes, (prev, mode) => (mode === 'up' ? prev + 1 : prev - 1))

// Mode or any other arg will be sent through setVotesOptimistically function 
// optimisticVotes will be used only when the form is in submitting state
// After that this state snapshot will be thrown by react and actual updated value will be used
// setVotesOptimistically these functions can only be invoked inside a form action 

async function upvoteAction(){
    setVotesOptimistically('up')
    await upvoteOpinion(id); 
}
```