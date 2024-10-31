# Movie Database Application

This React application allows users to manage a movie database through a Firebase API. Users can fetch, view, and add new movies, with real-time loading and error handling. A list of movies is fetched from the backend, and new movies can be added through a form, making HTTP requests to update the Firebase database.

## Features

- **Fetch Movies**: Retrieves and displays a list of movies from a Firebase backend. 
- **Add New Movie**: A form allows users to input a new movie's title, description, and asset type ID, which is then stored in Firebase.
- **Loading and Error States**: Displays loading indicators and error messages during data fetching or if a request fails.
- **Refetch Data**: A "Fetch Movies" button allows users to refresh the movie list manually.

## Project Structure

```plaintext
/src
│   App.css                      # Global styles for the app
│   App.js                       # Main app component that handles state and HTTP requests
│   index.css                    # Global CSS reset and base styles
│   index.js                     # Entry point for rendering the app
│   
└───components
    │   AddMovie.js              # Form component for adding new movies
    │   AddMovie.module.css      # Styles for the AddMovie component
    │   Movie.js                 # Component for rendering individual movie items
    │   Movie.module.css         # Styles for individual Movie items
    │   MoviesList.js            # Component for rendering the list of movies
    │   MoviesList.module.css    # Styles for the MoviesList component
