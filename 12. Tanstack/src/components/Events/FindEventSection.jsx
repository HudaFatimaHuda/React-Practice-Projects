import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';

export default function FindEventSection() {

  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState(); 

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['events', {search: searchTerm}],  
    // if we use the events key only, it will use the all events data 
    // we need a dynamic key {search: searchElement.current.value}
    // we will not use ref value because it will not cause the function to render 
    // we will use state instead 
    queryFn: ({signal}) => fetchEvents({signal, searchTerm}),
    enabled: searchTerm !== undefined // if you do not want to load data when the component is rendered, 
    // you can use this enable key 
  }); 

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value)
  }

  let content = <p>Please enter a search term and to find events.</p>;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock 
      title="An error occurred"
      message={error.message?.info || "Some went wrong"}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
