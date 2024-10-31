import styles from "./Card.module.css";
import React, {useState} from "react";

const Card = props => {
  const classes = `${styles.card} ${props.className}`;
  return(
    <div className = {classes}>
      {props.children}
    </div>
  )
}

export default Card;
