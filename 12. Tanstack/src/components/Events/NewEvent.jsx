import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  // useMutation will not instantly execute the fetch function when the component is mounted
  // rather we can use mutate function to execute it programmatically 
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: createNewEvent, 
    // we do not need to use ()=>{} to pass data in it 
    // because we will do it later in the submit function 
    onSuccess: () => {
      queryClient.invalidateQueries(
        // tells react that certain data marked as stale and 
        // need to be re-fetched if the data is currently on scree,  
        {queryKey: ['events']} //this will invalidate all queries that contains this key 
        // use this {queryKey: ['events'], exact:true} if you want to mark the exact name as invalid. 
      );
      // function will be executed if the mutation succeed, 
      // also make sure that it only execute on success
      navigate('/events')
      // after the modal close, we will not see the updated data, 
      // we need to go to different tab and come back to view the changed data, 
      // one solution is to mark the cached data as stale, so it will be re-fetched again 
      
    }
  })

  function handleSubmit(formData) {
    mutate({event: formData})
    // after submitting the form we can navigate programmatically 
    // using useNavigate hook, but we will use onSuccess function 
    // if we use navigation, we will navigate no matter the mutation succeed or failed
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
      {isPending && 'Submitting'}
      {!isPending && 
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
      }
      </EventForm>
      {isError &&  <ErrorBlock 
      title="Failed to create event. An error occurred"
      message={error.message?.info || "Some went wrong. Please check the data"}
      />}
    </Modal>
  );
}
