1.1	Why Tanstack? 
React Compiler --> manual memoization
•	Caching... (possibly the hardest thing to do in programming)
•	Deduping multiple requests for the same data into a single request
•	Updating "out of date" data in the background
•	Knowing when data is "out of date"
•	Reflecting updates to data as quickly as possible
•	Performance optimizations like pagination and lazy loading data
•	Managing memory and garbage collection of server state
•	Memoizing query results with structural sharing

```bash
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
```

It is recommended to also use our ESLint Plugin Query to help you catch bugs and inconsistencies while you code. 
A query has these 2 types of states:
•	The status gives information about the data: Do we have any or not?
•	The fetchStatus gives information about the queryFn: Is it running or not?
A mutation can only be in one of the following states at any given moment:
•	isIdle or status === 'idle' - The mutation is currently idle or in a fresh/reset state
•	isPending or status === 'pending' - The mutation is currently running
•	isError or status === 'error' - The mutation encountered an error
•	isSuccess or status === 'success' - The mutation was successful and mutation data is available

IMPORTANT: The mutate function is an asynchronous function, which means you cannot use it directly in an event callback in React 16 and earlier. If you need to access the event in onSubmit you need to wrap mutate in another function. This is due to React event pooling.
```bash
  useMutation({
  mutationFn: addTodo,
  onMutate: (variables) => {
    // A mutation is about to happen!

    // Optionally return a context containing data to use when for example rolling back
    return { id: 1 }
  },
  onError: (error, variables, context) => {
    // An error happened!
    console.log(`rolling back optimistic update with id ${context.id}`)
  },
  onSuccess: (data, variables, context) => {
    // Boom baby!
  },
  onSettled: (data, error, variables, context) => {
    // Error or success... doesn't matter!
  },
})


const mutation = useMutation({
  mutationFn: addTodo,
  retry: 3,
})

```