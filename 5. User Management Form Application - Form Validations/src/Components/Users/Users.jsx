import styles from "./Users.module.css";
import React, {useState} from "react";
import Card from "../UI/Card";
import UserComponent from "./UserComponent";

const Users = props => {
  const deleteHandler = id => props.ondeleteUserEntery(id)

  return(
    <Card>
      <ul className = {styles["new-user__list"]}>
        {props.users.map(user => {
          return (<UserComponent name = {user.name} age = {user.age} key = {user.id} id = {user.id} ondeleteUser = {deleteHandler}/>)
        })}
      </ul>
    </Card>
  )
}

export default Users;


// const [filteredUser, setFilteredUser] = useState(props.users);
// const deleteHandler = (id) => {
//   setFilteredUser(filteredUser.splice(filteredUser.findIndex(function(u) {
//     return u.id === id
//   }), 1)
//   )
// }
