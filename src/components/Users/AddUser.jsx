import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername);
    console.log(enteredAge);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} placeholder="John" />
        </div>
        <div>
          <label htmlFor="age">Age(Years)</label>
          <input type="text" id="age" onChange={ageChangeHandler} value={enteredAge} placeholder="10" />
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
