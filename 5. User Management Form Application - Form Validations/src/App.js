import React, {useState} from "react";
import './App.css';
import Form from "./Components/FormComponent/Form";
import Users from "./Components/Users/Users";


let users = [
  {
    id: "u1",
    name: "Huda",
    age: 22
  },
  {
    id: "u2",
    name: "Fatima",
    age: 22
  }
];

function App() {

  const [userArray, setUserArray] = useState(users);
  const changeDataHandler = (newUser) => {
    setUserArray((prevArray) => {return [newUser, ...prevArray]})
  }

  const deleteUserHander = (id) => {
    console.log("delete called");
    console.log(id);
    setUserArray((prevUsers) => {return prevUsers.filter(u => u.id !== id)})
  }

  /*getting and setting user input*/
  const [userInput, setUserInput] = useState();
  const saveFormDataHandler = (enteredData) => {
    const newUserData = {
      id: Math.random().toString(),
      ...enteredData
    }
    console.log(newUserData);
    changeDataHandler(newUserData);
  };

  return (
    <div className="App" style = {{color: "white"}}>
      <Form onSaveFormData = {saveFormDataHandler} />
      <Users users = {userArray} ondeleteUserEntery = {deleteUserHander}/>
    </div>
  );
}

export default App;
