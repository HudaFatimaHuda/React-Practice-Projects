import styles from "./Form.module.css";
import React, {useRef, useState} from "react";
import Card from "../UI/Card";
import Alert from "./Alert";
import Button from "../UI/Button";

const Form = props => {
  const nameInputRef = useRef();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = event => {setName(event.target.value)}
  // console.log(name)
  const ageHandler = event => {setAge(event.target.value)}
  // console.log(age);

  const [error, setError] = useState();
  const errorHandler = () => {setError(null)}

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    if(name.trim().length === 0 || age.trim().length === 0) {
      setError({
        header: "Invalid Input",
        message: "Please enter valid name and age."
      });
      return;
    }

    if(age < 1){
      setError({
        header: "Invalid Age",
        message: "Age can not be less than 1."
      });
      return;
    }

    const newUserData = {
      name: name,
      age: age
    }
    props.onSaveFormData(newUserData);
    // console.log(newUserData);
    setAge("");
    setName("");
  }

  return(
    <div>
      {error && <Alert message = {error.message}  header = {error.header} onConfirm = {errorHandler}></Alert>}
      <Card>
        <form className = {styles["new-user__controls_all"]} onSubmit = {submitHandler}>
          <div className = {styles["new-user__controls"]}>
            <div className = {styles["new-user__control"]}>
              <label>Name</label>
              <input  type='text' onChange = {nameHandler} value = {name} ref = {nameInputRef}></input>
            </div>
            <div className = {styles["new-user__control"]}>
              <label>Age (Years)</label>
              <input  type='number' onChange = {ageHandler} value = {age}></input>
            </div>
          </div>
          <div className = {styles["new-user__actions"]}>
            <Button type = "submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Form;
