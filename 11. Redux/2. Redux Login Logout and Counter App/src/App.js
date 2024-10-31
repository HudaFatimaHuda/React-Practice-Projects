import Counter from './components/Counter';
import Auth from './components/Auth'; 
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
    <Header />
    {!isAuthenticated ? <Auth /> : <UserProfile/>}
    <Counter />
    </Fragment>
  );
}

export default App;
