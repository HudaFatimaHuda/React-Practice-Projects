import styles from "./Alert.module.css";
import Card from "../UI/Card";
import React, {useState} from "react";
import Button from "../UI/Button";
import ReactDOM from "react-dom";

const BackDrop = props => {return (<div className = {styles.backdrop} onClick = {props.onConfirm}></div>)}
const ModelOverlay = props => {
  return(
    <Card className = {styles.modal}>
        <header className = {styles.header}>
          <h2>{props.header}</h2>
        </header>
        <div className = {styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className = {styles.actions}>
          <Button onClick = {props.onConfirm}>Ok</Button>
        </footer>
    </Card>
  )
}


const Alert = props => {
  return(
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop onConfirm = {props.onConfirm}/>, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <ModelOverlay
          header  ={props.header}
          message = {props.message}
          onConfirm = {props.onConfirm}
        />,
      document.getElementById("modelOverlay-root"))}
    </React.Fragment>
  )
}

export default Alert;
