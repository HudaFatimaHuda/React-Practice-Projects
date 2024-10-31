import React, {useState, useEffect} from 'react'


//this code will create a context with some initial string state
// const AuthContext = React.createContext('initial_state')

// this will create a context with an object
// createContext will return an object that contsains a component
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email,password) => {}
})

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLogedinAutentictionIsTrue = localStorage.getItem("isLoggedIn");
    if (isUserLogedinAutentictionIsTrue === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return(
    <AuthContext.Provider value = {{
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler
    }} >
    {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
