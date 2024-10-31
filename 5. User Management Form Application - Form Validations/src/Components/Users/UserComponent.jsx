import styles from "./UserComponent.module.css";
import React, {useState} from "react";

const UserComponent = props => {
  const clickHandler = (event) => {
    props.ondeleteUser(props.id);
    //console.log(props.id);
  }
  return(
    <li className = {styles["new-user__item"]} onClick = {clickHandler}>
      {props.name} ({props.age} years old)
    </li>
  )
}

export default UserComponent;
