import { useQuery } from '@tanstack/react-query';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
  // Custom hook provided by tan-stack 
  // ir returns an object 
  // data and errors returned by our function 
  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events'],  // this key will be use to uniquest identify the data 
    // if 2 components have same query key, they can use each others data from cache 
    // this is actually an array of values (can have strings, objects and nested array)
    queryFn: fetchEvents, // this is a function to send http request 
    // staleTime: 5000, // In this time if the component is re-rendered, the request wil not be send 
    // it will use the cache data, by default its 10 minutes 
    // gcTime: 30000, // After gutter time the cache data will be removed 
  }); 

  let content;

  if (isPending) {
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
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
